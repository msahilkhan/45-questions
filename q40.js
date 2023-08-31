var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
function make_album(artist, title, tracks4) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks4 !== undefined) {
        album.tracks = tracks4;
    }
    return album;
}
// Making function calls to create album dictionaries
var album1 = make_album(__makeTemplateObject(["(\"Taylor Swift\", \"Fearless\");\n  let album2 = make_album(\"Ed Sheeran\", \"\u00F7\", 16);\n  let album3 = make_album(\"Adele\", \"25\", 12);\n  \n  console.log(album1);\n  console.log(album2);\n  console.log(album3);\n  "], ["(\"Taylor Swift\", \"Fearless\");\n  let album2 = make_album(\"Ed Sheeran\", \"\u00F7\", 16);\n  let album3 = make_album(\"Adele\", \"25\", 12);\n  \n  console.log(album1);\n  console.log(album2);\n  console.log(album3);\n  "]));
