import getRandomColor from "../lib/getRandomColor";

describe('randomColor', () => {
    test("returns HEX value for HEX option", () => {
        const hexColor = getRandomColor("hex");

        expect(hexColor.startsWith("#")).toBeTruthy();
    })

    test("returns RGB value for RGB option", () => {
        const rgbColor = getRandomColor("rgb");

        expect(rgbColor.startsWith("rgb")).toBeTruthy();
    })
});