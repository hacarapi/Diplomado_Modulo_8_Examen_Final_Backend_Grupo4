"use strict";

export default {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Estudiantes", [
      {
        nombre: "Carlos",
        apellido: "Gutiérrez",
        fecha_nacimiento: "1985-04-12",
        genero: "Masculino",
        direccion: "Av. Las Américas 123, La Paz",
        telefono: "78945612",
        correo: "carlos.gutierrez@example.com",
        fecha_inscripcion: "2024-02-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Ana",
        apellido: "Fernández",
        fecha_nacimiento: "1990-07-25",
        genero: "Femenino",
        direccion: "Calle 10 de Calacoto, La Paz",
        telefono: "76543210",
        correo: "ana.fernandez@example.com",
        fecha_inscripcion: "2024-02-02",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Luis",
        apellido: "Martínez",
        fecha_nacimiento: "1988-02-14",
        genero: "Masculino",
        direccion: "Zona Sur, Cochabamba",
        telefono: "70123456",
        correo: "luis.martinez@example.com",
        fecha_inscripcion: "2024-02-03",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "María",
        apellido: "López",
        fecha_nacimiento: "1992-11-30",
        genero: "Femenino",
        direccion: "Av. Ayacucho, Sucre",
        telefono: "71234567",
        correo: "maria.lopez@example.com",
        fecha_inscripcion: "2024-02-04",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Jorge",
        apellido: "Ramírez",
        fecha_nacimiento: "1983-09-18",
        genero: "Masculino",
        direccion: "Barrio Central, Oruro",
        telefono: "73214567",
        correo: "jorge.ramirez@example.com",
        fecha_inscripcion: "2024-02-05",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Sofía",
        apellido: "González",
        fecha_nacimiento: "1991-06-22",
        genero: "Femenino",
        direccion: "Calle Bolívar, Potosí",
        telefono: "74123698",
        correo: "sofia.gonzalez@example.com",
        fecha_inscripcion: "2024-02-06",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Ricardo",
        apellido: "Salazar",
        fecha_nacimiento: "1987-12-10",
        genero: "Masculino",
        direccion: "Zona Norte, Tarija",
        telefono: "75896321",
        correo: "ricardo.salazar@example.com",
        fecha_inscripcion: "2024-02-07",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Laura",
        apellido: "Vargas",
        fecha_nacimiento: "1993-05-15",
        genero: "Femenino",
        direccion: "Av. Circunvalación, Santa Cruz",
        telefono: "76985214",
        correo: "laura.vargas@example.com",
        fecha_inscripcion: "2024-02-08",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Daniel",
        apellido: "Ortega",
        fecha_nacimiento: "1984-08-05",
        genero: "Masculino",
        direccion: "Zona Universitaria, El Alto",
        telefono: "78521436",
        correo: "daniel.ortega@example.com",
        fecha_inscripcion: "2024-02-09",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Gabriela",
        apellido: "Mendoza",
        fecha_nacimiento: "1995-03-28",
        genero: "Femenino",
        direccion: "Calle Independencia, Trinidad",
        telefono: "79231564",
        correo: "gabriela.mendoza@example.com",
        fecha_inscripcion: "2024-02-10",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Estudiantes", null, {});
  }
};