const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const peopleRoute = require('./people.route');
const professionalRoute = require('./professional.route');
const worksforRoute = require('./worksfor.route');
const companiesRoute = require('./companies.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/people',
    route: peopleRoute,
  },
  {
    path: '/professional',
    route: professionalRoute,
  },
  {
    path: '/worksfor',
    route: worksforRoute,
  },
  {
    path: '/companies',
    route: worksforRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
