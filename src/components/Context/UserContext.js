import { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = getCookie('token');
    if (token) {
      fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: token })
      })
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          }
          return;
        })
        .then((user) => {
          if (user) {
            setUser(user);
            console.log('User logged in: ', user);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
