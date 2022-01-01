import React, { Component } from "react";
import { Table, Popconfirm, Menu, Dropdown} from "antd";
import DevAddInputFaq from "./DevAddInputFaq";
import './scss/section.scss';
import DataProducts from "./data/products.json"
import WriteComment from "./Comment";
import ModalProducts from "./ModalProducts";
import { DownOutlined, EditOutlined, ArrowDownOutlined } from '@ant-design/icons';





class Section extends Component {
  state = {
    data: [{ DataProducts }],
    count: 4,
  };

  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "ID",
        dataIndex: "id",
        width: "5%",

      },
      {
        title: "Product name",
        dataIndex: "name",
        defaultSortOrder: "ascend",
        sorter: (a, b) => a.name.localeCompare(b.name)
      },
      {
        title: "Width",
        dataIndex: ['size', 'width'],
      },
      {
        title: "Height",
        dataIndex: ['size', 'height'],
      },
      {
        title: "Weight",
        dataIndex: 'weight',
      },
      {
        title: "Comments",
        dataIndex: 'comments',
       },
      {
        title: "Image",
        dataIndex: "imgUrl",
        render: imgUrl => <img src={imgUrl} width={50} />,
        className: "click-zoom"
      },
      {
        title: "Operation",
        dataIndex: "operation",
        render: (_, record) =>
        (
          <div>
            <Popconfirm
              size="middle"
              title="Are you sure you want to edit?"
              onConfirm={() => this.handleDelete(record.id)}
            >
              <a>&nbsp;&nbsp;Edit</a>
            </Popconfirm>
            <Popconfirm
              size="middle"
              title="Delete this product?"
              onConfirm={() => this.handleDelete(record.id)}
            >
              <a>&nbsp;&nbsp;Delete</a>
            </Popconfirm>
          </div>
        ),
      },


    ];
  }


  handleDelete = (id) => {
    const data = [...this.state.data];
    this.setState({
      data: data.filter((item) => item.id !== id),
    });
  };

  onAdd = (name, comments) => {
    const { data, count } = this.state;
    const newData = {
      id: count,
      name,
      comments,
    };
    this.setState({
      data: [...data, newData],
      count: count + 1,
    });
  };





  render() {
    const menu = (
      <Menu>
        <Menu.Item >Sorted by id</Menu.Item>
        <Menu.Item >Sorted by name</Menu.Item>
        <Menu.Item >Sorted by count</Menu.Item>
      </Menu>
    );

    const columns = this.columns.map((col) => {
      return {
        ...col,
      };
    });

    return (
      <div >
       <ModalProducts />
       <Dropdown overlay={menu} trigger={['click']} className="dropdown-sort">
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Sorted by <DownOutlined />
          </a>
        </Dropdown>
        <Table
          className="dev-table-faq"
          bordered
          dataSource={DataProducts}
          columns={columns}
        />
        <div><h3><EditOutlined />&nbsp;&nbsp;Write your comment here&nbsp;&nbsp;< ArrowDownOutlined/> </h3></div>
        <WriteComment />
        <DevAddInputFaq onAdd={this.onAdd} />


      </div>

    );
  }
}

export default Section;
