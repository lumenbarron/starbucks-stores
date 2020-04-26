import React from "react";
import "./style/header.css";

export default function Header() {
  return (
      <div className="row container-header">
        <div className="col s12 m6 text-header">
          <h2>Know the coolest Starbucks stores in the World!</h2>
        </div>
        <div className="col s12 m6">
          <div className="img-header"></div>
        </div>
      </div>
  );
}
