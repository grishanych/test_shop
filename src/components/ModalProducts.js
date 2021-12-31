import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import data from './data/products.json';


const ModalProducts = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open product list
      </Button>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={900}>
        <h1 style={{display: 'flex', justifyContent: 'center'}}>Here you can see all our products list</h1>
       <div>
           {
               data.map(post => {
                   return(
                       <div key={post.id} className='post'>
                            <h3>{post.id} {post.name}</h3>
                           <img src={post.imgUrl} width={200}/>
                           <p>{post.size.width}</p>

                       </div> 
                   )
               })
           }
       </div>
      </Modal>
    </>
  );
};

export default ModalProducts;