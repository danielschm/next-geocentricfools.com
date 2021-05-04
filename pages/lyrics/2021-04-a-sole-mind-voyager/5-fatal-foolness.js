import LyricsPage from "./../LyricsPage";
import Title from "../../components/includes/Title";
import Container from "react-bootstrap/Container";

const Index = props => [
    <LyricsPage>
        <Title page="Lyrics: Fatal Foolness"/>
        <Container>
            <h1>Fatal Foolness</h1>
            <a href="https://www.youtube.com/watch?v=gxuV-gFBHLw" target="_blank">
                <div className={"video"}/>
                <div className={"small"}>Watch on YouTube</div>
            </a>
            [Verse]<br/>
            You used to be all in love with harmony<br/>
            (All in love)<br/>
            Palates spoiled in bittersweet ecstasy<br/>
            (That´s how it used to be)<br/>
            Now you're fed up to your teeth, polyphagy<br/>
            So dulled and numb is how you feel<br/>
            No sympathy for harmony<br/>
            <br/>
            [Chorus]<br/>
            Earworm coma,<br/>
            abundance of aroma<br/>
            Drunk of soda,<br/>
            Once a faithful lover<br/>
        </Container>
        <style jsx>{`
            .small {
                font-size: 0.8rem;
                font-weight: 500;
                text-align: left;
                width: 100%;
                padding-bottom: 1rem;
            }
            
            
            .video {
                width: 100%;
                margin: 1rem 0 0.2rem 0;
                border: 2px rgba(255,255,255,0.4) solid;
                height: 10rem;
                background-position: 50%;
                background-image: url("/img/eastereggs/fatalfoolness_groove.gif");
                background-size: cover;
                background-repeat: no-repeat;
            }
         `}
        </style>
    </LyricsPage>
];

export default Index;
