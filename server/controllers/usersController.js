import { getAllUsers, getUserByEmail, passwordCheck, addUsers  } from '../DAL/usersDal.js';

// Handles GET /users - returns all users
export async function getAllUsersHandler(req, res) {
  const users = await getAllUsers();
  res.json(users);
}

// Handles GET /users/:id - returns a specific user by email
export async function getUsersHandler(req, res) {
  const email = req.params.email;
  const password = req.params.password;
  const user = await getUserByEmail(email);
  if (!user) return res.status(404).send('User not found, please sign up.');
  const isPasswordValid = await passwordCheck(email, password);
  if (!isPasswordValid) return res.status(404).send('Incorrect password, please try again.');
  res.send("Welcome back " + user.userName + "!");
}

// Handles POST /users - creates a new user
export async function createUsersHandler(req, res) {
  const { userName, email, password } = req.body;
  if ( !userName || !email || !password ) {
    return res.status(400).send("All fields are required!");
  }
  const isExists = await getUserByEmail(email)
  if(isExists) { return res.send("This email is already registered.")}

  await addUsers({ userName, email, password  });
  res.status(201).send("New user add successfully🥳");
}

