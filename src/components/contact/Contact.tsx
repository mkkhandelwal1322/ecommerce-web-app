import React from "react";
import { toast } from "react-toastify";
import "./Contact.css";
import { Input, Button, Heading } from "../../styles/Style";
import styled from "styled-components";

const ContactInput = styled(Input)`
  width: 92%;
`;

const Contact = () => {
  const initialContactValues = {
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  };
  const [contactFormValues, setContactFormValues] =
    React.useState(initialContactValues);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setContactFormValues({ ...contactFormValues, [name]: value });
  };
  const submitContactForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Query successfully sent!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    setContactFormValues(initialContactValues);
  };
  return (
    <>
      <div className="contact-section">
        <Heading>Contact Us</Heading>
        <form onSubmit={submitContactForm}>
          <ContactInput
            type="text"
            placeholder="Your Name"
            name="name"
            value={contactFormValues.name}
            onChange={handleChange}
            required
          />
          <ContactInput
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            value={contactFormValues.phoneNumber}
            onChange={handleChange}
            required
          />
          <ContactInput
            type="email"
            placeholder="Email"
            name="email"
            value={contactFormValues.email}
            onChange={handleChange}
            required
          />
          <ContactInput
            type="text"
            placeholder="Message"
            name="message"
            value={contactFormValues.message}
            onChange={handleChange}
            required
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </>
  );
};

export default Contact;
