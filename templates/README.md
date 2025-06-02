# Carpeta Templates

## Descripción

La carpeta `templates` contiene un conjunto de componentes, layouts y utilitarios predefinidos que sirven como base reutilizable para diferentes proyectos Next.js. Estos recursos están diseñados para acelerar el desarrollo y mantener consistencia en la estructura y estilos entre aplicaciones.

---

## Estructura

- **Componentes:** Componentes UI reutilizables, listos para integrar.
- **Layouts:** Plantillas de diseño base para páginas.
- **Utilitarios:** Funciones y hooks que facilitan tareas comunes.

---

## Uso

Esta carpeta no está incluida directamente en el proceso de build ni se considera parte del bundle final de la aplicación. Sirve como biblioteca interna para copiar y adaptar los recursos que se requieran en cada proyecto.

---

## Consideraciones

- Mantener actualizados y bien documentados los recursos.
- Solo copiar los archivos necesarios a la carpeta `src` o lugar correspondiente en el proyecto final.
- Evitar dependencias directas en los templates para preservar su flexibilidad.

---

## ¿Por qué mantener una carpeta templates?

- **Eficiencia:** Evita recrear componentes comunes desde cero.
- **Consistencia:** Facilita mantener un estándar visual y funcional.
- **Organización:** Centraliza recursos reutilizables en un solo lugar.

---

## Recomendación

Se recomienda mantener esta carpeta fuera del directorio `src` para evitar que sea incluida en el bundle de producción. Además, puede ser excluida en `.gitignore` o en la configuración de build según sea necesario.

---

## Contacto

Para dudas o sugerencias sobre los templates, contactar al equipo de desarrollo.

---

© 2025 Stirod - Ingeniería de Sistemas
