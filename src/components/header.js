import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = (props) => {
  const navItems = ["Home" ,"AboutMe", "Skills", "Works"];
  //普段の振る舞い
  const LinkStyles = {
    background: '#915b4a',
    color: "black",
    fontWeight: "normal"
  }

  const ActiveStyles = {
    background: "white",
    color: "#915b4a",
    fontWeight: "bold"
  }

  const NavMenuLiTag = navItems.map((item) => {
    let page_link = "";
    if (item === "Home") {
      page_link = "/";
    } else {
      page_link = "/" + item.toLowerCase() + "/";
    }

    return (
      <li key={page_link}>
        <Link to={page_link} style={LinkStyles}
            activeStyle={ActiveStyles}
            className="page-link">
            {item}
        </Link>
      </li>
    )
  })

  return(
    <div className="asHead">
      <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0"></meta>
      <div className="pc">
        <header className="App-header">
          <nav className="App-navbar">
            <h2 className="App-logo"><Link to="/" style={{color: "white"}}>Ryuji's Portfolio</Link></h2>
            <div className="App-navbar-item">
              <ul>
                {NavMenuLiTag}
              </ul>
            </div>
          </nav>
        </header>
      </div>
      
      <div className="phone">
        <header className="App-header">
          <nav className="App-navbar">
            <h2 className="App-logo"><Link to="/" style={{color: "white"}}>Ryuji's Portfolio</Link></h2>
            <div className="App-navbar-item">
              <input id="nav-input" type="checkbox" class="nav-unshown"></input>
              <label id="nav-open" for="nav-input"><span></span></label>
              <label class="nav-unshown" id="nav-close" for="nav-input"></label>
              <div id="nav-content">
                <ul>
                {NavMenuLiTag}
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
    
  );
}

export default Header;