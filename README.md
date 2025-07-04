# skillnest-m2-AE7_ABPRO
# AutoFix - Reparación de Vehículos a Domicilio 🚗🔧

[🇪🇸] Este proyecto corresponde a la **Evaluación AE7ABPRO** del Módulo 2 del Bootcamp Full Stack Javascript de Skillnest. Es una landing page para "AutoFix", un servicio ficticio de reparación de vehículos a domicilio. La página permite a los usuarios ver los servicios ofrecidos y agendar una cita a través de un flujo de reserva interactivo.

[🇬🇧] This project corresponds to the AE7ABPRO Assessment for Module 2 of the Skillnest Full Stack Javascript Bootcamp. It is a landing page for "AutoFix," a fictional in-home vehicle repair service. The page allows users to view the services offered and schedule an appointment through an interactive booking flow.

---

## Contenido / Content

* [Versión en Español](#-versión-en-español)
* [English Version](#-english-version)

---

## 🇪🇸 Versión en Español

### ✨ Características Principales

* **Catálogo de Servicios Dinámico**: Las tarjetas de los servicios se generan dinámicamente desde un arreglo de objetos en JavaScript, facilitando la escalabilidad.
* **Flujo de Reserva en Modales**: El proceso de reserva se realiza en una serie de ventanas modales de Bootstrap que guían al usuario paso a paso:
    1.  **Selección de Servicio y Datos de Reserva**: El usuario elige un servicio y completa un formulario con sus datos personales, dirección y fecha/hora deseadas.
    2.  **Simulación de Pago**: Un formulario de pago solicita los datos de la tarjeta de crédito.
    3.  **Confirmación**: Se muestra un resumen con la confirmación de la reserva.
* **Validación de Formularios**: Se utiliza la validación de Bootstrap para asegurar que el usuario complete todos los campos requeridos antes de avanzar.
* **Uso de IMask.js**: Para mejorar la experiencia de usuario en el formulario de pago, se implementó **IMask.js**, una librería externa que no fue parte del temario del bootcamp. Esta herramienta aplica máscaras de formato en tiempo real a los campos de:
    * Número de tarjeta (`xxxx xxxx xxxx xxxx`)
    * Fecha de vencimiento (`MM/AA`)
    * CVV (`xxx`)

### 💻 Tecnologías Utilizadas

* **Frontend**:
    * HTML5
    * CSS3
    * JavaScript (ES6+)
* **Frameworks y Librerías**:
    * Bootstrap 5
    * jQuery
    * IMask.js

### ✒️ Autor

Proyecto desarrollado por [**Irina Serey**](https://www.linkedin.com/in/irina-serey/).

---

## 🇬🇧 English Version

### ✨ Key Features

* **Dynamic Service Catalog**: The service cards are generated dynamically from an array of JavaScript objects, making the site easy to scale.
* **Modal-Based Booking Flow**: The booking process is handled through a series of Bootstrap modals that guide the user step-by-step:
    1.  **Service Selection & Booking Details**: The user selects a service and fills out a form with their personal details, address, and desired date/time.
    2.  **Payment Simulation**: A payment form prompts for credit card information.
    3.  **Confirmation**: A summary is displayed confirming the booking details.
* **Form Validation**: Bootstrap's native validation is used to ensure the user fills out all required fields before proceeding.
* **Use of IMask.js**: To enhance the user experience in the payment form, **IMask.js** was implemented. This external library, which was not covered in the bootcamp curriculum, was proactively included to apply real-time input masks to the following fields:
    * Card Number (`xxxx xxxx xxxx xxxx`)
    * Expiry Date (`MM/YY`)
    * CVV (`xxx`)

### 💻 Technologies Used

* **Frontend**:
    * HTML5
    * CSS3
    * JavaScript (ES6+)
* **Frameworks & Libraries**:
    * Bootstrap 5
    * jQuery
    * IMask.js

### ✒️ Author

Project developed by [**Irina Serey**](https://www.linkedin.com/in/irina-serey/).
