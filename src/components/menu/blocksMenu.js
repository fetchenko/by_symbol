import React, { Component } from "react";
import {
  BlockMenuItem,
  BlockMenu,
  BlockMenuContent,
  PrevButton,
  NextButton
} from "../../styled/menu";
import GridLoading from "../blocks/gridLoading";
import ImageWithLoader from "../blocks/imageWithLoader";

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

    const currentIndex = options.findIndex(item => item.path === value.path);

    if (options[currentIndex + 1]) {
      onSelect(options[currentIndex + 1]);
    }
  };

  handlePrevButton = () => {
    const { options, onSelect, value } = this.props;

    const currentIndex = options.findIndex(item => item.path === value.path);

    if (options[currentIndex - 1]) {
      onSelect(options[currentIndex - 1]);
    }
  };

  renderLoaderComponent = () => {
    return <GridLoading containerProps={{ rows: 6, columns: 8 }} />;
  };

  renderMenuItem = item => {
    const { value } = this.props;

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
      <BlockMenuItem {...props} onClick={this.handleClick(item.path)}>
        {item.img && (
          <ImageWithLoader
            key={item.path}
            src={item.img}
            alt={item.label}
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
        <BlockMenuContent>
          <PrevButton onClick={this.handlePrevButton}>&#8249;</PrevButton>
          {options.map(this.renderMenuItem)}
          <NextButton onClick={this.handleNextButton}>&#8250;</NextButton>
        </BlockMenuContent>
      </BlockMenu>
    );
  }
}

export default BlocksMenu;
