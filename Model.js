class UserModel {
  constructor() {
    this.users = [];
  }

  getAllUsers() {
    return this.users;
  }

  addUser(user) {
    this.users.push(user);
  }

  // Other methods for data manipulation
}

module.exports = UserModel;
