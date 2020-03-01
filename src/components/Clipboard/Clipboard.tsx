import React from 'react';
import Button from '../Button';
import styles from './Clipboard.module.scss';

type Props = {
  currentValue: number | string;
};

class Clipboard extends React.PureComponent<Props> {
  textArea: any;

  copyToClipboard = (): void => {
    this.textArea.select();
    document.execCommand('copy');
  };

  render(): JSX.Element {
    const { currentValue } = this.props;

    return (
      <div>
        <input
          ref={(textarea): HTMLInputElement | null => (this.textArea = textarea)}
          className={styles.clipboard}
          value={`border-radius: ${currentValue}px;`}
        ></input>
        <Button onClick={this.copyToClipboard}>Copy to clipboard</Button>
      </div>
    );
  }
}

export default Clipboard;
