import React from 'react';
import './form.css';
import FormInput from '../../components/FormInput';

function Form() {
  const [values, setValues] = React.useState({
    username: '',
    email: '',
    data: ''
  });

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'username',
      errorMessage: "Username should be more than 3 characters and shouldn't include any special character!",
      label: 'Username',
      pattern: '^[A-Za-zА-Яа-я0-9]{3,}$',
      required: true
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'email',
      errorMessage: 'It should be a valid email address!',
      label: 'email',
      required: true
    },
    {
      id: 3,
      name: 'date',
      type: 'date',
      placeholder: 'order date',
      errorMessage: '',
      label: 'select a date'
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className='app'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Watchmaker</h1>
        {inputs.map((input) => (
          <FormInput key={input.id}
            {...input}
            values={values[input.name]}
            onChange={onChange} />
        ))}
        <button className='btn'>call the master</button>
      </form>
    </div>
  );
}

export default Form;
