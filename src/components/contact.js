export const Contact = () => {
  return `
    <section class="section contact" id="contacto">
      <div class="container">
        <h2 class="section-title">¿Tienes dudas? Empecemos a hablar de tu proyecto.</h2>
        <div class="contact-wrapper fade-in">
          <form class="contact-form" onsubmit="event.preventDefault(); alert('Mensaje enviado (Simulado)');">
            <div class="form-group">
              <label for="name">Nombre</label>
              <input type="text" id="name" placeholder="Tu nombre" required>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" placeholder="tucorreo@ejemplo.com" required>
            </div>
             <div class="form-group">
              <label for="phone">Teléfono (Opcional)</label>
              <input type="tel" id="phone" placeholder="+34 600...">
            </div>
            <div class="form-group">
              <label for="message">Mensaje</label>
              <textarea id="message" rows="5" placeholder="Cuéntanos sobre tu proyecto..." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block">ENVIAR CONSULTA</button>
          </form>
        </div>
      </div>
    </section>
  `;
};
