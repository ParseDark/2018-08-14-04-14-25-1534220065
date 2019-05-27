module.exports = function main(str) {
    let charMap = getCharMap();

    const strArr = converArray(str.split('')
                    .map(item => {
                        return charMap[item]
                    }))
                    .map(item => `${item.join(' ')}`)
                    .join('\n');
    return `${strArr}\n`;
};

// 从题目获取数字对应的字符串
const getCharMap = () => {
    const charStr = `._.   ...   ._.   ._.   ...   ._.   ._.   ._.   ._.   ._.
    |.|   ..|   ._|   ._|   |_|   |_.   |_.   ..|   |_|   |_|
    |_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..|`
    let charMap = {};
    const arr = charStr.replace(/\s/g, "###").split("###").filter(item => item != "");
    let i = 0;
    while (i < 10) {
        charMap[i] = [arr[i], arr[i + 10], arr[i + 20]];
        i++;
    }
    return charMap;
}

// 矩阵转换
const converArray = arr => {
    return arr[0].map(function (col, i) {
        return arr.map(function (row) {
            return row[i];
        })
    });
}
