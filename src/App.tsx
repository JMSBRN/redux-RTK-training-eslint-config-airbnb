import React from 'react';
import { useAppDispatch, useAppSelector } from './app/appHooks';
import Button from './components/button/Button';
import Clock from './components/clock/Clock';
import ClockFuncCp from './components/clock/ClockFuncCp';
import Form from './components/form/Form';
import MyForm from './components/form/FormFuncCp';
import FormRefs from './components/form/FormRefs';
import User from './components/user/User';
import { selectUser, setUser } from './features/user/userSlice';

const App = () => {
  const { user } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      <Form />
      <Clock />
      <ClockFuncCp />
      <User user={user} />
      <Button
        onClick={() => dispatch(setUser({ name: 'user', email: 'email' }))}
        text="button"
      />
      <MyForm />
      <br />
      <FormRefs
        onSubmit={() => {
          // eslint-disable-next-line no-console
          console.log('submit');
        }}
      />
    </div>
  );
};

export default App;
