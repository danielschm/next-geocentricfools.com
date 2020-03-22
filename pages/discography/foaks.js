import MusicPage from "./MusicPage";
import Title from "../components/includes/Title";

import Container from "react-bootstrap/Container";
import SocialIcon from "../components/SocialIcon";

const Index = () => (
    <MusicPage>
        <Title page="Future Is On A Killing Spree"/>
        <Container>
            <h1>Future Is On A Killing Spree</h1>
            <h2 className="subtitle">20th April 2019</h2>
            <div className="description">
                <img alt="Album Cover" src="/img/albums/foaks.jpg"/>
                <div className="socialIcons">
                    <SocialIcon
                        spotify="https://open.spotify.com/album/0YvmMgKylU1dYFIJUqESDG?si=kjjebGudTvery86Cu5UvRA"
                        size="2x"/>
                    <SocialIcon soundcloud="https://soundcloud.com/geocentricfools/sets/future-is-on-a-killing-spree"
                                size="2x"/>
                </div>
                <br/>
                Enjoy our very first, but not last Album. Working on it a little longer than a year and soaked up with
                pure enthusiasm and creativity, we drafted a project consisting of the sweet 80s tunes, futuristic
                Retrowave, Synth Pop and a breeze of Funk. Through the ups 'n' downs and the burden of great distance in
                the beginning, we finally managed to finish our creation and damn we are proud of this one.
            </div>
        </Container>
    </MusicPage>
);

export default Index;