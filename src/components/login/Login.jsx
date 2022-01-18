import React from 'react';
import './login.css';

export default function Login() {
  return (
    <div className="login_main">
      <div className="w-100 d-flex flex-column align-items-center justify-content-center ">
        <div className="card" style={{ width: '40%' }}>
          <form action="">
            <input type="text" className="form-control" />
          </form>
        </div>
      </div>
    </div>
  );
}
