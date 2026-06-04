const getStyleValueFromLine = (
    styleAttribute: string,
    property: string
): string | null => {
    const propIndex = styleAttribute.indexOf(`${property}:`);
    if (propIndex === -1) return null;

    const valueStart = propIndex + property.length + 1;
    const terminators = [';', "'", '"'];
    const indexes = terminators
        .map(c => styleAttribute.indexOf(c, valueStart))
        .filter(i => i !== -1);

    const endIndex = indexes.length > 0 ? Math.min(...indexes) : styleAttribute.length;
    return styleAttribute.slice(valueStart, endIndex).trim() || null;
}

export default getStyleValueFromLine;