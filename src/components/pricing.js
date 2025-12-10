export const Pricing = () => {
  return `
    <section class="section pricing" id="planes">
      <div class="container">
        <h2 class="section-title">Elige tu camino hacia la venta online</h2>
        <p class="section-subtitle">Diseñamos tres soluciones pensadas para cada nivel de compromiso y presupuesto.</p>
        
        <div class="pricing-grid">
          <!-- Plan A -->
          <div class="pricing-card fade-in" style="animation-delay: 0.1s">
            <div class="card-header">
              <h3>Web Básica</h3>
              <div class="price">220€ <span class="period">/ Pago Único</span></div>
              <p class="card-desc">Ideal para: Quienes quieren la propiedad total desde el inicio.</p>
            </div>
            <div class="card-body">
              <ul class="pricing-features">
                <li>✅ Web completa con WordPress + WooCommerce + Elementor</li>
                <li>✅ Configuración inicial y subida de <strong>15 productos</strong></li>
                <li>✅ Pasarela de pago configurada</li>
                <li>✅ <strong>1 mes de mantenimiento GRATIS</strong></li>
                <li class="warning">🔴 Host y Dominio: A cargo del cliente</li>
              </ul>
              <a href="#contacto" class="btn btn-outline">EMPEZAR A VENDER HOY</a>
            </div>
          </div>

          <!-- Plan B -->
          <div class="pricing-card fade-in" style="animation-delay: 0.2s">
            <div class="card-header">
              <h3>Plan Plus</h3>
              <div class="price">40€ <span class="period">/ mes</span></div>
              <p class="card-desc">Ideal para: Clientes del Plan A que buscan seguridad y soporte continuo.</p>
            </div>
            <div class="card-body">
              <ul class="pricing-features">
                <li>✅ <strong>Todo lo del Plan A</strong></li>
                <li>✅ <strong>Copias de seguridad semanales</strong> de toda tu web</li>
                <li>✅ Ayuda para añadir hasta <strong>15 productos nuevos al mes</strong></li>
                <li>✅ <strong>Pequeñas modificaciones</strong> (textos, colores...)</li>
                <li class="warning">🔴 Requisito: Tener la web Basica</li>
              </ul>
              <a href="#contacto" class="btn btn-outline">AÑADIR MANTENIMIENTO</a>
            </div>
          </div>

          <!-- Plan C -->
          <div class="pricing-card popular fade-in" style="animation-delay: 0.3s">
            <div class="card-badge">MEJOR OPCIÓN</div>
            <div class="card-header">
              <h3>Todo Incluido</h3>
              <div class="price">60€ <span class="period">/ mes</span></div>
              <p class="card-desc">Ideal para: Quienes quieren empezar a vender sin ninguna inversión inicial.</p>
            </div>
            <div class="card-body">
              <ul class="pricing-features">
                <li>✅ <strong>Web Creada "Gratis"</strong> (Incluida en la cuota)</li>
                <li>✅ <strong>Hosting y Dominio incluidos</strong></li>
                <li>✅ <strong>Soporte Prioritario</strong></li>
                <li>✅ Todos los beneficios del Plan B</li>
                <li class="info">⚠️ <strong>Propiedad:</strong> La web sera propiedad mia durante los 6 primeros meses, una vez cumplidos sera tuya sin coste extra</li>
              </ul>
              <a href="#contacto" class="btn btn-primary">QUIERO EL TODO INCLUIDO</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};
