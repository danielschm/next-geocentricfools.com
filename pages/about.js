import Page from "./components/Page";
import Title from "./components/includes/Title";

import Link from "next/link";

import ListGroup from "react-bootstrap/ListGroup";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Index = () => (
    <Page>
        <Title page="About"/>
        <Container>
            <Row>
                <Col>
                    <h1>About</h1>
                    <div className="avatar">
                        <img src="/img/avatar.jpg"/>
                        <div className="avatarText">
                            <div>
                                My name is Daniel Schmitz and I'm a SAP Full-Stack Developer at <a
                                href="https://www.gicom.org/en/" target="_blank">gicom GmbH</a> near Cologne, Germany.
                            </div>
                        </div>
                    </div>
                    <h6>Studies</h6>
                    <p>
                        After graduating with a Bachelor of Science degree in Business IT, I started a Master's
                        degree in IT Management at the University of Münster with a focus on Data Science.
                    </p>
                    <h6>Hobbies</h6>
                    <p>
                        In my free time however, I'm a passionate Music Producer & DJ but also interested in
                        all kinds of creative work.
                        For almost 10 years I have been working as a music producer and audio engineer on several
                        projects including <Link href="/portfolio" passHref><a>short films and YouTube
                        videos</a></Link>. But I've spent most of my time with creating music for my various 'artist
                        aliases' which you can discover in the <Link href="/music/novah" passHref><a>music
                        area</a></Link> of this website.
                        .
                    </p>
                </Col>
                <Col>
                    <h3>Things I do</h3>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h6>SAP Development</h6>
                            <ul>
                                <li>
                                    <a href="https://ui5.sap.com" target="_blank">SAPUI5</a> - Web Framework

                                </li>
                                <li>
                                    <a href="https://experience.sap.com/fiori-design/" target="_blank">SAP Fiori</a> -
                                    SAP UX Design Guidelines
                                </li>
                                <li>
                                    ABAP OO
                                </li>
                            </ul>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h6>Web Development</h6>
                            <ul>
                                <li>
                                    HTML5, CSS3, JavaScript (ES2017)
                                </li>
                                <li>
                                    <a href="https://nodejs.org/" target="_blank">Node.js</a> - JavaScript runtime
                                </li>
                                <li>
                                    <a href="https://nextjs.org/" target="_blank">Next.js</a> - React based framework
                                    for server-rendered websites
                                </li>
                            </ul>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h6>Music Production</h6>
                            using Studio One 4. I'm been experienced in producing a wide range of Electronic Music
                            genres but I also produce film score. <Link href="/music/novah" passHref><a>Read
                            more...</a></Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h6>DJing</h6>
                            <a href="https://www.pioneerdj.com/de-de/product/all-in-one-system/archive/xdj-rx/black/overview/"
                               target="_blank">Pioneer XDJ-RX</a> - Goa/Psytrance, Techno/Techhouse, Dubstep/DnB
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h6>Graphic Design</h6>
                            Social Media Design and Color Correction with Adobe Photoshop
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h6>Film Production</h6>
                            Adobe Premiere & Adobe After Effects
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
        <style jsx>{`
            .avatar {
                display: flex;
            }
            
            @media (max-width: 390px) {
                .avatar {
                    display: block; 
                }
                
                .avatar img {
                    float: none;
                }
            }
            
            .avatarText {
                display: flex;
                align-items: center;
            }
            
            
            img {
                border-radius: 10rem;
                height: 10rem;
                width: 10rem;
                min-width: 10rem;
                min-height: 10rem;
                float: left;
                margin-right: 2rem;
                margin-bottom: 1.5rem;
            }
        `}</style>
    </Page>
);

export default Index;