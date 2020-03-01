import React from 'react';
import Button from '../Button';
import styles from './Clipboard.module.scss';

type Props = {
  currentValue: Record<string, number>;
};

class Clipboard extends React.PureComponent<Props> {
  // TODO: refactor type
  textArea: any;

  copyToClipboard = (): void => {
    this.textArea.select();
    document.execCommand('copy');
  };

  render(): JSX.Element {
    const { currentValue } = this.props;

    return (
      <div>
        <textarea
          spellCheck="false"
          ref={(textarea): HTMLTextAreaElement | null => (this.textArea = textarea)}
          className={styles.clipboard}
          value={`border-radius: ${currentValue.topLeft}px ${currentValue.topRight}px ${currentValue.bottomLeft}px ${currentValue.bottomRight}px;`}
        ></textarea>
        <Button onClick={this.copyToClipboard}>Copy to clipboard</Button>
      </div>
    );
  }
}

export default Clipboard;
