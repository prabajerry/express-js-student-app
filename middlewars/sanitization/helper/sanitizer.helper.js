const findArrayLength = (array) => {

    let flageForEmptyData = 0;

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element == undefined || element == '') {
            flageForEmptyData = 1
        }
    }

    if (flageForEmptyData == 1) {
        throw new Error("No data or Empty data ")
    }
    else {
        return true
    }
    // ["","","",""]
}

module.exports = {
    findArrayLength
}