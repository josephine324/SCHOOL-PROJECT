import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, set currentUser
        setCurrentUser(user);
        // Generate and store token in localStorage
        user.getIdToken().then((token) => {
          localStorage.setItem("token", token);
        });
      } else {
        // User is signed out, clear currentUser and token
        setCurrentUser(null);
        localStorage.removeItem("token");
        // Redirect to login page
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const logout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return { currentUser, logout };
};
