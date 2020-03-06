import React from 'react';
import Button from '../Button';
import styles from './Clipboard.module.scss';
import Link from '../Link';

type Props = {
  currentValue: Record<string, number>;
};

class Clipboard extends React.PureComponent<Props> {
  textArea!: HTMLTextAreaElement | null;

  copyToClipboard = (): void => {
    if (this.textArea) {
      this.textArea.select();
    }

    document.execCommand('copy');
  };

  calculateValues = (
    tLeft: string | number,
    tRight: string | number,
    bLeft: string | number,
    bRight: string | number,
  ): string => {
    const calcArray = [tLeft, tRight, bLeft, bRight];

    if (calcArray.every(v => v === calcArray[0])) {
      return `border-radius: ${calcArray[0]}px;`;
    } else {
      return `border-radius: ${tLeft}px ${tRight}px ${bLeft}px ${bRight}px;`;
    }
  };

  render(): JSX.Element {
    const {
      currentValue: { topLeft, topRight, bottomLeft, bottomRight },
    } = this.props;
    const docLink = 'https://developer.mozilla.org/ru/docs/Web/CSS/border-radius';

    return (
      <div>
        <textarea
          spellCheck="false"
          ref={(textarea): HTMLTextAreaElement | null => (this.textArea = textarea)}
          className={styles.clipboard}
          value={this.calculateValues(topLeft, topRight, bottomLeft, bottomRight)}
          readOnly
        ></textarea>
        <Button onClick={this.copyToClipboard}>Copy to clipboard</Button>
        <Link to={docLink}>Documentation</Link>
      </div>
    );
  }
}

export default Clipboard;
