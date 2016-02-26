import React from 'react';

const USER_URL = 'https://github.com',
      USER_REGEX = /\B@([-a-z]+)/i,
      WHITESPACE_REGEX = /\r\n/;

const BodyText = ({text, className}) => {
  text = text || '';
  return (<div className={className}>
    {text.split(WHITESPACE_REGEX).map((line, index) => {
      return (<p key={index}>
        {line.split(USER_REGEX).map((token, i) => {
          // by splitting and capturing on the whole user tag, usernamres
          // will appear in the odd-numbered indices of the resulting array
          return (i % 2 === 1) ? (<a key={i} href={`${USER_URL}/${token}`}>@{token}</a>) : token;
        })}
      </p>);
    })}
  </div>);
};

export default BodyText;
