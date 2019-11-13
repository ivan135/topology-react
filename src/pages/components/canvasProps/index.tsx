import React, { Component } from 'react';
import { Form, InputNumber } from 'antd';
import { FormComponentProps } from 'antd/es/form';

import { Node } from 'topology-core/models/node';
import { Line } from 'topology-core/models/line';

import styles from './index.less';

export interface CanvasPropsProps {
  form: FormComponentProps['form'];
  data: {
    node?: Node,
    line?: Line,
    multi?: boolean
  };
  onValuesChange: (props: any, changedValues: any, allValues: any) => void;
}

class CanvasProps extends Component<CanvasPropsProps> {
  state = {
    node: this.props.data.node,
    line: this.props.data.line,
    multi: this.props.data.multi,
  };

  componentDidUpdate() {
    if (this.state.node !== this.props.data.node || this.state.line !== this.props.data.line || this.state.multi !== this.props.data.multi) {
      this.setState({
        node: this.props.data.node,
        line: this.props.data.line,
        multi: this.props.data.multi,
      });
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    if (this.state.node) {
      return (
        <Form>
          <div className={styles.title}>位置和大小</div>
          <div className={styles.items}>
            <div className="flex grid">
              <div>X（px）</div>
              <div>Y（px）</div>
            </div>
            <div className="flex grid mt5">
              <div className="mr5">
                <Form.Item className={styles.formItem}>
                  {getFieldDecorator('node.rect.x', { initialValue: this.state.node.rect.x })(<InputNumber />)}
                </Form.Item>
              </div>
              <div>
                <Form.Item className={styles.formItem}>
                  {getFieldDecorator('node.rect.y', { initialValue: this.state.node.rect.y })(<InputNumber />)}
                </Form.Item>
              </div>
            </div>
            <div className="flex grid">
              <div>宽（px）</div>
              <div>高（px）</div>
            </div>
            <div className="flex grid mt5">
              <div className="mr5">
                <Form.Item className={styles.formItem}>
                  {getFieldDecorator('node.rect.width', { initialValue: this.state.node.rect.width })(<InputNumber />)}
                </Form.Item>
              </div>
              <div>
                <Form.Item className={styles.formItem}>
                  {getFieldDecorator('node.rect.height', { initialValue: this.state.node.rect.height })(<InputNumber />)}
                </Form.Item>
              </div>
            </div>
          </div>
        </Form>
      );
    } else if (this.state.line) {
      return (
        <div className={styles.title}>line</div>
      );
    } else if (this.state.multi) {
      return (
        <div className={styles.title}>multi</div>
      );
    }

    return (
      <div>
        <div className={styles.title}>欢迎使用le5le-topology！</div>
        <div className={styles.group}>
          <a className={styles.star} href="https://github.com/le5le-com/topology"
            target="_blank"
          >
            喜欢，点击这里打个star吧
          </a>
          <a href="https://www.yuque.com/alsmile/topology" target="_blank">使用教程</a><br />
          <a href="http://topology.le5le.com/assets/img/topology_wechat.jpg?t=1" target="_blank">微信交流群（大群）</a
          ><br />
          <a href="http://topology.le5le.com/assets/img/topology_wechat2.jpg" target="_blank">微信交流群2</a><br />
          <a href="https://www.yuque.com/alsmile/topology/faq#EVbCgt" target="_blank">联系我们</a>
        </div>
        <div className={styles.title}>[Todo] 未来规划</div>
        <ul className={styles.group}>
          <li>Github issues</li>
          <li>React demo</li>
          <li>Vue3 demo</li>
          <li>系列教程</li>
        </ul>
        <div className={styles.bottom} >
          <div className={styles.title}>
            小提示
          </div>
          <ul className={styles.group}>
            <li>方向键：控制节点移动5个像素</li>
            <li>Ctrl + 方向键：控制节点移动1个像素</li>
            <li>Ctrl + 鼠标移动：移动整个画布</li>
            <li>Ctrl + 鼠标滚轮：缩放</li>
            <li>添加或选中节点，右侧属性支持上传各种图片哦</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Form.create<CanvasPropsProps>({
  onValuesChange({ onValuesChange, ...restProps }, changedValues, allValues) {
    if (onValuesChange) {
      onValuesChange(restProps, changedValues, allValues);
    }
  }
})(CanvasProps);
