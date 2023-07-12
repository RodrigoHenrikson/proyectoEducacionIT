import React, { useState } from 'react';

const Componentcontacto = () => {
  
    const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [comentarios, setComentarios] = useState('');

  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeComentarios = (event) => {
    setComentarios(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nombre.length < 3 || !/^[a-zA-Z\s]+$/.test(nombre)) {
      alert("El campo de nombre debe tener al menos 3 caracteres y solo puede contener letras mayúsculas, minúsculas y espacios.");
      return;
    }

    if (!email.includes("@") || email.length < 3) {
      alert("El campo de email debe contener una dirección de correo válida.");
      return;
    }

    if (comentarios.length > 150) {
      alert("El campo de comentarios no puede exceder los 150 caracteres.");
      return;
    }

    // Si todo esta ok se envía el formulario
    alert("Formulario enviado correctamente.");

    //se resetea
    setNombre('');
    setEmail('');
    setComentarios('');
  };

  return (
    <form className="fmr" id="frmContacto" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre" className="frmLabel">Nombre:</label>
        <input
          type="text"
          id="nombre"
          placeholder="Escribe tu nombre completo"
          className="field"
          value={nombre}
          onChange={handleChangeNombre}
        />
      </div>
      <div>
        <label htmlFor="email" className="frmLabel">Email:</label>
        <input
          type="text"
          id="email"
          placeholder="juan@gmail.com"
          className="field"
          value={email}
          onChange={handleChangeEmail}
        />
      </div>
      <div>
        <label htmlFor="comentarios" className="frmLabel">Comentarios:</label>
        <textarea
          name="comentarios"
          id="comentarios"
          cols="30"
          rows="10"
          placeholder="Escribe hasta 150 caracteres..."
          className="field"
          value={comentarios}
          onChange={handleChangeComentarios}
        ></textarea>
      </div>
      <button className="btn__form">Enviar</button>
    </form>
  );
};

export default Componentcontacto;