const React = require('react');

class Frontend extends React.Component {
  render(){
    return (
      <div className="frontend">
        <figure className="section-header">
          <h1 className="long-title">My Earliest Development Projects</h1>
          <figcaption>Everything you see here was built by myself in a day or weekend and hosted on Surge.sh, as part of The Iron Yard Front-End Engineering curriculum. The two group projects are labeled as such, but everything else, flaws and all, is entirely mine. Days that are missing were usually days that did not produce a visible result, such as JS exercises, etc. For more on the differences between The Iron Yard and Hack Reactor, and why I switched, see a few of my blog posts
            <a href="https://medium.com/@christian.straubhaar/hack-reactor-vs-the-iron-yard-part-1-autonomy-and-pacing-e3a5cdb4957#.4a7aywxer"> HERE</a> and
            <a href="https://medium.com/@christian.straubhaar/survival-on-coding-bootcamp-teaching-styles-hack-reactor-vs-iron-yard-pt-2-a9af58b847de#.tseou4d5x"> HERE</a>.
          </figcaption>
          <img src="./images/frontend/evolution.svg"/>
          <h2>See me grow from a complete newcomer to a basic developer!</h2>
          <h4>My final development can be seen in my full-stack work, completed at Hack Reactor. <br></br> Click the "Full-Stack" link above.</h4>
          <h3><i className="fa fa-3x fa-caret-down"></i></h3>
        </figure>
        <figure className="project-snapshot">
          <h1>Weekend 3</h1>
          <img src="./images/frontend/battle.png"/>
          <p className="frontend-p">Group Project 2: Build a Basic Battle Game</p>
          <a href="http://jcsjtiy20battle.surge.sh">SEE IT LIVE</a>
        </figure>
        <figure className="project-snapshot">
          <h1>Day 18</h1>
          <img src="./images/frontend/todo.png"/>
          <p className="frontend-p">Super Basic To Do App</p>
          <a href="http://jcsjtiyday18todo.surge.sh">SEE IT LIVE</a>
        </figure>
        <figure className="project-snapshot">
          <h1>Day 17</h1>
          <img src="./images/frontend/etsy.png"/>
          <p className="frontend-p">Build an Etsy Search Clone</p>
          <a href="http://jcsjday17fakeetsy.surge.sh">SEE IT LIVE</a>
        </figure>
        <figure className="project-snapshot">
          <h1>Day 13</h1>
          <img src="./images/frontend/accordion.png"/>
          <p className="frontend-p">Build a Basic Accordion Menu</p>
          <a href="http://jcsjtiyday13accordion.surge.sh">SEE IT LIVE</a>
        </figure>
        <figure className="project-snapshot">
          <h1>Day 12</h1>
          <img src="./images/frontend/tabs.png"/>
          <p className="frontend-p">CSS-Styled Hash-Redirecting Tabs</p>
          <a href="http://jcsjtiyday12tabs.surge.sh">SEE IT LIVE</a>
        </figure>
        <figure className="project-snapshot">
          <h1>Weekend 2</h1>
          <img src="./images/frontend/calc.png"/>
          <p className="frontend-p">Build a Full Calculator</p>
          <a href="http://jcsjtiycalculator3.surge.sh/">SEE IT LIVE</a>
        </figure>
        <figure className="project-snapshot">
          <h1>Day 8</h1>
          <img src="./images/frontend/coercion.png"/>
          <p className="frontend-p">JS Coercion Reference Table</p>
          <a href="http://jcsjday8coerciontable.surge.sh">SEE IT LIVE</a>
        </figure>
        <figure className="project-snapshot">
          <h1>Day 8</h1>
          <img src="./images/frontend/basiccalc.png"/>
          <p className="frontend-p">Build a Super Basic Calculator</p>
          <a href="http://jcsjday8calculator4operators.surge.sh">SEE IT LIVE</a>
        </figure>
        <figure className="project-snapshot">
          <h1>Day 7</h1>
          <img src="./images/frontend/bikeshop.png"/>
          <p className="frontend-p">Group Project 1: Basic Bike Shop Site</p>
          <a href="http://jcsjday7bikebetter.surge.sh">SEE IT LIVE</a>
        </figure>
        <figure className="project-snapshot">
          <h1>Day 6</h1>
          <img src="./images/frontend/responsive.png"/>
          <p className="frontend-p">Responsiveness Exercises</p>
          <a href="http://jcsjtiyday6.surge.sh">SEE IT LIVE</a>
        </figure>
        <figure className="project-snapshot">
          <h1>Weekend 1</h1>
          <img src="./images/frontend/pixel2.png"/>
          <p className="frontend-p">Pixel Perfect Part 2: Full Page (based on image below)</p>
          <a href="http://jcsjtiyweek1weekend.surge.sh/">SEE IT LIVE</a>
          <img src="./images/frontend/surf-and-paddle.png"/>
        </figure>
        <figure className="project-snapshot">
          <h1>Day 2</h1>
          <img src="./images/frontend/pixel.png"/>
          <p className="frontend-p">Pixel Perfect: Create a Pixel Perfect HTML/CSS Mockup (based on image below)</p>
          <a href="http://jcsjtiyday2try2.surge.sh/">SEE IT LIVE</a>
          <img src="./images/frontend/octodex.png"/>
        </figure>
        <figure className="project-snapshot">
          <h1>Day 1 (Epic Mode!)</h1>
          <img src="./images/frontend/bash.png"/>
          <p className="frontend-p">Bash Script to Create TIY Daily File Structure</p>
          <a href="https://gist.github.com/StraubJones/be1a77f6d490bec57e7a8a04728414c1">SEE THE GIST</a>
        </figure>
        <figure className="project-snapshot">
          <h1>Day 1</h1>
          <img src="./images/frontend/basicpage.png"/>
          <p className="frontend-p">Super Basic Webpage</p>
          <a href="http://jcsjbasicpage2.surge.sh/index.html">SEE IT LIVE</a>
          <h1>Compare this <i className="fa fa-2x fa-arrow-up"></i> with the website you're on.<br></br>
          Look how far it's come!</h1>
        </figure>
      </div>
    )
  }
}

  module.exports = Frontend;
