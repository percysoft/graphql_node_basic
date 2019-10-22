'use strict'

const courses = [
  {
    _id: 'anyid',
    title: 'Mi titulo',
    teacher: 'mi profesor',
    description: 'Una descripcion',
    topic: 'Programacion',
  },
  {
    _id: 'anyid2',
    title: 'Mi titulo2',
    teacher: 'mi profeso2r',
    description: 'Una descripcion2',
    topic: 'Programacion2',
  }
]
module.exports = {
  // hello: () => {
  //   return 'Hola mundo'
  // }
  // getCourses: () => {
  //   return courses
  // }
  Query: {
    getCourses: () => {
      return courses
    },
    getCourse: (root, args) => {
      const course = courses.filter(course => course._id === args.id)
      return course.pop()
    }
  }
}