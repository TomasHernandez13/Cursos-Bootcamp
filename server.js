import db from './app/models/index.js';
import * as userController from './app/controllers/user.controller.js'
import * as bootcampController from './app/controllers/bootcamp.controller.js'

async function run() {
  const newUser = await userController.createUser({
    firstName: 'Mateo',
    lastName: 'Díaz',
    email: 'mateo.diaz@correo.com',
  });

  const newUser02 = await userController.createUser({
    firstName: 'Santiago',
    lastName: 'Mejías',
    email: 'santiago.mejias@correo.com',
  })

  const newUser03 = await userController.createUser({
    firstName: 'Lucas',
    lastName: 'Rojas',
    email: 'lucas.rojas@correo.com',
  })

  const newUser04 = await userController.createUser({
    firstName: 'Facundo',
    lastName: 'Fernandez',
    email: 'facundo.fernandez@correo.com',
  })

  //bootcamp
  const newBootcamp = await bootcampController.createBootcamp({
    title: 'Introduciendo El Bootcamp De React',
    cue: 10,
    description: 'React es la librería más usada en JavaScript para el desarrollo de interfaces.',
  })

  const newBootcamp02 = await bootcampController.createBootcamp({
    title: 'Bootcamp Desarrollo Web Full Stack.',
    cue: 12,
    description: `Crearás aplicaciones web utilizando 
    las tecnologías y lenguajes más actuales y populares, 
    como: JavaScript, nodeJS, Angular, MongoDB, ExpressJS.`,
  })

  const newBootcamp03 = await bootcampController.createBootcamp({
    title: 'Bootcamp Big Data, Inteligencia Artificial & Machine Learning',
    cue: 18,
    description: `Domina Data Science, y todo el ecosistema de lenguajes y 
    herramientas de Big Data, e intégralos con modelos avanzados de Artificial Intelligence y Machine Learning`,
  })

  await bootcampController.addUser(newUser.id, newBootcamp.id);
  await bootcampController.addUser(newUser02.id, newBootcamp.id);

  await bootcampController.addUser(newUser.id, newBootcamp02.id);

  await bootcampController.addUser(newUser.id, newBootcamp03.id);
  await bootcampController.addUser(newUser02.id, newBootcamp03.id);
  await bootcampController.addUser(newUser03.id, newBootcamp03.id);

  await bootcampController.findBootcampById(1);
  await bootcampController.findAllBootcamps();
  
  await userController.findUserById(1)
  await userController.findAll()
  await userController.updateUserById(1, {
    firstName: 'Pedro',
    lastName: 'Sanchez'
  })
  await userController.deleteUser(1)
}

db.sequelize.sync({ force: true }).then(() => {
  console.log('Sobreescribiendo y sincronizando la base de datos.');
  run();
});