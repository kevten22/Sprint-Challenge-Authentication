<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
        Middleware are functions implemented in between the server and the application. 

        Sessions are a header called a cookie that is used to keep track of a user's interaction with an application.

        BCrypt is a module used as hashing function, mostly for passwords, to keep them secure and encrypted.

        JSON Web Tokens are a method by which you can transfer data between two parties. They are secured with a cryptographic signature using one of the hashing algorithms. The client then has the token and uses it to access data with verification from the server.

2.  What does bcrypt do in order to prevent attacks?
        It hashes any sensitve information so that it appears as a random sequence of characters and rather than as plain text. Data saved in this manner is harder to decipher when attackers have access to the database.

3.  What are the three parts of the JSON Web Token?
        Header,
        Payload,
        Signature
