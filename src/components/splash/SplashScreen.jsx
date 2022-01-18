import React from 'react';
import { Link } from 'react-router-dom';
import './splash.css';

import xclusiveLogo from '../../assets/images/Xclusive-store.png';

export default function SplashScreen() {
  return (
    <div className="splash_main d-flex flex-column align-items-center justify-content-center ">
      <div className="splash_content w-100 d-flex flex-column align-items-center justify-content-center ">
        <div className=" d-flex flex-column w-50 align-items-center">
          <div>
            <img
              src={xclusiveLogo}
              className="img-fluid"
              alt="..Xclusive store logo"
            />
          </div>
          <h1 className="splash_main_text pt-4 pb-4 text-center text-light">
            Welcome to Xclusive Store. You will find here what you need.
          </h1>

          <Link
            to="/categories"
            className="btn btn-light shadow btn-lg splash_btn_round"
          >
            start shopping
          </Link>

          <small className="py-4">
            Dont have an account?{' '}
            <Link to="/register" className="text-light splash_small_text">
              Sign Up
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}
