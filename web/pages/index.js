import Head from 'next/head'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Sidebar from '../components/shared/Sidebar'
import Table from '../components/Task/Table'

import { Button } from 'antd';
import { Layout, Menu, Breadcrumb, Pagination } from 'antd';


export default function Home() {

  const [tasks, setTasks] = useState([]);

  const [query, setQuery] = useState();

  useEffect(() => {
    const data = axios.get(`http://127.0.0.1:8001/api/test${query ? query : ''}`).then(res => {
      setTasks(res.data.data);
    });
  }, [query]);

  return (
    <>
     <Layout>
     <Sidebar></Sidebar>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
          <Table dataSource={tasks} pagination={ {disabled:true} }></Table>
      </Layout>
     </Layout>
    </>
  )
}
