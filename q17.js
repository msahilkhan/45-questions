var guestList = [
    "Albert Einstein", "Isaac Newton", "Ada Lovelace",
    "Nelson Mandela", "Marie Curie", "Galileo Galilei",
    "New Guest at the End"
];
console.log("Unfortunately, due to table constraints, we can only invite two people for dinner.");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Dear ".concat(removedGuest, ", I'm sorry to inform you that we can't invite you to dinner."));
}
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ", you're still invited to dinner. We look forward to seeing you."));
}
guestList.length = 0; // Empty the guest list
console.log("Final guest list:", guestList);
