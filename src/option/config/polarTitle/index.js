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
import base from './base';
import textStyle from './textStyle';
import merge from '../../../util/merge';
import subtextStyle from './subtextStyle';

function title(iChartOption) {
  const { text, title } = iChartOption;
  if (!title && !text) return;
  const titleOption = base();
  // 传入title时忽略旧属性text
  if (title) {
    merge(titleOption, title);
    return titleOption;
  }
  // 旧属性text
  const { main: pieMain, sub: pieSub, position: textPosition, itemGap } = text;
  // 兼容旧属性text
  titleOption.textAlign = 'center';
  titleOption.left = '49.5%';
  // 设置标题文本
  titleOption.text = pieMain?.text || text?.text || '';
  // 设置标题文本
  titleOption.subtext = pieSub?.text || text?.subtext || '';
  // 设置主副文本间距
  if (itemGap) {
    titleOption.itemGap = itemGap;
  }
  // 配置标题样式
  textStyle(titleOption, pieMain);
  // 配置副标题样式
  subtextStyle(titleOption, pieSub);
  // 兼容所有的title属性
  merge(titleOption, text);
  // 设置位置
  if (textPosition) {
    merge(titleOption, textPosition);
  }
  return titleOption;
}

export default title;
