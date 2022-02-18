import React from 'react';
const LogIn = function () {
  return (
    <div>
      <form>
        <h3>Welcome Back!</h3>
        <div className="form-group">
          <label></label>
          <input
            type="email"
            className="form-control"
            placeholder="Email address"
          />
        </div>
        <div className="form-group">
          <label></label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label></label>
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          LOG IN
        </button>
      </form>
    </div>
  );
};

export default LogIn;
