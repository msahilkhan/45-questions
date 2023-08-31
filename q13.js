var transportation = ["car", "motorcycle", "bicycle", "scooter", "bus"];
for (var _i = 0, transportation_1 = transportation; _i < transportation_1.length; _i++) {
    var mode = transportation_1[_i];
    console.log("I would like to own a ".concat(mode === "motorcycle" ? "Honda " : "").concat(mode, "."));
}
