import React, { ChangeEvent } from 'react';
import styles from './Input.module.scss';

type Props = {
  absolute: true | false;
  position?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  updateData?: Function;
};

type State = {
  value: number | string;
};

class Input extends React.PureComponent<Props, State> {
  state = {
    value: 0,
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>): React.SetStateAction<void> => {
    const { position } = this.props;
    const regexp = /^[0-9\b]+$/;

    if (regexp.test(e.target.value)) {
      this.setState({ value: e.target.value }, () =>
        this.props.updateData ? this.props.updateData(this.state.value, position) : null,
      );
    }
  };

  render(): JSX.Element {
    const { absolute, position } = this.props;
    const { value } = this.state;
    const inputNames = `${styles.input} ${absolute ? styles.absolute : null} ${styles[position ? position : 0]}`;

    return <input className={inputNames} value={value} onChange={this.handleChange} />;
  }
}

export default Input;
