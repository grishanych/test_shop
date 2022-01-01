import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Input, Button, message } from "antd";
import "./scss/section.scss";

const { TextArea } = Input;

class DevAddInputFaq extends Component {
  render() {
    const { onAdd } = this.props;
    return (
      <Form
        className="dev-input-FAQ"
        name="basic"
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={({ name, comments }) => {
          onAdd(name, comments);
          message.success(name + " успішно додано")
        }}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Enter product name" }]}
        >
          <Input placeholder="Product name" />
        </Form.Item>

        <Form.Item
          name="comment"
          rules={[{ required: true, message: "Enter properties" }]}
        >
          <TextArea style={{ height: 100 }} placeholder="About" />
        </Form.Item>
        <div>
          <Button className="dev-add-row-btn" type="primary" htmlType="submit">
            Add
          </Button>
        </div>
      </Form>
    );
  }
}

DevAddInputFaq.propTypes = {
  onAdd: PropTypes.func,
};

export default DevAddInputFaq;