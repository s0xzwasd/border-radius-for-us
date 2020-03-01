import React from 'react';
import styles from './Button.module.scss';

type Props = {
  children?: string | number | JSX.Element | React.Component;
  onClick?: () => void;
};

const Button = ({ children, onClick }: Props): JSX.Element => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
