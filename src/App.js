import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Navigation from './components/nav';
import Footer from './components/footer';
import Portfolio from './pages/portfolio';
import Services from './pages/services';

function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/services" exact component={Services} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
