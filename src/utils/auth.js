/**
 *
 * Authentication + session helper
 */
import User from "../model/User";

/**
 * check if a user is authenticated
 */
export const isAuthenticated = () => {
  if (localStorage.getItem("isLoggedIn") === "true") {
    return true;
  }
  return false;
};

/**
 * Gets user info from localStorage
 */
export const getUserInfo = () => {
  return new User(
    localStorage.getItem("studentID"),
    localStorage.getItem("firstname"),
    localStorage.getItem("lastname"),
    localStorage.getItem("isLoggedIn")
  );
};

/**
 * Destroys all contents of localStorage
 */
export const destroySession = () => {
  localStorage.clear();
};
