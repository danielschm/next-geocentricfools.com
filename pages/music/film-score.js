import Title from "../components/includes/Title";

import Container from "react-bootstrap/Container";
import MusicPage from "./MusicPage";
import SocialIcon from "../components/SocialIcon";

const Index = () => (
    <MusicPage>
        <Title page="Film Score"/>
        <Container>
            <h1>Film Score</h1>
            <h2 className="subtitle">Daniel Schmitz Music</h2>
            <div className="description">
                <img src="/img/music/dsm.jpg"/>
                <div className="socialIcons">
                    <SocialIcon soundcloud="https://www.soundcloud.com/danielschmitzmusic" size="2x"/>
                    <SocialIcon facebook="https://www.facebook.com/danielschmitzmusic" size="2x"/>
                    <SocialIcon youtube="https://www.youtube.com/channel/UCfN8lJJeDvrQzxjKiMRgZvw" size="2x"/>
                </div>
                <br/>
                As the artist "Daniel Schmitz" I'm sharing my film score compositions. I especially like composing
                Fantasy, Celtic and Emotional Symphonic Orchestral Music. My plan is to upload music more constantly
                in the future.
            </div>
        </Container>
    </MusicPage>
);

export default Index;