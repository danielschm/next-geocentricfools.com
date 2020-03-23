import Page from "../components/Page";

export default props => (
    <Page>
        <div className="lyricsPage">
            {props.children}
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    </Page>
)