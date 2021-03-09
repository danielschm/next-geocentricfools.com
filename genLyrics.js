const fs = require("fs");

function readFiles(sPath) {
    return new Promise(resolve => {
        fs.readdir(sPath, (err, files) => {
            resolve(files);
        });
    });
}

const aSmallWords = [
    "is",
    "on",
    "of",
    "our",
    "for",
    "the",
    "a",
    "auf",
    "dem",
    "in"
];

const oLyrics = {};

function capitalize(sentence, count) {
    const aWords = sentence
        .split("_")
        .map((e, i) => {
            if (aSmallWords.includes(e) && i > count) return e;
            return e.charAt(0).toUpperCase() + e.slice(1);
        });
    return aWords.join("_");

}

const sPath = "./pages/lyrics/";

async function read() {
    const aFoundPaths = await readFiles(sPath);
    const aDirectories = aFoundPaths.filter(e => e.indexOf(".") === -1);

    aDirectories.sort((a, b) => {
        const fnMakeDate = arr => new Date(`${arr.split("-")[0]}.${arr.split("-")[1]}`);
        return fnMakeDate(b).getTime() - fnMakeDate(a).getTime();
    });

    for (const sDir of aDirectories) {
        const sName = sDir.replace(/-/g, "_");
        oLyrics[capitalize(sName, 2)] = {};
        const aFiles = await readFiles(sPath + sDir);

        aFiles.sort((a, b) => {
            return parseInt(a.split("-")[0], 10) - parseInt(b.split("-")[0], 10);
        });

        aFiles.forEach(sFile => {
            sFile = sFile.replace(/.js/, "");
            const sSongName = sFile.replace(/-/g, "_");
            oLyrics[capitalize(sName, 2)][capitalize(sSongName, 1)] = sFile;
        });
    }
}

read().then(() => {
    console.log(oLyrics);
    fs.writeFileSync("./pages/lyrics/lyrics.json", JSON.stringify(oLyrics, null, 2), 'utf8');
});