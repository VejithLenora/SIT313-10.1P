import React from 'react';

function PasswordInput() {
  return (
    <div className="form-group">
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" placeholder="Enter your password" required />
    </div>
  );
}

export default PasswordInput;
