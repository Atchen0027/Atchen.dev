export const Hero = () => {
  return `
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="container hero-content">
        <div class="hero-text fade-in">
          <h1 class="hero-title">
            Atchen.dev: Tu tienda online profesional <br>
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
  `;
};
