import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Link from '../../components/Link/Link';
import './Settings.css';
import Field from '../../components/Field/Field';

function Settings({ page, setPage, user, setUser }) {

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
          submitFn={() => {}}
        />
        <Field
          type="text"
          name="fullName"
          value={user.full_name}
          label="Full Name"
          submitFn={() => {}}
        />
      </div>
    </>
  );
}

export default Settings;