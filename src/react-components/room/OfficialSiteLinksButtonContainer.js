import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./OfficialSiteLinksButtonContainer.scss";
import { FormattedMessage } from "react-intl";
import { ReactComponent as ArrowDownIcon } from "../icons/ArrowDown.svg";

export const OfficialSiteLinksButtonContainer = ({ onClick }) => {
  return (
    <button className={classNames(styles.officialSiteLinksButton)} onClick={onClick}>
      <p className={classNames(styles.officialSiteLinksButtonText)}>
        <FormattedMessage id="official-site-links.show-button" defaultMessage="Visit the MetaBox\nofficial website" />
      </p>
      <ArrowDownIcon />
    </button>
  );
};

OfficialSiteLinksButtonContainer.propTypes = {
  onClick: PropTypes.func
};
