import React, { useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada!');
  };

  return (
    <main className="contact">
      <section className="contact-intro">
        <h1>Contato</h1>
        <p>Entre em contato conosco para agendar seu horário ou tirar dúvidas.</p>
      </section>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Seu nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Seu e-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          placeholder="Sua mensagem"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>

      <section className="contact-map">
<iframe
  title="Google Maps - Lisboa"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.6073447426213!2d-9.13849168468115!3d38.70711077965009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331e669a94e3%3A0x400ebbde490a320!2sPra%C3%A7a%20do%20Com%C3%A9rcio%2C%20Lisboa!5e0!3m2!1sen!2spt!4v1689555555555!5m2!1sen!2spt"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
      </section>
    </main>
  );
}
