import React, { memo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./InputField.scss";

export const InputField = memo(
  ({ id, htmlFor, label, error, description, className, labelClassName, fullWidth, children, ...rest }) => {
    return (
      <div className={classNames(styles.inputField, { [styles.fullWidth]: fullWidth }, className)} {...rest}>
        {label && (
          <label id={id} className={classNames(styles.label, labelClassName)} htmlFor={htmlFor}>
            {label}
          </label>
        )}
        {children}
        {error ? (
          <small className={styles.error}>{error}</small>
        ) : description ? (
          <small className={styles.info}>{description}</small>
        ) : (
          undefined
        )}
      </div>
    );
  }
);

InputField.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  error: PropTypes.node,
  description: PropTypes.node,
  fullWidth: PropTypes.bool,
  labelClassName: PropTypes.string
};
