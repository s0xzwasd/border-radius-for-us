import React from 'react';
import Input from '../components/Input';
import Rectangle from '../components/Rectangle';
import Header from '../components/Header';
import Clipboard from '../components/Clipboard';
import styles from './Main.module.scss';

const Layout: React.SFC = () => {
  return (
    <div className={styles.wrapper}>
      <Header>border-radius generator</Header>
      <Rectangle currentValue={0}>
        <Clipboard />
        <Input absolute position="to-top-left" />
        <Input absolute position="to-top-right" />
        <Input absolute position="to-bottom-left" />
        <Input absolute position="to-bottom-right" />
      </Rectangle>
    </div>
  );
};

export default Layout;
