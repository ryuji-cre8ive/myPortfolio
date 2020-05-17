import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = (props) => {
  const navItems = ["Home" ,"AboutMe", "Skills", "Works"];
  //普段の振る舞い
  const LinkStyles = {
    background: '#e6beae',
    color: "black",
    fontWeight: "normal"
  }

  const ActiveStyles = {
    background: "white",
    color: "#e6beae",
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
  );
}

export default Header;