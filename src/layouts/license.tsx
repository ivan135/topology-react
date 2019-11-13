import { Modal } from 'antd';
import React from 'react';

class License extends React.Component<{ show: any; onChange: any }> {
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
        title="许可与声明"
        visible={this.state.show}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        okText="确认"
        cancelText="取消"
      >
        <p>本项目开源，支持MIT协议。希望大家一起参与维护！</p>
        <p>所有权和解释权归le5le.com和开发者Alsmile所有！</p>
        <p>@2019 le5le.com</p>
      </Modal>
    );
  }
}

export default License;
