import React, { useEffect, useRef, useState } from 'react';
import '../styles/Home.css';

export default function Home() {
  const servicesRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) observer.unobserve(servicesRef.current);
    };
  }, []);

  return (
    <>
      <main>
        <section className="hero">
 <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="https://res.cloudinary.com/dliyfpqqu/image/upload/v1754760557/qo1rgbnt3m3f7wouibjp.jpg" 
      >
        <source
          src="https://res.cloudinary.com/dliyfpqqu/video/upload/v1754837283/khx3s1zbo9slztarhliw.mp4"
          type="video/mp4"
        />
        Seu navegador não suporta vídeo.
      </video>
          <div className="hero-content">
            <h1>Luxurious Salon Experience</h1>
            <p>Transformando Seu Visual com Excelência</p>
            <a
              href="https://wa.me/numeroaqui?text=Olá!%20Gostaria%20de%20marcar%20um%20horário."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              Reserve seu horário
            </a>
          </div>
        </section>

        <section
          className={`services ${visible ? 'visible' : ''}`}
          ref={servicesRef}
        >
          <h2>Nossos Serviços</h2>
          <div className="service-list">
            {[
              { name: 'Sobrancelha', img: 'https://res.cloudinary.com/dliyfpqqu/image/upload/v1754761043/et6tmygzw2kaw36il723.jpg' },
              { name: 'Lábios', img: 'https://res.cloudinary.com/dliyfpqqu/image/upload/v1754761043/txjbda5smonyynmtlvwa.jpg' },
              { name: 'Maquiagem', img: 'https://res.cloudinary.com/dliyfpqqu/image/upload/v1754760079/jiotns1ewgm3ivoy3cat.jpg' },
              { name: 'Facial', img: 'https://res.cloudinary.com/dliyfpqqu/image/upload/v1754759644/bifpfrxfegsdtxm0noc5.jpg' },
              { name: 'Massagem', img: 'https://res.cloudinary.com/dliyfpqqu/image/upload/v1754761042/vvccy8rznx9yr47f6r1w.jpg' },
              { name: 'Cilios', img: 'https://res.cloudinary.com/dliyfpqqu/image/upload/v1754761043/et6tmygzw2kaw36il723.jpg' },
              { name: 'Depilação', img: 'https://res.cloudinary.com/dliyfpqqu/image/upload/v1754761041/qvapapxryrvqfyq7xcc7.jpg' },
              { name: 'Unhas', img: 'https://res.cloudinary.com/dliyfpqqu/image/upload/v1754761043/txjbda5smonyynmtlvwa.jpg' }
            ].map((service) => (
              <div key={service.name} className="service-card">
                <img src={service.img} alt={service.name} />
                <h3>{service.name}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="welcome-banner">
          <h2>Conheça o que temos de melhor para você</h2>
          <br />
          <br />
        </section>

        <section className="gallery">
          <h2>Nossa Galeria</h2>
          <div className="gallery-grid">
            {[
              'https://res.cloudinary.com/dliyfpqqu/image/upload/v1754762090/cghpb8anmc0pn4uxixpn.jpg',
              'https://res.cloudinary.com/dliyfpqqu/image/upload/v1754762086/n9cjgwkef1wmvitzx9gc.jpg',
              'https://res.cloudinary.com/dliyfpqqu/image/upload/v1754762084/vgowhukhjhnidguolala.jpg',
              'https://res.cloudinary.com/dliyfpqqu/image/upload/v1754762084/goarhjxtzfn8xhsh5gux.jpg',
              'https://res.cloudinary.com/dliyfpqqu/image/upload/v1754762083/so377clyrnhrtbvggj2e.jpg',
              'https://res.cloudinary.com/dliyfpqqu/image/upload/v1754760424/ptscwdnoyijmo2jjva9o.webp'
            ].map((imgUrl, i) => (
              <div key={i} className="gallery-item">
                <img src={imgUrl} alt={`Gallery ${i + 1}`} />
              </div>
            ))}
          </div>
        </section>

        <section className="reviews">
          <h2>Reviews do Google</h2>
          <div className="reviews-grid">
            <div className="review-card">
              <p>"Alex, May e Sobia foram incríveis."</p>
              <cite>- Amina Samy, há 1 ano</cite>
            </div>
            <div className="review-card">
              <p>"Ótima experiência, equipe muito simpática, Maylin, a manicure, é maravilhosa."</p>
              <cite>- Mihaela Rãducanu, há 1 ano</cite>
            </div>
            <div className="review-card">
              <p>"O salão é muito limpo e aconchegante e o pessoal é muito amigável… Lara fez um trabalho incrível com a cor do meu cabelo, ela foi muito atenciosa e o resultado ficou muuuito melhor do que eu esperava ✨"</p>
              <cite>- Mariam AlZawawi, há 1 ano</cite>
            </div>
            <div className="review-card">
              <p>"Que salão incrível e tão amigável."</p>
              <cite>- Steph Hindson, há 1 ano</cite>
            </div>
          </div>
          <p className="reviews-footer">
            <small>Baseado em 77 avaliações — powered by Google</small>
          </p>
        </section>

        <section className="contact-banner">
          <div className="contact-item">
            <h3>Contatos</h3>
            <p>T: 052 281 4466</p>
            <p>contact@salon.com</p>
          </div>
          <div className="contact-item">
            <h3>Horário</h3>
            <p>Mon to Sun</p>
            <p>11:00 am - 9 pm</p>
          </div>
          <div className="contact-item">
            <h3>Localização</h3>
            <p>Lisboa</p>
            <p>Al Waleed Garden building,</p>
            <p>Ground floor.</p>
          </div>
        </section>
      </main>

      <a
        href="https://wa.me/numeroaqui?text=Olá!%20Gostaria%20de%20marcar%20um%20horário."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Marque seu horário pelo WhatsApp"
      >
        WhatsApp
      </a>
    </>
  );
}
