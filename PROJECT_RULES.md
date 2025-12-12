# Normas de Desarrollo del Proyecto

Estas son las reglas obligatorias que se aplican a todo el proyecto, incluyendo componentes, estilos y flujos de trabajo.

## 1. Comentarios en español

Todos los comentarios dentro del proyecto deben estar escritos exclusivamente en español.
Esto aplica a:

- Archivos JavaScript / JSX
- Archivos CSS
- Archivos HTML
- Cualquier otro archivo de configuración donde se usen comentarios

## 2. Comentarios descriptivos en todos los componentes

Cada componente debe incluir:

- **Un comentario al inicio explicando su función principal**
- Comentarios internos si alguna parte del código requiere aclaraciones
- Descripción clara y precisa del propósito del componente y su comportamiento

Ejemplo recomendado en JSX:

```jsx
// Componente que muestra la lista de productos y permite seleccionarlos
function ProductosLista() {
  // Estado que almacena los productos obtenidos de la API
  ...
}
```

## 3. Prohibido subir contenido automáticamente a GitHub

No se permite ningún tipo de automatización que empuje contenido al repositorio.
Esto significa:

- No usar scripts automáticos de commit o push
- No usar GitHub Actions que suban archivos sin supervisión
- Todos los commits y pushes deben hacerse **de forma manual**

## 4. Prohibido el uso de estilos en línea

Los estilos **NO** deben escribirse dentro de los componentes ni en atributos HTML.
Queda prohibido el uso de:

- `style=""`
- Objetos de estilo dentro de JSX (ej: `style={{ color: 'red' }}`)
- CSS in JS (styled-components, emotion, etc.)

Todos los estilos deben ir en los archivos CSS correspondientes.

## 5. Organización de estilos

- Cada vista o componente debe tener su propio archivo CSS si es necesario
- Nada de estilos mezclados que no pertenezcan al componente
- Nombres de clases claros, consistentes y en minúsculas
- Evitar IDs para estilo salvo casos estrictamente necesarios

## 6. Comportamiento del código

- Código limpio y legible
- Nombrado coherente
- Separación clara entre lógica, estructura y estilo
- Evitar duplicar funciones o componentes innecesariamente

---

_Ada lo deja todo claro y ordenado._
