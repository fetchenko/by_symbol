import React from "react";
import styled from "styled-components";
import { Text } from "components/typography/index";

const Root = styled.div`
  ${(props) => props.theme.mediaQueries.md} {
    max-width: 960px;
  }
`;

const Link = styled.a`
  font-family: ${(props) => props.theme.fonts.asap};
  color: ${(props) => props.theme.text.onPrimaryLight};
`;

const Divider = styled.hr`
  border-color: ${props => props.theme.primary.light};
  border-style: dashed;
`;

export default function About() {
  const today = new Date();

  return (
    <Root>
      <Text>
        The goal of this project is to present the meaning and main ideas of
        Belarussian ornament.
      </Text>
      <Text>
        There are so many interesting things in belarussian history. But often
        there is no attention is paid to it. Not only from over the world but
        also in Belarus. Even in belarussian schools students don't get familiar
        with Belarussian symbols.
      </Text>
      <Divider />
      <Text>
        The project created by Tanya Fedchenko, {today.getFullYear() - 1997},
        software engineer from Vitebsk, Belarus. Me on{" "}
        <Link href="https://twitter.com/geeny273" target="_blank">
          twitter
        </Link>
        {", "}
        <Link
          href="https://www.linkedin.com/in/tanya-f-634335125"
          target="_blank"
        >
          linkedin
        </Link>
        {"."}
      </Text>
    </Root>
  );
}
