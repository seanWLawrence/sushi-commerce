// @flow
import * as React from 'react';
import Img from 'gatsby-image';
import bulmaClassnames from '../utils';

type TestimonialType = {
  name: string,
  text: string,
};

type Props = {
  testimonials: TestimonialType[],
};

let Testimonial = ({ name, text }: TestimonialType): React.Node => {
  let sectionStylesInline = {
    margin: '20px',
  };

  let sectionStyles = bulmaClassnames({
    column: ['11-mobile', '10-tablet', '4-desktop'],
  });

  let textStyles = bulmaClassnames({ textSize: '4', textAlign: 'centered' });

  let nameStyles = bulmaClassnames({ textColor: 'grey-darker' });

  return (
    <div style={sectionStylesInline} className={sectionStyles}>
      <p className={textStyles}>
        "{text}"
        <br />
        <i className={nameStyles}>{name}</i>
      </p>
    </div>
  );
};

export default class Testimonials extends React.Component<Props> {
  displayTestimonials(testimonials: Array<TestimonialType>) {
    return testimonials.map((testimonial) => {
      let { name, text } = testimonial;
      return <Testimonial name={name} text={text} key={name} />;
    });
  }

  render() {
    let { testimonials } = this.props;

    let outerSectionStyles = {
      margin: '100px auto',
    };

    let innerSectionStyles = {
      margin: '0',
      marginBottom: '50px',
    };

    let headingStylesInline = {
      marginTop: '40px',
    };

    let headingStyles = bulmaClassnames({
      raw: 'title',
      textSize: '2',
      textAlign: 'centered',
    });

    return (
      <div style={outerSectionStyles}>
        <h2 style={headingStylesInline} className={headingStyles}>
          Testimonials
        </h2>
        <section
          style={innerSectionStyles}
          className="columns is-centered is-multiline"
        >
          {this.displayTestimonials(testimonials)}
        </section>
      </div>
    );
  }
}
