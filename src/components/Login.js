import React, { useState } from "react";
import "./login.css";
import { auth, db } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
function Login() {
  const [register, setRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Name, Email, and Password is required");
      return;
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: name,
          photoURL: photoUrl,
        });
      })
      .then((userAuth) => {
        dispatch(
          login({
            email: email,
            uid: auth.currentUser.uid,
            displayName: name,
            photoURL: photoUrl,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Name, Email, and Password is required");
      return;
    }
    auth.signInWithEmailAndPassword(email, password).then(() => {
      dispatch(
        login({
          email: auth.currentUser.email,
          uid: auth.currentUser.uid,
          displayName: auth.currentUser.displayName,
          photoURL: auth.currentUser.photoURL,
        })
      );
    });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
          alt=""
        />
        {register ? (
          <div className="container">
            <form>
              <input
                required
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Photo url (Optional)"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
              <input
                required
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                required
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" onClick={handleRegister}>
                Register
              </button>
            </form>
            <p>
              Already have an account?{" "}
              <span onClick={() => setRegister(false)}>Sign in</span>
            </p>
          </div>
        ) : (
          <div className="container">
            <form>
              <input
                required
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                required
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" onClick={handleSignIn}>
                Sign In
              </button>
            </form>
            <p>
              Not a member?{" "}
              <span onClick={() => setRegister(true)}>Register now</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
