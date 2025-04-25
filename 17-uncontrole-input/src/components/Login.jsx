export default function Login() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: e.target.username.value,
      password: e.target.password.value,
    }
    console.log({userData});

  };

  return (
      <>
        <h1>Login form</h1>
        <form onSubmit={handleFormSubmit} className="login">
          <label htmlFor="">Username:
            <input type="text" name="username"/>
          </label>
          <label htmlFor="">Password:
            <input type="password" name="password"/>
          </label>
          <button type="submit">Login</button>
        </form>
      </>
  );
}