import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./pages/contact";
import Home from "./pages/home";
import About from "./pages/about";
import Course from "./components/course/course";

function App() {
  return (
    <>
      <Router basename="/courses">
        <main className="container content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/:courseId" component={Course} />
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
