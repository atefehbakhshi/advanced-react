import { useState, useId } from "react";

const EmailForm = () => {
  const [email, setEmail] = useState("");

  //! Don't use "useId" hook for creating key for array items
  const id = useId();

  return (
    <div>
      <label htmlFor={`${id}-email`}>Email</label>
      <input
        id={`${id}-email`}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor={`${id}-name`}>Name</label>
      <input id={`${id}-name`} type="text" />
    </div>
  );
};

export default EmailForm;
