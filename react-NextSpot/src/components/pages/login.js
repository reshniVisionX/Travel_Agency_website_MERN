import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './login.css';
export default class Login extends Component {
  
  render() {
    return (
      <form className='bodyform'>
        <h3>Log In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <Link to="/"> 
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Link></div>
        <p className="forgot-password text-right">
          Forgot <a href="oo">password?</a>
        </p>
      </form>
    )
  }
}
