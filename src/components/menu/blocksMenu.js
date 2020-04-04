import React, { Component } from "react";
import { injectIntl } from "react-intl";
import {
  BlockMenuItem,
  BlockMenu,
  BlockMenuContent,
  PrevButton,
  NextButton
} from "../../styled/menu";
import GridLoading from "../blocks/gridLoading";
import ImageWithLoader from "../blocks/imageWithLoader";
import { getNextValue, getPrevValue } from "../../helpers/collection";

class BlocksMenu extends Component {
  constructor(props) {
    super(props);

    this.activeItemRef = React.createRef();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.value !== prevProps.value) {
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

  handleClick = value => () => {
    const selectedValue = this.props.options.find(item => item.path === value);

    this.props.onSelect(selectedValue);
  };

  handleNextButton = () => {
    const { options, onSelect, value } = this.props;

    const nextValue = getNextValue(options, value);

    if (nextValue) {
      onSelect(nextValue);
    }
  };

  handlePrevButton = () => {
    const { options, onSelect, value } = this.props;

    const prevValue = getPrevValue(options, value);

    if (prevValue) {
      onSelect(prevValue);
    }
  };

  renderLoaderComponent = () => {
    return <GridLoading containerProps={{ rows: 6, columns: 8 }} />;
  };

  renderMenuItem = item => {
    const { value, intl } = this.props;
    const label = intl.formatMessage({ id: item.path });

    const active = value.path === item.path;

    const props = active
      ? {
          active,
          ref: this.activeItemRef
        }
      : {};

    if (active) {
      props.ref = this.activeItemRef;
    }

    return (
      <BlockMenuItem
        key={item.path}
        {...props}
        onClick={this.handleClick(item.path)}
      >
        {item.img && (
          <ImageWithLoader
            src={item.img}
            alt={label}
            loaderComponent={this.renderLoaderComponent}
          />
        )}
      </BlockMenuItem>
    );
  };

  render() {
    const { options } = this.props;

    return (
      <BlockMenu>
        <PrevButton onClick={this.handlePrevButton}>&#8249;</PrevButton>
        <BlockMenuContent>{options.map(this.renderMenuItem)}</BlockMenuContent>
        <NextButton onClick={this.handleNextButton}>&#8250;</NextButton>
      </BlockMenu>
    );
  }
}

export default injectIntl(BlocksMenu);
