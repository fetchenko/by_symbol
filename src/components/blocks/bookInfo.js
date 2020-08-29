import React from "react";
import styled from "styled-components";

const Root = styled.div`
  margin: 24px 0 28px 0;

  ${(props) => props.theme.mediaQueries.md} {
    flex-direction: row;
    margin: 0 0 20px 0;
  }
`;

const Link = styled.a`
  font-family: ${(props) => props.theme.fonts.asap};
  color: ${(props) => props.theme.text.onPrimaryLight};
  font-size: 1.2rem;
  text-decoration: none;
`;

const Text = styled.p`
  font-family: ${(props) => props.theme.fonts.asap};
`;

const Label = styled.h5`
  font-family: ${(props) => props.theme.fonts.merriweather};
  margin: 4px 0;
`;

const Img = styled.div`
  width: 220px;
  height: 230px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
`;

export default function BookInfo({
  title,
  author,
  authorImg,
  book,
  authorBio,
}) {
  return (
    <Root>
      <Link href={book} alt={title} target="_blank">
        {title}
      </Link>
      <Text>{authorBio}</Text>
      <Img src={authorImg} alt={author} />
      <Label>{author}</Label>
    </Root>
  );
}
