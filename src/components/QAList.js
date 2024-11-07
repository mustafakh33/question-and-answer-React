import React from "react";
import { Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { question } from './../data';

const QAList = ({deleteOneItem}) => {
  const dataLocal = JSON.parse(localStorage.getItem("items")) || [];
  const deleteItem = (index)=>{ 
    question.splice(index,1);
    deleteOneItem(question);
  }
  return (
    <Row>
      <Accordion defaultActiveKey="0" className="mt-3">
       {dataLocal.length >=1 ? (
         dataLocal.map((item,index)=>(
          <Accordion.Item key={index} eventKey={item.id}>
            <Accordion.Header>
              <div className="m-auto">{item.question}</div>
            </Accordion.Header>
            <Accordion.Body className="text-end answer">
              <div className="px-3 d-inline">{item.answer}</div>
              <button onClick={() => {
                deleteItem(index)
              }
              } className="btn-color">مسح</button>
            </Accordion.Body>
          </Accordion.Item>
            ))
       ): <h2 className="fs-4 text-center p-5">لايوجد اسئله الان</h2> }
    </Accordion>
    </Row>
  );
};

export default QAList;
