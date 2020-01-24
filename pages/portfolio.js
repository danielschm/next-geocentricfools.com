import PortfolioReference from "./components/PortfolioReference";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Page from "./components/Page";
import Title from "./components/includes/Title";

const Index = () => (
    <Page>
        <Title page="Portfolio"/>
        <Container>
            <h1>Portfolio</h1>
            <Row>
                <Col>
                    <PortfolioReference
                        tag="music"
                        title="Music Production"
                        text="For the German Science YouTuber 'Doktor Whatson'"
                        button="Watch on YouTube"
                        image="img/portfolio/doktorwhatson.jpg"
                        link="https://www.youtube.com/c/doktorwhatson"/>
                </Col>
                <Col>
                    <PortfolioReference
                        tag="music"
                        title="Live Performance"
                        text="This is the video of the live performance of my song 'Sandbox'"
                        button="Listen on YouTube"
                        image="img/portfolio/sandbox.jpg"
                        link="https://www.youtube.com/watch?v=JK5B2i9CdXQ"/>
                </Col>
                <Col>
                    <PortfolioReference
                        tag="music"
                        title="Video & Music Production"
                        text="Production of the music video for my remix of 'In My Head' by Virtual Riot"
                        button="Listen on YouTube"
                        image="img/portfolio/inmyhead.jpg"
                        link="https://www.youtube.com/watch?v=OepMw40zJRo"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortfolioReference
                        tag="filmproduction"
                        title="Sound Design"
                        text="Audio mix & production of sound design for the CGI short film 'Protectors of the Earth'"
                        button="Watch on YouTube"
                        image="img/portfolio/heavenandearth.jpg"
                        link="https://www.youtube.com/watch?v=zDKUIaeSmow&"/>
                </Col>
                <Col>
                    <PortfolioReference
                        tag="filmproduction"
                        title="Score for LEGO Movie"
                        text="Composition of film score and audio mix for 'Protectors of the Earth' (~1m Views)"
                        button="Watch on YouTube"
                        image="img/portfolio/legomovie.jpg"
                        link="https://www.youtube.com/watch?v=zDKUIaeSmow&"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortfolioReference
                        tag="dev"
                        title="Castle Wars on Node.js"
                        text="Multiplayer card game using WebSocket technology"
                        button="Download on GitHub"
                        image="img/portfolio/castlewars.jpg"
                        link="https://www.github.com/danielschm/castlewars"/>
                </Col>
                <Col>
                    <PortfolioReference
                        tag="dev"
                        title="Web Development"
                        text="This website is completely self-made by using Next.js, React and Bootstrap"
                        button="View Next.js"
                        image="img/portfolio/website.jpg"
                        link="https://www.nextjs.org"/>
                </Col>
                <Col>
                    <PortfolioReference
                        tag="dev"
                        title="In progress..."
                        text="Currently developing an cookbook application using OpenUI5"
                        button="View OpenUI5 on Github"
                        image="img/portfolio/cookbook.jpg"
                        link="https://github.com/SAP/openui5"/>
                </Col>
            </Row>
        </Container>
    </Page>
);

export default Index;