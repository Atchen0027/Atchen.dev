export const Testimonials = () => {
  return `
    <section class="section testimonials" id="testimonios">
      <div class="container">
        <h2 class="section-title text-center fade-in">Lo que dicen otros creadores</h2>
        
        <div class="testimonials-grid fade-in">
          <!-- Placeholder Testimonials -->
          <div class="testimonial-card">
            <div class="quote-icon">“</div>
            <p class="testimonial-text">
              Antes perdía horas contestando DMs para vender. Ahora mi tienda vende sola mientras yo estoy en el taller. Es la mejor inversión que he hecho.
            </p>
            <div class="testimonial-author">
              <strong>Marta G.</strong>
              <span>Ceramista</span>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="quote-icon">“</div>
            <p class="testimonial-text">
              Atchen entiende lo que necesitamos. No es una web gigante y complicada, es justo lo que buscaba: simple, bonita y efectiva.
            </p>
            <div class="testimonial-author">
              <strong>Carlos R.</strong>
              <span>Trabajos en cuero</span>
            </div>
          </div>

          <!-- CTA Card -->
          <div class="testimonial-cta-card">
            <h3>¿Ya tienes tu tienda?</h3>
            <p>Cuéntanos tu experiencia y ayuda a otros artesanos a decidirse.</p>
            <a href="#contacto" class="btn btn-outline btn-sm" onclick="document.querySelector('#message').value = 'Hola, quiero dejar mi testimonio: '">
              DEJA TU TESTIMONIO
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
};
