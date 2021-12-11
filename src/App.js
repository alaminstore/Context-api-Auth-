import "./App.css";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <div className="ui container">
      <UserContextProvider>
        <Header />
        <div className="clr"></div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Auth />
      </UserContextProvider>
    </div>
  );
}

export default App;
