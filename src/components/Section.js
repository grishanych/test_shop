import React, { Component } from "react";
import { Table, Popconfirm } from "antd";
import DevAddInputFaq from "./DevAddInputFaq";


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
        width: "10%",
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
      dataSource: [
        {
          id: 1,
          title: "SONY XPERIA XZ2",
          text: "New in Sealed Box SONY XPERIA XZ2 COMPACT H8314/H8324 19mp Fingerprint 5.0",
          imgUrl: <img src="https://content2.rozetka.com.ua/goods/images/big/221300065.jpg"  width={50}/>
        },
        {
          id: 2,
          title: "Sony PS5 PlayStation 5 Console",
          text: "NEW | Sony PS5 PlayStation 5 Console | Blu-Ray Disc or Digital | FREE OVERNIGHT",
          imgUrl: <img src="https://game-shop.com.ua/prodimages/23861/thumbs/116419_457_479.jpg"  width={50}/>
        },
        {
          id: 3,
          title: "SONY XPERIA XZ1 COMPACT SO-02K",
          text: "Brand New SONY XPERIA XZ1 COMPACT SO-02K 4gb 32gb DOCOMO unlocked japan version",
          imgUrl: <img src="https://content.rozetka.com.ua/goods/images/big/229651554.jpg"  width={50}/>
        },
      ],
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
    const { dataSource } = this.state;

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
          dataSource={dataSource}
          columns={columns}
        />
        <DevAddInputFaq handleAdd={this.onAdd} />
      </div>

    );
  }
}

export default Section;
