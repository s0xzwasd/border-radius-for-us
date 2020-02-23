import React from 'react';
import styles from './Input.module.scss';

type Props = {
  absolute: true | false;
  position?: 'to-top-left' | 'to-top-right' | 'to-bottom-left' | 'to-bottom-right';
};

const Input: Function = ({ absolute, position }: Props) => {
  return (
    <input className={`${styles.input} ${absolute ? styles.absolute : null} ${styles[position ? position : 0]}`} />
  );
};

export default Input;
