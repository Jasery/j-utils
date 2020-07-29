/**
 * 判断输入是否为字符串
 * @param arg 需要判断的内容
 */
declare function isString(arg: unknown): boolean;

/**
 * 保留最大固定长度的字符串
 * @param str 目标字符串
 * @param len 需要保留的长度
 * @param replace 被截断部分的代替字符串
 */
declare function fitStr(str: string, len: number, replace?: string): string;

export { fitStr, isString };
