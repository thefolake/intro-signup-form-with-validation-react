import './App.scss';
import Input from "./components/Input";
import { useState } from "react";

const App = () => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const [errorMessage, setErrorMessage] = useState('jkhj');

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = (value) => {
        const errors = {};
        const emailRegex = /\S+@\S+\.\S+/;

        if (!value.firstName) {
            errors.firstName = 'First Name cannot be empty'
        }

        if (!value.lastName) {
            errors.lastName = 'Last Name cannot be empty'
        }

        if (!value.email) {
            errors.email = 'Email cannot be empty'
        } else if (!emailRegex.test(value.email)) {
            errors.email = 'Looks like this is not an email'
        }

        if (!value.password) {
            errors.password = 'Password cannot be empty'
        }

        return errors;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
        setErrorMessage(validateForm(state))
    };

  return (
    <main className="container">
      <div className='left-content'>
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
          but understanding how developers think is invaluable.
        </p>
      </div>

      <div className="right-content">
        <div className='alert'>Try it free 7 days <span>then $20/mo. thereafter</span></div>
        <form action="#">
            <Input
                placeholder='First Name'
                errorMessage={errorMessage.firstName}
                name='firstName'
                value={state.firstName}
                onChange={handleInputChange}
            />
            <Input
                placeholder='Last Name'
                errorMessage={errorMessage.lastName}
                name='lastName'
                value={state.lastName}
                onChange={handleInputChange}
            />
            <Input
                placeholder='Email Address'
                errorMessage={errorMessage.email}
                name='email'
                value={state.email}
                onChange={handleInputChange}
            />
            <Input
                placeholder='Password'
                errorMessage={errorMessage.password}
                name='password'
                value={state.password}
                onChange={handleInputChange}
            />
            <button onClick={handleSubmit}>Claim your free trail</button>
            <p className='terms-and-conditions'>By Clicking the button, you are agreeing to <a href="#">Terms and Services</a></p>

        </form>
      </div>
    </main>
  );
}

export default App;
