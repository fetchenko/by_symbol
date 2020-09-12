import React from "react";
import { DesktopView, MobileView } from "styled/layout";
import MainMenuDesktop from "./mainMenuDesktop";
import MainMenuMobile from "./mainMenuMobile";

export default function MainMenu(props) {
  return (
    <>
      <DesktopView>
        <MainMenuDesktop {...props} />
      </DesktopView>
      <MobileView>
        <MainMenuMobile {...props} />
      </MobileView>
    </>
  );
}
