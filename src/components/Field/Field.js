import React, { useState } from 'react';
import { toast } from 'react-toastify';
import arrow from './arrow.svg';
import './Field.css';

function Field({type, name, value, label, submitFn}) {

  const [content, setContent] = useState(value); 

  return (
    <>
      <form className="Field">
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
              type="button"
              onClick={() => {
                setContent(content);
                submitFn(content);
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