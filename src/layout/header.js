import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo1.svg";

export default class header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__wrap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header__content">
                  {/* header logo */}
                  <Link to="/" className="header__logo">
                    <img src={Logo} alt="" />
                  </Link>
                  {/* end header logo */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
