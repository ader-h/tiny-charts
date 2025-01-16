# 自定义节点--Angular节点
引擎支持使用 Angular 组件编写节点，将节点渲染在图表中，同时提供了节点更新和卸载的接口。

## 1.渲染节点
用户需要使用 Angular 组件节点时，需要引入`{{VITE_BASECOPYRIGHTSPAT}}/feature/nodeRender/angular-node.js`，这个文件可以解析传入的 Angular 组件并渲染至图表中。

### 创建 Angular 组件节点
```javascript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'Node',
  template: `
  <div className="mindmap-card" >
      <div className="mindmap-top">
        <p>{{ data.text }}</p>
      </div>
      <div className="mindmap-bottom">
        <h4>部门人数: {{ data.peopleNum }}人</h4>
        <div className="mindmap-progress-container">
          <div className="progress">
            <div className="progress-bar" role="progressbar" [style.width.%]="data.peopleNum"></div>
          </div>
          {{ data.peopleNum }}/100
        </div>
      </div>
    </div> `,
})
export class Node {
  @Input()  data: any;
}
```
### 将Angular组件渲染至图表中
将Angular组件传递给`option.component`属性，图表会使用data中对应的数据渲染节点
```javascript
import { Component, Injector } from '@angular/core';
// 引用图表库
import {MindmapChart} from '{{VITE_BASECOPYRIGHTSPAT}}';
// 引用渲染依赖
import '{{VITE_BASECOPYRIGHTSPAT}}/feature/nodeRender/angular-node.js'
// 引用样式
import '{{VITE_BASECOPYRIGHTSPAT}}/index.css'
// 引用节点组件
import { Node } from './Node.component';

@Component({
  selector: 'app',
  standalone: true,
  template: `<div id="main" style="width: 1000px; height: 800px"></div>`
})

export class AppComponent {
  title = 'my-angular-app';
  constructor( private injector: Injector ) {}
  ngOnInit(): void {
      const option = {
        // 向图表中传入Angular组件，作为节点使用
        component: () => {
          return {
            component: Node,
            injector: this.injector
          }
        },
        // 布局配置
        layout: {
          type: 'mindmap',
          direction: 'LR',
          nodeShape: 'rect',
          vGap: 10,
          hGap: 100,
          bufferRender: true
        },
        // 节点配置
        node: {
          width: 200,
          height: 100,
        },
        // 连线样式
        line: {
          type: 'Bezier'
        },
        // 图表数据
        data: {
          id: 'root',
          text: '产品研发中心',
          peopleNum: 100,
          children: [{
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
      }

      const chartContainerDom = document.getElementById('main');
      let chartIns = new MindmapChart();
      chartIns.init(chartContainerDom);
      chartIns.setOption(option);
      chartIns.render();
    }
}
```
