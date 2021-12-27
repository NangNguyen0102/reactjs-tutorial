import React from "react";
import useInput from "../Hooks/useInput";

const DemoForm = () => {
  const [name, bindName, clearName] = useInput("");
  const [email, bindEmail, clearEmail] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`The name is ${name} and email is ${email}`);
    clearName();
    clearEmail();
  };

  return (
    <div>
      AA
      <form onSubmit={submitHandler}>
        <div>
          <label>Name</label>
          <input {...bindName} type="text" />
        </div>
        <div>
          <label>Email</label>
          <input {...bindEmail} type="text" />
        </div>
        <button>submit</button>
      </form>
    </div>
  );
};

export default DemoForm;
