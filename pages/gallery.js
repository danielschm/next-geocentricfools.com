import Page from "./components/Page";
import Title from "./components/includes/Title";

import Container from "react-bootstrap/Container";
import Item1 from "./components/gallery/Item1";
import Item2 from "./components/gallery/Item2";
import Item3 from "./components/gallery/Item3";
import "./components/gallery/gallery.css";

const Gallery = props => (
    <Page>
        <Title page="Gallery"/>
        <Container>
            <h1>Gallery</h1>
            {
                props.items.map(e => {
                    switch (e.type) {
                        case "item1":
                            return <Item1 key={e.horizontal} horizontal={e.horizontal} vertical={e.vertical}/>
                        case "item2":
                            return <Item2 key={e.horizontal} horizontal={e.horizontal} vertical={e.vertical}/>
                        case "item3":
                            return <Item3 key={e.horizontal} horizontal={e.horizontal} vertical={e.vertical}/>
                    }
                })
            }
        </Container>
        <style jsx>{`
        
        `}</style>
    </Page>
);

const aImages = {
    horizontal: [
        "dan.jpg",
        "dan_matt.jpg",
        "dan_matt_2.jpg",
        "dan_matt_3.jpg",
        "dan_matt_4.jpg",
        "gig.jpg",
        "globe.jpg"
    ],
    vertical: [
        "dan.jpg",
        "matt.jpg",
        "matt_2.jpg",
        "matt_3.jpg",
        "matt_dan.jpg",
        // "matt_dan_2.jpg"
    ]
}

const getRandomPair = function (sHorizontal, aUsed) {
    let i = 0;
    let sVertical;
    const aVertical = aImages.vertical;
    const getNewIndex = arr => Math.round(arr.length * Math.random());

    while (aUsed.find(e => e.vertical === sVertical) && i < 100) {
        i++;
        const iIndex = getNewIndex(aVertical);
        sVertical = aVertical[iIndex];
    }

    let sType;
    if (!sVertical) {
        sType = "item3";
    }

    return {
        horizontal: sHorizontal,
        vertical: sVertical,
        type: sType
    }
}

Gallery.getInitialProps = function () {
    let aItems = [];
    aImages.horizontal.forEach((e, i) => {
        aItems.push(getRandomPair(e, aItems));
    });

    aItems.sort(() => .5 - Math.random());

    aItems = aItems.map((e, i) => {
        let sType = "item1";

        if ((i + 1) % 2 === 0) {
            sType = "item2";
        }
        if ((i + 1) % 3 === 0) {
            sType = "item3";
        }
        e.type = e.type || sType;
        return e;
    });

    return {
        items: aItems
    }
};

export default Gallery;