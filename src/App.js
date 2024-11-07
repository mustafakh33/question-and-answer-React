import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FormInput from "./components/FormInput";
import QAList from "./components/QAList";
import { question } from "./data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [data, setData] = useState(question);
  const dataLocal = JSON.parse(localStorage.getItem("items")) || [];
  console.log(question);
  // to add new item
  const AddItem = () => {
    localStorage.setItem("items", JSON.stringify([...question]));
    setData([...question]);
    notify("تم الاضافه بنجاح", "Success");
  };
  // to delete all data items
  const deleteAllItems = () => {
    localStorage.removeItem("items");
    question.splice(0, question.length);
    setData([...question]);
    notify("تم حذف الكل بنجاح", "Error");

  };
  // to delete one item from array
  const deleteOneItem = (items) => {
    localStorage.setItem("items", JSON.stringify([...items]));
    setData([...items]);
    if (items.length <= 0) {
      deleteAllItems();
    }
    notify("تم حذف السؤال بنجاح", "Error");

  };
  // to push notification
  const notify = (message, type) => {
    if (type === "Error") {
      toast.error(message);
    } else if (type === "Success") {
      toast.success(message);
    }
  };
  return (
    <div className="font text-center color-body">
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col sm="4">
            <div className="fs-3 text-center  py-2">اسئله واجوبه شائعه</div>
          </Col>
          <Col sm="8" className="py-2">
            <FormInput onAdd={AddItem} notify={notify} />
            <QAList data={data} deleteOneItem={deleteOneItem} />
            {dataLocal.length >= 1 ? (
              <button onClick={deleteAllItems} className="btn-color w-100 my-3">
                مسح الكل
              </button>
            ) : null}
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
};

export default App;
