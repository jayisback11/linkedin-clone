import React from "react";
import "./HeaderOptions.css";
import Avatar from "@material-ui/core/Avatar";

function HeaderOptions({ Icon, title }) {
  return (
    <div className="headerOptions">
      {Icon && <Icon className="headerOptions__icon" />}
      <p className="headerOptions__title">{title}</p>
    </div>
  );
}

export default HeaderOptions;
