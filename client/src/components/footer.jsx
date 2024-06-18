import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer topmargin" style={{ backgroundColor: '#181818', height: '30em' }}>
      <div className="content vw">
        <div className="footer-content-col1">
          <div>
            <span>CUSTOMER POLICIES</span>
            <div className="customer-policies-content" style={{ marginTop: '25px', color: 'white' }}>
              <ul>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/track">Track Order</Link></li>
                <li><Link to="/return">Return Order</Link></li>
                <li><Link to="/cancel">Cancel Order</Link></li>
              </ul>
            </div>
          </div>

          <div>
            <span>CONNECT WITH US</span>
            <div className="connect-with-us-content" style={{ marginTop: '25px', color: 'white' }}>
              <ul>
                <li><a href="https://www.facebook.com">Facebook</a></li>
                <li><a href="https://www.instagram.com">Instagram</a></li>
                <li><a href="https://www.snapchat.com">Snapchat</a></li>
                <li><a href="https://www.twitter.com">Twitter</a></li>
              </ul>
            </div>
          </div>

          <div>
            <span style={{ marginLeft: '3.2vw' }}>SEND FEEDBACK</span>
            {/* <div className="send-feedback-content" style={{ color: 'white' }}>
              <div className="ghost-body">
                <div id="ghost-feedback">
                  <div className="chat-bubble" id="ghost-bubble"></div>
                  <input className="ghost-input" id="ghost-input" type="text" placeholder="Type a message" />
                  <div className="ghost">
                    <div className="ghost__face">
                      <div className="ghost__eyes">
                        <div className="ghost__eyes-l"></div>
                        <div className="ghost__eyes-r"></div>
                      </div>
                      <div className="ghost__mouth"></div>
                    </div>
                    <div className="ghost__torso"></div>
                    <div className="ghost__hands">
                      <div className="ghost__hands-l"></div>
                      <div className="ghost__hands-r"></div>
                    </div>
                    <div className="ghost__legs"></div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="footer-content-col2 space-between">
          <div>
            <Link to="#">DOWNLOAD THE AMAZON APP</Link>
          </div>
          <div><Link to="#">100% SECURE PAYMENT</Link></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
