const NavBar = () => {
  return (
    <header>
      <nav class="navbar navbar-fixed-top ">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
              <li class="active"><a href="#main">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#jobs">Work</a></li>
              <li><a href="#study">Study</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar