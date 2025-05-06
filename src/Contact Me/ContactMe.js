import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import styles from "./ContactMeStyles.module.css";

function ContactMe() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <h2 id="Contact" className={styles.ContactMeFont}>
        <span className={styles.ContactMeHeading}>|-</span> Contact Me {""}
        <span className={styles.ContactMeHeading}>-|</span>
      </h2>
      <div className={styles.outerBorder}>
        <div className={styles.innerBorder}>
          <div className={styles.FormBorder}>
            <Form
              className="form-inline"
              action="https://formspree.io/f/mrbewrow"
              method="post"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Row className="mb-3 mx-4">
                <Form.Group className={styles.formGroup} as={Col} md="3">
                  <Form.Label className={styles.formLabel}>Name:</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Your Name"
                    className={styles.inputBox}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3 mx-4">
                <Form.Group className={styles.formGroup} as={Col} md="3">
                  <Form.Label className={styles.formLabel}>Email:</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="email"
                    placeholder="Email"
                    className={styles.inputBox}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter your email adress.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3 mx-4">
                <Form.Group className={styles.formGroup} as={Col} md="3">
                  <Form.Label className={styles.formLabelMessage}>
                    Message:
                  </Form.Label>
                  <Form.Control
                    className={styles.inputBox}
                    type="text"
                    placeholder="Message"
                    name="message"
                    id="message"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your message.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Button type="submit" className={styles.ButtonStyle}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
