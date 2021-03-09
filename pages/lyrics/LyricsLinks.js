import NavDropdown from "react-bootstrap/NavDropdown";
import oLyrics from "./lyrics.json";
import Link from "next/link";

export default <NavDropdown title="Lyrics" id="basic-nav-dropdown">
    <>
        {
            Object.keys(oLyrics).map(release => {

                const sYear = release.split("_")[0];
                const sDropdownTitle = `${release.split("_").slice(2).join(" ")} (${sYear})`;

                return <NavDropdown key={sDropdownTitle} title={sDropdownTitle} id="basic-nav-dropdown">
                    <>
                        {
                            Object.keys(oLyrics[release]).map(title => {
                                const sLink = `/lyrics/${release.replace(/_/g, "-").toLowerCase()}/${oLyrics[release][title]}`;
                                const sLinkTitle = title.replace(/_/g, " ");
                                return <Link key={sLink} href={sLink} passHref>
                                    <NavDropdown.Item>{sLinkTitle}</NavDropdown.Item>
                                </Link>;
                            })
                        }
                    </>
                </NavDropdown>

            })
        }
    </>
</NavDropdown>