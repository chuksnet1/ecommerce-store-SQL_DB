import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpItem = ({ inputChange, clickSignin, clickRegis }) => {
  const [change, setChange] = useState(false);
  const changeSign = () => {
    setChange((prev) => !prev);
  };

  //  change = boolChange;
  const showReg = () => {
    console.log("register");
  };
  const showSign = () => {
    console.log("signin");
  };
  console.log(change);
  return (
    <div className="form-container">
      <Link to={"/home"}>
        <h2>{change ? "Registeration Form" : "SignIn Form"}</h2>
      </Link>

      <form>
        {change && (
          <div className="reg-container">
            <div>
              <input
                onChange={inputChange}
                name="firstname"
                placeholder="firstname"
                required
              />
              <input
                onChange={inputChange}
                name="surname"
                placeholder="surname"
                required
              />
            </div>
          </div>
        )}
        <input
          onChange={inputChange}
          name="username"
          type="email"
          required
          placeholder="Enter username"
        />
        <input
          onChange={inputChange}
          name="password"
          type="password"
          required
          placeholder="Enter password"
        />
        <button
          style={
            !change ? { visibility: "hidden" } : { visibility: "visible" }
          }
          onClick={clickRegis}
        >
          {" "}
          {change ? "Register" : "Login"}
          Register
        </button>

        <button
          style={
            change ? { visibility: "hidden" } : { visibility: "visible" }
          }
         onClick={clickSignin}
        >
          {" "}
          {change ? "Register" : "Login"}
          Login
        </button>
      </form>
      <p>
        <span style={{ color: "blue" }} onClick={changeSign}>
          {change
            ? "Existing customer? Singin here !!"
            : "Are you new? Register here"}
        </span>
      </p>
    </div>
  );
};

export default SignUpItem;
