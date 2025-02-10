"use strict";

export default {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Docentes", [
      {
        nombre: "Juan",
        apellido: "Pérez",
        especialidad: "Inteligencia Artificial",
        telefono: "+591 76543210",
        correo: "juan.perez@example.com",
        fecha_contratacion: new Date("2020-01-15"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "María",
        apellido: "López",
        especialidad: "Big Data",
        telefono: "+591 71234567",
        correo: "maria.lopez@example.com",
        fecha_contratacion: new Date("2019-03-22"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Carlos",
        apellido: "Gutiérrez",
        especialidad: "Machine Learning",
        telefono: "+591 72345678",
        correo: "carlos.g@example.com",
        fecha_contratacion: new Date("2021-06-10"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Ana",
        apellido: "Torres",
        especialidad: "Ciberseguridad",
        telefono: "+591 73456789",
        correo: "ana.torres@example.com",
        fecha_contratacion: new Date("2018-09-05"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Luis",
        apellido: "Ramírez",
        especialidad: "Blockchain",
        telefono: "+591 74567890",
        correo: "luis.ramirez@example.com",
        fecha_contratacion: new Date("2022-02-14"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Gabriela",
        apellido: "Fernández",
        especialidad: "Desarrollo Web",
        telefono: "+591 75678901",
        correo: "gabriela.f@example.com",
        fecha_contratacion: new Date("2020-11-30"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Fernando",
        apellido: "Hernández",
        especialidad: "Redes y Telecomunicaciones",
        telefono: "+591 76789012",
        correo: "fernando.h@example.com",
        fecha_contratacion: new Date("2017-07-20"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Sofía",
        apellido: "Vargas",
        especialidad: "Bases de Datos",
        telefono: "+591 77890123",
        correo: "sofia.vargas@example.com",
        fecha_contratacion: new Date("2019-05-25"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Ricardo",
        apellido: "Castro",
        especialidad: "Arquitectura de Software",
        telefono: "+591 78901234",
        correo: "ricardo.castro@example.com",
        fecha_contratacion: new Date("2021-09-10"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Elena",
        apellido: "Mendoza",
        especialidad: "Ciencia de Datos",
        telefono: "+591 79012345",
        correo: "elena.mendoza@example.com",
        fecha_contratacion: new Date("2023-01-01"),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Docentes", null, {});
  }
};