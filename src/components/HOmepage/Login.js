import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Checkbox from 'antd/es/checkbox';
import Input from 'antd/es/input';
import 'antd/dist/antd.css';

import styles from './Login.module.scss';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [mouseDownInside, setMouseDownInside] = useState(false);
  const containerRef = useRef(null);

  if (!props.isOpen) {
    return null; // If isOpen is false, don't render anything
  }

  const handleOverlayMouseDown = () => {
    setMouseDownInside(true);
  };

  const handleOverlayMouseUp = (e) => {
    if (mouseDownInside && containerRef.current && !containerRef.current.contains(e.target)) {
      props.onClose();
    }
    setMouseDownInside(false);
  };

  const handleOverlayMouseMove = () => {
    setMouseDownInside(false);
  };

  const validateInputs = () => {
    const newErrors = { email: '', password: '' };

    // Validate email
    if (!email) {
      newErrors.email = 'Email cannot be empty.';
    } else if (!email.includes('@')) {
      newErrors.email = 'Email must contain @.';
    } else if (email.includes(',')) {
      newErrors.email = 'Email must not contain a comma.';
    }

    // Validate password (allow only alphanumeric characters)
    if (!password) {
      newErrors.password = 'Password cannot be empty.';
    } else {
      const passwordRegex = /^[a-zA-Z0-9]*$/;
      if (!passwordRegex.test(password)) {
        newErrors.password = 'Password must contain only alphanumeric characters.';
      }
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === '');
  };

  const handleSubmit = () => {
    if (validateInputs()) {
      console.log('Form submitted successfully');
      alert('Login successful!');
      // Handle successful form submission here
      // For example: props.onSuccess();
    } else {
      console.log('Form has errors');
    }
  };

  return (
    <div
      className={styles.overlay}
      onMouseDown={handleOverlayMouseDown}
      onMouseUp={handleOverlayMouseUp}
      onMouseMove={handleOverlayMouseMove}
    >
      <div className={styles.loginContainer} ref={containerRef}>
        <div className={styles.formContainer}>
          <h1 className={styles.heroTitle}>LOGIN</h1>

          <div className={styles.emailContainer}>
            <h2 className={styles.emailTitle}>Email</h2>
            <Input
              className={cn(styles.emailInput, { [styles.error]: errors.email })}
              placeholder="Please input here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className={styles.errorText}>{errors.email}</div>}
          </div>

          <div className={styles.passwordContainer}>
            <h2 className={styles.passwordTitle}>Password</h2>
            <Input
              className={cn(styles.passwordInput, { [styles.error]: errors.password })}
              placeholder="Please input here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <div className={styles.errorText}>{errors.password}</div>}
          </div>

          <div className={styles.rememberMeContainer}>
            <Checkbox className={styles.checkbox}></Checkbox>
            <div className={styles.rememberMeText}>REMEMBER ME</div>
          </div>

          <button className={styles.confirmButton} onClick={handleSubmit}>
            CONFIRM
          </button>
          <button className={styles.closeButton} onClick={props.onClose}>
            X
          </button>
        </div>

        <div className={styles.box} style={{ '--src': `url(${'/assets/fc1237066a4be53ae9a996f40041bbbb.svg'})` }} />
      </div>
    </div>
  );
}

Login.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Login;
