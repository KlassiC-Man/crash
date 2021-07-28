import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import firebase from 'firebase';

export function requireAuth(Component) {
  return function ComponentCheck(props) {
    const [check, setCheck] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
      const user = firebase.auth().currentUser;
      setCurrentUser(user);
      setCheck(true);
    }, []);

    const RedirectToLogin = <Redirect to="/" />;

    return check && (currentUser !== null ? <Component {...props} /> : RedirectToLogin);
  };
}
