import React from 'react';
import Input from '../components/Input';
import Rectangle from '../components/Rectangle';
import Header from '../components/Header';
import Clipboard from '../components/Clipboard';
import styles from './Main.module.scss';

class Layout extends React.PureComponent {
  state = {
    value: 0,
  };

  updateData = (value: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: value });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Header>border-radius generator</Header>
        <Rectangle currentValue={this.state.value}>
          <Clipboard currentValue={this.state.value} />
          <Input updateData={this.updateData} absolute position="to-top-left" />
          <Input absolute position="to-top-right" />
          <Input absolute position="to-bottom-left" />
          <Input absolute position="to-bottom-right" />
        </Rectangle>
      </div>
    );
  }
}

export default Layout;
