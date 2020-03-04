import React, { ChangeEvent } from 'react';
import styles from './Input.module.scss';

// TODO: add types
type Props = {
  absolute: true | false;
  position?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  updateData?: Function;
};

type State = {
  value: number | string;
};

// TODO: refactor regexp updates and classNames in input to const
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
