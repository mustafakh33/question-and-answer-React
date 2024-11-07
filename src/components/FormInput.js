import React, { useState } from "react";
import { Row, Form, Col } from "react-bootstrap";
import { question } from "../data";

const FormInput = ({onAdd,notify}) => {

  const [qu, setQu] = useState("");
  const [an, setAn] = useState("");
  const id = Math.random();
  // to push data to array
  const AddNewItem = (e)=>{
    if(qu === '' || an === ''){
      notify("من فضلك اكمل البيانات", "Error");
      return;
    }
    e.preventDefault();
    question.push({id:id, question:qu,answer:an})
    setAn("")
    setQu("")
    //dataعشان تحدث ال onAdd()تنفذال questionاللى هى arrayاستدعينا الفانكشن هنا عشان اول ما اضيف فى ال
    onAdd();
  }

  return (
    <Row className="g-3 align-items-center ">
      <Col sm="6" lg="5">
        <Form.Control value={qu} onChange={(e) => {
          setQu(e.target.value)
        }
        } type="text" placeholder="ادخل السؤال" />
      </Col>
      <Col sm="6" lg="5">
        <Form.Control value={an} onChange={(e) => {
          setAn(e.target.value)
        }
        } type="text" placeholder="ادخل الاجابه" />
      </Col>
      <Col sm="12" lg="2">
        <button onClick={AddNewItem} className="btn-color w-100" type="submit">
          اضافه
        </button>
      </Col>
    </Row>
  );
};

export default FormInput;
