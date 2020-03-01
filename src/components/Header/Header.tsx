import React from 'react';
import styles from './Header.module.scss';

type Props = {
  children: string;
};

const Header = ({ children }: Props): JSX.Element => {
  return <h1 className={styles.header}>{children}</h1>;
};

export default Header;
