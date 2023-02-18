import React, { Component, FormEvent } from 'react';

interface FormState {
  name: string;
  lastName: string;
  email: string;
  telephone: string;
}

class Form extends Component<object, FormState> {
  constructor(props: object) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      email: '',
      telephone: '',
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<FormState, keyof FormState>);
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(this.state);
  };

  render() {
    const { name, lastName, email, telephone } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="lastName">
            Last Name:
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="telephone">
            Telephone:
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={telephone}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
