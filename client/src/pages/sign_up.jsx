import React from 'react';
import Header from '../components/header';

function SignUp() {
  return (
    <div id="containerr">
      <Header />
      <main>
        <div className="main_log-in_body">
          <div className="leftside">
            <div className="word signp">
              <span>B</span>
              <span>L</span>
              <span>A</span>
              <span>C</span>
              <span>K</span>
              <span>P</span>
              <span>A</span>
              <span>N</span>
              <span>D</span>
              <span>A</span>
              <span>S</span>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', height: '30%', width: '100%', alignItems: 'center' }}>
                <div className="signin-title">Hey, there</div>
              </div>
              <div style={{ display: 'flex' }}>
                <p className="line-1 anim-typewriter">We are here for you.</p>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70%' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div className="notlogin">Already Signed up?</div>
                </div>
                <div className="createOne">
                  <a className="createsign" href="/login">Sign in</a>
                </div>
              </div>
            </div>
          </div>
          <div className="b-r">
            <div id="word">
              <span>B</span>
              <span>L</span>
              <span>A</span>
              <span>C</span>
              <span>K</span>
              <span>P</span>
              <span>A</span>
              <span>N</span>
              <span>D</span>
              <span>A</span>
              <span>S</span>
            </div>
            <div className="rightside">
              {/* Uncomment and handle message errors if needed */}
              {/* <% if(messageerr.length > 0) { %>
                <div className="notificationdiv">
                  <div id="notification-container">
                    <div className="notification notification-error">
                      <div className="notification-message"><%= messageerr %></div>
                    </div>
                  </div>
                </div>
              <% } %> */}
              <form action="signup" method="post">
                <div className="login_box">
                  <div style={{ width: '20em', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div className="Login_title">
                      <h4 className="a">Sign Up</h4>
                    </div>
                    <div className="upper_text" style={{ marginTop: '20px' }}>Name</div>
                    <input type="text" name="name" className="sign" id="n-e-p" placeholder="Enter your name" />
                    <div className="middle_text">Username</div>
                    <input type="text" name="username" className="sign" id="e" placeholder="Enter your username" />
                    <div className="lower_middle_text">Email</div>
                    <input type="text" name="email" className="sign" id="ph-n" placeholder="Enter your email" />
                    <div className="lower_text">Password</div>
                    <input type="password" name="password" className="sign" id="p" placeholder="Enter your password" />
                    <button className="btn-login-loginpage signupbtn" type="submit">Sign up</button>
                    <hr className="space_left signpp" data-content="or sign in with" />
                    <div style={{ marginLeft: '81px', marginTop: '10px' }}>
                      <div className="g-f_iconss">
                        <div className="googlee">
                          <img src="assets/img/google.png" alt="Google" style={{ height: '30px' }} />
                        </div>
                        <div className="facebookk">
                          <img src="assets/img/facebook.png" alt="Facebook" style={{ height: '34px' }} />
                        </div>
                      </div>
                    </div>
                    {/* <div className="forgot-password_login">Forgot password ?</div> */}
                    {/* <div>
                      <div className="sign_up_for-create-account">Already Signed Up?</div>
                      <div className="sign_up_for-create-account-right">
                        <a href="/login" style={{ color: 'red' }}>Sign In</a>
                      </div>
                    </div> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <script src="script.js"></script>
      <script src="login-page.js"></script>
    </div>
  );
}

export default SignUp;
