import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  hero?: string;
};

const Hero = ({ children, hero = 'defaultHero' }: Props) => {
  return <header className={hero}>{children}</header>;
};

export default Hero;
