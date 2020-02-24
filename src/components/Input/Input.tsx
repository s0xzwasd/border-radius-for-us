import React, { ChangeEvent } from 'react';
import styles from './Input.module.scss';

// TODO: add types
type Props = {
  absolute: true | false;
  position?: 'to-top-left' | 'to-top-right' | 'to-bottom-left' | 'to-bottom-right';
};

type State = {
  value: number | string;
};

class Input extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { absolute, position } = this.props;

    return (
      <input
        className={`${styles.input} ${absolute ? styles.absolute : null} ${styles[position ? position : 0]}`}
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

export default Input;
