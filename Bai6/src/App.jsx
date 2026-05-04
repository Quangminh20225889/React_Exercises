import { useState } from "react";

function App() {
  const [passWord, setPassWord] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(email);
    alert(passWord);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="userEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="userPassWord"
          value={passWord}
          onChange={(e) => setPassWord(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
