import React from 'react';

const IssueLabel = ({label}) => {
  let textcolor = label.color > '888888' ? '000000' : 'FFFFFF';
  /*
   * NOTE: I find putting styles inside React components to be very distasteful,
   * but the API doesn't leave me with a lot of options in a time crunch.
   */
  return (
    <li className='label' style={{backgroundColor: `#${label.color}`, color: `#${textcolor}`}}>
      {label.name}
    </li>
  );
}

export default IssueLabel;

