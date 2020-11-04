import React from "react";
import Icon from "./icon";
export default function Icons(props) {
  let Icons = props.icons;
  const newIcons = Icons.map((element, index) => (
    <Icon key="index" iconUrl="element.icon" />
  ));
  return <div className="navbar">{newIcons}</div>;
}
