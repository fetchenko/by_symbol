import React from "react";
import styled from "styled-components";
import { author } from "../../constants";
import { FormattedMessage } from "react-intl";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Name = styled.h5`
  margin: 0;
  color: ${props => props.theme.primary.main};
  font-size: 1rem;
  font-family: ${props => props.theme.fonts.dancing};
  font-weight: normal;

  ${props => props.theme.mediaQueries.md} {
    font-size: 1.3rem;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  border: none;
  text-decoration: unset;
  font-family: ${props => props.theme.fonts.dancing};
  font-size: 1rem;
  color: ${props => props.theme.primary.main};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  ${props => props.theme.mediaQueries.md} {
    font-size: 1.3rem;
  }
`;

function AuthorInfo() {
  return (
    <Container>
      <Name>
        <FormattedMessage id="created-by" />
      </Name>
      <Link href={author.link} target="_blank">
        {author.name}
      </Link>
    </Container>
  );
}

export default AuthorInfo;
