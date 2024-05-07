import randomColor from "../../lib/common/randomColor";

describe('randomColor', () => {
    test("should return HEX value for HEX option", () => {
        const hexColor = randomColor("hex");

        expect(hexColor.startsWith("#")).toBeTruthy();
        
    })

    test("should return RGB value for RGB option", () => {
        const rgbColor = randomColor("rgb");

        expect(rgbColor.startsWith("rgb")).toBeTruthy();
        
    })
});