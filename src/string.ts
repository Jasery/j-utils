import { isString } from "./lang";

/**
 * 保留最大固定长度的字符串
 * @param str 目标字符串
 * @param len 需要保留的长度
 * @param replace 被截断部分的代替字符串
 */
export function fitStr(str: string, len: number, replace = "...") {
  if (!str || str.length <= len) {
    return str;
  }
  return str.substring(0, len) + replace;
}
