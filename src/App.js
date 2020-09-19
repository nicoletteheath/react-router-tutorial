import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";

function App() {
    return (
        <Router>
            <div>
                <Nav />

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                
                    <Route path="/contact">
                        <Contact />
                    </Route>

                    <Route path="/">
                    <Home />
                </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;