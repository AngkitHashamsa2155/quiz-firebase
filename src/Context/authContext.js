import React, { useContext, useState } from "react";
import { db, auth } from "../firebase.config";
import { setDoc, doc, Timestamp } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [formInput, setFontInput] = useState({
    email: "",
    password: "",
    userName: "",
  });
  const [isHiddenPass, setIsHiddenPass] = useState(true);

  const [isError, setError] = useState({ status: false, msg: "" });

  const [isLoading, setLoading] = useState(false);

  const handleFormInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setFontInput({ ...formInput, [name]: value });
  };

  const handleSingUp = async (e) => {
    e.preventDefault();

    try {
      if (formInput.email && formInput.password) {
        setLoading(true);
        await createUserWithEmailAndPassword(
          auth,
          formInput.email,
          formInput.password
        ).then((res) => {
          console.log(res);
          localStorage.setItem("Auth Token", res._tokenResponse.refreshToken);
          localStorage.setItem("UserId", res.user.uid);
          setFontInput({ email: "", password: "", userName: "" });
          setLoading(false);
          navigate("/");
        });
      }
    } catch (err) {
      setLoading(false);
      if (err.code === "auth/email-already-in-use") {
        setError({
          status: true,
          msg: "email-already-in-use",
        });
      }
      if (err.code === "auth/weak-password") {
        setError({
          status: true,
          msg: "auth/weak-password",
        });
      }
    }
  };
  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      if (formInput.email && formInput.password) {
        setLoading(true);
        await signInWithEmailAndPassword(
          auth,
          formInput.email,
          formInput.password
        ).then((res) => {
          console.log(res);
          localStorage.setItem("Auth Token", res._tokenResponse.refreshToken);
          localStorage.setItem("UserId", res.user.uid);
          setFontInput({ email: "", password: "" });
          setLoading(false);
          navigate("/");
        });
      }
    } catch (err) {
      setLoading(false);
      console.log(err.code);
      if (err.code === "auth/invalid-email") {
        setError({ status: true, msg: "invalid user" });
      }
      if (err.code === "auth/wrong-password") {
        setError({ status: true, msg: "invalid password" });
      }
      if (err.code === "auth/user-not-found") {
        setError({
          status: true,
          msg: "auth/user-not-found",
        });
      }
    }
  };

  const handleLogOut = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      localStorage.clear();
      setLoading(false);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        formInput,
        handleFormInput,
        isHiddenPass,
        setIsHiddenPass,
        handleSingUp,
        handleLogIn,
        isError,
        isLoading,
        setError,
        handleLogOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthProvider = () => {
  return useContext(AuthContext);
};
