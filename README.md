
Hash de git relacionado: 45f6dd75

https://www.npmjs.com/package/license-checker


Hash de git relacionado: 45f6dd75

- [x] El bloque se debe preparar con algún preprocesador CSS, LESS o SASS
- [x] Todas las funcionalidades de bloque se deben construir de manera modular
- [ ] Se debe soportar el concepto de lazy loading, Manejo de enrutamiento correcto
- [x] Los componentes deben tener una única responsabilidad
- [x] La lógica que no le corresponde a los componentes se debe segregar y puede ser llevada a servicios
- [x] Todo el proyecto debe quedar ejecutando en integración continua (checkout, test, build, sonar)
- [x] Se deben configurar variables de ambiente para las url o rutas
- [ ] Se deben tener pruebas funcionales con Cypress
- [x] Todo debe ser tipado (typescript), por ninguna parte deberían de aparecer tipo any
- [ ] El proyecto debe ser validado con lint (npm run lint) y no deberían quedar incidencias
- [x] El proyecto debe ser responsive, soportar y adaptarse de manera correcta a celulares y a diferentes resoluciones de computador (usar bootstrap, material o flexbox)
- [x] En el desarrollo de la app mínimo debe tener un componente genérico, ejemplo: si se trabaja para un parqueadero, construir un componente input que recibe números de placa el cual se podrá reutilizar en cualquier lugar de la aplicación. Usted debe determinar basado en su lógica de negocio que podría ser genérico
- [x] Usar el ErrorHandler para mostrar mensajes de error del proyecto
- [x] Adicionar seguridad (autenticacion con usuario y clave), y con la respuesta asegurar las rutas que se tengan en el proyecto con guard
- [x] Se debe tener un menu con al menos 3 opciones, cada opción debe navegar a una pantalla diferente
- [x] Para plantear este problema usted tiene 2 horas, y debe enviar un correo pidiendo la aprobación del problema a la persona encargada de ADN antes de empezar a desarrollar (la persona la puedes identificar al momento que te envíe la cita para revisión parcial y final de ADN)

## Primera entrega

- [x] Debe hacer seleccionado un bloque y ya debe estar personalizado para su logica de negocio escogida 
- [x] Debe entender las capas de la arquitectura del bloque seleccionado y debería ser capaz de explicar la responsabilidad de cada capa 
- [x] El proyecto debe estar ejecutando en integración continua (Jenkins) y debe estar reportando los indicadores de código en Sonar
- [x] Debe tener algunas reglas de negocio desarrolladas (no es necesario tener todo el proyecto final construido)
- [x] Todas las reglas de negocio y componentes construidos deben estar validados con pruebas unitarias

## Segunda entrega

- [x] El proyecto debe estar construido en su totalidad
- [ ] Debe estar totalmente cubierto con pruebas unitarias, para verificar que las pruebas desarrolladas sean de calidad se debe ejecutar pruebas de mutación con Stryker 
- [x] Se deben construir pruebas funcionales con Crypess para los flujos principales de negocio
- [x] Se debe ejecutar el comando npm run lint y no se deberían tener incidencias de código 
- [ ] Sonar deberá estar sin deuda técnica (code smell, bugs y vulnerabilidades tendiendo a cero)