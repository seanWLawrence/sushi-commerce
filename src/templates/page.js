// @flow
import React from 'react';
import bulmaClassnames from '../utils';
import { PageTitle } from '../components/titles';
import Html from '../components/html';
import Tags from '../components/tags';

type Props = {
  data: {
    markdownRemark: {
      fields: {
        slug: string,
      },
      frontmatter: {
        title: string,
        date: string,
        tags: string[],
      },
      html: string,
    },
    isPreview?: boolean,
  },
};

let Page = ({ data }: Props) => {
  let {
    markdownRemark: {
      frontmatter: { title, tags },
      html,
    },
    isPreview,
  } = data;

  let sectionStyles = {
    minHeight: '70vh',
    maxWidth: '100vw',
    margin: '0 auto',
  };

  let innerSectionStyles = bulmaClassnames({
    column: ['11-mobile', '8-tablet', '6-desktop'],
  });

  return (
    <section style={sectionStyles} className="columns is-mobile is-centered">
      <div className={innerSectionStyles}>
        <PageTitle title={title} />
        <Html html={html} isPreview={isPreview} />
        <Tags tags={tags} />
      </div>
    </section>
  );
};

export default Page;

declare function graphql(query: string[]): string;

export let query = graphql`
  query PageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        tags
      }
      html
    }
  }
`;
