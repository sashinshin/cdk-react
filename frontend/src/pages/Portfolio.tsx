import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import PortfolioItem from '../components/PortfolioItem';


const dreamStream = {
  image: "https://raw.githubusercontent.com/sashinshin/portfolio-website/main/src/index/images/dream-stream.png",
  title: "DreamStream",
  description: "DreamStream is an image sharing social media website created by me, Max Anderberg, Amund Ring and Konstantinos Dimtrakopoulus. It has all the features you would want including making posts, liking them, commenting and more! The app was created using GatsbyJS and the JAM stack. It is hosted on Netlify and uses a CI/CD pipeline. The backend is completely serverless, and instead relies on Netlify's serverless functions that, with the help of GraphQL, connect it to FaunaDB."
}


const Portfolio = () => (
  <>
    <Navbar />
    <main>
      <PortfolioItem
        item={dreamStream}
      />

    </main>
  </>
);

export default Portfolio;
