import React from "react";
import { Link, json, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function Singup() {
  const navigate = useNavigate();
  const [Inprov, setInprov] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  // console.log(Inprov);
  // data was get from the inputs types
  let getDate = (e) => {
    const { value, name } = e.target;

    setInprov(() => {
      return {
        ...Inprov,
        [name]: value,
      };
    });
  };
  // data was added
  const [data, setdata] = useState([]);
  const addData = (e) => {
    e.preventDefault();
    const { name, email, password, confirm_password } = Inprov;
    if (name === "") {
      toast.error("Please enter all fields");
    } else if (password !== confirm_password) {
      toast.error("Password and Confirm Password must be the same");
    } else if (!email.includes("@")) {
      toast.error("plz enter a valid Email");
    } else if (email === "") {
      toast.error("Email field cannot be empty");
    } else if (password === "") {
      toast.error("Please enter all fields");
    } else if (password.length < 6) {
      toast.error("Your password should have at least six characters");
    } else {
      toast.success("Account is created Sucessfully");
      navigate("/login");
      localStorage.setItem("user", JSON.stringify([...data, Inprov]));
    }
  };
  return (
    <>
      {" "}
      <Toaster position="top-center" reverseOrder={false} />
      <div className="md:flex md:justify-center gap-10 md:items-center">
        <div className="bg-grey-lighter min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Sign up</h1>
              <input
                onChange={getDate}
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="name"
                placeholder="Full Name"
              />

              <input
                onChange={getDate}
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
              />

              <input
                onChange={getDate}
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
              />
              <input
                onChange={getDate}
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="confirm_password"
                placeholder="Confirm Password"
              />

              <Link to="/login">
                {" "}
                <button
                  onClick={addData}
                  type="submit"
                  className="w-full text-center py-3 rounded bg-green text-black bg-gray-700 hover:bg-green-dark 
                  
                  cus:outline-none my-1"
                >
                  Create Account
                </button>
              </Link>

              <div className="text-center text-sm text-grey-dark mt-4">
                By signing up, you agree to the
                <a
                  className="no-underline border-b border-grey-dark text-grey-dark"
                  href="#"
                >
                  Terms of Service
                </a>{" "}
                and
                <a
                  className="no-underline border-b border-grey-dark text-grey-dark"
                  href="#"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            <div className="text-grey-dark mt-6">
              Already have an account?
              <Link
                className="no-underline border-b border-blue text-blue"
                to="/login"
              >
                Log in
              </Link>
              .
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://img.freepik.com/premium-vector/online-registration-sign-up-concept-with-woman-character_268404-99.jpg?w=1060"
            className="h-[500px] w-[500px]"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
