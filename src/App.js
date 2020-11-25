import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/topics" />
        <Route exact path="/topics/:topicId" />
      </Switch>
    </div>
  );
}

export default App;
