const React = require('react');

class About extends React.Component {
  render(){
    return (
      <div>
        <figure className="section-header">
          <h1>About Me</h1>
          <figcaption className="center">I have lived across Europe as well as North and South America.
            <br></br>I have examined 650-year-old manuscripts under blacklight to find <a href="https://en.wikipedia.org/wiki/Palimpsest">palimpsests</a>.
            <br></br>I have found my passion, and I'd like to share it with you.
          </figcaption>
          <h3><i className="fa fa-3x fa-caret-down"></i></h3>
        </figure>

      </div>
    )
  }
}

  module.exports = About;
