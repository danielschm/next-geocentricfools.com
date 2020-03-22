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
                    <h2>Matt Platypus</h2>
                    <div className="avatar">
                        <img alt="Matt" src="/img/matt.jpg"/>
                    </div>
                    <p>
                        The mind behind the rhymes - when he starts writing you won't be able to stop him from emitting
                        pure originality with a scent of twisted mindfuck.
                    </p>
                    <p>
                        Since he was a child he found his heart and passion in creating poems and later on lyrics. He
                        loves the magic of metaphors, sometimes even two layered, although he might not always be too
                        aware of this.
                    </p>
                    <p>
                        Don't you dare to come up with generic ideas - he will modify, cut and reassemble them til he is
                        completely satisfied.
                    </p>
                </Col>
                <Col>
                    <h2>Dan Leo</h2>
                    <div className="avatar">
                        <img alt="Dan" src="/img/dan.jpg"/>
                    </div>
                    <p>
                        The mind behind the rhymes - when he starts writing you won't be able to stop him from emitting
                        pure originality with a scent of twisted mindfuck.
                    </p>
                    <p>
                        Since he was a child he found his heart and passion in creating poems and later on lyrics. He
                        loves the magic of metaphors, sometimes even two layered, although he might not always be too
                        aware of this.
                    </p>
                    <p>
                        Don't you dare to come up with generic ideas - he will modify, cut and reassemble them til he is
                        completely satisfied.
                    </p>
                </Col>
            </Row>
        </Container>
        <style jsx>{`
            h2 {
                text-transform: uppercase;
                letter-spacing: 0.2rem;
                font-size: 1.7rem;
            }
            
            p {
                color: var(--text);
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
        `}</style>
    </Page>
);

export default Index;