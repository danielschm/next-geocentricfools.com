import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Link from 'next/link';

const Header = props => (
    <div>
        <Navbar className={props.className} bg="dark" variant="dark" expand="lg" sticky="top">
            <Link href="/" passHref>
                <Navbar.Brand href="/">Geocentric Fools</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link href="/" passHref>
                        <Nav.Link>Home</Nav.Link>
                    </Link>
                    <Link href="/about" passHref>
                        <Nav.Link>About</Nav.Link>
                    </Link>
                {/*    <Link href="/portfolio" passHref>*/}
                {/*        <Nav.Link>Portfolio</Nav.Link>*/}
                {/*    </Link>*/}
                {/*    <NavDropdown title="Music" id="basic-nav-dropdown">*/}
                {/*        <Link href="/music/novah" passHref>*/}
                {/*            <NavDropdown.Item>NOVAH</NavDropdown.Item>*/}
                {/*        </Link>*/}
                {/*        <Link href="/music/film-score" passHref>*/}
                {/*            <NavDropdown.Item>Film Score</NavDropdown.Item>*/}
                {/*        </Link>*/}
                {/*        <Link href="/music/geocentricfools" passHref>*/}
                {/*            <NavDropdown.Item>Geocentric Fools</NavDropdown.Item>*/}
                {/*        </Link>*/}
                {/*        <Link href="/music/dasattva" passHref>*/}
                {/*            <NavDropdown.Item>Dasattva</NavDropdown.Item>*/}
                {/*        </Link>*/}
                {/*        <Link href="/music/nitamas" passHref>*/}
                {/*            <NavDropdown.Item>Nitamas</NavDropdown.Item>*/}
                {/*        </Link>*/}
                {/*        <Link href="/music/elrajas" passHref>*/}
                {/*            <NavDropdown.Item>Elrajas</NavDropdown.Item>*/}
                {/*        </Link>*/}
                {/*    </NavDropdown>*/}
                {/*</Nav>*/}
                {/*<div className="divider">*/}
                {/*    <div></div>*/}
                {/*</div>*/}
                {/*<Nav>*/}
                {/*    <Link href="/privacy" passHref>*/}
                {/*        <Nav.Link>Privacy</Nav.Link>*/}
                {/*    </Link>*/}
                {/*    <Link href="/legal-disclosure" passHref>*/}
                {/*        <Nav.Link>Legal Disclosure</Nav.Link>*/}
                {/*    </Link>*/}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <style jsx>{`
            @media (max-width: 1060px) {
                .divider {
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                }
                
                .divider div {
                    margin: 5px 0.5rem 5px 0;
                    height: 1px;                    
                    width: 5rem;
                    background: rgba(255,255,255,0.2);        
                }
            }
        `}</style>
    </div>
);

export default Header;