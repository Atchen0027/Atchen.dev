export const Security = () => {
  return `
    <section class="section security">
      <div class="container">
        <h3 class="section-title">Tu Tienda Online a Prueba de Errores: Dos Clicks para Vender</h3>
        <p class="section-subtitle">Hemos diseñado tu web pensando en ti, no en los programadores.</p>

        <div class="security-grid">
          <div class="security-item fade-in">
             <div class="icon-box">👤</div>
             <h4>Tu Acceso (Gestor de Tienda)</h4>
             <p>Un panel simplificado donde solo verás las opciones que necesitas para la venta diaria: subir productos, gestionar pedidos y cupones. <strong>Nunca tocarás el código.</strong></p>
          </div>
          <div class="security-item fade-in" style="animation-delay: 0.1s">
             <div class="icon-box">🛠️</div>
             <h4>Nuestro Acceso (Administrador)</h4>
             <p>Nos permite realizar copias de seguridad, mantener los plugins actualizados y asegurar la velocidad.</p>
          </div>
          <a href="/tutorials.html" class="security-item highlight fade-in" style="animation-delay: 0.2s; text-decoration: none; display: block;">
             <div class="icon-box">🎁</div>
             <h4>Tutoriales en video</h4>
             <p>Te entregamos videos muy cortos y claros sobre los procesos clave para que manejes la tienda sin necesidad de consultarnos.</p>
          </a>
        </div>
      </div>
    </section>
  `;
};
