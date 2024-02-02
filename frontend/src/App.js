import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


// Configuración de axios
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
})

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    client.get("/api/user/")
      .then(function (res) {
        setCurrentUser(true);
      })
      .catch(function (error) {
        setCurrentUser(false);
      });
  }, []);

  function update_form_btn() {
    if (registrationToggle) {
      document.getElementById("form_btn").innerHTML = "Register";
      setRegistrationToggle(false);
    } else {
      document.getElementById("form_btn").innerHTML = "Log in";
      setRegistrationToggle(true);
    }
  }

  function submitRegistration(e) {
    e.preventDefault();
    client.post(
      "/api/register/",
      {
        email: email,
        username: username,
        password: password
      }
    ).then(function (res) {
      client.post(
        "/api/login/",
        {
          email: email,
          password: password
        }
      ).then(function (res) {
        setCurrentUser(true);
      });
    });
  }

  function submitLogin(e) {
    e.preventDefault();
    client.post(
      "/api/login/",
      {
        email: email,
        password: password
      }
    ).then(function (res) {
      setCurrentUser(true);
    });
  }

  function submitLogout(e) {
    e.preventDefault();
    client.post(
      "/api/logout/",
      { withCredentials: true }
    ).then(function (res) {
      setCurrentUser(false);
    });
  }

  if (currentUser) {
    return (
      <div>
        <div className="navbar">
          <div className="container">
            <div className="brand">Authentication App</div>
            <div className="logout">
              <form onSubmit={e => submitLogout(e)}>
                <button type="submit">Log out</button>
              </form>
            </div>
          </div>
        </div>
        <div className="center">
          <h2>You're logged in!</h2>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="navbar">
        <div className="container">
          <div className="brand">Authentication App</div>
          <div className="form-btn">
            <button id="form_btn" onClick={update_form_btn}>Register</button>
          </div>
        </div>
      </div>
      {
        registrationToggle ? (
          <div className="center">
            <form onSubmit={e => submitRegistration(e)}>
              <div className="form-group">
                <label>Email address</label>
                <input type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Username</label>
                <input type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        ) : (
          <div className="center">
            <form onSubmit={e => submitLogin(e)}>
              <div className="form-group">
                <label>Email address</label>
                <input type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        )
      }
    </div>
  );
}

export default App;
