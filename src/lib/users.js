const { bcrypt: { generateHash } } = require('../helpers');

module.exports = [
  {
    name: 'Wesley Matos',
    email: 'wrickee@gmail.com',
    password: generateHash('wes123'),
    phone: '94516-4154',
    isAdmin: true,
  },
  {
    name: 'Fake user 1',
    email: 'user1@email.com',
    password: generateHash('fake-user123'),
    phone: '11111-1111',
    isAdmin: false,
  },
  {
    name: 'Fake user 2',
    email: 'user2@email.com',
    password: generateHash('fake-user123'),
    phone: '22222-2222',
    isAdmin: false,
  },
  {
    name: 'Fake user 3',
    email: 'user3@email.com',
    password: generateHash('fake-user123'),
    phone: '33333-3333',
    isAdmin: false,
  },
];
