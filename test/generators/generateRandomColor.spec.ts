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

    test("throws for an invalid format", () => {
        expect(() => generateRandomColor("hsl" as "hex")).toThrow("Invalid format");
    });

    test("hex value is exactly 7 characters with valid hex digits", () => {
        const hex = generateRandomColor("hex");
        expect(hex).toHaveLength(7);
        expect(hex).toMatch(/^#[0-9a-f]{6}$/i);
    });

    test("rgb values are within the 0-255 range", () => {
        const rgb = generateRandomColor("rgb");
        const match = rgb.match(/^rgb\((\d+), (\d+), (\d+)\)$/);
        expect(match).not.toBeNull();
        const [r, g, b] = [parseInt(match![1]), parseInt(match![2]), parseInt(match![3])];
        expect(r).toBeGreaterThanOrEqual(0);
        expect(r).toBeLessThanOrEqual(255);
        expect(g).toBeGreaterThanOrEqual(0);
        expect(g).toBeLessThanOrEqual(255);
        expect(b).toBeGreaterThanOrEqual(0);
        expect(b).toBeLessThanOrEqual(255);
    });
});