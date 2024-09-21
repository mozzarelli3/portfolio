import './App.css'

function App() {

  return (
    <>
    <div className="header">
      <a href="#">Projects</a>
      <a href="#">GitHub</a>
      <a href="#">LinkedIn</a>
      <a href="#">CV</a>
    </div>

    <div className="hero">
      <h1 id="name">Ellie Parry</h1>
      <h2 id="job-title">FRONT-END DEVELOPER</h2>
    </div>

    <div className="projects">
      <h2>Projects</h2>
      <div className="eatEasy">
        <h3>eatEasy</h3>
      </div>
      <div className="fireplace-palace">
        <h3>Fireplace Palace</h3>
      </div>
      <div className="film-wizard">
        <h3>FilmWizard AI Chat Bot</h3>
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
