interface Request extends Express.Request {
  user: User;
}

interface User {
  sub: string; // user id
  name: string; // user name
}
