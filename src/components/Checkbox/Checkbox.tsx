import React, { ChangeEvent, PureComponent } from 'react';
import styles from './Checkbox.module.scss';

type Props = {
  children: string;
  className?: string;
  name?: string;
  isChecked?: Function;
};

type State = {
  isChecked: boolean;
};

class Checkbox extends PureComponent<Props, State> {
  state = {
    isChecked: false,
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>): React.SetStateAction<void> => {
    const { name } = this.props;

    this.setState({ isChecked: e.target.checked }, () =>
      this.props.isChecked ? this.props.isChecked(this.state.isChecked, name) : null,
    );
  };

  render(): JSX.Element {
    const { children, className, name } = this.props;

    return (
      <div className={`${className} ${styles.checkbox}`}>
        <input
          className={styles.input}
          id={name}
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.handleChange}
        />
        <label className={styles.label} htmlFor={name}>
          {children}
        </label>
      </div>
    );
  }
}

export default Checkbox;
