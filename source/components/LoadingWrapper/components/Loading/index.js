/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { string } from 'prop-types';
import PlugLogo from '@assets/icons/plug.svg';

import styles from './styles.module.scss';

function Loading({ className }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <img src={PlugLogo} className={styles.spinnerLogo} alt="logo" />
    </div>
  );
}

Loading.propTypes = {
  className: string,
};

Loading.defaultProps = {
  className: '',
};

export default Loading;
