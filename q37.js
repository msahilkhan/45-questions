function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("You have ordered a ".concat(size, "-sized shirt with the message: \"").concat(message, "\"."));
}
// Large shirt with default message
make_shirt();
// Medium shirt with default message
make_shirt("medium");
// Small shirt with a different message
make_shirt("small", "JavaScript is fun!");
