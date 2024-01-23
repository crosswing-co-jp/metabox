import React from "react";
import { FormattedMessage } from "react-intl";
import { Button } from "../input/Button";
import styles from "./HaveCodeButton.scss";

export function HaveCodeButton() {
  return (
    <Button className={styles.haveCodeButton} thin as="a" href="/link">
      <FormattedMessage id="home-page.have-code" defaultMessage="Have a room code?" />
    </Button>
  );
}
