import React, { useState } from "react";
import "./SignUpForm.css";
import { signIn, registerUser } from "../../api/authRequest.js";
import SignUpItem from "./SignUpItem.jsx";
import { register, login } from "../../reducer/authReducer.js";
import { useDispatch } from "react-redux";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    username: "",
    password: "",
    firstname: "",
    surname: "",
  });

  console.log(value);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const signInUser = async (e) => {
    console.log("clicked");
    e.preventDefault();
    try {
      const singnData = await signIn(value);
      dispatch(login({ type: "AUTH_SUCCESS", data: singnData }));

      console.log(singnData);
    } catch (error) {
      console.log("message: ", error);
    }
  };

  const regUser = async (e) => {
    e.preventDefault();

    try {
      if (value.surname == "" || value.firstname == "") {
        return console.log("you need to enter firstname");
      } else {
        const result = await registerUser(value);
        dispatch(register({type: "AUTH_REGISTER", data: result}))
        console.log(result)
      }
    } catch (error) {
      console.log("message: ", error);
    }
  };
  return (
    <div className="sign-container">
      <SignUpItem
        inputChange={handleChange}
        clickSignin={signInUser}
        clickRegis={regUser}
      />
    </div>
  );
};

export default SignUpForm;
