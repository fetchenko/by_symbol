import React from "react";
import {
  BlockMenuItem,
  BlockMenu,
  PrevButton,
  NextButton
} from "../../styled/menu";
import GridLoading from "../blocks/gridLoading";
import ImageWithLoader from "../blocks/imageWithLoader";

const BlocksMenu = props => {
  const { value, options, onSelect } = props;

  const handleClick = value => () => {
    const selectedValue = options.find(item => item.path === value);

    onSelect(selectedValue);
  };

  const handleNextButton = () => {
    const currentIndex = options.findIndex(item => item.path === value.path);

    if (options[currentIndex + 1]) {
      onSelect(options[currentIndex + 1]);
    }
  };

  const handlePrevButton = () => {
    const currentIndex = options.findIndex(item => item.path === value.path);

    if (options[currentIndex - 1]) {
      onSelect(options[currentIndex - 1]);
    }
  };

  const renderLoaderComponent = () => {
    return <GridLoading containerProps={{ rows: 4, columns: 7 }} />;
  };

  return (
    <BlockMenu>
      <PrevButton onClick={handlePrevButton}>&#8249;</PrevButton>
      {options.map(option => {
        return (
          <BlockMenuItem
            active={value.path === option.path}
            onClick={handleClick(option.path)}
          >
            {option.img && (
              <ImageWithLoader
                key={option.path}
                src={option.img}
                alt={option.label}
                loaderComponent={renderLoaderComponent}
              />
            )}
          </BlockMenuItem>
        );
      })}
      <NextButton onClick={handleNextButton}>&#8250;</NextButton>
    </BlockMenu>
  );
};

export default BlocksMenu;
