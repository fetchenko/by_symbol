import React, { Component } from "react";
import isEqual from 'lodash/isEqual';
import { injectIntl } from "react-intl";
import { withRouter, Link } from 'react-router-dom';
import {
  BlockMenuItem,
  BlockMenu,
  BlockMenuContent,
  PrevButton,
  NextButton
} from "styled/menu";
import GridLoading from "components/blocks/gridLoading";
import ImageButtonWithLoader from "components/blocks/imageButtonWithLoader";
import {
  SYMBOL_OPTIONS,
  NEXT_CODES,
  PREV_CODES,
  blockMenuOptions,
} from 'constants/index'
import { getSymbolIdFromRoute } from 'helpers/navigation';

class BlocksMenu extends Component {
  constructor(props) {
    super(props);

    this.activeItemRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(this.props.location.hash, prevProps.location.hash)) {
      this.ensureActiveItemVisible();
    }
  }

  componentWillUnmount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  ensureActiveItemVisible() {
    const itemComponent = this.activeItemRef;

    if (itemComponent && itemComponent.current) {
      itemComponent.current.scrollIntoView({
        behavior: "smooth",
        inline: "center"
      });
    }
  }

  handleKeyDown = event => {
    if (PREV_CODES.includes(event.keyCode)) {
      this.handlePrev();
    } else if (NEXT_CODES.includes(event.keyCode)) {
      this.handleNext();
    }
  };

  handleNext = () => {
    const { history, location } = this.props;

    const symbolId = getSymbolIdFromRoute(location);

    const nextValue = blockMenuOptions[symbolId].nextEl;

    if (nextValue) {
      history.push(`/#${nextValue}`)
    }
  };

  handlePrev = () => {
    const { history, location } = this.props;

    const symbolId = getSymbolIdFromRoute(location);

    const prevValue = blockMenuOptions[symbolId].prevEl;

    if (prevValue) {
      history.push(`/#${prevValue}`)
    }
  };

  renderLoaderComponent = () => {
    return <GridLoading containerProps={{ rows: 6, columns: 8 }} />;
  };

  renderMenuItem = item => {
    const { intl, location } = this.props;

    const symbolId = getSymbolIdFromRoute(location);

    const active = (symbolId === item.path);

    const props = {
      ref: (active) ? this.activeItemRef : null,
    }

    return (
      <BlockMenuItem key={item.path} ref={props.ref} active={active}>
        {item.img && (
          <Link to={`/#${item.path}`}>
            <ImageButtonWithLoader
              src={item.img}
              alt={intl.formatMessage({ id: item.title })}
              loaderComponent={this.renderLoaderComponent}
            />
          </Link>
        )}
      </BlockMenuItem>
    );
  };

  render() {
    return (
      <BlockMenu>
        <PrevButton onClick={this.handlePrev}>&#8249;</PrevButton>
        <BlockMenuContent>{SYMBOL_OPTIONS.map(this.renderMenuItem)}</BlockMenuContent>
        <NextButton onClick={this.handleNext}>&#8250;</NextButton>
      </BlockMenu>
    );
  }
}

export default withRouter(injectIntl(BlocksMenu));
