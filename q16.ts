const guestList3: string[] = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];
const guestUnableToAttend2 = "Ada Lovelace";
const newGuest3 = "Marie Curie";
const newGuestBeginning = "Isaac Newton";
const newGuestMiddle = "Galileo Galilei";
const biggerTableMessage = "Good news! We found a bigger dinner table.";

console.log(`${guestUnableToAttend2} can't make it to the dinner.`);
const indexOfUnableGuest2 = guestList3.indexOf(guestUnableToAttend2);
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
for (const guest of guestList3) {
    console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have your presence.`);
}
