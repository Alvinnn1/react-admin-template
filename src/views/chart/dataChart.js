import React, { PureComponent } from 'react'
import axios from "../../axios";
import {
    ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import {Card, Row, Col, Typography } from "antd";
import {handleDate} from "../../utils";
const { Title } = Typography;

const data = [
    {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
];
class DataChart extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dataSource1: [],
            dataSource2: [],
            dataSource: [],
            daliy: {}
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                dataSource:  [
                    {
                        time: 1585212626, uv: 4000, pv: 2400, amt: 2400,
                    },
                    {
                        time: 1585267200, uv: 3000, pv: 1398, amt: 2210,
                    },
                    {
                        time: 1585353600, uv: 2000, pv: 9800, amt: 2290,
                    },
                    {
                        time: 1585440000, uv: 2780, pv: 3908, amt: 2000,
                    },
                    {
                        time: 1585526400, uv: 1890, pv: 4800, amt: 2181,
                    }
                ]
            })

        }, 1000)
    }
    render() {
        const getTime = ({ x, y, payload }) => {
            return <text x={x} y={y + 15} fill="#666" textAnchor="middle" dy={-6}>{handleDate(payload.value)}</text>
        }
        return (
            <div>
                <Card>
                    <Row>
                        <Col span={3}><Title>{this.state.daliy.x || 0}</Title><p>data1</p></Col>
                        <Col span={3}><Title>{this.state.daliy.y || 0}</Title><p>data2</p></Col>
                        <Col span={3} offset={3}><Title>{this.state.daliy.z || 0}</Title><p>data3</p></Col>
                        <Col span={3}><Title>{this.state.daliy.w || 0}</Title><p>data4</p></Col>
                    </Row>
                </Card>
                <Card style={{marginTop: 20}}>
                    <h2>DATA</h2>
                    {
                        this.state.dataSource.length > 0 ?
                            <LineChart
                                width={1200}
                                height={300}
                                data={this.state.dataSource}
                                margin={{
                                    top: 5, right: 30, left: 20, bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="time" tick={getTime}/>
                                <YAxis/>
                                <Tooltip labelStyle={{display: 'none'}}/>
                                <Legend verticalAlign="top" height={36}/>
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} name="pv dtaa"/>
                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" activeDot={{ r: 8 }} name="uv data"/>
                            </LineChart>
                            : <div>暂无数据</div>
                    }
                </Card>

            </div>
        );
    }

}

export default DataChart
