var guestList3 = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];
var guestUnableToAttend2 = "Ada Lovelace";
var newGuest3 = "Marie Curie";
var newGuestBeginning = "Isaac Newton";
var newGuestMiddle = "Galileo Galilei";
var biggerTableMessage = "Good news! We found a bigger dinner table.";
console.log("".concat(guestUnableToAttend2, " can't make it to the dinner."));
var indexOfUnableGuest2 = guestList3.indexOf(guestUnableToAttend2);
if (indexOfUnableGuest2 !== -1) {
    guestList3[indexOfUnableGuest2] = newGuest3;
}
// Inform about the bigger dinner table
console.log(biggerTableMessage);
// Add new guests
guestList3.unshift(newGuestBeginning); // Add to the beginning
guestList3.splice(Math.ceil(guestList3.length / 2), 0, newGuestMiddle); // Add to the middle
guestList3.push("New Guest at the End"); // Add to the end
// Print new invitations for the updated guest list
for (var _i = 0, guestList3_1 = guestList3; _i < guestList3_1.length; _i++) {
    var guest = guestList3_1[_i];
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. We would be honored to have your presence."));
}
