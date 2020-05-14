const utils = {
    getRandomIndex: function (array) {
        let randomIndex = (Math.random() * (array.length - 1)).toFixed(0);
        return array[randomIndex];
    },
};

export default utils;