import React, { Component } from "react";
import { Table, Popconfirm } from "antd";
import DevAddInputFaq from "./DevAddInputFaq";
import './scss/section.scss';
import DataProducts from "./data/test.json"


class Section extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "ID",
        dataIndex: "id",
        width: "5%",
        defaultSortOrder: "ascend",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "Product name",
        dataIndex: "title",
        width: "25%",
      },
      {
        title: "About",
        dataIndex: "text",
        width: "50%",
      },
      {
        title: "Image",
        dataIndex: "imgUrl",
        render: imgUrl => <img src={imgUrl} width={50} />,
        width: "10%",
        className: "click-zoom"
      },
      {
        title: "Operation",
        dataIndex: "operation",
        width: "10%",
        render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm
              size="middle"
              title="Видалити питання?"
              onConfirm={() => this.handleDelete(record.id)}
            >
              <a>&nbsp;&nbsp;Delete</a>
            </Popconfirm>
          ) : null,
      },
    ];


    this.state = {
      dataSource: [{DataProducts}],
      count: 4,
    };
  }

  handleDelete = (id) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.id !== id),
    });
  };

  onAdd = (title, text) => {
    const { count, dataSource } = this.state;
    const newData = {
      id: count,
      title,
      text,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };

  render() {
    const data = [];
    DataProducts.map((post) => {
      data.push(post);
    });

    const columns = this.columns.map((col) => {
      return {
        ...col,
      };
    });
    return (
      <div >
        <Table
          className="dev-table-faq"
          bordered
          dataSource={data}
          columns={columns}
        />
        <DevAddInputFaq handleAdd={this.onAdd} />
      </div>

    );
  }
}

export default Section;
