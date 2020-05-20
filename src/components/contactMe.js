import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

const contactMe = () => {
  return(
    <div className="contactMe">
      <p>Contact me</p>
      <div className="icons">
        <a href="https://twitter.com/ryuji_vlog" target="_brank" className="twitter"><FontAwesomeIcon icon={faTwitter} style={{width: 30, height: 30}} /></a>
        <a href="https://github.com/ryuji-cre8ive" target="_brank" className="github"><FontAwesomeIcon icon={faGithub} style={{width: 30, height: 30}}/></a>
      </div>
    </div>
      
  )
}

export default contactMe