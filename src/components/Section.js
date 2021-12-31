import React, { Component } from "react";
import { Table, Popconfirm } from "antd";
import DevAddInputFaq from "./DevAddInputFaq";
import './scss/section.scss';
import DataProducts from "./data/products.json"
import WriteComment from "./Comment";
import ModalProducts from "./ModalProducts";


class Section extends Component {
  state = {
    data: [{DataProducts}],
    count: 4,
  };

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
        dataIndex: "name",
        // width: "25%",
      },
      {
        title: "Width",
        dataIndex: ['size', 'width'],
        // width: "50%",
      },
      {
        title: "Height",
        dataIndex: ['size', 'height'],
        // width: "50%",
      },
      {
        title: "Weight",
        dataIndex: 'weight',
        // width: "50%",
      },
      {
        title: "Comments",
        dataIndex: 'comments',
        // width: "50%",
      },
      {
        title: "Image",
        dataIndex: "imgUrl",
        render: imgUrl => <img src={imgUrl} width={50} />,
        // width: "10%",
        className: "click-zoom"
      },
      {
        title: "Operation",
        dataIndex: "operation",
        // width: "10%",
        render: (_, record) =>
         (
            <Popconfirm
              size="middle"
              title="Видалити товар?"
              onConfirm={() => this.handleDelete(record.id)}
            >
              <a>&nbsp;&nbsp;Delete</a>
            </Popconfirm>
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




  onAdd = (title, text) => {
    const { data, count } = this.state;
    const newData = {
      id: count,
      title,
      text,
   };
    this.setState({
      data: [...data, newData],
      count: count + 1,
    });
  };

  render() {
    const data = [...this.state.data];
    const columns = this.columns.map((col) => {
      return {
        ...col,
      };
    });
    
    return (
      <div >
         <ModalProducts />
        <Table
          className="dev-table-faq"
          bordered
          dataSource={DataProducts}
          columns={columns}
        />
        <WriteComment />
        <DevAddInputFaq onAdd={this.onAdd} />
       
        
      </div>

    );
  }
}

export default Section;
