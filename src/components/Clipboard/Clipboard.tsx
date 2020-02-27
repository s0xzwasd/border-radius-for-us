import React from 'react';
import styles from './Clipboard.module.scss';

// TODO: button to another component
// FIXME: make arrow function component

type Props = {
  currentValue: number | string;
};

class Clipboard extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  textArea?: Record<string, any> | null | undefined;

  copyToClipboard = (e: any | null | undefined) => {
    // @ts-ignore
    this.textArea.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    this.setState({ copySuccess: 'Copied!' });
  };

  render() {
    const { currentValue } = this.props;
    return (
      <div>
        <input ref={textarea => (this.textArea = textarea)} type="text" value="some-value" />
        <section className={styles.clipboard}>border-radius: {currentValue}px;</section>
        <button type="button" className={styles.button} onClick={this.copyToClipboard}>
          Copy to clipboard
        </button>
      </div>
    );
  }
}

// TODO: refactor to func component
export default Clipboard;
