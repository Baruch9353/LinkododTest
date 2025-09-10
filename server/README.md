Express server for Linkodod application.

Allows creation, update, deletion and retrieval of posts and users.

###
To use, run:
git clone,
npm install,
npm start

###
POST /posts - Create a new post,
GET /posts - Get all posts, 
GET /posts/:id - Get a post by ID, 
PUT /posts/:id - Update an existing post, 
DELETE /posts/:id - Delete a post.

###
POST /users - Create a new user,
GET /users - Get all users,
GET /users/:email/password - Get user by email and password if valid.
