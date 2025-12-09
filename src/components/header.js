export const Header = () => {
  return `
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
  `;
};

// Add styles locally for simplicity in this file-based component approach,
// or let them reside in global CSS but namespaced.
// For this vanilla approach, we'll keep component specific structure in mind
// but define the specific CSS in the global file for clean separation
// OR we can inject a <style> tag here.
// Let's use the global style.css for cleaner maintainability,
// but since I can't edit style.css in the same turn easily without context issues,
// I'll append necessary styles to style.css in the next turn or use standard classes defined there.

// I will create a separate 'header.css' content to append to style.css later
// or just trust my global css implementation skills.
// Plan: I will use a 'component-styles.css' approach or append to style.css.
