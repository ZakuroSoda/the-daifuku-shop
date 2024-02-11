import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Link from '../../components/Link/Link';
import './Settings.css';
import Field from '../../components/Field/Field';

function Settings({ page, setPage, user, setUser }) {

  function handleUpdate(field, value) {
    fetch('/api/user/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': user.token
      },
      body: JSON.stringify({ user, field, value })
    }).then(res => {
      if (res.status === 200) {
        toast.dismiss();
        toast.success('Updated!');
      } else {
        toast.dismiss();
        toast.error('Something went wrong. Please try again.');
        return
      }
      return res.json();
    })
    .then(user => {
      if (!user) return;
      setUser(user);
    })
  }

  if (page !== 'settings') return null;
  return (
    <>
      <div className="Settings">
        <div className="settings-header">Account Settings</div>
        <Field
          type="email"
          name="email"
          value={user.email}
          label="Email"
          submitFn={handleUpdate}
        />
        <Field
          type="text"
          name="full_name"
          value={user.full_name}
          label="Full Name"
          submitFn={handleUpdate}
        />
        <Field
          type="text"
          name="country"
          value={user.country}
          label="Country"
          submitFn={handleUpdate}
        />
        <Field
          type="text"
          name="state_city"
          value={user.state_city}
          label="State/City"
          submitFn={handleUpdate}
        />
        <Field
          type="text"
          name="address"
          value={user.address}
          label="Address"
          submitFn={handleUpdate}
        />
        <Field
          type="number"
          name="postal_code"
          value={user.postal_code}
          label="Postal Code"
          submitFn={handleUpdate}
        />
        <Field
          type="text"
          name="phone_number"
          value={user.phone_number}
          label="Phone Number"
          submitFn={handleUpdate}
        />
        <Field 
          type="text"
          name="credit_card_number"
          value={user.credit_card_number}
          label="Credit Card Number"
          submitFn={handleUpdate}
        />
        <Field 
          type="text"
          name="credit_card_cvv"
          value={user.credit_card_cvv}
          label="CVV"
          submitFn={handleUpdate}
        />
        <Field 
          type="text"
          name="credit_card_expiration"
          value={user.credit_card_expiration}
          label="Expiry Date"
          submitFn={handleUpdate}
        />
      </div>
    </>
  );
}

export default Settings;