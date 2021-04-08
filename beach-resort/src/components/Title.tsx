import React from 'react';

interface Props {
  title: string;
};

const Title = ({ title }: Props) => (
  <div className="section-title">
    <h4>{title}</h4>
    <div></div>
  </div>
);

export default Title;
