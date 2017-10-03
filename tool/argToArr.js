// 参数转换
module.exports = function (args, index = 0) {
    if (!args) return;
    return Array.prototype.slice.call(args, index);
};