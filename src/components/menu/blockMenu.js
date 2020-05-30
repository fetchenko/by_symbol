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
import { SYMBOL_OPTIONS, blockMenuOptions, DEFAULT_SYMBOL } from 'constants/index'

class BlocksMenu extends Component {
  constructor(props) {
    super(props);

    this.activeItemRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.ensureActiveItemVisible();
    }
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

  handleNextButton = () => {
    const { location: { pathname }, history } = this.props;
    const symbolId = pathname.replace('/', '');

    const nextValue = blockMenuOptions[symbolId].nextEl;

    if (nextValue) {
      history.push(nextValue)
    }
  };

  handlePrevButton = () => {
    const { location: { pathname }, history } = this.props;
    const symbolId = pathname.replace('/', '');

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
              alt={intl.formatMessage({ id: item.path })}
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
        <PrevButton onClick={this.handlePrevButton}>&#8249;</PrevButton>
        <BlockMenuContent>{SYMBOL_OPTIONS.map(this.renderMenuItem)}</BlockMenuContent>
        <NextButton onClick={this.handleNextButton}>&#8250;</NextButton>
      </BlockMenu>
    );
  }
}

export default withRouter(injectIntl(BlocksMenu));
