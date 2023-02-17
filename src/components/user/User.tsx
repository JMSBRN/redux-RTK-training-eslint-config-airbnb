import React from 'react';
import { IUser } from '../../interfaces';

interface IUserProps {
  user: IUser;
}
const User = (props: IUserProps) => {
  const { user } = props;
  const { name, email } = user;
  return (
    <div>
      <div>{name}</div>
      <div>{email}</div>
    </div>
  );
};

export default User;
