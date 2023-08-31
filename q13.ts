let transportation: string[] = ["car", "motorcycle", "bicycle", "scooter", "bus"];

for (let mode of transportation) {
    console.log(`I would like to own a ${mode === "motorcycle" ? "Honda " : ""}${mode}.`);
}