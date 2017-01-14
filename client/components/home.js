const React = require('react');

class Home extends React.Component {
  render(){
    return (
      <div>
        <figure className="hero">
          <img src="./images/headshot.jpg" />
          <h1>Welcome!</h1>
          <figcaption>I'm Christian Straubhaar-Jones, a full-stack web developer.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </figcaption>
        </figure>
      </div>
    )
  }
}

  module.exports = Home;
