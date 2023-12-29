import React, { useState } from 'react';

function Link({ href, content, color, bold, ...children }) {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={href}
      style={{
        color: color,
        fontWeight: bold ? 'bold' : 'normal',
        textDecoration: 'none',
        position: 'relative',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...children}
    >
      {content}
      <span
        className='underline'
        style={{
          display: 'block',
          width: hover ? '100%' : '0',
          height: '1px',
          position: 'absolute',
          backgroundColor: color,
          bottom: '-2px',
          left: '0',
          transition: 'width 0.3s ease'
        }}
      />
    </a>
  )
}

export default Link;