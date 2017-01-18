const React = require('react');

class Frontend extends React.Component {
  render(){
    return (
      <div className="frontend">
        <div className="section-header">
          <h1>Front-End</h1>
          <h3>Or my projects from my brief time at The Iron Yard</h3>
          <p>Everything you see here was built in a day or weekend. Days that are missing were usually days that did not produce a visible result (JS exercises, etc.) For more on the differences between The Iron Yard and Hack Reactor (which should make it clear why I, personally, switched) see a few of my blog posts
            <a href="https://medium.com/@christian.straubhaar/hack-reactor-vs-the-iron-yard-part-1-autonomy-and-pacing-e3a5cdb4957#.4a7aywxer"> HERE</a> and
            <a href="https://medium.com/@christian.straubhaar/survival-on-coding-bootcamp-teaching-styles-hack-reactor-vs-iron-yard-pt-2-a9af58b847de#.tseou4d5x"> HERE</a>.
          </p>
          <h2>See me grow from a baby developer to a . . . still pretty basic developer!</h2>
          <h4>My final development to actual viable junior developer can be seen in the full-stack work, completed at Hack Reactor. <br></br> Click the "Full-Stack" link above.</h4>
        </div>
        <div className="project-snapshot">
          <h1>Weekend 3</h1>
          <img src="./images/frontend/battle.png"/>
          <p>Group Project 2: Build a Basic Battle Game</p>
          <a href="http://jcsjtiy20battle.surge.sh">See it live!</a>
        </div>
        <div className="project-snapshot">
          <h1>Day 18</h1>
          <img src="./images/frontend/todo.png"/>
          <p>Super Basic To Do App</p>
          <a href="http://jcsjtiyday18todo.surge.sh">See it live!</a>
        </div>
        <div className="project-snapshot">
          <h1>Day 17</h1>
          <img src="./images/frontend/etsy.png"/>
          <p>Build an Etsy Search Clone</p>
          <a href="http://jcsjday17fakeetsy.surge.sh">See it live!</a>
        </div>
        <div className="project-snapshot">
          <h1>Day 13</h1>
          <img src="./images/frontend/accordion.png"/>
          <p>Build a Basic Accordion Menu</p>
          <a href="http://jcsjtiyday13accordion.surge.sh">See it live!</a>
        </div>
        <div className="project-snapshot">
          <h1>Day 12</h1>
          <img src="./images/frontend/tabs.png"/>
          <p>CSS-Styled Hash-Redirecting Tabs</p>
          <a href="http://jcsjtiyday12tabs.surge.sh">See it live!</a>
        </div>
        <div className="project-snapshot">
          <h1>Weekend 2</h1>
          <img src="./images/frontend/calc.png"/>
          <p>Build a Full Calculator</p>
          <a href="http://jcsjtiycalculator3.surge.sh/">See it live!</a>
        </div>
        <div className="project-snapshot">
          <h1>Day 8</h1>
          <img src="./images/frontend/coercion.png"/>
          <p>JS Coercion Reference Table</p>
          <a href="http://jcsjday8coerciontable.surge.sh">See it live!</a>
        </div>
        <div className="project-snapshot">
          <h1>Day 8</h1>
          <img src="./images/frontend/basiccalc.png"/>
          <p>Build a Super Basic Calculator</p>
          <a href="http://jcsjday8calculator4operators.surge.sh">See it live!</a>
        </div>
        <div className="project-snapshot">
          <h1>Day 7</h1>
          <img src="./images/frontend/bikeshop.png"/>
          <p>Group Project 1: Basic Bike Shop Site</p>
          <a href="http://jcsjday7bikebetter.surge.sh">See it live!</a>
        </div>
        <div className="project-snapshot">
          <h1>Day 6</h1>
          <img src="./images/frontend/responsive.png"/>
          <p>Responsiveness Exercises</p>
          <a href="http://jcsjtiyday6.surge.sh">See it live!</a>
        </div>
        <div className="project-snapshot">
          <h1>Weekend 1</h1>
          <img src="./images/frontend/pixel2.png"/>
          <p>Pixel Perfect Part 2: Full Page (based on image below)</p>
          <a href="http://jcsjtiyweek1weekend.surge.sh/">See it live!</a>
          <img src="./images/frontend/surf-and-paddle.png"/>
        </div>
        <div className="project-snapshot">
          <h1>Day 2</h1>
          <img src="./images/frontend/pixel.png"/>
          <p>Pixel Perfect: Create a Pixel Perfect HTML/CSS Mockup (based on image below)</p>
          <a href="http://jcsjtiyday2try2.surge.sh/">See it live!</a>
          <img src="./images/frontend/octodex.png"/>
        </div>
        <div className="project-snapshot">
          <h1>Day 1 (Epic Mode!)</h1>
          <img src="./images/frontend/bash.png"/>
          <p>Bash Script to Create TIY Daily File Structure</p>
          <a href="https://gist.github.com/StraubJones/be1a77f6d490bec57e7a8a04728414c1">See the gist!</a>
        </div>
        <div className="project-snapshot">
          <h1>Day 1</h1>
          <img src="./images/frontend/basicpage.png"/>
          <p>Super Basic Webpage</p>
          <a href="http://jcsjbasicpage2.surge.sh/index.html">See it live!</a>
        </div>
      </div>
    )
  }
}

  module.exports = Frontend;
