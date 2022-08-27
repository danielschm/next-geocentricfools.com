import MusicPage from "./MusicPage";
import SocialIcon from "../components/SocialIcon";

const Index = () => (
    <MusicPage title="Poles Like That Repel" sub="26th August 2022" cover="/img/albums/poles-like-that-repel.jpg">
        <div className="socialIcons">
            <SocialIcon
                spotify="https://open.spotify.com/track/6ZUzOAVzoOnU3iu4xu0sQu"
                size="2x"/>
            <SocialIcon
                apple="https://music.apple.com/de/album/poles-like-that-repel/1641089156?i=1641089157"
                size="2x"/>
            <SocialIcon
                youtube="https://music.youtube.com/watch?v=cvEsFexVCAc"
                size="2x"/>
            <SocialIcon
                bandcamp="https://geocentricfools.bandcamp.com/track/poles-like-that-repel"
                size="2x"/>
            <SocialIcon soundcloud="https://soundcloud.com/geocentricfools/poles-like-that-repel" size="2x"/>
        </div>
        <br/>
        English:
        It's been a while, enjoying the wild ride of release and making our pause worthwile, while we silently had our eyes and mindset hoping for the next of our thousand unfinished files to find the
        <br/>
        <i>open ocean of ears wide open</i>
        <br/>
        Hopefully you found a note, that was able to touch your soul, and so that not only the english word is spoken we translated like a true german folksman 😉
        <br/>
        <br/>
        Deutsch:
        Das ist unsere neue Single.
    </MusicPage>
);

export default Index;