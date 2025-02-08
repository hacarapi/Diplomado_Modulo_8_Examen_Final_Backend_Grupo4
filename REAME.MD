# install
pimer paso: Crear variables de entorno
``bash
cp.env.sample.env
segundo paso: instalar node_modules ```bash
npm install
ejecutar modo desarollo bash npm run dev
ejecutar modo prod
`bash
npm run start

PostgreSQL 17.0.1
User: Postgress
Pass: Admin.123


# Ejemplos de Datos
## Estudiantes
```json
[
  {
    "nombre": "Ana",
    "apellido": "García",
    "fecha_nacimiento": "2001-03-20",
    "genero": "Femenino",
    "direccion": "Calle del Sol 456",
    "telefono": "555-987-6543",
    "correo": "ana.garcia@example.com",
    "fecha_inscripcion": "2024-07-26"
  },
  {
    "nombre": "Carlos",
    "apellido": "López",
    "fecha_nacimiento": "1999-11-05",
    "genero": "Masculino",
    "direccion": "Avenida de la Luna 789",
    "telefono": "555-101-1122",
    "correo": "carlos.lopez@example.com",
    "fecha_inscripcion": "2024-07-26"
  },
  {
    "nombre": "Sofía",
    "apellido": "Martínez",
    "fecha_nacimiento": "2002-07-12",
    "genero": "Femenino",
    "direccion": "Plaza de las Flores 101",
    "telefono": "555-223-3344",
    "correo": "sofia.martinez@example.com",
    "fecha_inscripcion": "2024-07-26"
  },
  {
    "nombre": "Pedro",
    "apellido": "Sánchez",
    "fecha_nacimiento": "2000-01-25",
    "genero": "Masculino",
    "direccion": "Calle de la Estrella 222",
    "telefono": "555-445-5566",
    "correo": "pedro.sanchez@example.com",
    "fecha_inscripcion": "2024-07-26"
  },
  {
    "nombre": "Isabela",
    "apellido": "Rodríguez",
    "fecha_nacimiento": "2003-05-08",
    "genero": "Femenino",
    "direccion": "Avenida del Campo 333",
    "telefono": "555-667-7788",
    "correo": "isabela.rodriguez@example.com",
    "fecha_inscripcion": "2024-07-26"
  },
  {
    "nombre": "Miguel",
    "apellido": "Fernández",
    "fecha_nacimiento": "1998-09-19",
    "genero": "Masculino",
    "direccion": "Plaza Mayor 444",
    "telefono": "555-889-9900",
    "correo": "miguel.fernandez@example.com",
    "fecha_inscripcion": "2024-07-26"
  },
  {
    "nombre": "Valentina",
    "apellido": "Díaz",
    "fecha_nacimiento": "2001-06-02",
    "genero": "Femenino",
    "direccion": "Calle del Río 555",
    "telefono": "555-012-3456",
    "correo": "valentina.diaz@example.com",
    "fecha_inscripcion": "2024-07-26"
  },
  {
    "nombre": "Alejandro",
    "apellido": "Gómez",
    "fecha_nacimiento": "2000-12-14",
    "genero": "Masculino",
    "direccion": "Avenida de la Montaña 666",
    "telefono": "555-789-0123",
    "correo": "alejandro.gomez@example.com",
    "fecha_inscripcion": "2024-07-26"
  },
  {
    "nombre": "Camila",
    "apellido": "Pérez",
    "fecha_nacimiento": "2002-04-27",
    "genero": "Femenino",
    "direccion": "Plaza del Bosque 777",
    "telefono": "555-321-6547",
    "correo": "camila.perez@example.com",
    "fecha_inscripcion": "2024-07-26"
  },
  {
    "nombre": "Daniel",
    "apellido": "Ruiz",
    "fecha_nacimiento": "1999-08-10",
    "genero": "Masculino",
    "direccion": "Calle del Lago 888",
    "telefono": "555-567-8901",
    "correo": "daniel.ruiz@example.com",
    "fecha_inscripcion": "2024-07-26"
  }
]
```

## Cursos
```json
[
  {
    "nombre_curso": "Introducción a la Programación",
    "descripcion": "Aprende los fundamentos de la programación con Python.",
    "creditos": 4
  },
  {
    "nombre_curso": "Desarrollo Web Front-End",
    "descripcion": "Crea interfaces web interactivas con HTML, CSS y JavaScript.",
    "creditos": 5
  },
  {
    "nombre_curso": "Base de Datos Relacionales",
    "descripcion": "Domina el diseño y la gestión de bases de datos con SQL.",
    "creditos": 3
  },
  {
    "nombre_curso": "Inteligencia Artificial",
    "descripcion": "Explora los conceptos y algoritmos de la IA moderna.",
    "creditos": 4
  },
  {
    "nombre_curso": "Análisis de Datos",
    "descripcion": "Aprende a extraer información valiosa de los datos.",
    "creditos": 3
  }
]
```
# Matriculas
```json
[
  {
    "id_estudiante": 1,
    "id_curso": 2
  },
  {
    "id_estudiante": 3,
    "id_curso": 1
  },
  {
    "id_estudiante": 2,
    "id_curso": 3
  },
  {
    "id_estudiante": 4,
    "id_curso": 2
  },
  {
    "id_estudiante": 5,
    "id_curso": 1
  },
  {
    "id_estudiante": 6,
    "id_curso": 3
  },
  {
    "id_estudiante": 7,
    "id_curso": 2
  },
  {
    "id_estudiante": 8,
    "id_curso": 1
  },
  {
    "id_estudiante": 9,
    "id_curso": 3
  },
  {
    "id_estudiante": 10,
    "id_curso": 2
  }
]
```

# Calificaciones
```json
[{
    "id_estudiante": 1,
    "id_curso": 1,
    "calificacion":100
},
{
    "id_estudiante": 2,
    "id_curso": 1,
    "calificacion":51
}]
```