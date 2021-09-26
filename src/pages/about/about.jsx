import React from "react";
import { createUseStyles } from "react-jss";
import Text, { SIZES as TEXT_SIZES } from "~/components/text";
import Link, { SIZES as LINK_SIZES } from "~/components/button-link";

const useStyles = createUseStyles((theme) => ({
  container: {
    maxWidth: "var(--page-size-md)",
  },
}));

export default function About() {
  const classes = useStyles();

  const today = new Date();
  const realJob = Math.floor(Math.random() * 10) % 3 === 0;

  return (
    <div className={classes.container}>
      <Text size={TEXT_SIZES.sm}>
        The goal of this project is to present the meaning and main ideas of
        Belarusian ornament.
        <br />
        <br />
        Created by Tanya Fedchenko({today.getFullYear() - 1997}),
        {realJob ? (
          <Link
            to="https://www.linkedin.com/in/tanya-f-634335125/"
            target="_blank"
            externalLink
            size={LINK_SIZES.sm}
          >
            software engineer
          </Link>
        ) : (
          <Link
            to="https://twitter.com/geeny273"
            target="_blank"
            externalLink
            size={LINK_SIZES.sm}
          >
            senior twitter user
          </Link>
        )}
        from Vitebsk, Belarus.
        <br />
        <br />
        I'm working on this project in my spare time. So it is continuously
        improving.
      </Text>
    </div>
  );
}
