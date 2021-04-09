import React, { FunctionComponent } from 'react';

interface Props {
  title?: string;
  subtitle?: string;
};

const Banner: FunctionComponent<Props> = ({ title, subtitle, children }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
};

export default Banner;
