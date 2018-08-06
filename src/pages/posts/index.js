// @flow
import * as React from 'react';
import Link, { withPrefix } from 'gatsby-link';
import bulmaClassnames from '../../utils';
import { GridTitle } from '../../components/titles';
import { GridImage } from '../../components/images';

type Post = {
  node: {
    fields: {
      slug: string,
    },
    excerpt: string,
    frontmatter: {
      title: string,
      featuredImage: {
        src: string,
        alt: string,
      },
    },
  },
};

type Props = {
  data: {
    allMarkdownRemark: {
      edges: Post[],
    },
  },
};

let Excerpt = ({ excerpt }) => {
  let sectionStyles = {
    margin: '10px auto',
  };

  return <p style={sectionStyles}>{excerpt}</p>;
};

let To = ({ to }) => {
  return <Link to={to}>Read more...</Link>;
};

export default class Posts extends React.Component<Props> {
  displayPosts(posts: Post[]): React.Node[] {
    return posts.map((post) => {
      let {
        node: {
          excerpt,
          fields: { slug },
          frontmatter: {
            featuredImage: { src, alt },
            title,
          },
        },
      } = post;

      let sectionStylesInline = {
        marginBottom: '30px',
      };

      let sectionStyles = bulmaClassnames({
        column: ['6-desktop', '6-tablet', '11-mobile'],
      });

      return (
        <div style={sectionStylesInline} className={sectionStyles} key={title}>
          <GridImage src={src} alt={alt} to={slug} />
          <GridTitle title={title} to={slug} />
          <Excerpt excerpt={excerpt} />
          <To to={slug} />
        </div>
      );
    });
  }

  render() {
    let {
      allMarkdownRemark: { edges: posts },
    } = this.props.data;

    let sectionStylesInline = {
      maxWidth: '100vw',
      margin: '0 auto',
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    };

    let sectionStyles = bulmaClassnames({
      raw: 'columns is-multiline',
      is: ['mobile', 'centered'],
    });

    let innerSectionStyles = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '200px',
    };

    let textStyles = bulmaClassnames({ raw: 'title', textSize: '2' });

    return (
      <section style={sectionStylesInline} className={sectionStyles}>
        <div style={innerSectionStyles}>
          <h1 className={textStyles}>Posts</h1>
          {this.displayPosts(posts)}
        </div>
      </section>
    );
  }
}

declare function graphql(query: string[]): string;

export let query = graphql`
  query PostsQuery {
    allMarkdownRemark(filter: { frontmatter: { template: { eq: "post" } } }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            tags
            featuredImage {
              src
              alt
            }
          }
        }
      }
    }
  }
`;
