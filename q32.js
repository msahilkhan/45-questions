var current_users = ["alice", "bob", "charlie", "david", "emily"];
var new_users = ["charlie", "frank", "emily", "grace", "harry"];
for (var i = 0; i < new_users.length; i++) {
    if (current_users.includes(new_users[i])) {
        console.log("The username '".concat(new_users[i], "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_users[i], "' is available."));
    }
}
