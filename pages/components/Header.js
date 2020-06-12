import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './Logo';

import Link from 'next/link';

const Header = props => (
    <Navbar className={props.className} bg="dark" variant="dark" expand="lg" sticky="top">
        <Link href="/" passHref>
            <div id="logo">
                <Logo/>
            </div>
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
                {/*<Link href="/merch" passHref>*/}
                {/*    <Nav.Link>Merch</Nav.Link>*/}
                {/*</Link>*/}
                <NavDropdown title="Discography" id="basic-nav-dropdown">
                    <Link href="/discography/foaks" passHref>
                        <NavDropdown.Item>Future Is On A Killing Spree</NavDropdown.Item>
                    </Link>
                    <Link href="/discography/willcomehome" passHref>
                        <NavDropdown.Item>Will Come Home</NavDropdown.Item>
                    </Link>
                    <Link href="/discography/concretecircus" passHref>
                        <NavDropdown.Item>Concrete Circus</NavDropdown.Item>
                    </Link>
                </NavDropdown>
                <NavDropdown title="Lyrics" id="basic-nav-dropdown">
                    <NavDropdown title="Future Is On A Killing Spree" id="basic-nav-dropdown">
                        <Link href="/lyrics/foaks/introducing-earth" passHref>
                            <NavDropdown.Item>Introducing Earth</NavDropdown.Item>
                        </Link>
                        <Link href="/lyrics/foaks/rabbit-warren" passHref>
                            <NavDropdown.Item>Rabbit Warren</NavDropdown.Item>
                        </Link>
                        <Link href="/lyrics/foaks/artificial-art" passHref>
                            <NavDropdown.Item>Artificial Art</NavDropdown.Item>
                        </Link>
                        <Link href="/lyrics/foaks/candybalism" passHref>
                            <NavDropdown.Item>Candybalism</NavDropdown.Item>
                        </Link>
                        <Link href="/lyrics/foaks/moon-lagoon" passHref>
                            <NavDropdown.Item>Moon Lagoon</NavDropdown.Item>
                        </Link>
                        <Link href="/lyrics/foaks/double-u" passHref>
                            <NavDropdown.Item>Double U</NavDropdown.Item>
                        </Link>
                        <Link href="/lyrics/foaks/future-is-on-a-killing-spree" passHref>
                            <NavDropdown.Item>Future Is On A Killing Spree</NavDropdown.Item>
                        </Link>
                        <Link href="/lyrics/foaks/silky-bed" passHref>
                            <NavDropdown.Item>Silky Bed</NavDropdown.Item>
                        </Link>
                        <Link href="/lyrics/foaks/comp-utopian" passHref>
                            <NavDropdown.Item>Comp-Utopian</NavDropdown.Item>
                        </Link>
                        <Link href="/lyrics/foaks/cure-for-unhappiness" passHref>
                            <NavDropdown.Item>Cure For Unhappiness</NavDropdown.Item>
                        </Link>
                        <Link href="/lyrics/foaks/peaceful-mindcontrol" passHref>
                            <NavDropdown.Item>Peaceful Mindcontrol</NavDropdown.Item>
                        </Link>
                        <Link href="/lyrics/foaks/neptunes-limes" passHref>
                            <NavDropdown.Item>Neptunes Limes</NavDropdown.Item>
                        </Link>
                    </NavDropdown>
                    <NavDropdown title="Will Come Home" id="basic-nav-dropdown">
                        <Link href="/lyrics/willcomehome/will-come-home" passHref>
                            <NavDropdown.Item>Will Come Home</NavDropdown.Item>
                        </Link>
                        <Link href="/lyrics/willcomehome/bye-byers" passHref>
                            <NavDropdown.Item>Bye Byers</NavDropdown.Item>
                        </Link>
                    </NavDropdown>
                </NavDropdown>
                <NavDropdown title="Playlists" id="basic-nav-dropdown">
                    <NavDropdown.Item href="https://relax.geocentricfools.com/" target="_blank">
                        Relax with Trax (Fools Collection)
                    </NavDropdown.Item>
                    <NavDropdown.Item href="https://cyberpunk.geocentricfools.com" target="_blank">
                        Radio 2077 (Cyber Collection)
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <div className="divider">
                <div></div>
            </div>
            <Nav>
                <Nav.Link href="mailto:contact@geocentricfools.com">Contact</Nav.Link>
                <Link href="/privacy" passHref>
                    <Nav.Link>Privacy</Nav.Link>
                </Link>
                <Link href="/legal-disclosure" passHref>
                    <Nav.Link>Legal Disclosure</Nav.Link>
                </Link>
            </Nav>
        </Navbar.Collapse>
        <style jsx>{`
            #logo {
                height: 4rem;
                padding-right: 1.5rem;
            }
            
            #logo svg {
                fill: white;
            }
            
            #logo svg:hover {
                fill: lightgray;
            }
            
            @media (max-width: 1100px) {
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
    </Navbar>
);

export default Header;