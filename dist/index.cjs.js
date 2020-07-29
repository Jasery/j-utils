'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * 判断输入是否为字符串
 * @param arg 需要判断的内容
 */
function isString(arg) {
    return typeof arg === "string";
}

/**
 * 保留最大固定长度的字符串
 * @param str 目标字符串
 * @param len 需要保留的长度
 * @param replace 被截断部分的代替字符串
 */
function fitStr(str, len, replace) {
    if (replace === void 0) { replace = "..."; }
    if (!str || str.length <= len) {
        return str;
    }
    return str.substring(0, len) + replace;
}

exports.fitStr = fitStr;
exports.isString = isString;
