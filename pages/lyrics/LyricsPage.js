import Page from "../components/Page";

export default props => (
    <Page>
        <div className="lyricsPage">
            {props.children}
            <br/>
            <br/>
        </div>
        <style jsx>{`
            div {
                color: var(--text);
            }
        `}
        </style>
    </Page>
)