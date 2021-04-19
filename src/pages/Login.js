import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { loginUser } from "../core/api/auth";
import AppContext from "../core/context/appContext";
import { emailValidator, passwordValidator } from "../core/utils";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: { value: "", error: "" },
    password: { value: "", error: "" },
  });
  const [error, setError] = useState();
  const state = useContext(AppContext);
  const { loggedIn } = state;
  const history = useHistory();

  useEffect(() => {
    if (loggedIn === true) {
      history.push("/dashboard");
    }
  }, [history, loggedIn]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const emailError = emailValidator(loginData.email.value);
    const passwordError = passwordValidator(loginData.password.value);

    if (emailError || passwordError) {
      setLoginData((prevState) => {
        return {
          ...prevState,
          ...loginData.email,
          ...loginData.password,
          error: emailError || passwordError,
        };
      });
    }

    const response = await loginUser({
      email: loginData.email.value,
      password: loginData.password.value,
    });

    if (response.error) {
      setError(response.error);
    } else {
      history.push("/dashboard");
    }
  };

  const clearInputs = () => {
    setLoginData({
      email: { value: "", error: "" },
      password: { value: "", error: "" },
    });
    setTimeout(() => setError(null), 500);
  };

  if (
    error &&
    loginData.email.value !== "" &&
    loginData.password.value !== ""
  ) {
    clearInputs();
  }

  return (
    <div>
      <h1>Login</h1>
      <form action="submit" className="contactForm">
        <div className="contactInput">
          <label>
            Email
            <input
              type="text"
              id="email"
              value={loginData.email.value}
              onChange={(e) =>
                setLoginData((prevState) => {
                  return {
                    ...prevState,
                    email: {
                      ...loginData.email,
                      value: e.target.value,
                    },
                  };
                })
              }
            />
          </label>
          <label>
            Password
            <input
              type="password"
              id="email"
              value={loginData.password.value}
              onChange={(e) =>
                setLoginData((prevState) => {
                  return {
                    ...prevState,
                    password: {
                      ...loginData.password,
                      value: e.target.value,
                    },
                  };
                })
              }
            />
          </label>
        </div>

        <button type="submit" onClick={(e) => handleLogin(e)}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
