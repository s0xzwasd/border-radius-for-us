import React, { PureComponent } from 'react';
import Checkbox from '../Checkbox';
import Button from '../Button';
import styles from './Clipboard.module.scss';
import Link from '../Link';

type Props = {
  currentValue: Record<string, number>;
};

class Clipboard extends PureComponent<Props> {
  state = {
    webkit: false,
    gecko: false,
  };

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
    webkit: boolean,
    gecko: boolean,
  ): string => {
    const calcArray = [tLeft, tRight, bLeft, bRight];

    if (calcArray.every(v => v === calcArray[0])) {
      if (webkit && gecko) {
        return `border-radius: ${calcArray[0]}px;\n-webkit-border-radius: ${calcArray[0]}px;\n-moz-border-radius: ${calcArray[0]}px;
        `;
      }

      if (webkit) {
        return `border-radius: ${calcArray[0]}px;\n-webkit-border-radius: ${calcArray[0]}px;
        `;
      }

      if (gecko) {
        return `border-radius: ${calcArray[0]}px;\n-moz-border-radius: ${calcArray[0]}px;
        `;
      }
      return `border-radius: ${calcArray[0]}px;`;
    } else {
      return `border-radius: ${tLeft}px ${tRight}px ${bLeft}px ${bRight}px;`;
    }
  };

  updateCheckbox = (isChecked: React.ChangeEvent<HTMLInputElement>, name: string): React.SetStateAction<void> => {
    this.setState({ [name]: isChecked }, () => console.log(this.state));
  };

  render(): JSX.Element {
    const {
      currentValue: { topLeft, topRight, bottomLeft, bottomRight },
    } = this.props;
    const { webkit, gecko } = this.state;
    const docLink = 'https://developer.mozilla.org/ru/docs/Web/CSS/border-radius';

    return (
      <div>
        <textarea
          spellCheck="false"
          ref={(textarea): HTMLTextAreaElement | null => (this.textArea = textarea)}
          className={styles.clipboard}
          value={this.calculateValues(topLeft, topRight, bottomLeft, bottomRight, webkit, gecko)}
          readOnly
        ></textarea>
        <div className={styles.checkboxes}>
          <Checkbox isChecked={this.updateCheckbox} name="webkit">
            Webkit
          </Checkbox>
          <Checkbox isChecked={this.updateCheckbox} name="gecko">
            Gecko
          </Checkbox>
        </div>
        <Button onClick={this.copyToClipboard}>Copy to clipboard</Button>
        <Link to={docLink}>Documentation</Link>
      </div>
    );
  }
}

export default Clipboard;
