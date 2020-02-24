import React from 'react';
import styles from './Clipboard.module.scss';

// TODO: button to another component
// FIXME: make arrow function component
function Clipboard(): JSX.Element {
  return (
    <div>
      <section className={styles.clipboard}>border-radius: 1px;</section>
      <button type="button" className={styles.button}>
        Copy to clipboard
      </button>
    </div>
  );
}

// TODO: refactor to func component
export default Clipboard;
