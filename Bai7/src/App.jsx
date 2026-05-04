import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email.trim(),
  );
  const passwordValid = password.length >= 6;

  const validation = emailValid && passwordValid;

  const error = {
    email: !email.trim()
      ? "Email không được để trống"
      : !emailValid
        ? "Email không hợp lệ"
        : "",

    password: password && !passwordValid ? "Password phải từ 6 ký tự" : "",
  };

  function handleSubmit(event) {
    event.preventDefault();

    if (!validation) return;

    alert("Submit thành công");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error.email && <p>{error.email}</p>}

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error.password && <p>{error.password}</p>}

        <button type="submit" disabled={!validation}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
