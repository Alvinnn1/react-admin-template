import React from 'react';
import axios from './../axios'
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { UserOutlined, LockOutlined, SafetyCertificateOutlined } from '@ant-design/icons';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: '',
            dynamicSeed: ''
        }
    }
    handleSubmit = e => {
        this.props.history.push('/dashboard/chart');
        // axios.post('/auth/login', this.state).then(res => {
        //     localStorage.setItem('user', res);
        //     this.props.history.push('/dashboard/chart');
        // })
    };
    onFinishFailed = e => {
        console.log(e)
    }
    render() {
        return (
            <div className='login-bg'>
                <Card title="Login" style={{ width: 300, margin: '300px auto 0'}}>
                        <Form className="login-form" name="basic" onFinish={this.handleSubmit} onFinishFailed={this.onFinishFailed}>
                            <Form.Item name="account" rules={[{ required: true, message: 'Please input your username!' }]}>
                                <Input
                                    prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }}/>}
                                    placeholder="Username" onChange={e => this.setState({ account: e.target.value })}
                                />
                            </Form.Item>
                            <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                                <Input
                                    prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }}/>}
                                    type="password"
                                    placeholder="Password" onChange={e => this.setState({ password: e.target.value })}
                                />
                            </Form.Item>
                            <Form.Item name="dynamicSeed" rules={[{ required: true, message: 'Please input your code!' }]}>
                                <Input
                                    prefix={<SafetyCertificateOutlined style={{ color: 'rgba(0,0,0,.25)' }}/>}
                                    placeholder="dynamicSeed" onChange={e => this.setState({ dynamicSeed: e.target.value })}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                            </Form.Item>
                        </Form>
                </Card>
            </div>
        );
    }
}
export default Login;
