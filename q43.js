var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians2(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great(magicians2) {
    var _a;
    var greatMagicians2 = [];
    for (var i = 0; i < magicians2.length; i++) {
        greatMagicians2.push("the Great", $, (_a = { magicians2: magicians2 }, _a[i] = , _a));
        return greatMagicians2;
    }
    // Creating an array of magician's names
    var magicianNames2 = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
    // Calling make_great() with a copy of magician's names
    var greatMagicianNames2 = make_great(__spreadArray([], magicianNames2, true));
    // Calling the function to show original magician's names
    console.log("Original Magician Names:");
    show_magicians(magicianNames2);
    // Calling the function to show modified magician's names
    console.log("\nModified Magician Names:");
    show_magicians(greatMagicianNames2);
}
