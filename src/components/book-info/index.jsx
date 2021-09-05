import React from "react";
import { createUseStyles } from "react-jss";
import Link, { SIZES as LINK_SIZES } from "~/components/button-link";
import Text, { SIZES as TEXT_SIZES, TAGS, FONTS } from "~/components/text";
import Img from "~/components/image";

const useStyles = createUseStyles((theme) => ({
  root: {
    margin: "1.5rem 0 1.75rem 0",

    [theme.mediaQueries.md]: {
      flexDirection: "row",
      margin: "0 0 1.25rem 0",
    },
  },
  link: {
    paddingLeft: 0,
  },
}));

export default function BookInfo({
  title,
  author,
  authorImg,
  book,
  authorBio,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link
        to={book}
        className={classes.link}
        size={LINK_SIZES.sm}
        target="_blank"
        externalLink
      >
        {title}
      </Link>
      <Text size={TEXT_SIZES.xs}>{authorBio}</Text>
      <br />
      <Img src={authorImg} alt={author} />
      <Text size={TEXT_SIZES.xs} tag={TAGS.label} font={FONTS.secondary}>
        {author}
      </Text>
    </div>
  );
}
