import React, { useState } from "react";
import "./Contact.css";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { formInitialState,FormField } from "../../utility";


function Contact() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [data, setData] = useState(formInitialState);
  const [loading, setLoading] = useState(false);

    const getFormData = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const formFields = [
    {
      className: "mb-3 col-lg-6",
      type: "text",
      placeholder: "Enter First Name",
      name: "FirstName",
      size: "lg",
      autoComplete: "off",
      value: data.FirstName,
      pattern:"[A-Za-z]{2,25}"
    },
    {
      className: "mb-3 col-lg-6",
      type: "text",
      placeholder: "Enter Last Name",
      name: "LastName",
      size: "lg",
      autoComplete: "off",
      value: data.LastName,
      pattern:"[A-Za-z]{2,25}"
    },
    {
      className: "mb-3 col-lg-6",
      type: "email",
      placeholder: "Enter Your Email",
      name: "Email",
      size: "lg",
      autoComplete: "off",
      value: data.Email,
      pattern:'^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$'
    },
    {
      className: "mb-3 col-lg-6",
      type: "tel",
      placeholder: "Enter Your Phone (Optional)",
      name: "Phone",
      size: "lg",
      autoComplete: "off",
      value: data.Phone,
      pattern:'[0-9]{3}[0-9]{3}[0-9]{4}'
    }
  ];

  const onSubmit = async (e) => {
    e.preventDefault();
    const { FirstName, LastName, Email, Phone, Message } = data;

    if (FirstName === "") {
      toast.error("First Name is required");
    } else if (LastName === "") {
      toast.error("Last Name is required");
    } else if (Email === "" || !Email.includes('@')) {
      toast.error("Invalid Email");
    } else if (Message === "") {
      toast.error("Please fill in the Message");
    } else {
      setLoading(true);

      try {
        const res = await fetch(`${apiUrl}/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ FirstName, LastName, Email, Phone, Message })
        });
        const receiver = await res.json();
        if (receiver.status === 201) {
          toast.success("Message sent successfully");
        } else {
          toast.error(`${receiver.error}`);
        }
      } catch (error) {
        toast.error(`${error.message}`)
      } finally {
        setLoading(false);
        setData(formInitialState);
      }
    }
  };

  return (
    <>
      <div className="container mb-4 contact">
        <h2 className="text-center  p-3 heading wow animate__animated animate__bounceInDown"> Contact </h2>
       <p >Submit the form below to get in touch with me</p>
        <div className="container mt-2 d-flex justify-content-center align-items-center">
          <Form className="row mt-2" onSubmit={onSubmit}>
            {formFields.map((field, ind) => (
              <FormField key={ind} {...field} onChange={getFormData} />
            ))}
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                placeholder="Type your message here..."
                value={data.Message}
                style={{ height: "200px" }}
                autoComplete="off"
                onChange={getFormData}
                name="Message"
                size="lg"
              />
            </Form.Group>
            <Form.Group className="mb-3">
            <Button
                type="submit"
                className="col-lg-2 "
                style={{ margin: "auto" }}
                disabled={loading===true}
                variant="outline-success"
              >
                {loading ?  <div className="spinner-border text-light" role="status"></div>: "Submit"}
              </Button>
            </Form.Group>
          </Form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default Contact;