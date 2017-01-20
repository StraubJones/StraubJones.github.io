const React = require('react');

class Frontend extends React.Component {
  render(){
    return (
      <div className="frontend">
        <figure className="section-header">
          <h1>Weekend Front-End Projects</h1>
          <figcaption>These projects were built in a weekend and hosted on Surge.sh, an easy deployment CLI for static front-end pages. The first is a group project with two other engineers, and the second is just mine.
          </figcaption>
          <h3><i className="fa fa-3x fa-caret-down"></i></h3>
        </figure>
        <figure className="project-snapshot">
          <h1>Feelings Fight</h1>
          <img src="./images/frontend/battle.png"/>
          <p className="frontend-p">Group Project: Build a Basic Battle Game</p>
          <a href="http://jcsjtiy20battle.surge.sh">SEE IT LIVE</a>
          <a href="https://github.com/StraubJones/Weekend4BattleGroup">PERUSE THE CODE</a>
        </figure>
        <figure className="project-snapshot">
          <h1>Calculator</h1>
          <img src="./images/frontend/calc.png"/>
          <p className="frontend-p">Solo Project: Build a Full Calculator</p>
          <a href="http://jcsjtiycalculator3.surge.sh/">SEE IT LIVE</a>
          <a href="https://github.com/StraubJones/Weekend2FancyCalculator">PERUSE THE CODE</a>
        </figure>
      </div>
    )
  }
}

  module.exports = Frontend;
