import generateRandomColor from "../../lib/core/generators/generateRandomColor";

describe('randomColor', () => {
    test("returns HEX value for HEX option", () => {
        const hexColor = generateRandomColor("hex");

        expect(hexColor.startsWith("#")).toBeTruthy();
    })

    test("returns RGB value for RGB option", () => {
        const rgbColor = generateRandomColor("rgb");

        expect(rgbColor.startsWith("rgb")).toBeTruthy();
    })
});