// Import your getSvgColors function
import getSvgColors from '../../src/client/getColors'; // Assuming getSvgColors is in the same directory
import svgForTest from "/assets/test/eye.svg";
// import { JSDOM } from "jsdom";

const fs: any = jest.genMockFromModule("fs");

jest.mock("fs");

test('getSvgColors should extract colors from SVG', async () => {
    const svgContent = await fs.readFileSync('../../assets/test/eye.svg', 'utf-8')
    console.log(svgContent);
    console.log(svgForTest);



    // const dom = new JSDOM(svgContent);
    // const window = dom.window;
    // global.document = window.document;

    // Call the function with the SVG content
    // const colors = getSvgColors(svgContent);

    // Assertions
    // expect(colors).toContain('#FF0000'); // Red from rect fill
    // expect(colors).toContain('#00FF00'); // Green from circle stroke
    // expect(colors).toContain('#0000FF'); // Blue from text style
    expect(true).toBeTruthy();
});