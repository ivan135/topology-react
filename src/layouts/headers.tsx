import { Menu } from 'antd';
import { ClickParam } from 'antd/es/menu';
import React from 'react';
import { connect } from 'dva';
import router from 'umi/router';

import styles from './headers.less';
import About from './about';
import License from './license';
import Joinin from './joinin';

const { SubMenu } = Menu;

class Headers extends React.Component<{}> {
  state = { about: false, license: false, joinin: false };

  onMenuClick = (event: ClickParam) => {
    const { key } = event;

    if (!key) {
      return;
    }

    if (key.indexOf('/') === 0) {
      router.push(key);
      return;
    }

    switch (key) {
      case 'about':
        this.setState({
          about: true,
        });
        break;
      case 'license':
        this.setState({
          license: true,
        });
        break;
      case 'joinin':
        this.setState({
          joinin: true,
        });
        break;
    }
  };

  handleModalChange = () => {
    this.setState({ about: false, license: false, joinin: false });
  }

  render(): React.ReactNode {
    return (
      <div>
        <Menu
          className={styles.menus}
          selectedKeys={[]}
          mode="horizontal"
          onClick={this.onMenuClick}
        >
          <Menu.Item key="/" className={styles.logo}>
            <a>
              <img src="/img/favicon.ico" />
            </a>
          </Menu.Item>
          <SubMenu title="文件" className={styles.item}>
            <Menu.Item className={styles.subTtem}>新建文件</Menu.Item>
            <Menu.Item className={styles.subTtem}>打开本地文件（新建）</Menu.Item>
            <Menu.Item className={styles.subTtem}>导入本地文件...</Menu.Item>
            <Menu.Divider>{}</Menu.Divider>
            <Menu.Item className={styles.subTtem}>保存到本地</Menu.Item>
            <Menu.Item className={styles.subTtem}>下载为PNG</Menu.Item>
            <Menu.Item className={styles.subTtem}>下载为SVG</Menu.Item>
          </SubMenu>
          <SubMenu title="编辑" className={styles.item}>
            <Menu.Item className={styles.subTtem}>撤消</Menu.Item>
            <Menu.Item className={styles.subTtem}>恢复</Menu.Item>
            <Menu.Divider>{}</Menu.Divider>
            <Menu.Item className={styles.subTtem}>复制</Menu.Item>
            <Menu.Item className={styles.subTtem}>剪切</Menu.Item>
            <Menu.Item className={styles.subTtem}>粘贴</Menu.Item>
          </SubMenu>
          <SubMenu title="社区" className={styles.item}>
            <Menu.Item className={styles.subTtem} key="about">
              咨询与建议
            </Menu.Item>
            <Menu.Item className={styles.subTtem}>
              <a href="https://github.com/le5le-com" target="_blank">
                开源Github
              </a>
            </Menu.Item>
            <Menu.Item className={styles.subTtem}>
              <a href="https://www.yuque.com/alsmile/topology" target="_blank">
                开发文档
              </a>
            </Menu.Item>
          </SubMenu>
          <SubMenu title="帮助" className={styles.item}>
            <Menu.Item className={styles.subTtem}>
              <a href="http://topology.le5le.com" target="_blank">
                在线官网
              </a>
            </Menu.Item>
            <Menu.Item className={styles.subTtem} key="license">许可与申明</Menu.Item>
            <Menu.Item className={styles.subTtem} key="joinin">资助与加入</Menu.Item>
            <Menu.Divider />
            <Menu.Item className={styles.subTtem} key="about">关于</Menu.Item>
          </SubMenu>
        </Menu>
        {this.state.about ? (
          <About show={this.state.about} onChange={this.handleModalChange} />
        ) : null}
        {this.state.license ? (
          <License show={this.state.license} onChange={this.handleModalChange} />
        ) : null}
        {this.state.joinin ? (
          <Joinin show={this.state.joinin} onChange={this.handleModalChange} />
        ) : null}
      </div>
    );
  }
}
export default connect(() => ({}))(Headers);
