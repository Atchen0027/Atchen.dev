(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();const h=()=>`
    <header class="header">
      <div class="container header-content">
        <a href="#" class="logo">
          <img src="logo.png" alt="Atchen.dev Logo" style="height: 60px;">
        </a>
        <nav class="nav-menu">
          <a href="#" class="nav-link">INICIO</a>
          <a href="#planes" class="nav-link">PLANES</a>
          <a href="#faq" class="nav-link">PREGUNTAS</a>
          <a href="#contacto" class="nav-link btn-contact" id="open-contact-modal">CONTACTAME</a>
        </nav>
        <button class="menu-toggle" aria-label="Abrir menú">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  `,y=()=>`
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="container hero-content">
        <div class="hero-text fade-in">
          <h1 class="hero-title">
            Tu tienda online profesional <br>
            <span class="highlight">sin que dejes de ser artista.</span>
          </h1>
          <p class="hero-slogan">
            Nos encargamos de la parte técnica para que tú solo tengas que hacer lo que más te gusta y mejor se te da: <span class="text-white">crear.</span>
          </p>
          <div class="hero-actions">
            <a href="#planes" class="btn btn-primary">Ver Planes</a>
          </div>
        </div>
        <!-- Placeholder for hero image/visual -->
        <div class="hero-visual fade-in">
           <img src="hero-bg.jpg" alt="Artesana trabajando" style="width: 100%; height: auto; border-radius: 20px; box-shadow: var(--glass-shadow); border: 1px solid var(--glass-border);">
        </div>
      </div>
    </section>
  `,b=()=>`
    <section class="section solution" id="solucion">
      <div class="container">
        <div class="row">
           <div class="col-text fade-in">
              <h2 class="section-title">De las redes a tu propia marca. <br>Cero comisiones. Cero complicaciones.</h2>
              <div class="solution-content">
                <p class="lead">
                  Eres un artesano, un diseñador, un creador. Tu tiempo vale oro y debe invertirse en tu arte. 
                  Te introducimos en el mercado <em>online</em> con una tienda propia, asequible y segura.
                </p>
                <ul class="feature-list">
                  <li class="feature-item">
                    <span class="feature-icon">💸</span>
                    <div class="feature-text">
                      <strong>Deja de pagar comisiones</strong> y tus márgenes de beneficio sean íntegros.
                    </div>
                  </li>
                  <li class="feature-item">
                    <span class="feature-icon">🤖</span>
                    <div class="feature-text">
                      <strong>Automatices las ventas</strong> y te olvides de gestionar pedidos por mensajes privados.
                    </div>
                  </li>
                  <li class="feature-item">
                    <span class="feature-icon">🛡️</span>
                    <div class="feature-text">
                       <strong>Trabajes con seguridad:</strong> Diseñamos tu web para que sea fácil de usar y a prueba de errores.
                    </div>
                  </li>
                </ul>
              </div>
           </div>
        </div>
      </div>
    </section>
  `,x=()=>`
    <section class="section about" id="sobre-mi">
      <div class="container">
        <div class="about-grid fade-in">
          <div class="about-image">
            <img src="profile.png" alt="Atchen Desarrollador" class="profile-photo">
            <div class="about-blob"></div>
          </div>
          <div class="about-content">
            <h2 class="section-title text-left">De Artesano a Desarrollador</h2>
            <p class="about-text">
              <strong>Hola, soy Atchen.</strong>
            </p>
            <p class="about-text">
              Durante 5 años, estuve exactamente donde tú estás ahora: vendiendo mis artesanías a través de redes sociales, gestionando pedidos por mensajes directos y sintiendo que perdía horas valiosas que debería estar dedicando a crear.
            </p>
            <p class="about-text">
              Conozco la frustración de querer expandirse y sentir que la tecnología es una barrera. Sé lo que es tener un producto increíble y no tener el escaparate que se merece.
            </p>
            <p class="about-text highlight-text">
              Por eso decidí crear esta plataforma. No soy una gran empresa de software; soy un compañero que ha estado en tus zapatos y ahora usa el código para ayudarte a recuperar tu tiempo y llevar tu arte al mundo.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,q=()=>`
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
           <details class="pricing-details"> <summary class="btn btn-outline">Ver detalles</summary> <ul> <li>✅ Creación de una <strong>tienda online completa</strong></li> <li>✅ Carga inicial de hasta <strong>15 productos</strong></li> <li>✅ <strong>Subida de 2 fotos por producto</strong> (proporcionadas por el cliente)</li> <li>✅ Inclusión de <strong>descripción del producto</strong>, <strong>nombre del producto</strong> y <strong>precio</strong></li> <li>✅ Configuración de <strong>2 usuarios</strong>: administrador + gestor de productos</li> <li>✅ Integración del <strong>logo</strong> y <strong>colores de la marca</strong></li> <li>✅ Inclusión de <strong>descripción corta de la marca</strong></li> <li>✅ Inclusión de <strong>teléfonos</strong> y <strong>redes sociales</strong></li> <li>✅ <strong>Vídeos tutoriales personalizados</strong> para gestionar la tienda</li> <li>✅ <strong>SEO básico</strong> (títulos, descripciones, estructura, sitemap)</li> <li>✅ Optimización básica de la velocidad</li> <li>✅ <strong>1 mes de mantenimiento gratuito</strong></li> <li>🔴 No incluye redacción profesional de textos</li> <li>🔴 No incluye fotografías profesionales</li> <li>🔴 No incluye más de 15 productos iniciales</li> <li>🔴 No incluye funciones avanzadas (reservas, membresías, marketplace…)</li> <li>🔴 No incluye integraciones con ERP, CRM u otros sistemas externos</li> <li>🔴 No incluye mantenimiento después del primer mes</li> </ul> </details>
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
              <details class="pricing-details"> <summary class="btn btn-outline">Ver detalles</summary> <ul> <li>✅ Requiere tener contratada la <strong>Web Básica</strong></li> <li>✅ <strong>Todo lo del Plan A</strong> ya entregado</li> <li>✅ <strong>Copias de seguridad semanales</strong></li> <li>✅ <strong>Actualizaciones</strong> de plugins, plantillas y sistema</li> <li>✅ Monitorización básica del sitio</li> <li>✅ Ayuda para añadir hasta <strong>15 productos nuevos</strong> cada mes</li> <li>✅ Subida de <strong>2 fotos por cada nuevo producto</strong> (cliente obliga a enviarlas)</li> <li>✅ <strong>Pequeñas modificaciones</strong> (textos, colores, estructura ligera)</li> <li>🔴 No incluye rediseños completos</li> <li>🔴 No incluye desarrollo avanzado</li> <li>🔴 No incluye campañas publicitarias</li> <li>🔴 No incluye SEO avanzado</li> </ul> </details>
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
                <li class="info">⚠️ <strong>Propiedad:</strong> La web sera propiedad mia durante los 6 primeros meses, una vez cumplidos sera tuya sin coste extragit pu</li>
              </ul>
              <details class="pricing-details"> <summary class="btn btn-outline">Ver detalles</summary> <ul> <li>✅ Incluye <strong>Plan A completo</strong></li> <li>✅ Incluye <strong>Plan B completo</strong></li> <li>✅ <strong>Diseño premium</strong> y personalización completa de la web</li> <li>✅ <strong>SEO mejorado</strong> (estructura avanzada, optimización de velocidad, imágenes, metadata)</li> <li>✅ <strong>Optimización de conversión</strong> y flujo de compra</li> <li>✅ Integración con <strong>redes sociales</strong></li> <li>✅ Automatizaciones básicas (emails automáticos, carritos abandonados, avisos)</li> <li>🔴 Requisito: web creada conmigo</li> <li>🔴 No incluye campañas de publicidad</li> <li>🔴 No incluye branding completo (sesiones de fotos, manual de marca profesional, naming…)</li> <li>🔴 No incluye desarrollos complejos o a medida específicos</li> </ul> </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,E=()=>`
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
  `,P=()=>`
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
  `,A=()=>`
    <section class="section faq" id="faq">
      <div class="container">
        <h2 class="section-title">Preguntas Frecuentes</h2>
        <div class="faq-grid">
        
          <details class="faq-item fade-in">
            <summary>¿Qué son exactamente las "pequeñas modificaciones"?</summary>
            <p>Son cambios rápidos y sencillos, como actualizar textos, cambiar imágenes, modificar el color de un botón o ajustar frases. No incluyen el rediseño completo de una página o la instalación de funcionalidades complejas.</p>
          </details>

          <details class="faq-item fade-in">
            <summary>¿Si contrato el Plan C y me voy a los 3 meses, qué pasa con mi web?</summary>
            <p>La web te pertenece en propiedad después de 6 meses ininterrumpidos de pago. Si decides irte antes, la transferimos a tu nombre, pero debes abonar la parte proporcional de la inversión inicial de 220€ que no se ha amortizado. (Ej. Al mes 3, pagarías 110€).</p>
          </details>

          <details class="faq-item fade-in">
            <summary>¿Cuánto vale alquilar un host al mes y cuánto un dominio al año?</summary>
            <p>El precio medio de mercado para un hosting de calidad es de unos <strong>10€-15€ al mes</strong>, y un dominio suele costar entre <strong>12€ y 20€ al año</strong>. ¡Con nuestro <strong>Plan C (Todo Incluido)</strong> estos costes ya están cubiertos dentro de tu cuota!</p>
          </details>

          <details class="faq-item fade-in">
            <summary>¿El precio de 220€ del Plan A incluye el hosting y el dominio?</summary>
            <p>No. En el Plan A (Web Tienda Completa) el cliente es el responsable de contratar y gestionar su hosting y su dominio. Si deseas que nosotros nos encarguemos de todo, el <strong>Plan Todo Incluido (60€/mes)</strong> sí incluye estos costes.</p>
          </details>

          <details class="faq-item fade-in">
            <summary>¿Por qué usáis dos usuarios en mi web?</summary>
            <p>Lo hacemos por tu seguridad. Queremos que te concentres en vender. Con el acceso de Gestor de Tienda evitamos que, por un error involuntario, puedas desconfigurar la web.</p>
          </details>

          <details class="faq-item fade-in">
            <summary>¿Cuánto se tarda en tener la web lista?</summary>
            <p>Una vez que nos entregues toda la información (textos, fotos, datos de 15 productos), trabajamos para entregar la web lista para funcionar en un plazo de <strong>7-10 días hábiles</strong>.</p>
          </details>

        </div>
      </div>
    </section>
  `,C=()=>`
    <section class="section contact" id="contacto">
      <div class="container">
        <h2 class="section-title">¿Tienes dudas? Empecemos a hablar de tu proyecto.</h2>
        <div class="contact-wrapper fade-in">
          <form class="contact-form" action="https://formsubmit.co/acen0027@gmail.com" method="POST">
            <input type="hidden" name="_next" value="https://atchen0027.github.io/Atchen.dev/?success=true">
            <input type="hidden" name="_subject" value="Nuevo contacto desde Atchen Landing">
            <input type="hidden" name="_captcha" value="false">
            
            <div class="form-group">
              <label for="name">Nombre</label>
              <input type="text" id="name" name="name" placeholder="Tu nombre" required>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="tucorreo@ejemplo.com" required>
            </div>
             <div class="form-group">
              <label for="phone">Teléfono (Opcional)</label>
              <input type="tel" id="phone" name="phone" placeholder="+34 600...">
            </div>
            <div class="form-group">
              <label for="message">Mensaje</label>
              <textarea id="message" name="message" rows="5" placeholder="Cuéntanos sobre tu proyecto..." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block">ENVIAR CONSULTA</button>
          </form>
        </div>
      </div>
    </section>
  `,L=()=>`
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <h4 class="footer-logo">Atchen.dev</h4>
            <p>Tu tienda online profesional sin que dejes de ser artista.</p>
          </div>
          <div class="footer-col">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="#planes">Planes</a></li>
              <li><a href="#faq">Preguntas Frecuentes</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contacto</h4>
            <ul>
              <li>Email: acen0027@gmail.com</li>
              <li>Teléfono: 610 357 068</li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Información Legal</h4>
            <ul>
              <li><a href="#">Aviso Legal</a></li>
              <li><a href="#">Política de Privacidad</a></li>
              <li><a href="#">Condiciones de Contratación</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
           <p>© 2024 Atchen.dev. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `;document.querySelector("#app").innerHTML=`
  ${h()}
  <main>
    ${y()}
    ${x()}
    ${b()}
    ${q()}
    ${E()}
    ${P()}
    ${A()}
    ${C()}
  </main>
  ${L()}
  
  <!-- Contact Modal -->
  <div id="contact-modal" class="modal-overlay">
    <div class="modal-content">
      <button id="modal-close" class="modal-close">&times;</button>
      <h2>Contáctame</h2>
      <div class="contact-item">
        <span class="contact-label">Teléfono</span>
        <a href="tel:610357068" class="contact-value">610 357 068</a>
      </div>
      <div class="contact-item">
        <span class="contact-label">Email</span>
        <a href="mailto:acen0027@gmail.com" class="contact-value">acen0027@gmail.com</a>
      </div>
      <div class="contact-item">
        <span class="contact-label">LinkedIn</span>
        <a href="https://www.linkedin.com/in/atchen-dev" target="_blank" class="contact-value">linkedin.com/in/atchen-dev</a>
      </div>
    </div>
  </div>
`;const n=document.getElementById("contact-modal"),m=document.getElementById("open-contact-modal"),g=document.getElementById("modal-close");m&&n&&g&&(m.addEventListener("click",e=>{e.preventDefault(),n.classList.add("active")}),g.addEventListener("click",()=>{n.classList.remove("active")}),n.addEventListener("click",e=>{e.target===n&&n.classList.remove("active")}));const v=document.querySelector(".menu-toggle"),d=document.querySelector(".nav-menu");v&&d&&(v.addEventListener("click",()=>{d.classList.toggle("active")}),d.querySelectorAll(".nav-link").forEach(e=>{e.addEventListener("click",()=>{d.classList.remove("active")})}));const I=new IntersectionObserver(e=>{e.forEach(s=>{s.isIntersecting&&s.target.classList.add("visible")})});document.querySelectorAll(".fade-in").forEach(e=>I.observe(e));const o=document.getElementById("lightbox"),f=document.getElementById("lightbox-img"),T=document.getElementById("lightbox-caption"),u=document.querySelectorAll(".gallery-item"),N=document.getElementById("lightbox-close"),w=document.getElementById("lightbox-prev"),z=document.getElementById("lightbox-next");let t=0;function l(e){e>=u.length?t=0:e<0?t=u.length-1:t=e;const s=u[t],r=s.querySelector("img"),c=s.querySelector(".gallery-caption").textContent;f.src=r.src,f.alt=r.alt,T.textContent=c}o&&(u.forEach((e,s)=>{e.addEventListener("click",()=>{o.classList.add("active"),l(s)})}),N.addEventListener("click",()=>{o.classList.remove("active")}),o.addEventListener("click",e=>{e.target===o&&o.classList.remove("active")}),w.addEventListener("click",e=>{e.stopPropagation(),l(t-1)}),z.addEventListener("click",e=>{e.stopPropagation(),l(t+1)}),document.addEventListener("keydown",e=>{o.classList.contains("active")&&(e.key==="Escape"&&o.classList.remove("active"),e.key==="ArrowLeft"&&l(t-1),e.key==="ArrowRight"&&l(t+1))}));
