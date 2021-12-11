import { createContext, useState, useContext } from "react";

export const userContext = createContext({
  //define initial values
  user: null,
  logIn: () => {},
  logOut: () => {},
});
const USER = { name: "Guest", isGuestUser: true };

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(USER);
  function logIn(username) {
    setUser({ name: username, isGuestUser: false });
  }
  function logOut() {
    setUser(USER);
  }
  return (
    <userContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </userContext.Provider>
  );
}

export function useUserContext() {
  const { user, logIn, logOut } = useContext(userContext);
  return { user, logIn, logOut };
}
