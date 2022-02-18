import React from 'react';
const SignUp = function () {
  return (
    <div>
      <form>
        <h3>Sign Up For Free</h3>
        <div className="form-group">
          <br></br>
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
          />
        </div>
        <div className="form-group">
          <br></br>
          <input type="text" className="form-control" placeholder="Last Name" />
        </div>
        <div className="form-group">
          <br></br>
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
          />
        </div>
        <div className="form-group">
          <br></br>
          <input
            type="password"
            className="form-control"
            placeholder="Set a password"
          />
          <br></br>
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          GET STARTED
        </button>
      </form>
    </div>
  );
};
export default SignUp;
