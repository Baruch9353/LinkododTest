import { readFile, writeFile } from 'fs/promises';
import bcrypt from 'bcrypt';

const listUsers = './data/users.json';

// Get all users
export async function getAllUsers() {
    const data = await readFile(listUsers, 'utf8');
    return JSON.parse(data);
}

// Get a user by id
export async function getUserByEmail(email) {
    const users = await getAllUsers();
    return users.find(r => r.email == email);
}

// Check password including bcrypt comparison
export async function passwordCheck(email, password) {
    const user = await getUserByEmail(email);
    const passwordHash = await bcrypt.compare(password, user.password);
    return passwordHash;
}

// Add a new user including password hashing
export async function addUsers(newUser) {
    const users = await getAllUsers();
    const bcryptPassword = await bcrypt.hash(newUser.password, 10);
    newUser.password = bcryptPassword;
    const userToAdd = {
        userName: newUser.userName,
        email: newUser.email,
        password: newUser.password
    };
    users.push(userToAdd);
    await writeFile(listUsers, JSON.stringify(users, null, 2));
    return userToAdd;
}

