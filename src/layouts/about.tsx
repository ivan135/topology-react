import { Modal } from 'antd';
import React from 'react';

class About extends React.Component<{ show: any; onChange: any }> {
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
        title="关于我们"
        visible={this.state.show}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        okText="确认"
        cancelText="取消"
      >
        <div>本项目是 <a href="http://topology.le5le.com" target="_blank">le5le topology</a>的react版本！</div>
        <p>欢迎有任何问题或建议请联系：</p>
        <p>微信：alsmile123</p>
        <div className="text-center">
          <img src="http://topology.le5le.com/assets/img/topology_wechat.jpg?t=1" width="200" />
        </div>
      </Modal>
    );
  }
}

export default About;
