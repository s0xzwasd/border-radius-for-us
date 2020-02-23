import React from 'react';
import styles from './Rectangle.module.css';

type Props = { children?: React.ReactNode };

const Rectangle: React.SFC = ({ children }: Props) => {
  return <div className={styles.rectangle}>{children}</div>;
};

export default Rectangle;
