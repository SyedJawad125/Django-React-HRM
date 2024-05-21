import React from 'react'

const contact = () => {
  return (
    <div class='container' style={{ marginLeft: '200px' }}  >
        <h2 class='mt-3'>Contact Us</h2>
        <form action="action_page.php" >

          <label for="fname" class='mt-3'>First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />

          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

          <label for="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>

          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={ {height: '150px'} }></textarea>

          <input type="submit" value="Submit" />

        </form>
      </div>
  )
}

export default contact