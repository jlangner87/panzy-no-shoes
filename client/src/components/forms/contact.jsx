function ContactForm () {
  return (
    <div className="contact-form">
      <form action="submit">
        <h2>Send a Message</h2>
        <label htmlFor="fname"> First Name</label>
        <input type="text" name="fname" id="fname" value={"Sample State"} placeholder="First Name"/>
        <label htmlFor="lname"> Last Name</label>
        <input type="text" name="lname" id="lname" value={"Sample State"} placeholder="Last Name"/>
        <br/>
        <label htmlFor="subject">Subject</label>
        <select name="subject" id="subject">
          <option value="">Previous Order Questions</option>
          <option value="">Product Questions</option>
          <option value="">Something Else</option>
        </select>
        <br/>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="10" placeholder="Youe Message Here"></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm