import React, { FunctionComponent } from 'react';

interface Props {
  hero?: string;
};

const Hero: FunctionComponent<Props> = ({ children, hero = 'defaultHero' }) => {
  return <header className={hero}>{children}</header>;
};

export default Hero;
