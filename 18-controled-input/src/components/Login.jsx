import {useState} from "react";

export default function Login() {
  const [data, setData] = useState({username: "", password: ""});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: data.username,
      password: data.password,
    };
    console.log({userData});
    setData({username: "", password: ""});
  };

  const handleImportSubmit = (e, name) => {
    setData({...data, [name]: e.target.value})
  }

  return (
      <>
        <h1>Login form</h1>
        <form onSubmit={handleFormSubmit} className="login">
          <label htmlFor="">Username:
            <input type="text"
                   value={data.username}
                   onChange={(e) => handleImportSubmit(e, 'username')}
            />
          </label>
          <label htmlFor="">Password:
            <input type="password"
                   value={data.password}
                   onChange={(e) => handleImportSubmit(e, 'password')}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </>
  );
}