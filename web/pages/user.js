import Head from 'next/head'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Table from '../components/Task/Table'
import { Button } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

export default function User() {

  const [tasks, setTasks] = useState([]);
  const [query, setQuery] = useState();

  useEffect(() => {

    const data = axios.get(`http://127.0.0.1:8001/api/test${query ? query : ''}`).then(res => {
      setTasks(res.data.data);
      console.log(res);
    });
  }, [query]);

  const page = (page) => {
    setQuery(`?page=${page}`);
  }
  return (
    <>
     <Layout>
        <Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
            >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                <Menu.Item key="1">List</Menu.Item>
                <Menu.Item key="2">Add</Menu.Item>
            </SubMenu>
            </Menu>
        </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>

        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Table dataSource={tasks} pagination={{total: 10, current: 1, defaultPageSize: 5,}}></Table>
        </Content>
      </Layout>
     </Layout>
    </>
  )
}
