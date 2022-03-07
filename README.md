# Typescript React Template w/ Linter y Precommit 

Esta aplicacion de react fue creada para funcionar como base para otras aplicaciones, en las ramas de este repositorio se podran observar las distintas aplicaciones que se han creado en base a esta. 

El proposito de su creacion es reducir el tiempo requerido para configurar Typescript y que todo el codigo que se genere en base a este template sea sometido a revision de ESLint para asegurar buenas practica y que Prettier le de formato adecuado a todos los archivos que se encuentren staged previo a que se hagan commits. 

Para observar las configuraciones de este repo se encuentran los archivos:

-tsconfig.json
-.eslintrc.js
-.prettierrc

### Iniciacion

Por las dependencias utilizadas en este repositorio recomendaria utilizar el comando:

$ yarn install

Como Yarn funciona mejor que NPM a la hora de instalar dependencias, queda a juicio del desarrollador luego si desea utilizarlo tambien para los scripts del repo.

### Scripts

El repo posee los scripts convencionales de react como "start", "test", "build" y "eject", a los cuales se les han agregado los siguientes:

- lint: corre ESlint por el proyecto para revisar el codigo buscando inconsistencias en normas de codigo limpio.
- format: corre Prettier para dar formato correcto al codigo.
- lint-staged: este script una vez ejecutado corre lint y prettier para dar formato al proyecto.

### Commit

Cuando sea deseado hacer un commit a algun fork de este repo husky ha modificado el script de git para incluir en sus ramas commits pues antes de agregar algo se correra el script lint-staged para asegurarse que todo el codigo sea presentable y consistente, de no ser asi husky no permitira que se agregue el commit la rama hasta que los errores que retorne sean arreglados.

### Reglas de Typescript/ESLint

Convencionalmente no es adecuado modificar estas, hay descripciones de los errores que presentan en la mayoria de los editores de texto modernos o en la misma web de ESLint, pero si se presenta alguna inconsistencia entre estas y prettier pueden agregarse excepciones en los archivos de configuracion, aun que es recomendable exceptuar reglas de prettier a reglas de los dos mencionados anteriormente.
