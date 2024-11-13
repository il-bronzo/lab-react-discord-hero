import "./Section.css";
import discordBackground from './assets/discord-background.png';

function Section () {
    return (
        <section className="section">
        <h1 className="h1">IMAGINE A PLACE ...</h1>
        <p className="description">... where you can belong to a school club, a gaming group, or a worldwide art community. Where just Marcel and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
        
        <div className="btn">
            <button className = "download-btn">Download for Mac</button>
            <button className = "open-btn">Open Discord in your browser</button>
        </div>
        
        <div className="background-img">
        <img src={discordBackground} alt="Discord Background"/>
        </div>
        </section>
    )
}

export default Section;