const React = require('react');
const Link = require('react-router').Link

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Hello!</h1>
        <ul className='nav'>
          <li><Link to="/"/>Full-Stack Work</li>
          <li><Link to="/frontend"/>Older Front-End Work</li>
          <li><Link to="/humanities"/>Academic Digital Humanities Work</li>
          <li><Link to="/about"/>About</li>
          <li><Link to="/contact"/>Contact</li>
        </ul>
      </div>
    )
  }
};

module.exports = App;
