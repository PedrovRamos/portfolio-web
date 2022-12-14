/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import '../stylesheets/FormStyle.css';

import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const form = useRef();

  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [formState, setFormState] = useState({
    userEmail: '',
    userName: '',
    userMessage: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();

    const handleClick = () => {
      setFormState({
        userEmail: '',
        userName: '',
        userMessage: '',
      });
      setIsEmailSent(true);
    };

    emailjs.sendForm('service_jgyyh39', 'template_sy8qwln', form.current, '1cqzQ9zBNrL3qJHub')
      .then((result) => {
        console.log(result.text);
        handleClick();
      }, (error) => {
        console.log(error.text);
      });
  };

  const handleChange = ({ target }) => {
    console.log(target.name);
    console.log(target.value);
    setFormState({ ...formState, [target.name]: target.value });
  };

  useEffect(() => {
    if (/\S+@\S+\.\S+/.test(formState.userEmail) && formState.userMessage.length > 0
    && formState.userMessage.length > 0) {
      setIsButtonDisabled(false);
    } else (setIsButtonDisabled(true));
  }, [formState]);

  return (
    <form id="form-container" className="border p-3 rounded shadow" style={ { width: '1000px' } } ref={ form } onSubmit={ sendEmail }>
      { isEmailSent && <div className="alert alert-success alert-dismissible" role="alert">
        Sua mensagem foi enviada com sucesso!
      </div> }
      <div className="mb-3">
        <label htmlFor="nameInput" className="form-label">Nome completo</label>
        <input onChange={ handleChange } value={ formState.userName } name="userName" type="text" className="form-control" id="nameInput" placeholder="Seu nome aqui" />
      </div>
      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label">Email</label>
        <input onChange={ handleChange } value={ formState.userEmail } name="userEmail" type="email" className="form-control" id="emailInput" placeholder="nome@exemplo.com" />
      </div>
      <div className="mb-3">
        <label htmlFor="messageInput" className="form-label">Mensagem</label>
        <textarea onChange={ handleChange } value={ formState.userMessage } name="userMessage" style={ { height: '190px' } } placeholder="Escreva sua mensagem aqui" className="form-control" id="messageInput" rows="3" />
      </div>
      <div className="col-auto">
        <button disabled={ isButtonDisabled } type="submit" className="btn btn-primary mb-3">Enviar</button>
      </div>
    </form>
  );
}
