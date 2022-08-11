
import React from 'react';
interface Props {
    item: {
        image: string
        title: string
        description: string
    }
}

const PortfolioItem = ({ item }: Props) => (
    <article className="section project">

        <a href="https://dream-stream.netlify.app/" target="_blank"><img className="demo_image" src={item.image} alt="DreamStream screenshot" /></a>
        <div className="project__description">
            <h3> {item.title} </h3>
            <p> {item.description} </p>
            <a href="https://github.com/Mob-the-Builders/dream-stream" target="_blank"><img className="github_image project__github" src={"https://raw.githubusercontent.com/sashinshin/portfolio-website/main/src/index/images/github-logo.png"} alt="Github logo" /></a>
        </div>

    </article>

)


export default PortfolioItem;