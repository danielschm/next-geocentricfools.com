import Title from "../components/includes/Title";
import Container from "react-bootstrap/Container";
import MusicPage from "./MusicPage";
import SocialIcon from "../components/SocialIcon";

const Index = () => (
    <MusicPage>
        <Title page="Elrajas"/>
        <Container>
            <h1>Nitamas</h1>
            <h2 className="subtitle">Organica & Tribal Techno</h2>
            <div className="description">
                <img src="/img/music/elrajas.jpg"/>
                <div className="socialIcons">
                    <SocialIcon soundcloud="https://www.soundcloud.com/elrajas" size="2x"/>
                    <SocialIcon mixcloud="https://www.mixcloud.com/elrajas" size="2x"/>
                    <SocialIcon instagram="https://www.instagram.com/elrajasmusic" size="2x"/>
                    <SocialIcon facebook="https://www.facebook.com/elrajasmusic" size="2x"/>
                </div>
                <br/>
                Elrajas was created in 2018 for Techno music with tribal and world music influences.
            </div>
        </Container>
    </MusicPage>
);

export default Index;