<template>
  <MarkdownPage mdName="AngularNode"></MarkdownPage>
  <vueNode :option="options"></vueNode>
  <br />
  <MarkdownPage mdName="AngularNodeUpdate"></MarkdownPage>
  <vueNodeUpdate :option="options"></vueNodeUpdate>
  <br />
  <MarkdownPage mdName="AngularNodeUnmount"></MarkdownPage>
  <vueNodeUnmount :option="options"></vueNodeUnmount>
</template>

<script>
import MarkdownPage from '../../example/components/markdown.vue';
import CodeExample from '../../card/components/code-example.vue';
import vueNode from '../vue/components/vueNode.vue';
import vueNodeUpdate from '../vue/components/vueNodeUpdate.vue';
import vueNodeUnmount from '../vue/components/vueNodeUnmount.vue';

const options = {
  theme: 'hdesign-light',
  layout: {
    type: 'mindmap',
    direction: 'LR',
    nodeShape: 'rect',
    vGap: 40,
    hGap: 100
  },
  node: {
    width: 200,
    height: 80,
  },
  line: {
    type: 'Bezier',
  },
  canvas: {
    show: true,
    scaleAllow:false,
    grid: {
      size: 20,
      show: true,
      type: 'dot', //dot mesh doubleMesh
      config: {
        color: '#aaaaaa', // 颜色
        unitSize: 1, // 宽度
      }
    }
  },
  connector: {
    startSharing: 'merge', // 均分方式 merge sharing  strict
    endSharing: 'merge',
    type: 'expand',
  },
  // 图表数据
  data: {
    id: 'root',
    text: '产品研发中心',
    peopleNum: 100,
    children: [
    {
        id: 'researchDept',
        text: '研发部',
        peopleNum: 20,
      },
      {
        id: 'designDept',
        text: '设计部',
        peopleNum: 60
      }
    ]
  }
};
export default {
  name: 'VueNodes',
  components: {
    MarkdownPage,
    CodeExample,
    vueNode,
    vueNodeUpdate,
    vueNodeUnmount
  },
  data(){
    return {
      options:options,
      chartCode: [],
      activeName: 'DEMO',
      chartData:['/CanvasChart']
    }
  },
  
  
}
</script>

<style lang="less" scoped>
:deep(.tiny-tabs__header) {
	margin: 20px 0;
}
:deep(.tiny-tabs__item__title) {
  font-size: 14px;
}
:deep(.tiny-tabs__content) {
	margin: 0;
}
.code-container:first-child {
	margin-top: 0;
}
:deep(.tiny-tabs__item-separator-space) {
	padding: 0 !important;
}
.api-title{
  font-size: 20px;
  margin-bottom: 1rem;
  color: var(--ti-base-color-common-7);
}
.chart-container{
  border: 1px solid var(--ti-base-color-common-1);
}

</style>