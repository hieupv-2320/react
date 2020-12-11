import { Modal, Button } from 'antd';

const TaskModal = ({dataSource}) => {

    return (  
        <Modal
            visible={visible}
            title="Title"
            footer={[
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                Submit
            </Button>,
            ]}
         >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    );
}

export default TaskModal;