import Container from "react-bootstrap/Container";
import Page from "./components/Page";
import Link from "next/link";
import Title from "./components/includes/Title";

export default () => (
    <Page>
        <Title page="Cookie policy"/>
        <Container>
            <h1>Cookie policy</h1>

            <p>This cookie policy ("Policy") describes what cookies are and how Website Operator ("Website
                Operator", "we", "us" or "our") uses them on the <Link href="/"
                                                                       passHref><a>geocentricfools.com</a></Link> website
                and any of its products or services (collectively, "Website" or "Services").
            </p>

            <p>You should read this Policy so you can understand what type of cookies we use, the information we
                collect
                using cookies and how that information is used. It also describes the choices available to you
                regarding
                accepting or declining the use of cookies. For further information on how we use, store and keep
                your
                personal data secure, see our <Link href="/privacy" passHref><a>Privacy Policy</a></Link>.</p>

            <h2>What are cookies?</h2>

            <p>Cookies are small pieces of data stored in text files that are saved on your computer or other
                devices
                when websites are loaded in a browser. They are widely used to remember you and your preferences,
                either
                for a single visit (through a "session cookie") or for multiple repeat visits (using a "persistent
                cookie").</p>

            <p>Session cookies are temporary cookies that are used during the course of your visit to the Website,
                and
                they expire when you close the web browser.</p>

            <p>Persistent cookies are used to remember your preferences within our Website and remain on your
                desktop or
                mobile device even after you close your browser or restart your computer. They ensure a consistent
                and
                efficient experience for you while visiting our Website or using our Services.</p>

            <p>Cookies may be set by the Website ("first-party cookies"), or by third parties, such as those
                who serve content or provide advertising or analytics services on the website ("third party
                cookies").
                These third parties can recognize you when you visit our website and also when you visit certain
                other
                websites.</p>

            <h2>What type of cookies do we use?</h2>

            <h3>Necessary cookies</h3>

            <p>Necessary cookies allow us to offer you the best possible experience when accessing and navigating
                through our Website and using its features. For example, these cookies let us recognize that you
                have
                created an account and have logged into that account to access the content.</p>

            <h3>Functionality cookies</h3>

            <p>Functionality cookies let us operate the Website and our Services in accordance with the choices you
                make. For example, we will recognize your username and remember how you customized the Website and
                Services during future visits.</p>

            <h3>Analytical cookies</h3>

            <p>These cookies enable us and third-party services to collect aggregated data for statistical purposes
                on
                how our visitors use the Website. These cookies do not contain personal information such as names
                and
                email addresses and are used to help us improve your user experience of the Website.</p>

            <h2>What are your cookie options?</h2>

            <p>If you don't like the idea of cookies or certain types of cookies, you can change your browser's
                settings
                to delete cookies that have already been set and to not accept new cookies. To learn more about how
                to
                do this or to learn more about cookies, visit <a target="_blank"
                                                                 href="https://www.internetcookies.org">internetcookies.org</a>

            </p><h2>Changes and amendments</h2>

            <p>We reserve the right to modify this Policy relating to the Website or Services at any time, effective
                upon posting of an updated version of this Policy on the Website. When we do we will revise the
                updated
                date at the bottom of this page. Continued use of the Website after any such changes shall
                constitute
                your consent to such changes. Policy was created with <a target="_blank"
                                                                         title="Create cookie policy"
                                                                         href="https://www.websitepolicies.com/cookie-policy-generator">WebsitePolicies</a>.
            </p>

            <h2>Acceptance of this policy</h2>

            <p>You acknowledge that you have read this Policy and agree to all its terms and conditions. By using
                the
                Website or its Services you agree to be bound by this Policy. If you do not agree to abide by the
                terms
                of this Policy, you are not authorized to use or access the Website and its Services.</p>

            <h2>Contacting me</h2>

            <p>If you have any questions about this Policy, please <a href="mailto:privacy@geocentricfools.com">contact
                me</a>.</p>

            <p>This document was last updated on March 28, 2019</p>
            <br/>
            <br/>
        </Container>
    </Page>
)