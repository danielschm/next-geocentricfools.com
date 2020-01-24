import Title from "../components/includes/Title";
import Container from "react-bootstrap/Container";
import MusicPage from "./MusicPage";
import SocialIcon from "../components/SocialIcon";

const Index = () => (
    <MusicPage>
        <Title page="Nitamas"/>
        <Container>
            <h1>Nitamas</h1>
            <h2 className="subtitle">Oriental Dubstep & Trap</h2>
            <div className="description">
                <img src="/img/music/nitamas.jpg"/>
                <div className="socialIcons">
                    <SocialIcon spotify="https://open.spotify.com/artist/0RBc8jcD57fGrJ3uXiwNFA?si=nfd-VB5UQsyPjYHMj6JL8w" size="2x"/>
                    <SocialIcon soundcloud="https://www.soundcloud.com/nitamas" size="2x"/>
                    <SocialIcon mixcloud="https://www.mixcloud.com/nitamas" size="2x"/>
                    <SocialIcon instagram="https://www.instagram.com/nitamasmusic" size="2x"/>
                    <SocialIcon facebook="https://www.facebook.com/nitamasmusic" size="2x"/>
                    <SocialIcon twitter="https://www.twitter.com/nitamasmusic" size="2x"/>
                </div>
                <br/>
                Nitamas was created in 2018 and includes everything concerned with Dubstep / Drum'n'Base / Trap / Bass
                Music combined with ethnic, oriental and asian sounds.
            </div>
        </Container>
    </MusicPage>
);

export default Index;