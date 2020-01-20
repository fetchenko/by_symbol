import React from "react";
import {
  BlockMenuItem,
  BlockMenu,
  BlockMenuContent,
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
    return <GridLoading containerProps={{ rows: 5, columns: 8 }} />;
  };

  return (
    <BlockMenu>
      <BlockMenuContent>
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
      </BlockMenuContent>
    </BlockMenu>
  );
};

export default BlocksMenu;
