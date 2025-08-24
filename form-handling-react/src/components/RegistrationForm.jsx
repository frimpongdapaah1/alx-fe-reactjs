import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }

    setError("");
    alert("User registered: " + JSON.stringify(formData, null, 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Registration Form</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <label>Username:</label>
        <input name="username" value={formData.username} onChange={handleChange} />
      </div>

      <div>
        <label>Email:</label>
        <input name="email" type="email" value={formData.email} onChange={handleChange} />
      </div>

      <div>
        <label>Password:</label>
        <input name="password" type="password" value={formData.password} onChange={handleChange} />
      </div>

      <button type="submit">Register</button>
    </form>
  );
}
