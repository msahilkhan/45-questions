var guestList1 = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];
var guestUnableToAttend = "Ada Lovelace";
var newGuest = "Marie Curie";
// Print a statement about the guest who can't make it
console.log("".concat(guestUnableToAttend, " can't make it to the dinner."));
// Find the index of the guest who can't attend and replace with the new guest
var indexOfUnableGuest = guestList1.indexOf(guestUnableToAttend);
if (indexOfUnableGuest !== -1) {
    guestList1[indexOfUnableGuest] = newGuest;
}
// Print new invitations for the updated guest list
for (var _i = 0, guestList1_1 = guestList1; _i < guestList1_1.length; _i++) {
    var guest = guestList1_1[_i];
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. We would be honored to have your presence."));
}
