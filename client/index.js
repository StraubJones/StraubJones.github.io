const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const IndexRoute = require('react-router').IndexRoute;
const browserHistory = require('react-router').browserHistory;
const Nav = require('./components/nav');
const Home = require('./components/home');
const Training = require('./components/training');
const Contact = require('./components/contact');
const Humanities = require('./components/humanities');
const About = require('./components/about');
const Now = require('./components/now');

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={Nav}>
        <IndexRoute component={Home} />
        <Route path="/home" component={Home}/>
        <Route path="/training" component={Training}/>
        <Route path="/humanities" component={Humanities}/>
        <Route path="/now" component={Now}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
      </Route>
  </Router>,
  document.getElementById('app')
);
