import React, { useEffect } from 'react';
import Header from '../components/header';

function Login({ message = "", forgetmessage = "", forgetmessagesuccess = "" }) {
  useEffect(() => {
    const spans = document.querySelectorAll('.word span');
    spans.forEach((span, idx) => {
      span.addEventListener('click', (e) => {
        e.target.classList.add('active');
      });
      span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
      });

      // Initial animation
      setTimeout(() => {
        span.classList.add('active');
      }, 750 * (idx + 1));
    });

    return () => {
      spans.forEach((span) => {
        span.removeEventListener('click', () => {});
        span.removeEventListener('animationend', () => {});
      });
    };
  }, []);

  const showPopup = () => {
    document.getElementById('popup').style.visibility = 'visible';
  };

  const hidePopup = () => {
    document.getElementById('popup').style.visibility = 'hidden';
  };

  return (
    <div id="containerr">
      <Header />
      <main>
        <div className="main_log-in_body">
          <form action="/forgotPassword" method="post">
            <div className="popup_backdrop" id="popup" style={{ visibility: 'hidden' }}>
              <div className="popup">
                <div>
                  <div className="heading" style={{ display: 'flex', justifyContent: 'center', margin: '15px', fontSize: '23px' }}>
                    <p style={{ margin: '0px', fontSize: '27px' }}>Forgot password</p>
                  </div>
                  <div className="bodypopup">
                    <div className="popuptxt">Please enter your Email Id to receive a reset password link</div>
                    <input type="text" name="email" id="web_forgot_password_email" placeholder="Enter your email" />
                    <button id="web_forgot_password_submit" type="submit" className="forgotSubmit">Submit</button>
                  </div>
                </div>
                <p className="crossicon" onClick={hidePopup}>╳</p>
              </div>
            </div>
          </form>

          <div className="leftside">
            <div className="word">
              <span>T</span>
              <span>I</span>
              <span>I</span>
              <span>T</span>
              <span>L</span>
              <span>E</span>
              {/* <span>A</span>
              <span>N</span>
              <span>D</span>
              <span>A</span>
              <span>S</span> */}
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', height: '30%', width: '100%', alignItems: 'center' }}>
                <div className="signin-title">Hey, there </div>
              </div>
              <div style={{ display: 'flex' }}>
                <p className="line-1 anim-typewriter"> We are here for you.</p>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70%' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div className="notlogin">Don't have a account?</div>
                </div>
                <div className="createOne">
                  <a className="createsign" href="/signup">Create One</a>
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
              {message && (
                <div className="notificationdiv">
                  <div id="notification-container">
                    <div className="notification notification-error">
                      <div className="notification-message">{message}</div>
                    </div>
                  </div>
                </div>
              )}

              {forgetmessage && (
                <div className="notificationdiv">
                  <div id="notification-container">
                    <div className="forgetnotification notification-error">
                      <div className="notification-message">{forgetmessage}</div>
                    </div>
                  </div>
                </div>
              )}

              {forgetmessagesuccess && (
                <div className="notificationdiv">
                  <div id="notification-container">
                    <div className="forgetnotification notification-success">
                      <div className="notification-message">{forgetmessagesuccess}</div>
                    </div>
                  </div>
                </div>
              )}

              <form action="/login" method="post">
                <div className="login_box loginp">
                  <div style={{ width: '20em', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div className="Login_title">
                      <h4 className="a" style={{ fontSize: 'larger' }}>Sign in</h4>
                    </div>
                    <div className="upper_text">Username</div>
                    <input type="text" name="username" id="n-e-p" placeholder="Enter your username" />
                    <div className="lower_text">Password</div>
                    <input type="password" name="password" id="p" placeholder="Enter your password" />
                    <button className="btn-login-loginpage" type="submit">Sign in</button>
                    <hr className="space_left" data-content="or sign in with" />
                    <div style={{ marginLeft: '72px', marginTop: '10px' }}>
                      <div className="g-f_icons">
                        <div className="googlee">
                        <img src="/assets/img/google.png" alt="" style={{ height: '30px' }} />
                        </div>
                        <div className="facebookk">
                          <img src="assets/img/facebook.png" alt="" style={{ height: '34px' }} />
                        </div>
                      </div>
                    </div>
                    <div className="forgot-password_login" onClick={showPopup}>Forgot password?</div>
                    <div>
                      <div className="sign_up_for-create-account"> Don't have a BlackPanda account? </div>
                      <div className="sign_up_for-create-account-right">
                        <a href="/signup" style={{ color: 'red' }}>Sign Up</a>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
