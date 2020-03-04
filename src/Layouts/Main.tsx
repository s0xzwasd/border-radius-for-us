import React from 'react';
import Input from '../components/Input';
import Rectangle from '../components/Rectangle';
import Header from '../components/Header';
import Clipboard from '../components/Clipboard';
import styles from './Main.module.scss';

// TODO: add eslint rule to props in alphabet
class Layout extends React.PureComponent {
  state = {
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0,
  };

  updateData = (value: React.ChangeEvent<HTMLInputElement>, position: string): React.SetStateAction<void> => {
    this.setState({ [position]: value });
  };

  render(): JSX.Element {
    return (
      <div className={styles.wrapper}>
        <Header>border-radius generator</Header>
        <Rectangle currentValue={this.state}>
          <Clipboard currentValue={this.state} />
          <Input updateData={this.updateData} absolute position="topLeft" />
          <Input updateData={this.updateData} absolute position="topRight" />
          <Input updateData={this.updateData} absolute position="bottomLeft" />
          <Input updateData={this.updateData} absolute position="bottomRight" />
        </Rectangle>
      </div>
    );
  }
}

export default Layout;
