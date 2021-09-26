import React, { useCallback, useState } from "react";
import Text from "~/components/text";
import { getSymbolData } from "~/assets/symbols";
import SymbolContent from "~/components/symbols-view";
import { useIntl } from "react-intl";
import { breakpoints } from "~/theme/theme";
import { useTheme } from "~/theme/themeContext";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    maxWidth: "var(--page-size-md)",
  },
  symbolContainer: {
    padding: "1rem",

    [theme.mediaQueries.md]: {
      padding: "1.75",
    },
  },
  composition: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",

    [theme.mediaQueries.sm]: {
      flexDirection: "row",
    },
  },
  sign: {
    fontSize: "2rem",
    padding: "0.5rem",
  },
}));

function SymbolView({ title, children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {children}
      <h5
        style={{
          margin: 0,
          fontSize: 18,
        }}
      >
        {title}
      </h5>
    </div>
  );
}

const earthData = getSymbolData("earth");
const sunData = getSymbolData("sun");
const springData = getSymbolData("spring");

export default function Home() {
  const {
    windowSize: { width },
  } = useTheme();
  const intl = useIntl();
  const [rootWidth, setRootWidth] = useState(0);
  const classes = useStyles();

  const rootRef = useCallback(
    (node) => {
      if (node && width) {
        setRootWidth(node.offsetWidth);
      }
    },
    [width]
  );

  const symbolProps = {
    containerClassName: classes.symbolContainer,
  };

  const predefinedSize =
    width <= breakpoints.sm
      ? undefined
      : Number(Number(rootWidth / 4).toFixed(0));

  return (
    <div className={classes.container} ref={rootRef}>
      <Text>
        Ornament is a language of belarusian ancestors. Weavers weave stories on
        materials, just as writers write stories in books. It was a way to
        describe their life stories and worldview. Long time ago education was
        not widely accessible. Sometimes they didn’t know how to read and write,
        but they can describe story by veawing it on the materials. Examine
        patterns from beauty perspective is not correct. It has deeper meaning.
        It describes worldview of people who don’t know science, but has strong
        connection with nature.
        <br />
        <br />
        To express feelings they used birds, flowers, trees. Forests, fields,
        rivers have their own spirits. Forest - Lesovic, Rivers - Vodyanoy,
        Fields - Polevoy, Rain - Dajdbog. In their opinion spirits watch,
        protect and was responsible for thats part of nature. They can help
        people or make damage in some cases.
        <br />
        <br />
        The most important were Earth and the Sun. Earth was like Mather, The
        Sun was like Father.
        <br />
        <br />
        Each symbol has a meaning. Belarusian weavers were very close and
        patient to nature and it is a significant part of patterns. Ground,
        rives, forests were very valuable for them. As animals which lives near
        them. A long time ago people couldn’t explain the world around them and
        nature events. They believe in nature Gods and have a different view
        about the world.
        <br />
        <br />
        Spring is a good example describes their worldview. Symbols of the Sun
        present rhombus with line out it. Symbol of earth present rhombus with
        line inside it. Symbol of earth inside symbol of sun symbolize spring.
        It shows that Earth and Sun become closer and weather become warmer.
      </Text>
      <div className={classes.composition}>
        <SymbolView
          title={intl.formatMessage({ id: earthData.symbols[0].title })}
        >
          <SymbolContent
            symbolId={earthData.id}
            symbols={earthData.symbols.slice(0, 1)}
            predefinedSize={predefinedSize}
            {...symbolProps}
          />
        </SymbolView>
        <div className={classes.sign}>+</div>
        <SymbolView
          title={intl.formatMessage({ id: sunData.symbols[1].title })}
        >
          <SymbolContent
            symbolId={sunData.id}
            symbols={sunData.symbols.slice(1, 2)}
            predefinedSize={predefinedSize}
            {...symbolProps}
          />
        </SymbolView>
        <div className={classes.sign}>=</div>
        <SymbolView
          title={intl.formatMessage({ id: springData.symbols[2].title })}
        >
          <SymbolContent
            symbolId={springData.id}
            symbols={springData.symbols.slice(2, 3)}
            predefinedSize={predefinedSize}
            {...symbolProps}
          />
        </SymbolView>
      </div>
      <Text>
        Pigeons symbolize love. This an example how behavior of birds can
        describe different human feelings. Pigeons go after each other - the
        first time when lovers are met; it is the start of their love. Pigeons
        look at each other, something flowers between them - love on top of it;
        happy love. Pigeons go in different directions - love ended; story about
        unhappy love.
      </Text>
    </div>
  );
}
