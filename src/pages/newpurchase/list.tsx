import React from 'react';
import { Form, Input, DatePicker, Select, Upload, Button, Col, Row } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.css';
import moment from 'moment';



export const ListNewPurchase = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      style={{ fontSize: '12px',
        width: '50%',
        padding: '16px',
        borderRadius: '8px',
        backgroundColor: '#f5f5f5', 
        border: '1px solid #d9d9d9',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', }} 
      initialValues={{ size: 'small' }}
      size="small"
      onFinish={handleSubmit} // Form submission handling
    >
      <Row gutter={[4, 4]}>
        <Col span={8}>
          <Form.Item
            label="Bill Name"
            name="billName"
            rules={[{ required: true, message: 'Please enter the bill name' }]}
            style={{ marginBottom: '8px' }}
          >
            <Input placeholder="Bill Name" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Amount"
            name="amount"
            rules={[{ required: true, message: 'Please enter the amount' }]}
            style={{ marginBottom: '8px' }}
          >
            <Input placeholder="Amount" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: 'Please select a date' }]}
            style={{ marginBottom: '8px' }}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Category"
            name="category"
            rules={[{ required: true, message: 'Please select a category' }]}
            style={{ marginBottom: '8px' }}
          >
            <Select placeholder="Select Category">
              <Select.Option value="electricity">Electricity</Select.Option>
              <Select.Option value="rent">Rent</Select.Option>
              <Select.Option value="journal">Journal Vouchers</Select.Option>
              <Select.Option value="expenses">Petty Expenses</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Upload Bill Document"
            name="billDocument"
            rules={[{ required: true, message: 'Please upload a bill document' }]}
            style={{ marginBottom: '8px' }}
          >
            <Upload>
              <Button icon={<UploadOutlined />}>Upload</Button>        
            </Upload>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Notes"
            name="notes"
            style={{ marginBottom: '8px' }}
          >
            <Input.TextArea placeholder="Additional notes" rows={1} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Bill Number"
            name="billNumber"
            rules={[{ required: true, message: 'Please enter the bill number' }]}
            style={{ marginBottom: '8px' }}
          >
            <Input placeholder="Bill Number" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Payment Status"
            name="paymentStatus"
            rules={[{ required: true, message: 'Please select payment status' }]}
            style={{ marginBottom: '8px' }}
          >
            <Select placeholder="Select Payment Status">
              <Select.Option value="paid">Paid</Select.Option>
              <Select.Option value="unpaid">Unpaid</Select.Option>
              <Select.Option value="pending">Pending</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Due Date"
            name="dueDate"
            rules={[{ required: true, message: 'Please select the due date' }]}
            style={{ marginBottom: '8px' }}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Vendor"
            name="vendor"
            rules={[{ required: true, message: 'Please enter the vendor name' }]}
            style={{ marginBottom: '8px' }}
          >
            <Input placeholder="Vendor" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="GST Number"
            name="gstNumber"
            rules={[{ required: true, message: 'Please enter the GST number' }]}
            style={{ marginBottom: '8px' }}
          >
            <Input placeholder="GST Number" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Billing Address"
            name="billingAddress"
            rules={[{ required: true, message: 'Please enter the billing address' }]}
            style={{ marginBottom: '8px' }}
          >
            <Input.TextArea placeholder="Billing Address" rows={1} />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item style={{ marginTop: '16px' }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
