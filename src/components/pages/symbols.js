import React, { useState, Component } from "react";
import { FormattedMessage } from "react-intl";
import { Swipeable } from "react-swipeable";
import { symbols } from "../symbols";
import BlocksMenu from "../menu/blocksMenu";
import { SYMBOL_OPTIONS, KeyCodes } from "../../constants";
import { Carousel, CarouselContent } from "../../styled/carousel";
import { SymbolTitle, SymbolDescription } from "../typography";
import { getNextValue, getPrevValue } from "../../helpers/collection";
import InfoCardLayout from "../layouts/infoCardLayout";

class Symbols extends Component {
  constructor(props) {
    super(props);

    this.state = {
      symbol: SYMBOL_OPTIONS[0]
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.keyCode === KeyCodes.LEFT || event.keyCode === KeyCodes.DOWN) {
      this.handlePrev();
    } else if (
      event.keyCode === KeyCodes.RIGHT ||
      event.keyCode === KeyCodes.UP
    ) {
      this.handleNext();
    }
  };

  handleNext = () => {
    const nextValue = getNextValue(SYMBOL_OPTIONS, this.state.symbol);

    nextValue && this.setState({ symbol: nextValue });
  };

  handlePrev = () => {
    const prevValue = getPrevValue(SYMBOL_OPTIONS, this.state.symbol);

    prevValue && this.setState({ symbol: prevValue });
  };

  handleSelect = value => {
    this.setState({ symbol: value });
  };

  renderSymbolContent = () => {
    const { symbol } = this.state;

    return symbols.map(symbolData => {
      const { path, component: SymbolView } = symbolData;

      return path === symbol.path ? (
        <InfoCardLayout
          key={path}
          title={
            <SymbolTitle>
              <FormattedMessage id={symbol.path} />
            </SymbolTitle>
          }
          description={
            <SymbolDescription>
              <FormattedMessage id={symbol.description} />
            </SymbolDescription>
          }
          image={<SymbolView key={path} />}
        />
      ) : null;
    });
  };

  render() {
    return (
      <div>
        <BlocksMenu
          options={SYMBOL_OPTIONS}
          value={this.state.symbol}
          onSelect={this.handleSelect}
        />
        <Swipeable
          onSwipedLeft={this.handleNext}
          onSwipedRight={this.handlePrev}
        >
          <Carousel>
            <CarouselContent>{this.renderSymbolContent()}</CarouselContent>
          </Carousel>
        </Swipeable>
      </div>
    );
  }
}

export default Symbols;
