import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../actions/AuthAction";

// const Auth = () => {

//   const initialState = {
//     firstname: "",
//     lastname: "",
//     username: "",
//     password: "",
//     confirmpass: "",
//   };
//   const loading = useSelector((state) => state.authReducer.loading);
//   // const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [isSignUp, setIsSignUp] = useState(false);

//   const [data, setData] = useState(initialState);

//   const [confirmPass, setConfirmPass] = useState(true);

//   // const dispatch = useDispatch()

//   // Reset Form
//   const resetForm = () => {
//     setData(initialState);
//     setConfirmPass(true);
//   };

//   // handle Change in input
//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   // Form Submission
//   const handleSubmit = (e) => {
//     setConfirmPass(true);
//     e.preventDefault();
//     if (isSignUp) {
//       data.password === data.confirmpass
//         ? dispatch(signUp(data))
//         : setConfirmPass(false);
//     } else {
//       dispatch(logIn(data));
//     }
//   };

//   return (

//     // Left Side
//     <div className="Auth">
//       <div className="a-left">
//         <img src={Logo} alt="" />
//         <div className="Webname">
//           <h1>Social App</h1>
//           <h6>Explore the ideas throughout the world</h6>
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className="a-right">
//       <form className="infoForm authForm" onSubmit={handleSubmit}>
//         <h3>{isSignUp?"Sign Up":"Log In"}</h3>

//         {isSignUp && (
//             <div>
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 className="infoInput"
//                 name="firstname"
//                 onChange={handleChange}
//                 value={data.firstname}
//               />
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 className="infoInput"
//                 name="lastname"
//                 onChange={handleChange}
//                 value={data.lastname}
                
//               />
//             </div>
//         )}

//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             name="username"
//             placeholder="Username"
//             onChange={handleChange}
//             value={data.username}
//           />
//         </div>

//         <div>
//           <input
//             type="password"
//             className="infoInput"
//             name="password"
//             placeholder="Password"
//             onChange={handleChange}
//             value={data.password}
//           />
//           {isSignUp && 
//             <input
//               type="password"
//               className="infoInput"
//               name="confirmpass"
//               placeholder="Confirm Password"
//               onChange={handleChange}
//               value={data.confirmpass}

//             />
//           }
//         </div>

//         <span
//             style={{
//               color: "red",
//               fontSize: "12px",
//               alignSelf: "flex-end",
//               marginRight: "5px",
//               display: confirmPass ? "none" : "block",
//             }}
//           >
//             *Confirm password is not same
//           </span>

//         <div>
//             <span style={{
//             fontSize: '12px',
//             cursor: "pointer"
//             }}
//             onClick={() => {
//                 resetForm();
//                 setIsSignUp((prev) => !prev);
//               }}
//             >
//             {isSignUp
//                 ? "Already have an account? Login!"
//                 : "Don't have an account? Please Sign up!"}
//             </span>
//         </div>
//         <button
//               className="button infoButton"
//               type="Submit"
//               // disabled={loading}
//             >
//               {isSignUp ? "SignUp" : "Login"}
//             </button>
//       </form>
//     </div>

      
//     </div>
//   );
// };



// export default Auth;



const Auth = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  };
  const loading = useSelector((state) => state.authReducer.loading);
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);

  const [data, setData] = useState(initialState);

  const [confirmPass, setConfirmPass] = useState(true);

  // const dispatch = useDispatch()

  // Reset Form
  const resetForm = () => {
    setData(initialState);
    setConfirmPass(confirmPass);
  };

  // handle Change in input
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Form Submission
  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data));
    }
  };

  return (
    <div className="Auth">
      {/* left side */}

      <div className="a-left">
        <img src={Logo} alt="" />

        <div className="Webname">
          <h1>Social App</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      {/* right form side */}

      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Register" : "Login"}</h3>
          {isSignUp && (
            <div>
              <input
                required
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                value={data.firstname}
                onChange={handleChange}
              />
              <input
                required
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                value={data.lastname}
                onChange={handleChange}
              />
            </div>
          )}

          <div>
            <input
              required
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              required
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            {isSignUp && (
              <input
                required
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            )}
          </div>

          <span
            style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",
            }}
          >
            *Confirm password is not same
          </span>
          <div>
            <span
              style={{
                fontSize: "12px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                resetForm();
                setIsSignUp((prev) => !prev);
              }}
            >
              {isSignUp
                ? "Already have an account. Login!"
                : "Don't have an account. Sign up!"}
            </span>
            <button
              className="button infoButton"
              type="Submit"
              disabled={loading}
            >
              {loading ? "Loading..." : isSignUp ? "SignUp" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
