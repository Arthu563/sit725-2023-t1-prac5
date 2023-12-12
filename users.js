const UserController = require('./Controller');

// Instantiate the controller
const userController = new UserController();

// Simulate adding users
userController.addUserToModel({ id: 1, name: 'John Doe' });
userController.addUserToModel({ id: 2, name: 'Jane Smith' });

// Display all users
userController.showAllUsers();
