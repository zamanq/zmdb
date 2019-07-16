import React, { Component } from "react";

export default class footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            {/* footer copyright */}
            <div className="col-12">
              <div className="footer__copyright">
                <small>
                  © 2019 ZMDB. Created by{" "}
                  <a href="https://www.zamanq.com" target="_blank">
                    Zaman.Q
                  </a>
                </small>
              </div>
            </div>
            {/* end footer copyright */}
          </div>
        </div>
      </footer>
    );
  }
}
