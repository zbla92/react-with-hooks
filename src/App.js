import React, { useEffect } from 'react';
import { useForm } from './useForm';

function App() {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: ''
  });

  useEffect(() => {
    console.log('render');
  }, [values.password, values.firstName]);
  return (
    <div className='App container'>
      <input
        name='email'
        placeholder='Email'
        value={values.email}
        onChange={handleChange}
      />
      <input
        name='firstName'
        placeholder='First Name'
        value={values.firstName}
        onChange={handleChange}
      />
      <input
        type='password'
        name='password'
        value={values.password}
        onChange={handleChange}
        placeholder='Password'
      />
    </div>
  );
}

export default App;
