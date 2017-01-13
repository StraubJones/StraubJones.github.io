const React = require('react');
const Link = require('react-router').Link

class Nav extends React.Component {
  render(){
    return (
      <div className="nav">
        <img className="monogram" src="./images/Monogram.png"/>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/humanities">DH</Link>
        <Link to="/frontend">Front-End</Link>
        <Link className="nav-first" to="/">Full-Stack</Link>
      </div>
    )
  }
};

const Container = (props) =>
  <div>
    <Nav />
    <div>
      {props.children}
    </div>
  </div>


module.exports = Container;
