import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./login.css";
import fblogo from "../../images/icons/fb.png";
import gglogo from "../../images/icons/google.png";
import { AuthContext } from "../../Contexts/Context";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { sininCurrentUser, googleLogin, setLoading , facebookLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    sininCurrentUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error(
            "Your email is not verified. Please verify your email address."
          );
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  const handleFacebookLogin = () => {
    facebookLogin()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div className="container py-5">
      <div className="mainLoginDiv">
        <div className="loginDiv">
          <h4>Login</h4>

          <Toaster position="top-center" reverseOrder={false} />

          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" name="email" />
            <br />
            <br />

            <input type="password" placeholder="Password" name="password" />
            <div className="text-center mt-3 mb-3 okks">
              <Link>Forgot Password</Link>
            </div>
            <input className="loginButton" type="submit" value="Login" />
          </form>

          <p className="text-center rhds">
            Dont Have an Account ? <Link to="/singup">Create an Account</Link>
          </p>
          <p className="text-center mt-4 h5">or</p>
          <button className="sclButton" onClick={handleFacebookLogin}>
            <img src={fblogo} alt="" className="logoImges" /> Coutinue with
            Facebook
          </button>
          <button className="sclButton" onClick={handleGoogleLogin}>
            <img src={gglogo} alt="" className="logoImges" /> Coutinue with
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
