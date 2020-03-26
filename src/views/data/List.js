import React from "react";
import axios from '../../axios'
import { handleTime } from '../../utils'
import {Card, Form, Input, Table, Pagination, Select, DatePicker, Button} from 'antd/lib/index';
import {Link} from "react-router-dom";
const { Option } = Select;
const { RangePicker } = DatePicker;

class MatchList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            total: 0,
            timeRange: [],
            query: {
                id: '',
                type: '',
                startTimeBegin: '',
                startTimeEnd: '',
                count: 20,
                page: 1
            }
        }
    }
    componentDidMount() {
        this.getData()
    }
    getData() {
        if(this.state.timeRange.length !== 0) {
            this.setState({
                query: Object.assign(this.state.query, {startTime: this.state.timeRange[0].unix(), endTime: this.state.timeRange[1].unix()})
            })
        } else {
            this.setState({
                query: Object.assign(this.state.query, {startTime: '', endTime: ''})
            })
        }
        axios.get('/list', {params: this.state.query}).then(res => {
            this.setState({
                dataSource: res.items,
                total: res.totalCount
            })
        })
    }
    setQueryState(data) {
        let query = this.state.query
        Object.assign(query, data)
        this.setState({
            query: query
        })
    }
    pageChange(page, pageSize) {
        let query = this.state.query
        query.page = page
        this.setState({
            query: query
        })
        this.getData()
    }
    query() {
        let query = this.state.query
        query.page = 1
        this.setState({
            query: query
        })
        this.getData()
    }
    render() {
        const columns = [
            {
                title: 'ID',
                dataIndex: 'id',
                align: 'center',
                key: 'id'
            },
            {
                title: '时间',
                align: 'center',
                dataIndex: 'time',
                key: 'time',
                render: time => <span>{handleTime(time)}</span>
            },
            {
                title: '状态',
                align: 'center',
                dataIndex: 'status',
                key: 'status',
                render: status => <span>{status === 0 ? '未开始' : status === 1 ? '进行中' : '已结束'}</span>
            },
            {
                title: '操作',
                align: 'center',
                key: 'action',
                render: record => (
                    <span><Link to={`/dashboard/detail/${record.id}`}>详情</Link></span>
                ),
            },
        ];
        return (
            <div>
                <Card>
                    <Form layout="inline">
                        <Form.Item label="ID">
                            <Input placeholder="ID"  value={this.state.query.id} onChange={e => this.setQueryState({ id: e.target.value })}/>
                        </Form.Item>
                        <Form.Item label="类型">
                            <Select value={this.state.query.game} style={{ width: 120 }} onChange={val => this.setQueryState({ game: val })}>
                                <Option value="">不限</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="时间">
                            <RangePicker  onChange={value => this.setState({ timeRange: value })} />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" onClick={() => this.query()}>
                                查询
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
                <Card>
                    <Table dataSource={this.state.dataSource} columns={columns} pagination={false}/><br/>
                    <Pagination defaultCurrent={1} current={this.state.query.page} pageSize={this.state.query.count} total={this.state.total} showTotal={total => `Total ${total} items`} onChange={this.pageChange.bind(this)}/>
                </Card>
            </div>
        )
    }
}
export default MatchList
