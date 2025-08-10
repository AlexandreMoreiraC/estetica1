import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <main className="about">
      <section className="about-intro">
        <h1>Nossa História</h1>
        <p>Desde a nossa inauguração, a Luxurious Salon  tem sido um refúgio de beleza e bem-estar, onde cada detalhe é pensado para proporcionar uma experiência única e transformadora. Inspirados pela delicadeza e beleza natural dos recifes de coral, criamos um ambiente sereno e sofisticado que acolhe nossos clientes como parte da família.</p>
        <p>Aqui, cada corte, coloração, tratamento e cuidado é feito com paixão e respeito, valorizando sua individualidade e realçando sua beleza natural. No Corail Beauty Salon, seu bem-estar é nossa maior prioridade, porque acreditamos que a verdadeira beleza nasce do equilíbrio entre saúde, cuidado e estilo.</p>
        </section>

      <section className="team">
        <h2>Nossa Equipe</h2>
        <div className="team-member">
          <img src="https://res.cloudinary.com/dliyfpqqu/image/upload/v1754840123/xdknik1u5moqwdmtkyen.jpg" alt="Kamal" />
          <h3>Eliza</h3>
          <p>Diretor Técnico de Cores</p>
        </div>
        <div className="team-member">
          <img src="https://res.cloudinary.com/dliyfpqqu/image/upload/v1754840123/bkybqsagas9aexkgmclh.jpg" alt="Lara" />
          <h3>Lucas</h3>
          <p>Colorista Master e Especialista em Cuidados Capilares</p>
        </div>
        <div className="team-member">
          <img src="https://res.cloudinary.com/dliyfpqqu/image/upload/v1754840123/rmfaibrd36c8cxkwyzws.png" alt="Alex" />
          <h3>Sara</h3>
          <p>Artista Sênior de Unhas</p>
        </div>
        <div className="team-member">
          <img src="https://res.cloudinary.com/dliyfpqqu/image/upload/v1754840124/acclfwcraoefhddwgnor.webp" alt="Thuan" />
          <h3>Thuani</h3>
          <p>Técnico Sênior de Unhas</p>
        </div>

      </section>
    </main>
  );
}
