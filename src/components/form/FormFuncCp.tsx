import React, { useState } from 'react';

interface FormValues {
  name: string;
  email: string;
  telephone: string;
}

const MyForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    telephone: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(formValues);
    // submit form data here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          required
        />
      </label>

      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          required
        />
      </label>

      <label htmlFor="telephone">
        Telephone:
        <input
          type="tel"
          name="telephone"
          value={formValues.telephone}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
