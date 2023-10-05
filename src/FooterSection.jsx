import React from "react";
import "./App.css";
import "./normalize.css";

function FooterSection() {
  return (
    <div>
      <div>
        <table>
          <tbody>
          <tr>
            <td>
              <h3>For Dev</h3>
              <p>How It Works</p>
              <p>How To Create A Profile</p>
              <p>Find Jobs</p>
            </td>
            <td>
              <h3>For Clients</h3>
              <p>How It Works</p>
              <p>How To Post A Job</p>
              <p>Find Dev</p>
            </td>
            <td>
              <h3>Stay Connected</h3>
              <table>
                <tbody>
                <tr>
                  <td>
                    <div className="imagecont">
                      <img
                        src="public/Images/FacebookIcon.jpeg"
                        className="Responsive"
                        alt="Facebook"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="imagecont">
                      <img
                        src="public/Images/TwitterLogoIcon.webp"
                        className="Responsive"
                        alt="Twitter"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="imagecont">
                      <img
                        src="public/Images/instagramlogoicon.png"
                        className="Responsive"
                        alt="Instagram"
                      />
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className="center">
        <div className="center">
          <h3>DevLink</h3>
        </div>
        <div className="parent">
          <div className="child">
            <p>Privacy Policy</p>
          </div>
          <div className="child">
            <p>Terms</p>
          </div>
          <div className="child">
            <p>Code Of Conduct</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
