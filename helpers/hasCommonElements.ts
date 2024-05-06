const hasCommonElements = (arr1:any[], arr2:any[]) => {
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) !== -1) {
            return true;
        }
    }
    return false;
}

export default hasCommonElements;