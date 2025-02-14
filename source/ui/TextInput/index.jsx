import React, { useState } from 'react';
import InputBase from '@material-ui/core/InputBase';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useStyles from './styles';

const TextInput = ({
  value, type, onChange, startIcon, error, ...other
}) => {
  const classes = useStyles();

  const [isFocus, setIsFocus] = useState(false);

  return (
    <InputBase
      classes={{
        root: clsx(classes.root,
          (isFocus && !error) && classes.focus,
          error && classes.error),
      }}
      value={value}
      type={type}
      onChange={onChange}
      startAdornment={startIcon}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      {...other}
    >
      <img />
    </InputBase>
  );
};

export default TextInput;

TextInput.defaultProps = {
  error: false,
  startIcon: null,
};

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  startIcon: PropTypes.node,
  error: PropTypes.bool,
};
