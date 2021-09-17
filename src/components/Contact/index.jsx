import React, { useContext } from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormButton,
  FormInput,
  FormTextArea,
  SuccessDiv,
} from "./ContactStyle";
import { DataContext } from "../Context/DataContext.jsx";
import { api } from "../../API/api.js";

export default function Contact() {
  const linkTo = () => {
    window.open("https://www.linkedin.com/in/mpbrazil/");
  };
  const url = `${process.env.REACT_APP_API_EMAIL_EXTENSION}`;
  const { sent, setSent, formContent, setFormContent } =
    useContext(DataContext);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.post(url, formContent);
      if (response.status === 200) {
        return setSent(true);
      }
    } catch (error) {
      return console.log(error);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormContent({ ...formContent, [name]: value });
  };

  console.log(formContent);

  if (!sent) {
    return (
      <>
        <Container id="contact">
          <FormWrap>
            <Icon to="/">
              <span>M</span> Pasquini
            </Icon>
            <FormContent>
              <Form onSubmit={handleSubmit} action="#">
                <FormH1>
                  Got a question? I'd love to hear from you. Send me a message
                  here or via <span onClick={linkTo}>LinkedIn</span>.
                </FormH1>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormInput
                  name="name"
                  onChange={handleChange}
                  type="text"
                  required
                ></FormInput>
                <FormLabel htmlFor="for">Email</FormLabel>
                <FormInput
                  name="email"
                  onChange={handleChange}
                  type="email"
                  required
                />
                <FormLabel htmlFor="for">Message</FormLabel>
                <FormTextArea
                  name="message"
                  onChange={handleChange}
                  type="textarea"
                ></FormTextArea>
                <FormButton type="submit">Send me</FormButton>
              </Form>
            </FormContent>
          </FormWrap>
        </Container>
      </>
    );
  } else {
    return (
      <Container id="contact">
        <FormWrap>
          <Icon to="/">
            <span>M</span> Pasquini
          </Icon>
          <FormContent>
            <SuccessDiv>
              <FormH1>
                Thanks for your message! I will respond as soon as possible.
              </FormH1>
            </SuccessDiv>
          </FormContent>
        </FormWrap>
      </Container>
    );
  }
}
