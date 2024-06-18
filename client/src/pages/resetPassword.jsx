import React from 'react';
import '../designs/resetPassword.css'
function ResetPassword() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' , backgroundColor: 'rgb(185, 236, 224)' }}>
      <form action="/resetPassword" method="post">
        <div className="mainbox">
          <div className="lefty">
            <div style={{ height: '70%', width: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <div className="reset">Reset Password</div>
              <div className="choose">Please choose your password</div>
              <div className="newPassword">New Password</div>
              <input type="password" name="newPassword" className="new" placeholder="Enter your new password" />
              <div className="confirmPassword">Confirm Password</div>
              <input type="password" name="confirmPassword" className="new" placeholder="Confirm your password" />
              <button type="submit" className="subb">Save New Password</button>
            </div>
          </div>
          <div className="righty" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="assets/img/resetpanda.png" alt="Reset Panda" className="pimg" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ResetPassword;
