import React from 'react'

const Contact = () => {
  return (
	<>
    <h1>Contact</h1>
    <div className="contactForm">
      <form>
        <ul>
          <li>
            <input type="text" name="name" placeholder="Name" required />
          </li>
          <li>
            <input type="email" name="email" placeholder="Email" required />
          </li>
          <li>
            <input type="text" name="subject" placeholder="Subject" required />
          </li>
          <li>
            <textarea placeholder="Message" name="message" required></textarea>
          </li>
          <li>
            <input type="submit" value="SEND"/>
          </li>
        </ul>
      </form>
    </div>
  </>
  )
}

export default Contact