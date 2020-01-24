import Head from 'next/head';

const Title = props => {
    const sTitle = props.page ? "Daniel Schmitz - " + props.page : "Daniel Schmitz";
    return (
        <Head>
            <title>{sTitle}</title>
        </Head>
    );
};

export default Title;