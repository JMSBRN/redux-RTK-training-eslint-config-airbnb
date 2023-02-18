import React, { useRef } from 'react';

interface FormProps {
  onSubmit: (values: { [key: string]: string }) => void;
}

const FormRefs: React.FC<FormProps> = ({ onSubmit }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(formRef.current as HTMLFormElement);
    const values: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      values[key] = value.toString();
    });
    onSubmit(values);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input id="name" type="text" name="name" />
      </label>
      <br />
      <label htmlFor="email">
        Email:
        <input id="email" type="email" name="email" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormRefs;
