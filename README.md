# Movie App

App para gestionar películas con un backend en .NET y SQLite, y un frontend en Angular.

## **Requisitos**
1. Tener instalado:
   - **.NET SDK 7.0**
   - **Node.js** y **npm**
2. **SQLite** (no requiere instalación adicional. Se usa el archivo generado).

---

## **Instrucciones para el Backend**
1. Navegar a la carpeta del backend:
   ```bash
   cd MovieAPI
   ```
2. Restaura las dependencias:
   ```bash
   dotnet restore
   ```
3. Aplica las migraciones y crea la base de datos:
   ```bash
   dotnet ef database update
   ```
4. Inicia el servidor:
   ```bash
   dotnet run
   ```
   El backend estará disponible en: `http://localhost:5000`

---

## **Instrucciones para el Frontend**
1. Navegar a la carpeta del frontend:
   ```bash
   cd MovieApp
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia la aplicación:
   ```bash
   ng serve --proxy-config proxy.conf.json
   ```
   La aplicación estará disponible en: `http://localhost:4200`

---

## **Funciones Disponibles**
Ver lista de películas: Dirígete a http://localhost:4200/movies.

Consultar detalles de una película: Dirígete a http://localhost:4200/movies/{id}, reemplazando {id} con el ID de la película.

Crear una nueva película: Dirígete a http://localhost:4200/movies/new.

Editar una película existente: Dirígete a http://localhost:4200/movies/{id}/edit, reemplazando {id} con el ID de la película.

Eliminar una película: Dirígete a http://localhost:4200/movies/{id}/delete, reemplazando {id} con el ID de la película.

---

## **Notas**
- El proxy configurado conecta automáticamente el frontend con el backend.

