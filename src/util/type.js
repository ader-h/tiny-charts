/**
 * Copyright (c) 2024 - present OpenTiny HUICharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]' ? true : false;
}

const isObject = value => value !== null && typeof value === 'object';

const isFunction = value => typeof value === 'function';

const isString = value => typeof value === 'string';

const isBoolean = value => typeof value === 'boolean';

const isNumber = value => typeof value === 'number';

const isUndef = value => typeof value === 'undefined';

const isDOM = typeof HTMLElement === 'object'
    ? function (dom) { return dom instanceof HTMLElement; }
    : function (dom) { return dom && typeof dom === 'object' && dom.nodeType === 1 && typeof dom.nodeName === 'string'; };

const toArray = value => {
    if (!isArray(value)) {
        return [value];
    } else {
        return value;
    }
}

/**
 * 
 * 返回对相应的数据类型
 */
const getType = data => {
    return Object.prototype.toString.call(data).substring(8).split(/]/)[0]
}

module.exports = {
    isArray,
    isObject,
    isFunction,
    isString,
    isBoolean,
    isNumber,
    isUndef,
    isDOM,
    toArray,
    getType
}
