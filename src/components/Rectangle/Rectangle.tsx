import React from 'react';
import styles from './Rectangle.module.scss';

type Props = { currentValue?: string | number; children?: React.ReactNode };

const Rectangle = ({ currentValue, children }: Props) => {
  return <div className={styles.rectangle}>{children}</div>;
};

export default Rectangle;
