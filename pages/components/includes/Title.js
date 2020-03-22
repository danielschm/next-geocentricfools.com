import Head from 'next/head';

const Title = props => {
    const sTitle = props.page ? "Geocentric Fools - " + props.page : "Geocentric Fools";
    return (
        <Head>
            <title>{sTitle}</title>
        </Head>
    );
};

export default Title;