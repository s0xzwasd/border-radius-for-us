import React from 'react';
import styles from './Link.module.scss';

type Props = {
  children: React.ReactChild;
  to: string;
};

const Link = ({ children, to }: Props): JSX.Element => (
  <a href={to} className={styles.link}>
    {children}
  </a>
);

export default Link;
