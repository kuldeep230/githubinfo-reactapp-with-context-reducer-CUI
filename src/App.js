import { Switch, Route } from "react-router-dom";

import "./App.css";
//All Components..
import About from "./Components/Layout/About";
import Contact from "./Components/Layout/Contact";
import GithubState from "./Context/GithubContext/GithubState";
import Navbar from "./Components/Layout/Navbar";
import Profile from "./Components/Users/Profile";
import Users from "./Components/Users/Users";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-red-500 px-4 sm:px-6 lg:px-16    hover:from-pink-700 hover:to-yellow-400 ">
      <GithubState>
        <div>
          <Switch>
            <Route exact path="/">
              <Navbar title="GitHubInfo" icon="fab fa-github" />
              <Users />
            </Route>
            <Route exact path="/about">
              <Navbar title="GitHubInfo" icon="fab fa-github" />
              <About />
            </Route>
            <Route exact path="/contact">
              <Navbar title="GitHubInfo" icon="fab fa-github" />
              <Contact />
            </Route>
            <Route
              exact
              path="/user/:userId"
              render={(props) => <Profile {...props} />}
            />
          </Switch>
        </div>
      </GithubState>
    </div>
  );
};
export default App;
