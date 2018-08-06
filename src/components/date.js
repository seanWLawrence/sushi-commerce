// @flow
import * as React from 'react';
import bulmaClassnames from '../utils';

let Date = ({ date }: { date: string }) => {
  let textStylesInline = {
    margin: '-10px 0 20px 0',
    display: 'flex',
  };

  let textStyles = bulmaClassnames({
    textColor: 'gray',
    textTransformation: 'italic',
  });

  return (
    <p style={textStylesInline} className={textStyles}>
      <span>{date}</span>
    </p>
  );
};

export default Date;
