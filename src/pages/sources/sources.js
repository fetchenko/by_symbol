import React from "react";
import styled from "styled-components";
import BookInfo from "components/blocks/bookInfo";
import { Text } from "components/typography/index";

const Root = styled.div`
  ${(props) => props.theme.mediaQueries.md} {
    max-width: 960px;
  }
`;

const SectionTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.merriweather};
`;

const Container = styled.div`
  ${(props) => props.theme.mediaQueries.md} {
    display: flex;
    justify-content: space-between;
  }
`;

const BookInfoWrapper = styled.div`
  ${(props) => props.theme.mediaQueries.md} {
    width: 46%;
  }
`;

export default function Sources() {
  return (
    <Root>
      {/* <Text>
        Belarussian ornament is kind of language. Belarussian women use it as a
        way to express their feelings and life stories, knowledge about the
        world and nature.
      </Text> */}
      <Text>
        Belarussian ornament has not been well studied. Although there are a few
        good resources that shine the light on it. One of the best book is
        "Belorussian ornament" by M.Katsar. As a student, he travelled through
        cities and villages in Belarus. He met weavers and they told him
        different legends and described the meaning of many symbols. All this
        information he put into the book.
      </Text>
      <Text>
        The philosophy of ancient Belarusians village is simple. Hard work was
        meaningful for our ancestors. They grew grains and bred cattle. Land and
        hard work were the basis of good life. They worked hard and rested well.
        During harvest they sang songs. Belarusian holidays were accompanied by
        fun, song and dance. Family members' health was very important for them.
        They believed some symbols weaved on clothes will help to cure disease.
      </Text>
      <Text>
        During 1919 - 1991 Belarus was part of the USSR. The Soviet Union
        implemented the collectivization of its agricultural sector. The policy
        aimed to integrate individual landholdings and labor into controlled
        farms. As a result, traditions and meaningful habits of Belarussian
        villages were destroyed and peasant labor lost its value.
      </Text>
      <SectionTitle>Books</SectionTitle>
      <Container>
        <BookInfoWrapper>
          <BookInfo
            title="Belarusian Ornament"
            author="Michael Katsar"
            authorImg="/assets/img/katsar.jpeg"
            book="/assets/books/Belarusian-ornament.djvu"
            authorBio={`"The book is a hymn to an eternal quest for
                beauty, desire to show their understanding of life, world,
                university using woven pattern. The hymn of skilful hands, good and
                poetic soul of balarussian peasant" - M. Katsar
            `}
          />
        </BookInfoWrapper>
        <BookInfoWrapper>
          <BookInfo
            title="Belarusian folk legends"
            author="Pavel Shpilevsky"
            authorImg="/assets/img/shpilevsky.jpeg"
            book="/assets/books/belorusskiya-narodnyya-predaniya.pdf"
            authorBio={`
            Pavel Shpilevsky wrote the article "Belarusian folk stories"
            at age 23. Format of the article was similar to a dictionary
            and contained descriptions of 36 gods and spirits.
            In 1852 he published one more article where
            he described 16 characters. Shpilevsky was a collector of
            folklore and researcher of Slavic Mythology.
            `}
          />
        </BookInfoWrapper>
      </Container>
    </Root>
  );
}
