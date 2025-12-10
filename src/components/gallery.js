export const Gallery = () => {
  return `
    <section class="section gallery" id="galeria">
      <div class="container">
        <div class="section-header text-center fade-in">
          <h2 class="section-title">Así se verá tu tienda</h2>
          <p class="section-subtitle">Diseño profesional, limpio y optimizado para vender desde el primer día.</p>
        </div>
        
        <div class="gallery-grid fade-in">
          <div class="gallery-item item-1">
            <img src="demo-products.png" alt="Listado de productos" loading="lazy">
            <div class="gallery-caption">Catálogo atractivo</div>
          </div>
          <div class="gallery-item item-2">
            <img src="demo-modal.png" alt="Vista rápida de producto" loading="lazy">
            <div class="gallery-caption">Detalle de producto</div>
          </div>
          <div class="gallery-item item-3">
             <img src="demo-cart.png" alt="Carrito de compra" loading="lazy">
             <div class="gallery-caption">Carrito claro</div>
          </div>
          <div class="gallery-item item-4">
             <img src="demo-checkout.png" alt="Proceso de pago" loading="lazy">
             <div class="gallery-caption">Pagos seguros</div>
          </div>
           <div class="gallery-item item-5">
             <img src="demo-orders.png" alt="Panel de cliente" loading="lazy">
             <div class="gallery-caption">Panel de control</div>
          </div>
        </div>

        <div class="gallery-cta text-center fade-in" style="margin-top: 3rem;">
          <a href="https://tienda.atchenvalladares.es/" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg pulse-animation">
            VER DEMO EN VIVO <span style="font-size: 1.2em; vertical-align: middle;">↗</span>
          </a>
          <p class="cta-note" style="margin-top: 1rem; color: var(--text-secondary); font-size: 0.9rem;">
            Explora la tienda real y prueba la experiencia de compra.
          </p>
        </div>
      </div>
      
      <!-- Lightbox Markup -->
      <div id="lightbox" class="lightbox">
        <button id="lightbox-close" class="lightbox-close">&times;</button>
        <button id="lightbox-prev" class="lightbox-nav prev">&lt;</button>
        <button id="lightbox-next" class="lightbox-nav next">&gt;</button>
        <div class="lightbox-content">
           <img id="lightbox-img" src="" alt="">
           <div id="lightbox-caption" class="lightbox-caption"></div>
        </div>
      </div>
    </section>
  `;
};
