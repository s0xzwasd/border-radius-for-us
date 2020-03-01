import React from 'react';
import Input from '../components/Input';
import Rectangle from '../components/Rectangle';
import Header from '../components/Header';
import Clipboard from '../components/Clipboard';
import styles from './Main.module.scss';

class Layout extends React.PureComponent {
  state = {
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0,
  };

  updateDataTopLeft = (value: React.ChangeEvent<HTMLInputElement>): React.SetStateAction<void> => {
    this.setState({ topLeft: value });
  };

  updateDataTopRight = (value: React.ChangeEvent<HTMLInputElement>): React.SetStateAction<void> => {
    this.setState({ topRight: value });
  };

  updateDataBottomLeft = (value: React.ChangeEvent<HTMLInputElement>): React.SetStateAction<void> => {
    this.setState({ bottomLeft: value });
  };

  updateDataBottomRight = (value: React.ChangeEvent<HTMLInputElement>): React.SetStateAction<void> => {
    this.setState({ bottomRight: value });
  };

  render(): JSX.Element {
    return (
      <div className={styles.wrapper}>
        <Header>border-radius generator</Header>
        <Rectangle currentValue={this.state}>
          <Clipboard currentValue={this.state} />
          <Input updateData={this.updateDataTopLeft} absolute position="to-top-left" />
          <Input updateData={this.updateDataTopRight} absolute position="to-top-right" />
          <Input updateData={this.updateDataBottomLeft} absolute position="to-bottom-left" />
          <Input updateData={this.updateDataBottomRight} absolute position="to-bottom-right" />
        </Rectangle>
      </div>
    );
  }
}

export default Layout;
