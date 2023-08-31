const guestList: string[] = [
    "Albert Einstein", "Isaac Newton", "Ada Lovelace",
    "Nelson Mandela", "Marie Curie", "Galileo Galilei",
    "New Guest at the End"
];

console.log("Unfortunately, due to table constraints, we can only invite two people for dinner.");

while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Dear ${removedGuest}, I'm sorry to inform you that we can't invite you to dinner.`);
}

for (const guest of guestList) {
    console.log(`Dear ${guest}, you're still invited to dinner. We look forward to seeing you.`);
}

guestList.length = 0; // Empty the guest list

console.log("Final guest list:", guestList);
