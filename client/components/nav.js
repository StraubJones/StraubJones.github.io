const React = require('react');
const Link = require('react-router').Link

class Nav extends React.Component {
  render(){
    return (
      <div>
        <Link to="/">Full-Stack Work</Link>
        <Link to="/frontend">Older Front-End Work</Link>
        <Link to="/humanities">Academic Digital Humanities Work</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
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
