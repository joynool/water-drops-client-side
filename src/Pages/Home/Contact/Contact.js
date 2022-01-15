import React from 'react'
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap'
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

function Contact ()
{
    function sendEmail (e)
    {
        e.preventDefault();
        emailjs.sendForm('service_2ifmj29', 'template_ervlmdf', e.target, 'user_ld8ZnYI1s2eCzu8Mgj7Hi')
            .then(res =>
            {
                console.log(res);
                swal("Your message successfully delivered!", {
                    icon: "success",
                });
                e.target.reset();
            })
            .catch(err => console.log(err));
    }

    return (
        <div id='contact' className="bg-light my-3 py-3">
            <h2 className="fw-bold text-center">
                <u>Leave </u><span className="text-info"><u>Your</u></span><u> Message</u>
            </h2>
            <Container className='p-5 my-5 border rounded text-center shadow'>
                <Form onSubmit={sendEmail}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Your Name"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Your Name" required />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Your Email" className='mb-3'>
                        <Form.Control type="email" placeholder="email@email.com" required />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" label="Your Message">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a message here"
                            required
                            style={{ height: '150px' }}
                        />
                    </FloatingLabel>
                    <Button type='submit' variant="outline-dark" className="rounded-pill mt-5 px-5 py-3 shadow">Send Message</Button>
                </Form>
            </Container>
        </div>
    )
}

export default Contact
