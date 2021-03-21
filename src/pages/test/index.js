import React from "react";
import styled from "styled-components";
import "./editable-list.js";
import Block from "./block";

const ContentRow = styled.div`
  padding: 10px 24px 0 24px;
  flex-direction: column;

  ${(props) => props.theme.mediaQueries.md} {
    padding: 40px 60px;
    display: flex;
    justify-content: center;
  }
`;

export default function TextPage() {
  return (
    <ContentRow>
      <Block></Block>
      <editable-list
        title="TODO"
        list-item-0="First item on the list"
        list-item-1="Second item on the list"
        list-item-2="Third item on the list"
        list-item-3="Fourth item on the list"
        list-item-4="Fifth item on the list"
        listItem="This will not appear"
        add-item-text="Add new list item:"
      ></editable-list>
    </ContentRow>
  );
}
