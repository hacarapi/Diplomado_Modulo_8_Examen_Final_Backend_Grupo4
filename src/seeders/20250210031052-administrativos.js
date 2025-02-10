"use strict";

export default {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Administrativos", [
      {
        nombre: "Hugo",
        apellido: "Palomino",
        telefono: "789456123",
        correo: "hugo.palomino@example.com",
        fecha_contratacion: new Date("2022-01-15"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "María",
        apellido: "López",
        telefono: "741852963",
        correo: "maria.lopez@example.com",
        fecha_contratacion: new Date("2021-07-22"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Carlos",
        apellido: "Ramírez",
        telefono: "369258147",
        correo: "carlos.ramirez@example.com",
        fecha_contratacion: new Date("2020-03-10"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Ana",
        apellido: "González",
        telefono: "852741963",
        correo: "ana.gonzalez@example.com",
        fecha_contratacion: new Date("2023-06-05"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Luis",
        apellido: "Martínez",
        telefono: "147852369",
        correo: "luis.martinez@example.com",
        fecha_contratacion: new Date("2019-09-30"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Elena",
        apellido: "Fernández",
        telefono: "963258741",
        correo: "elena.fernandez@example.com",
        fecha_contratacion: new Date("2022-04-18"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Pedro",
        apellido: "Sánchez",
        telefono: "321654987",
        correo: "pedro.sanchez@example.com",
        fecha_contratacion: new Date("2021-02-25"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Lucía",
        apellido: "Díaz",
        telefono: "456123789",
        correo: "lucia.diaz@example.com",
        fecha_contratacion: new Date("2023-08-12"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Roberto",
        apellido: "Hernández",
        telefono: "789321654",
        correo: "roberto.hernandez@example.com",
        fecha_contratacion: new Date("2020-12-20"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Sofía",
        apellido: "Torres",
        telefono: "951357456",
        correo: "sofia.torres@example.com",
        fecha_contratacion: new Date("2021-11-02"),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Administrativos", null, {});
  }
};