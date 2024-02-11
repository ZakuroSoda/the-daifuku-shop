import React, { useState } from 'react';
import { toast } from 'react-toastify';
import arrow from './arrow.svg';
import './Field.css';

function Field({type, name, value, label, submitFn}) {

  const [content, setContent] = useState(value); 

  function handleSubmit(e) {
    e.preventDefault();
    submitFn(name, content);
  }

  return (
    <>
      <form className="Field" onSubmit={(e) => handleSubmit(e)}>
          <div className="Field-row">
            <input
              className="Field-input"
              type={type}
              id={name}
              name={name}
              placeholder=" "
              autoComplete="off"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
            <label className="Field-label" htmlFor="email">
              {label}
            </label>
            <button
              className="Field-submit"
              type="submit"
              onClick={(e) => {
                setContent(content);
                handleSubmit(e);
              }}
            >
              <img className="Field-submit-icon" src={arrow} alt="" />
            </button>
          </div>
        </form>
    </>
  );
}

export default Field;