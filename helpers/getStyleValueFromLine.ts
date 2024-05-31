const getStyleValueFromLine = (styleAttribute: string, property: string) => {
    const fillIndex = styleAttribute.indexOf(`${property}:`);

    // Check if "fill:" exists
    if (fillIndex !== -1) {
        const characters = [';', "'", '"'];
        const indexes = [];
        for (let i = 0; i < characters.length; i++) {
            const index = styleAttribute.indexOf(characters[i], fillIndex + 5);
            if (index === -1) continue;
            indexes.push(index);
        }
        const endIndex = Math.min(
            ...indexes
        );

        // Check if any terminator exists after "fill:"
        if (endIndex !== -1) {
            const colorValue = styleAttribute.slice(fillIndex + 5, endIndex).trim(); // +5 to skip "fill:"
            return colorValue;
        }
    }

    // Return null if no color is found
    return null;
}

export default getStyleValueFromLine;