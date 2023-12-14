import React from 'react';

function HelpSupportPage() {
 const handleSubmit = (event) => {
    event.preventDefault();
    alert('Support request submitted!');
 };

 return (
    <div>
      <h1>Help & Support</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
 );
}

export default HelpSupportPage;