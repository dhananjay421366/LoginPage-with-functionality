import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function Login() {
  const history = useNavigate();

  const [Inprov, setInprov] = useState({
    email: "",
    password: "",
  });
  // submit handler on input tags
  let getDate = (e) => {
    const { value, name } = e.target;
    setInprov(() => {
      return {
        ...Inprov,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    const getUser = localStorage.getItem('user')
    console.log(getUser);

    e.preventDefault();
    const { email, password } = Inprov;
    if (email == "") {
      toast.error("Email field cannot be empty");
    } else if (password == "") {
      toast.error("Password field cannot be empty");
    } else if (password.length < 6) {
      toast.error("Your password should have at least six characters");
    }else {

      if (getUser && getUser.length) {
          const userdata = JSON.parse(getUser);
          const userlogin = userdata.filter((el, k) => {
              return el.email === email && el.password === password
          });

          if (userlogin.length === 0) {
              toast.error("invalid details")
          } else {
              console.log("user login succesfully");

              localStorage.setItem("user_login", JSON.stringify(userlogin))

              history("/home")
          }
      }
  }

  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-center items-center">
        <div className="bg-gray-200 rounded py-16 px-12 m-16 flex flex-col items-center justify-center text-black">
          <img
            className="rounded-full h-32 w-32"
            src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="user avatar"
          />
          <form method="post" className="mt-8 mb-4" onChange={getDate}>
            <div className="mb-4">
              <label htmlFor="userEmail" className="sr-only">
                Email address
              </label>
              <input
                onChange={getDate}
                className="border-solid border border-gray-400 rounded px-2 py-3"
                type="email"
                id="userEmail"
                placeholder="Email address"
                required
                name="email"
              />
            </div>
            <div>
              <label htmlFor="userEmail" className="sr-only">
                Password
              </label>
              <input
                onChange={getDate}
                className="border-solid border border-gray-400 rounded px-2 py-3"
                type="password"
                id="userPass"
                placeholder="Password"
                required
                name="password"
              />
            </div>
            <div className="my-4 flex items-center">
              <input
                className="h-4 w-4 mr-2"
                type="checkbox"
                id="userRemember"
              />
              <label htmlFor="userRemember">Remember me</label>
            </div>
            <Link to="/home">
              <button
                onClick={addData}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold w-full py-3"
                type="submit"
              >
                Login
              </button>
            </Link>
          </form>
          <a href="#" className="self-start">
            Forgot the password?
          </a>
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5598.jpg?size=626&ext=jpg&ga=GA1.1.584240285.1707757657&semt=ais"
            className="h-[500px] w-[500px]"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
