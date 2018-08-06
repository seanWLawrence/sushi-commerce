// @flow
import * as React from 'react';

// box that contains data for a property in the data object
let DataSection = ({ data }) => {
  let sectionStyles = {
    border: '2px solid #ccc',
    width: '500px',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'sans-serif',
    fontSize: '18px',
    padding: '10px',
    marginTop: '-2px',
    wordBreak: 'break-all',
  };

  let headingStyles = {
    margin: 0,
    marginBottom: '-10px',
    padding: '5px',
    lineHeight: 1,
    fontSize: '16px',
    fontWeight: 100,
    color: '#aaa',
    textTransform: 'uppercase',
  };

  let textStyles = {
    padding: '0 20px',
    margin: 0,
    color: '#2b4d84',
    fontWeight: 'normal',
    fontSize: '30px',
  };

  let { heading, text } = data;

  return (
    <div style={sectionStyles}>
      <h2 style={headingStyles}>{heading}:</h2>
      <br />
      <p style={textStyles}>{text}</p>
    </div>
  );
};

type DataTableProps = {
  data: Array<{
    heading: string,
    text: string,
  }>,
};

//
let DataTable = ({ data }: DataTableProps): React.Node => {
  // maps over data array prop and renders a DataSection component for each index
  let displayData = data.map((data) => {
    return <DataSection data={data} key={data.heading} />;
  });

  let sectionStyles = {
    margin: '50px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  // render the <DataTable />
  return <div style={sectionStyles}>{displayData}</div>;
};

export default DataTable;
