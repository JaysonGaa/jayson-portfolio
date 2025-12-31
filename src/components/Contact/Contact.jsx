import React, { useRef, useState } from 'react'
import './Contact.css'
import TextCard from '../TextCard/TextCard.jsx'
import emailjs from '@emailjs/browser'

/**
 * Contact Component
 * 
 * Contact section with EmailJS-powered form and social links.
 * Allows visitors to send messages directly and access LinkedIn, GitHub, and email.
 */
const Contact = () => {
  // Reference to the form element for EmailJS
  const form = useRef();
  
  // State management for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  /**
   * Handles form submission via EmailJS
   * Prevents default form behavior, sends email, and provides user feedback
   */
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Send form data to EmailJS service
    emailjs
      .sendForm('service_027cmwp', 'template_yntuun6', form.current, {
        publicKey: 'CEK2DhmnmIZipS2mN',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmitStatus('success');
          setIsSubmitting(false);
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSubmitStatus('error');
          setIsSubmitting(false);
        },
      );
  };

  return (
    <div className='contacts-page'>

      {/* Introduction text */}
      <div className='desc'>
        <h2>I'm always interested in hearing about new opportunities and collaborations. 
          Feel free to reach out through the form below or any of the channels below.</h2>
      </div>  

      {/* Contact form section */}
      <div className='contact-form'>
        <h2 className='subhead'>Contact Form</h2>
        <form ref={form} onSubmit={sendEmail}>
          <ul>

            {/* Name input */}
            <li className='half'>
              <input 
              type="text" 
              name="name" 
              placeholder="Name"
              required
              />
            </li>

            {/* Email input */}
            <li className='half'>
              <input 
              type="email" 
              name="email" 
              placeholder="Email"
              required
              />
            </li>

            {/* Subject input */}
            <li>
              <input 
              type="text" 
              name="subject" 
              placeholder="Subject"
              required
              />
            </li>

            {/* Message textarea */}
            <li>
              <textarea 
              name="message" 
              placeholder="Message"
              required
              />
            </li>
            
            {/* Submit button with loading state */}
            <li className='submit-btn'>
              <input 
                type="submit" 
                className='btn' 
                value={isSubmitting ? "SENDING..." : "SEND"} 
                disabled={isSubmitting}
              />
            </li>

            {/* Success message */}
            {submitStatus === 'success' && (
              <li style={{color: 'green', listStyle: 'none'}}>
                Message sent successfully!
              </li>
            )}

            {/* Error message */}
            {submitStatus === 'error' && (
              <li style={{color: 'red', listStyle: 'none'}}>
                Failed to send message. Please try again.
              </li>
            )}
            
          </ul>
        </form>
      </div>

      {/* Social links and contact information */}
      <h2 className='subhead'>Contact and Links</h2>
      <div className='contacts'>
        {/* Email card with copy functionality */}
        <TextCard 
        title = 'Email'
        description = 'jaysonmyles.gaa@gmail.com'
        copyText = 'jaysonmyles.gaa@gmail.com'
        />

        {/* LinkedIn profile link */}
        <TextCard 
        title = 'LinkedIn'
        description = 'www.linkedin.com/in/jayson-gaa'
        link = "https://www.linkedin.com/in/jayson-gaa"
        linkText = 'View my LinkedIn →'
        />

        {/* GitHub profile link */}
        <TextCard 
        title = 'GitHub'
        description = 'https://github.com/JaysonGaa'
        link = "https://github.com/JaysonGaa"
        linkText = 'View my GitHub →'
        />

      </div>

    </div>
  )
}

export default Contact