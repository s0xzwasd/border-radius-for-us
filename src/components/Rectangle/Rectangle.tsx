import React from 'react';
import styles from './Rectangle.module.scss';

type Props = { currentValue?: Record<string, any>; children?: React.ReactNode };

const Rectangle = ({ currentValue, children }: Props) => {
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
      {console.log(currentValue)}
    </div>
  );
};

export default Rectangle;
