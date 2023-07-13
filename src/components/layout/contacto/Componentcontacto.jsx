import React, { useContext } from 'react';
import TextBox from './textbox';
import { FormContext } from '../../../contexts/FormContext';

const Componentcontacto = () => {
  const { formValues, setFormValues } = useContext(FormContext);

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formValues.nombre.length < 3 || !/^[a-zA-Z\s]+$/.test(formValues.nombre)) {
      alert("El campo de nombre debe tener al menos 3 caracteres y solo puede contener letras mayúsculas, minúsculas y espacios.");
      return;
    }

    if (!formValues.email.includes("@") || formValues.email.length < 3) {
      alert("El campo de email debe contener una dirección de correo válida.");
      return;
    }

    if (formValues.comentarios.length > 150) {
      alert("El campo de comentarios no puede exceder los 150 caracteres.");
      return;
    }

    // Si todo está ok se envía el formulario
    alert("Formulario enviado correctamente.");

    // Acceder a los valores del formulario
    const { nombre, email, comentarios } = formValues;

    // Realizar acciones adicionales con los valores
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Comentarios:", comentarios);

    // Se resetea
    setFormValues({
      nombre: '',
      email: '',
      comentarios: ''
    });
  };

  return (
    <form className="fmr" id="frmContacto" onSubmit={handleSubmit}>
      <TextBox
        label="Nombre"
        id="nombre"
        name="nombre"
        placeholder="Escribe tu nombre completo"
        value={formValues.nombre}
        onChange={handleChange}
      />
      <TextBox
        label="Email"
        id="email"
        name="email"
        placeholder="juan@gmail.com"
        value={formValues.email}
        onChange={handleChange}
      />
      <div>
        <label htmlFor="comentarios" className="frmLabel">
          Comentarios:
        </label>
        <textarea
          name="comentarios"
          id="comentarios"
          cols="30"
          rows="10"
          placeholder="Escribe hasta 150 caracteres..."
          className="field"
          value={formValues.comentarios}
          onChange={handleChange}
        ></textarea>
      </div>
      <button className="btn__form" type="submit">Enviar</button>
    </form>
  );
};

export default Componentcontacto;
