const React = require('react');
const d3 = require('../vendor/d3.min.js');

class About extends React.Component {
  componentDidMount(){
    //ideas: http://bl.ocks.org/mbostock/3885304
    //more ideas (stretch goal): http://bl.ocks.org/mbostock/3885705

    var WIDTH = 800;

    var HEIGHT = 500;

    var vis = d3.select('.bar')
      .append('svg')
      .attr('width', WIDTH)
      .attr('height', HEIGHT);


  }
  render(){
    return (
      <div className="main">
        <figure className="section-header">
          <h1>About Me</h1>
          <figcaption className="center">I have lived across Europe, North and South America.
            <br></br>I have examined 650-year-old manuscripts under blacklight to find <a href="https://en.wikipedia.org/wiki/Palimpsest">palimpsests</a>.
            <br></br>I've found my passion in software development. I'd like to share it with you.
          </figcaption>
        </figure>
        <figure className="bar-graph">

        </figure>
      </div>
    )
  }
}

  module.exports = About;
