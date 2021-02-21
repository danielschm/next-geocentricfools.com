import Page from "../components/Page";
import Title from "../components/includes/Title";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const Index = ({video}) => (
    <Page>
        <Title page="About Us"/>
        <Container>
            <Row>
                <Col>
                    <h1>About Us</h1>
                    <video autoPlay muted loop>
                        <source src={"/video/" + video} type="video/mp4"/>
                    </video>
                    <p> What you see is the sun spinning round... the earth.
                        Now hold on, you scientist, flat earth people and Terence Pratchett lovers. Let us explain...
                    </p>
                    <p>
                        Our logo is supposed to show the orbit of the sun going around the earth, which is the old
                        fashioned
                        geocentric worldview, which to it's time was proven to be the righteous. Of course only until it
                        was
                        proven wrong, as so many worldviews were before... <br/><b>There is so much proof that proves,
                        that
                        proof is wrong!</b>
                    </p>
                    <p>
                        Damn! You see what we mean? So simply we called ourselves <b id="ourName">"Geocentric
                        Fools"</b> just to show
                        how
                        foolish we
                        could be in thinking we understand the true meaning of anything... Well just another fool on the
                        hill we
                        guess.
                    </p>
                    <p>
                        <span id="ps">
                        PS:
                        If science someday should reveal that the heliocentric worldview was a mistake all along and
                        there
                        is
                        evidence for another worldview... we promise to rename ourselves to Heliocentric Fools.
                        </span>
                    </p>
                    <br/>
                    <Row>
                        <div className={"bottom-buttons"}>
                            <div/>
                            <div/>
                            <Link href="/about/matt" passHref>
                                <a>
                                    <Button variant="primary">About Matt</Button>
                                </a>
                            </Link>
                            <Link href="/about/dan" passHref>
                                <a>
                                    <Button variant="primary">About Dan</Button>
                                </a>
                            </Link>
                            <div/>
                            <div/>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
        <br/>
        <style jsx>{`
            .bottom-buttons {
                display: flex;
                width: 100%;
                justify-content: space-around;
            }
        
            #ourName {
                color: var(--primary);
            }
        
            #ps {
                opacity: 0.5;
            }
            
            #ps:hover {
                opacity: 1;
            }
            
            img {
                width: 100%;
                min-width: 10rem;
                min-height: 10rem;
                float: left;
                margin-right: 2rem;
                margin-bottom: 1.5rem;
                border: 1px solid rgba(255,255,255,0.1);
            }
            
            video {
                width: 100%;
                border: 5px solid rgba(255,255,255,0.15);
            }
            
        `}</style>
    </Page>
);

// function getRandomValue(a) {
//     const i = parseInt(Math.random() * (a.length - 0.001), 10);
//     return a[i];
// }
//
// function getFunName() {
//     return {
//         ageDan: new Date().getFullYear() - 1998 - (new Date().getMonth() < 2 ? 1 : 0),
//         ageMatt: new Date().getFullYear() - 1996 - (new Date().getMonth() < 5 ? 1 : 0),
//         dan: getRandomValue(aDan),
//         matt: getRandomValue(aMatt),
//         sourceDan: "/img/potraits/website-dan.jpg",
//         sourceMatt: "/img/potraits/website-matt.jpg"
//     }
// }
//
// function getOldName() {
//     return {
//         ageDan: new Date().getFullYear() - 1950,
//         ageMatt: new Date().getFullYear() - 1948,
//         dan: getRandomValue(["Klaus", "Achim", "Gerhard", "Fritz", "Norbert", "Wilhem"]),
//         matt: getRandomValue(["Willibald", "Hagen", "Hermann", "Hartwig", "Gottfried", "Herbert"]),
//         sourceDan: "/img/potraits/website-dan-old.jpg",
//         sourceMatt: "/img/potraits/website-matt-old.jpg"
//     }
// }
//
Index.getInitialProps = function () {
    return {
        video: Math.random() > 0.1 ? "background3.mp4" : "background4.mp4"
    };
};

export default Index;