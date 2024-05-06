const getAllElementColors = (elemColors:any) => {
    let allColors:string[] = [];
    for(const colors of Object.values(elemColors) as string[]) {
       allColors = [...allColors, ...colors]
    }
    return allColors;
}

export default getAllElementColors;