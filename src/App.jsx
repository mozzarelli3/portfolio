import './App.css'

function App() {

  return (
    <>
    <div className="header">
      <a href="#project-section" target="_blank">Projects</a>
      <a href="https://github.com/mozzarelli3" target="_blank">GitHub</a>
      <a href="https:www.linkedin.com/in/ellierparry" target="_blank">LinkedIn</a>
      <a href="#" target="_blank">CV</a>
    </div>

    <div className="hero">
      <h1 id="name">Ellie Parry</h1>
      <h2 id="job-title">FRONT-END DEVELOPER</h2>
    </div>

    <div className="projects" id="project-section">
      <h2>Projects</h2>

      <div className="eateasy">
        <h3>EAT EASY</h3>
        <div className="project-description-container">
          <a href="https://www.figma.com/design/JbN55BWDV7JjNcmsXe0qWE/Eat-Easy?node-id=0-1&t=nImK6EPfvlEnFVAm-1">
            <img src="src/assets/figma-design.png"/>
          </a>
          <span>
            <p className="project-description">A website allowing users to search for restaurants and eateries near them that suit their dietary requirements.
              <br></br>Built using React.js.
              <br></br>Designed using Figma. Click on the image to see the full design file.
            </p>
          </span>
        </div>
      </div>

      <div className="fireplace-palace">
        <h3>FIREPLACE PALACE</h3>
        <div className="project-description-container">
          <a href="#">
            <img src="x"/>
          </a>
          <span>
            <p className="project-description">DESCRIPTION HERE.
              <br></br>Built using React.js.
            </p>
          </span>
        </div>
      </div>

      <div className="film-wizard">
        <h3>FILM-WIZARD AI CHATBOT</h3>
        <div className="project-description-container">
          <a href="#">
            <img src="x"/>
          </a>
          <span>
            <p className="project-description">DESCRIPTION HERE.
              <br></br>Built using React.js.
            </p>
          </span>
        </div>
      </div>

      <div className="weather-finder">
        <h3>WEATHER FINDER</h3>
        <div className="project-description-container">
          <a href="#">
            <img src="x"/>
          </a>
          <span>
            <p className="project-description">DESCRIPTION HERE.
              <br></br>Built using React.js.
            </p>
          </span>
        </div>
      </div>

    </div>
    
    <div className="toolbox">
      <h2>Toolbox</h2>
    </div>

    <div className="about-me">
      <h2>About Me</h2>
    </div>

    <div className="contact">
      <h2>Contact</h2>
    </div>
    </>
  )
}

export default App
