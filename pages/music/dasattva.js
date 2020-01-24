import Title from "../components/includes/Title";
import Container from "react-bootstrap/Container";
import MusicPage from "./MusicPage";
import SocialIcon from "../components/SocialIcon";

const Index = () => (
    <MusicPage>
        <Title page="Dasattva"/>
        <Container>
            <h1>Dasattva</h1>
            <h2 className="subtitle">Cinematic Goa & Psytrance</h2>
            <div className="description">
                <img src="/img/music/dasattva.jpg"/>
                <div className="socialIcons">
                    <SocialIcon spotify="https://open.spotify.com/artist/13VjztEYAsdeFzhBfXC3RN?si=pyh1my8tT3yTUCTEKRCcjw" size="2x"/>
                    <SocialIcon soundcloud="https://www.soundcloud.com/dasattva" size="2x"/>
                    <SocialIcon mixcloud="https://www.mixcloud.com/dasattva" size="2x"/>
                    <SocialIcon instagram="https://www.instagram.com/dasattva" size="2x"/>
                    <SocialIcon facebook="https://www.facebook.com/dasattva" size="2x"/>
                    <SocialIcon twitter="https://www.twitter.com/dasattva" size="2x"/>
                    <SocialIcon youtube="https://www.youtube.com/channel/UC0XCV9CaE3kTwpsZk0UeNSw" size="2x"/>
                </div>
                <br/>
                Dasattva was created in 2018 and includes everything concerned with Goa / Psy / Psytrance in combination
                with Film Score.
            </div>
        </Container>
    </MusicPage>
);

export default Index;