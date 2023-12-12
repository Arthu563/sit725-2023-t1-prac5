const UserModel = require('./Model');
const UserView = require('./View');

class UserController {
  constructor() {
    this.model = new UserModel();
    this.view = new UserView();
  }

  showAllUsers() {
    const users = this.model.getAllUsers();
    this.view.displayUsers(users);
  }

  addUserToModel(user) {
    this.model.addUser(user);
  }
}

module.exports = UserController;
