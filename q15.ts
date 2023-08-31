const guestList1: string[] = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];
const guestUnableToAttend = "Ada Lovelace";
const newGuest = "Marie Curie";

// Print a statement about the guest who can't make it
console.log(`${guestUnableToAttend} can't make it to the dinner.`);

// Find the index of the guest who can't attend and replace with the new guest
const indexOfUnableGuest = guestList1.indexOf(guestUnableToAttend);
if (indexOfUnableGuest !== -1) {
    guestList1[indexOfUnableGuest] = newGuest;
}

// Print new invitations for the updated guest list
for (const guest of guestList1) {
    console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have your presence.`);
}
