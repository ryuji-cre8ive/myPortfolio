import React from "react"
// import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"

const Works = () => {
  return(
    <Layout>
      <div className="videos">
        <h1> - Videoes - </h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/I2uW19P-hf0"
        frameborder="0" allow="accelerometer; autoplay; encrypted-media;
        gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe class="You" width="560" height="315" src="https://www.youtube.com/embed/Fx4RtOvHVE8" 
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; 
        gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe class="You" width="560" height="315" src="https://www.youtube.com/embed/XB--dzYFAmE" 
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; 
        gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe class="You" width="560" height="315" src="https://www.youtube.com/embed/a6oQ8-ljO1M" 
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; 
        gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </Layout>
  );
}

export default Works;