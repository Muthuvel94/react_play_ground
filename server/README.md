Low-level request handling ==> HTTP Module (Handle HTTP requests)

Routing, Server Logic ==> Express (parse response + routing) --> Morgan (logging) --> BodyParser (Help parse incoming HTTP requests)

Database ==> Mangoose (working with MongoDB) --> MongoDB (Storing Data)

Authentication ==> passport JS (Authenticating users) --> passport-Local (Authenticating users with a username/password) --> passport-JWT (Authenticating users with a JWT) ---> Bcrypt-Node.js (storing a users password safely)

Authentication Controller ==> Router --> 1. comment controller --> Response --> 2. Authentication Controller --> Response --> 3. Posts Controller --> Response
