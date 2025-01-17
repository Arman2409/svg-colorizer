const getRandomColor = (
    format: "hex" | "rgb" = "hex"): string => {
    // Check if valid value provided for format 
    if(!["hex" , "rgb"].includes(format)) {
        throw new Error("Invalid format. Format should be 'hex' or 'rgb'");
    }
    
    if (format === "hex") {
        // Generate random hex color code
        const hexCode = "#" + Array(6).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join("");
        return hexCode;
    }
    if (format === "rgb") {
        // Generate random RGB values
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    return "";
}


export default getRandomColor;