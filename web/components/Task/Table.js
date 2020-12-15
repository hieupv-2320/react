import { Table, Tag } from "antd";
import { Button } from 'antd';

const TaskTable = ({dataSource}) => {
    const columns = [
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',

          render: status => (
            <>
                <Tag color="green" key={status}>
                    {status}
                </Tag>
                <Button type="success" shape="round" size="medium">
                    Show
                </Button>
            </>
            ),
        },
      ];

    return <Table dataSource={dataSource} columns={columns} />;
}

export default TaskTable;