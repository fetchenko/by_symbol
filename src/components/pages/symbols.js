import React, { useState, Component } from "react";
import { FormattedMessage } from "react-intl";
import { withRouter } from 'react-router-dom';
import { Swipeable } from "react-swipeable";
import { symbols } from "../symbols";
import BlockMenu from "../menu/blockMenu";
import { SYMBOL_OPTIONS, KeyCodes } from "../../constants";
import { Carousel, CarouselContent } from "../../styled/carousel";
import { Column } from "../../styled/flex";
import { SymbolTitle, SymbolDescription, SymbolHint } from "../typography";
import { getNextValue, getPrevValue } from "../../helpers/collection";
import InfoCardLayout from "../layouts/infoCardLayout";
import {
  blockMenuOptions,
  NEXT_CODES,
  PREV_CODES,
} from 'constants/index'

class Symbols extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (PREV_CODES.includes(event.keyCode)) {
      this.handlePrev();
    } else if (NEXT_CODES.includes(event.keyCode)) {
      this.handleNext();
    }
  };

  handleNext = () => {
    const { location: { pathname }, history } = this.props;
    const symbolId = pathname.replace('/', '');

    const nextValue = blockMenuOptions[symbolId].nextEl;

    if (nextValue) {
      history.push(nextValue)
    }
  };

  handlePrev = () => {
    const { location: { pathname }, history } = this.props;
    const symbolId = pathname.replace('/', '');

    const prevValue = blockMenuOptions[symbolId].prevEl;

    if (prevValue) {
      history.push(prevValue)
    }
  };

  renderSimpleView = symbolData => {
    const { path, component: SymbolView, hints } = symbolData;

    return (
      <Column key={path}>
        <SymbolTitle>
          <FormattedMessage id={path} />
        </SymbolTitle>
        <SymbolView key={path} />
        {hints && (
          <SymbolHint>
            {hints.map((hint) => (
              <FormattedMessage key={hint} id={hint} />
            ))}
          </SymbolHint>
        )}
      </Column>
    );
  };

  renderSymbolContent = () => {
    const { symbol } = this.state;

    return symbols.map(symbolData => {
      const { path, component: SymbolView } = symbolData;

      return path === symbol.path ? this.renderSimpleView(symbolData) : null;

      return path === symbol.path ? (
        <InfoCardLayout
          key={symbol.path}
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
          image={<SymbolView key={symbol.path} />}
        />
      ) : null;
    });
  };

  render() {
    return (
      <div>
        <BlockMenu />
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

export default withRouter(Symbols);
