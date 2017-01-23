const React = require('react');
const d3 = require('../vendor/d3');

class About extends React.Component {
  componentDidMount(){

  }
  render(){
    return (
      <div>
        <figure className="section-header">
          <h1>About Me</h1>
          <figcaption className="center">I have lived across Europe as well as North and South America.
            <br></br>I have examined 650-year-old manuscripts under blacklight to find <a href="https://en.wikipedia.org/wiki/Palimpsest">palimpsests</a>.
            <br></br>I've found my passion, and I'd like to share it with you.
          </figcaption>
        </figure>
        <figure className="bar-graph">
          <svg width="960" height="500"></svg>
        </figure>
      </div>
    )
  }
}

  module.exports = About;
