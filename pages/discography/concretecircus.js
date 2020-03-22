import MusicPage from "./MusicPage";
import Title from "../components/includes/Title";

import Container from "react-bootstrap/Container";
import SocialIcon from "../components/SocialIcon";

const Index = () => (
    <MusicPage>
        <Title page="Concrete Circus"/>
        <Container>
            <h1>Concrete Circus</h1>
            <h2 className="subtitle">6th December 2019</h2>
            <div className="description">
                <img src="/img/albums/concretecircus.jpg"/>
                <div className="socialIcons">
                    <SocialIcon
                        spotify="https://open.spotify.com/album/2PohzzLZHwkopgLJbIIT0Q?si=aYvfnbL8R2WPdklnYXHNZw"
                        size="2x"/>
                    <SocialIcon soundcloud="https://soundcloud.com/geocentricfools/sets/concrece-circus" size="2x"/>
                </div>
                <br/>
                Now that's a big bad buddy! Full of mean and dirty sounds, this single drifts into a more dark synth
                type style and deals with emotions like anger and fear. It brings that dark futuristic and dystopian
                club feel and will shake up your ears. Dive into it but don't drown! To be continued?
            </div>
        </Container>
    </MusicPage>
);

export default Index;