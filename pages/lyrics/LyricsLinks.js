import NavDropdown from "react-bootstrap/NavDropdown";
import oLyrics from "./lyrics.json";
import Link from "next/link";

export default <NavDropdown key="lyrics" title="Lyrics" id="lyrics">
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