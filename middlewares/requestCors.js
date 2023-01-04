// const allowedCors = [
//   'https://frontend.diplom.vitali.nomoredomains.club',
//   'https://api.diplom.vitali.nomoredomains.club',
//   'https://api.nomoreparties.co/beatfilm-movies',
//   'http://frontend.diplom.vitali.nomoredomains.club',
//   'http://api.diplom.vitali.nomoredomains.club',
//   'http://api.nomoreparties.co/beatfilm-movies',
//   'https://praktikum.tk',
//   'http://praktikum.tk',
//   'http://localhost:3000',
//   'https://localhost:3000',
//   'http://localhost:3001',
//   'https://localhost:3001',
//   'localhost:3000',
//   'http://localhost:3001/signup',
//   'http://localhost:3000/signup',
//   'http://localhost:3001/movies',
//   'http://localhost:3000/movies',
//   'http://localhost:3001/users/me',
//   'http://localhost:3000/users/me',
//   'http://localhost:3001/signout',
//   'http://localhost:3000/signout',
//   'http://localhost:3001/signin',
//   'http://localhost:3000/signin',
// ];

module.exports = function (req, res, next) {
  // const { origin } = req.headers;

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);

  // if (allowedCors.includes(origin)) {
  //   res.header('Access-Control-Allow-Origin', origin);
  //   res.header('Access-Control-Allow-Credentials', true);
  // }

  // обрабатываем предварительный cors запрос
  const { method } = req;
  const requestHeaders = req.headers['access-control-request-headers'];
  const DEFAULT_ALLOWED_METHODS = 'GET, HEAD, PUT, PATCH, POST, DELETE';

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    res.end();
    return;
  }

  next();
};
