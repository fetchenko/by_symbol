import React, { Component } from "react";
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
  DEFAULT_SYMBOL,
  NEXT_CODES,
  PREV_CODES,
  blockMenuOptions,
} from 'constants/index'
class BlocksMenu extends Component {
  constructor(props) {
    super(props);

    this.activeItemRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.ensureActiveItemVisible();
    }
  }

  componentWillUnmount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  ensureActiveItemVisible() {
    const itemComponent = this.activeItemRef;

    if (itemComponent) {
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
    const {
      match: {
        params: { symbolId = DEFAULT_SYMBOL },
      },
      history,
    } = this.props;

    const nextValue = blockMenuOptions[symbolId].nextEl;

    if (nextValue) {
      history.push(nextValue)
    }
  };

  handlePrev = () => {
    const {
      match: {
        params: { symbolId = DEFAULT_SYMBOL },
      },
      history,
    } = this.props;

    const prevValue = blockMenuOptions[symbolId].prevEl;

    if (prevValue) {
      history.push(prevValue)
    }
  };

  renderLoaderComponent = () => {
    return <GridLoading containerProps={{ rows: 6, columns: 8 }} />;
  };

  renderMenuItem = item => {
    const { intl, location: { pathname } } = this.props;
    const symbolId = pathname.replace('/', '');

    const active = (symbolId === item.path);

    const props = {
      ref: (active) ? this.activeItemRef : undefined,
    }

    return (
      <BlockMenuItem key={item.path} ref={props.ref} active={active}>
        {item.img && (
          <Link to={item.path}>
            <ImageButtonWithLoader
              src={item.img}
              alt={intl.formatMessage({ id: item.title || 'test' })}
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
