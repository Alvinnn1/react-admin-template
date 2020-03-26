// import React from 'react';
import List from './views/data/List'
import DataChart from './views/chart/dataChart'


// const UserList = () => <h2>asdas</h2>
const routes = [
    {
        path: '/dashboard/list',
        component: List
    },
    {
        path: '/dashboard/chart',
        component: DataChart
    }
]

export default routes
