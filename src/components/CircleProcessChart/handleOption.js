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
import defendXSS from '../../util/defendXSS';
import merge from '../../util/merge';
import chartToken from './chartToken';
// 获取bar的series数据
export function getSeriesData(data) {
  const seriesData = [];
  data.forEach((item, i) => {
    seriesData[i] = [];
    seriesData[i][0] = item.value;
  });
  return seriesData;
}

function tooltipFormatter(params) {
  const seriesName = params.seriesName;
  const color = params.color;
  const value = params.value;
  const htmlString = `<div>
                            <span style="display:inline-block;width:10px;height:10px;
                            margin-right:8px;border-radius:5px;border-style: solid;border-width:1px;
                            border-color:${defendXSS(color)};background-color:${defendXSS(color)};"></span>
                            <span style="margin-right:16px">${defendXSS(seriesName)}</span>
                            <span>${defendXSS(value)}</span>
                       </div>`;
  return htmlString;
}

/**
 * 配置默认的鼠标悬浮提示框
 */
export function setTooltip(baseOpt) {
  if (!baseOpt.tooltip.formatter) {
    baseOpt.tooltip.formatter = tooltipFormatter;
  }
}

function getDefaultTitle(title) {
  let defaultTitle = {
    show: true,
    itemGap: -18,
    subtext: '已完成',
    textStyle: {
      fontWeight: 'bold',
      rich: {
        value: {
          padding: [-20, 0, 0, 0],
          fontSize: 60,
          color: chartToken.detailRichColor,
        },
        unit: {
          fontSize: 16,
          color: chartToken.detailRichColor,
          fontWeight: 'bolder',
          padding: [0, 0, 0, 6]
        },
      }
    },
    subtextStyle: {
      fontSize: 20,
      color: chartToken.descRichColor
    }
  };
  return merge(defaultTitle, title);
}

/**
 * 配置Title
 */
export function setTitle(baseOption, iChartOption) {
  const { title, data } = iChartOption;
  const defaultTitle = getDefaultTitle(title);
  const total = data.reduce((a, b) => a + Number(b.value), 0);
  const text = title?.text !== undefined ? title.text : total;
  if (!title?.text || (title?.text?.indexOf('{') == -1 && title?.text?.indexOf('|') == -1)) {
    // 完全自定义 直接使用用户配置 例: text:'{value|65}{unit|%}'
    defaultTitle.text = title?.unit !== undefined ? `{value|${text}}{unit|${title.unit}}` : `{value|${text}}{unit|%}`;
  }
  // 没有subtext 调整text的位置
  if (title?.subtext === '' && defaultTitle.textStyle.rich) {
    defaultTitle.textStyle.rich.value.padding = [0, 0, 0, 0];
    defaultTitle.textStyle.rich.unit.padding = [20, 0, 0, 6];
  }
  baseOption.title = merge(baseOption.title, defaultTitle);
}