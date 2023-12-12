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
}

class UserView {
    displayUsers(users) {
        // Display the users on the webpage
        const outputElement = document.getElementById('output');
        outputElement.innerHTML = `<h2>User List:</h2><pre>${JSON.stringify(users, null, 2)}</pre>`;
    }
}

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

// Instantiate the controller
const userController = new UserController();

// Simulate adding users
userController.addUserToModel({ id: 1, name: 'John Doe' });
userController.addUserToModel({ id: 2, name: 'Jane Smith' });

// Display all users
userController.showAllUsers();
