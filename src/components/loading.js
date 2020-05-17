import React from "react"

const Loading = () => {
  return(
      <div>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"><path id="wave" d=""/></svg>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenMax.min.js"></script>
        <script src="js/jquery.wavify.js"></script>
      </div>
  )
}

export default Loading