import { useState } from "react";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const { register, handleSubmit } = useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="Email">
          Email:
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: true })}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="Password">
          Password:
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: true })}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
