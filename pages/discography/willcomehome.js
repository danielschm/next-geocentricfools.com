import MusicPage from "./MusicPage";
import SocialIcon from "../components/SocialIcon";

const Index = () => (
    <MusicPage title="Will Come Home" sub="2nd August 2019" cover="/img/albums/willcomehome.jpg">
        <div className="socialIcons">
            <SocialIcon
                spotify="https://open.spotify.com/album/5ZJ3LdZ3GTgQ0ctDR7lOLg?si=PpiwkJcPRDaEPZAEfOnD7g"
                size="2x"/>
            <SocialIcon
                soundcloud="https://soundcloud.com/geocentricfools/sets/will-come-home-stranger-things-homage"
                size="2x"/>
        </div>
        <br/>
        You know that strange feeling, when something just stays on your mind, holds on to you and follows you
        wherever you are? Yeah, well that happened to both of us. Deeply inspired by a TV show and it's
        beautifully nostalgic and also creepy atmosphere, we had the desire to embody this in music. Well, there
        you go!
    </MusicPage>
);

export default Index;