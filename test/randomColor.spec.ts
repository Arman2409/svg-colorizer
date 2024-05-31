import randomColor from "../lib/randomColor";

describe('randomColor', () => {
    test("returns HEX value for HEX option", () => {
        const hexColor = randomColor("hex");

        expect(hexColor.startsWith("#")).toBeTruthy();
    })

    test("returns RGB value for RGB option", () => {
        const rgbColor = randomColor("rgb");

        expect(rgbColor.startsWith("rgb")).toBeTruthy();
    })
});