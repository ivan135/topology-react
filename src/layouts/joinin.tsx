import { Modal } from 'antd';
import React from 'react';

import styles from './joinin.less';

class Joinin extends React.Component<{ show: any; onChange: any }> {
  state = { show: this.props.show };

  handleOk = () => {
    this.props.onChange(false);
    this.setState({
      show: false,
    });
  };

  handleCancel = () => {
    this.props.onChange(false);
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <Modal
        title="资助与加入"
        visible={this.state.show}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        okText="确认"
        cancelText="取消"
      >
        <li className={styles.item}>个人开源不易，时间、各种资源都有限！</li>
        <li className={styles.item}>
          热烈欢迎和期待大家一起参与，联系：
          <div className="ml30">邮箱：alsmile123@qq.com</div>
          <div className="ml30">微信：alsmile123</div>
        </li>
        <li className={styles.item}>个人云服务器资源有限，在线用户将有限：</li>
        <div className="text-center mt10">
          <div className="gray">赏五毛</div>
          <img className="mt5" src="http://topology.le5le.com/assets/img/wechatPay.png" width="120" />
        </div>
      </Modal>
    );
  }
}

export default Joinin;
