"use strict";

export default {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Cursos", [
      {
        nombre_curso: "Maestría en Inteligencia Artificial",
        descripcion: "Programa avanzado sobre aprendizaje automático y redes neuronales.",
        creditos: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre_curso: "Diplomado en Análisis de Datos",
        descripcion: "Formación intensiva en Big Data y ciencia de datos.",
        creditos: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre_curso: "Especialización en Ciberseguridad",
        descripcion: "Estudio de técnicas de defensa y ataque en sistemas informáticos.",
        creditos: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre_curso: "Maestría en Blockchain",
        descripcion: "Explora la tecnología blockchain y su aplicación en diversos sectores.",
        creditos: 45,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre_curso: "Doctorado en Computación Cuántica",
        descripcion: "Investigación avanzada en algoritmos cuánticos y criptografía post-cuántica.",
        creditos: 60,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre_curso: "Diplomado en UX/UI Design",
        descripcion: "Diseño de experiencias de usuario y optimización de interfaces digitales.",
        creditos: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre_curso: "Especialización en DevOps",
        descripcion: "Automatización y optimización de procesos en el desarrollo de software.",
        creditos: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre_curso: "Maestría en Finanzas Cuantitativas",
        descripcion: "Aplicación de modelos matemáticos y estadísticas en el mundo financiero.",
        creditos: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre_curso: "Doctorado en Neurociencia Computacional",
        descripcion: "Investigación en modelado del cerebro y redes neuronales biológicas.",
        creditos: 55,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre_curso: "Diplomado en Marketing Digital",
        descripcion: "Estrategias y herramientas para el marketing en plataformas digitales.",
        creditos: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre_curso: "Especialización en Gestión de Proyectos Ágiles",
        descripcion: "Metodologías ágiles como Scrum y Kanban para la gestión de proyectos.",
        creditos: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre_curso: "Maestría en Biotecnología",
        descripcion: "Avances en biotecnología aplicada a la salud y la industria.",
        creditos: 45,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre_curso: "Doctorado en Energías Renovables",
        descripcion: "Investigación y desarrollo de tecnologías sostenibles.",
        creditos: 60,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre_curso: "Diplomado en Liderazgo y Gestión Empresarial",
        descripcion: "Habilidades de liderazgo y gestión en entornos corporativos.",
        creditos: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre_curso: "Especialización en Machine Learning",
        descripcion: "Técnicas avanzadas de aprendizaje automático con Python y TensorFlow.",
        creditos: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre_curso: "Maestría en Arquitectura de Software",
        descripcion: "Diseño y desarrollo de sistemas escalables y eficientes.",
        creditos: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre_curso: "Doctorado en Inteligencia Artificial",
        descripcion: "Investigación en IA, procesamiento del lenguaje natural y visión por computadora.",
        creditos: 60,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre_curso: "Diplomado en Educación Virtual",
        descripcion: "Diseño y gestión de plataformas de aprendizaje en línea.",
        creditos: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre_curso: "Especialización en Cloud Computing",
        descripcion: "Implementación de servicios en la nube con AWS, Azure y Google Cloud.",
        creditos: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre_curso: "Maestría en Ingeniería de Software",
        descripcion: "Metodologías avanzadas para el desarrollo de software robusto y escalable.",
        creditos: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Cursos", null, {});
  }
};