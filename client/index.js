const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const IndexRoute = require('react-router').IndexRoute;
const browserHistory = require('react-router').browserHistory;
const Nav = require('./components/nav');
const Home = require('./components/home');
const Frontend = require('./components/frontend');
const Contact = require('./components/contact');
const Humanities = require('./components/humanities');
const About = require('./components/about');

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={Nav}>
        <IndexRoute component={Home} />
        <Route path="/frontend" component={Frontend}/>
        <Route path="/humanities" component={Humanities}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
      </Route>  
  </Router>,
  document.getElementById('app')
);
