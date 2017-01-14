const React = require('react');
const Link = require('react-router').Link

class Nav extends React.Component {
  render(){
    return (
      <div className="nav">
        <img className="monogram" src="./images/Monogram.png"/>
        <Link className="nav-last" to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/humanities">DH</Link>
        <Link to="/frontend">Front-End</Link>
        <Link to="/">Full-Stack</Link>
      </div>
    )
  }
};

const Container = (props) =>
  <div>
    <Nav />
    {props.children}
  </div>


module.exports = Container;
