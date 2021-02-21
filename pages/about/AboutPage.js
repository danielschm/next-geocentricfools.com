import Page from "../components/Page";
import Title from "../components/includes/Title";
import "./about.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutPage = ({name, aka, age, skills, video, children}) => (
    <Page>
        <Title page={name}/>
        <Container>
            <Row>
                <Col>
                    <h1>{name}</h1>
                    <h4>aka {aka} ({age})</h4>
                    <br/>
                    <h3>{skills}</h3>
                    {children}
                </Col>
                <Col>
                    <video autoPlay muted loop>
                        <source src={"/video/" + video} type="video/mp4"/>
                    </video>
                </Col>
            </Row>
        </Container>
        <br/>
    </Page>
);

export default AboutPage;