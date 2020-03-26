import React from 'react';
import routes from './../route'
import {
    BrowserRouter as Router,
    Switch,
    withRouter,
    Route,
    Link
} from "react-router-dom";
import { Layout, Menu, Avatar } from 'antd/lib/index';
import { LineChartOutlined, AppstoreAddOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class App extends React.Component{
    state = {
        level: 0,
        collapsed: false
    };

    componentDidMount() {

    }

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    {/*<Avatar style={{ backgroundColor: '#87d068' }}>{JSON.parse(localStorage.getItem('user')).name}</Avatar>*/}
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Link to="/dashboard/chart">
                                <LineChartOutlined />
                                <span>仪表盘</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu key="sub1" title={<span><AppstoreAddOutlined /><span>管理</span></span>}>
                            <Menu.Item key="2"><Link to="/dashboard/list">列表</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0, textAlign:'right', paddingRight: '20px' }}>
                        <Avatar style={{ backgroundColor: '#7265e6', verticalAlign: 'middle' }} size="large">U</Avatar>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
                        {/*    <Breadcrumb.Item>User</Breadcrumb.Item>*/}
                        {/*    <Breadcrumb.Item>Bill</Breadcrumb.Item>*/}
                        {/*</Breadcrumb>*/}
                        <Switch>
                            {
                                routes.map(route => (
                                    <Route path={route.path} key={route.path} component={withRouter(route.component)}/>
                                ))
                            }
                        </Switch>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Project XXX ©2018 Created by Alvin</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default App;
