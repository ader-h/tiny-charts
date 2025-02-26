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
function JadeJueChart(aliasToken) {

  const { colorPlaceholder, colorLabel, colorTextName, padding, borderWidthLG, borderRadius, colorMask, barWidth } = aliasToken;

  return {
    itemBorderColor: colorMask,
    itemColor: colorPlaceholder,
    labelValueColor: colorTextName,
    labelRatioColor: colorLabel,
    labelPadding: padding,
    itemBorderWidth: borderWidthLG,
    itemBorderRadius: borderRadius,
    barWidth
  };

};
export default JadeJueChart;
