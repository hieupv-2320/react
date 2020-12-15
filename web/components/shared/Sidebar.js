import { Layout, Menu, Breadcrumb } from 'antd';
const { SubMenu } = Menu;
import { useEffect, useState } from 'react'

import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;


const Sidebar = ({options}) => {
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = collapsed => {
        console.log(collapsed);
        setCollapsed(collapsed);
      };
    
    return (  
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}  width={options !== undefined ? options.witdh : 200} className="site-layout-background">
            <Menu
                mode="inline"
                theme="dark"
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
    );
}

export default Sidebar;