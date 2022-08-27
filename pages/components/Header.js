import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './Logo';
import Link from 'next/link';
import oLyrics from "../lyrics/lyrics.json";

const LyricsLinks = <NavDropdown key="lyrics" title="Lyrics" id="lyrics">
    {
        Object.keys(oLyrics).map((release, i) => {

            const sYear = release.split("_")[0];
            const sDropdownTitle = `${release.split("_").slice(2).join(" ")} (${sYear})`;

            return <NavDropdown key={i} title={sDropdownTitle} id="basic-nav-dropdown">
                <>
                    {
                        Object.keys(oLyrics[release]).map((title, i) => {
                            const sLink = `/lyrics/${release.replace(/_/g, "-").toLowerCase()}/${oLyrics[release][title]}`;
                            const sLinkTitle = title.replace(/_/g, " ");
                            return <Link key={i} href={sLink} passHref>
                                <NavDropdown.Item key={i}>{sLinkTitle}</NavDropdown.Item>
                            </Link>;
                        })
                    }
                </>
            </NavDropdown>

        })
    }
</NavDropdown>

const Header = props => (
    <Navbar className="transparent" bg="dark" variant="dark" expand="lg" sticky="top">
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
                <NavDropdown id="about" key="about" title="About">
                    <Link href="/about/us" passHref>
                        <NavDropdown.Item>Us</NavDropdown.Item>
                    </Link>
                    <Link href="/about/matt" passHref>
                        <NavDropdown.Item>Matt</NavDropdown.Item>
                    </Link>
                    <Link href="/about/dan" passHref>
                        <NavDropdown.Item>Dan</NavDropdown.Item>
                    </Link>
                </NavDropdown>
                <Link href="/gallery" passHref>
                    <Nav.Link>Gallery</Nav.Link>
                </Link>
                <NavDropdown id="discography" key="discography" title="Discography">
                    <Link href="/discography/poles-like-that-repel" passHref>
                        <NavDropdown.Item>Poles Like That Repel (2022)</NavDropdown.Item>
                    </Link>
                    <Link href="/discography/a-sole-mind-voyager" passHref>
                        <NavDropdown.Item>A Sole Mind Voyager (2021)</NavDropdown.Item>
                    </Link>
                    <Link href="/discography/sonntag-auf-dem-mond" passHref>
                        <NavDropdown.Item>Sonntag auf dem Mond (2020)</NavDropdown.Item>
                    </Link>
                    <Link href="/discography/concretecircus" passHref>
                        <NavDropdown.Item>Concrete Circus (2019)</NavDropdown.Item>
                    </Link>
                    <Link href="/discography/willcomehome" passHref>
                        <NavDropdown.Item>Will Come Home (2019)</NavDropdown.Item>
                    </Link>
                    <Link href="/discography/foaks" passHref>
                        <NavDropdown.Item>Future Is On A Killing Spree (2019)</NavDropdown.Item>
                    </Link>
                </NavDropdown>
                {LyricsLinks}
                <NavDropdown id="playlists" key="playlists" title="Playlists">
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
            
            .sonntag a {
                padding: 0 0 0.5rem 0 !important;
                color: var(--text);
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