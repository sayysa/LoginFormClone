import React from 'react';
import './App.css';
//import logo from './Assets/github-logo.png';

function App() {
  return (
    <div className='wrapper'>
      <form>
        <div className="icon">
          {/* <img src={} alt="GitHub Icon" /> */}
        </div>
        <h1>Sign in to GitHub</h1>

        <div className="body-container">
          <div className="input-box">
            <label>Username or email address</label>
            <br />
            <input type="text" required />
          </div>

          <div className="input-box">
          <div class="label">
            <label>Password
            <a href="#" className="forgot-password">Forgot Password?</a>
            </label>
            <br />
            <input type="password" required />
          </div>
          </div>

          <input type="submit" class="btn" value="Sign in"></input>
        </div>
      </form>

      <div class="login-callout">
            <p class="#">New to GitHub?
              <a href="#" className="create">Create an account</a>
            </p>
      </div>
    
      <footer>
        <span> Terms </span>
        <span> Privacy </span>
        <span> Docs </span>
        <span> Contact GitHub Support </span>
        <span> Manage cookies </span>
        <span> Donut share my personal information </span>
      </footer>

    </div>
  );
}

export default App;