const LoginForm = ({ formData, handleLogin, onChange, loginVisible, setLoginVisible }) => (
  <>
    {loginVisible 
      ? <form onSubmit={handleLogin}>
          <div>
            username <input
              type="text"
              value={formData.username}
              name="Username"
              onChange={({ target }) => onChange.setUsername(target.value)}
            />
          </div>
          <div>
            password <input
              type="password"
              value={formData.password}
              name="Password"
              onChange={({ target }) => onChange.setPassword(target.value)}
            />
          </div>
          <button type="submit">login</button>
          <button type="button" onClick={() => setLoginVisible(false)}>cancel</button>
        </form>
      : <button onClick={() => setLoginVisible(true)}>log in</button>
    }
  </>    
)

export default LoginForm