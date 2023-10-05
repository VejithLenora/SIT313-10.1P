import React from 'react';

function EmailInput() {
  return (
    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Enter your email" required />
    </div>
  );
}

export default EmailInput;
