import React from 'react';
import styles from './Rectangle.module.scss';

type Props = { currentValue?: Record<string, number>; children?: React.ReactNode };

// TODO: refactor component style values
const Rectangle = ({ currentValue, children }: Props): JSX.Element => {
  return (
    <div
      style={{
        borderTopLeftRadius: `${currentValue ? currentValue.topLeft : null}px`,
        borderTopRightRadius: `${currentValue ? currentValue.topRight : null}px`,
        borderBottomLeftRadius: `${currentValue ? currentValue.bottomLeft : null}px`,
        borderBottomRightRadius: `${currentValue ? currentValue.bottomRight : null}px`,
      }}
      className={styles.rectangle}
    >
      {children}
    </div>
  );
};

export default Rectangle;
