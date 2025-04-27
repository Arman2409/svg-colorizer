const hasCommonElements = (arr1:unknown[], arr2:unknown[]) => {
    // Compare all elements of two arrays 
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) !== -1) {
            return true;
        }
    }
    return false;
}

export default hasCommonElements;