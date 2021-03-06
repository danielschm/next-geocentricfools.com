import Container from "react-bootstrap/Container";
import Page from "./components/Page";
import Title from "./components/includes/Title";

export default () => (
    <Page>
        <Title page="Legal Disclosure"/>
        <Container>
            <h1>Legal Disclosure</h1>
            <p>
                Information in accordance with Section 5 TMG
            </p>
            <p>
                Gerottener Weg 27
                <br/>
                51503 Rösrath
                <br/>
                Germany
                <br/>
            </p>
            <b>Represented by</b>
            <p>
                Daniel Schmitz
            </p>
            <b>Contact Information</b>
            <p>
                Telephone: +49 176 57826463
                <br/>
                E-Mail: <a href="mailto:contact@geocentricfools.com">contact@geocentricfools.com</a>
                <br/>
                Internet address: <a href="https://geocentricfools.com"
                                     target="_blank">https://geocentricfools.com</a>
                <br/>
            </p>
            <h2>Disclaimer</h2>
            <b>Accountability for content</b>
            <p>
                The contents of our pages have been created with the utmost care. However,
                we cannot guarantee the contents'
                accuracy, completeness or topicality. According to statutory provisions, we
                are furthermore responsible for
                our own content on these web pages. In this matter, please note that we are
                not obliged to monitor
                the transmitted or saved information of third parties, or investigate
                circumstances pointing to illegal
                activity.
                Our obligations to remove or block the use of information under generally
                applicable laws remain unaffected
                by this as per
                §§ 8 to 10 of the Telemedia Act (TMG).
            </p>
            <b>Accountability for links</b>
            <p>
                Responsibility for the content of
                external links (to web pages of third parties) lies solely with the
                operators of the linked pages. No
                violations were
                evident to us at the time of linking. Should any legal infringement
                become known to us, we will remove the
                respective
                link immediately.
            </p>
            <b>Copyright</b>
            <p>
                Our web pages and their contents are subject to German
                copyright law.
                Unless expressly permitted by law, every form of
                utilizing, reproducing or processing
                works subject to copyright protection on our web pages
                requires the prior consent of the respective owner of
                the rights.
                Individual reproductions of a work are only allowed for
                private use.
                The materials from these pages are copyrighted and any
                unauthorized use may violate copyright laws.
                <br/><br/>
                <i>Quelle: </i><a href="http://www.translate-24h.de"
                                  target="_blank">Englisch-Übersetzung
                translate-24h.de</a>
                <br/><br/>
            </p>
        </Container>
        <style jsx>{`
            p {
                color: var(--text);
                line-height: 1.7;
            }
        `}</style>
    </Page>
)