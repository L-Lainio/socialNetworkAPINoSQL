# socialNetworkAPINoSQL
# NoSQL Challenge: Social Network API (Module 18)

## Table of Contents
* [Description](#description)
* [User Story](#user-story)
* [Summary](#summary)
* [Example](#example-images)
* [Author](#author)
* [ContactMe](#contact-me)

## Description
 In the NoSQL Challenge: Social Network API, you are tasked with building an API for a social network web application using Express.js, MongoDB, and Mongoose ODM. MongoDB's popularity in social networks stems from its speed with large data volumes and flexibility with unstructured data. The project requires users to share thoughts, react to friends' thoughts, and manage friend lists. To format timestamps, you can use a JavaScript date library or the native Date object. Additionally, a walkthrough video demonstrating the application's functionality must be created since the project won't be deployed.

## User Story
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Summary
To set up your models and API routes, follow these guidelines:

Models:

User:

Fields: username (String, Unique, Required, Trimmed), email (String, Required, Unique, Valid email address), thoughts (Array of _id values referencing the Thought model), friends (Array of _id values referencing the User model).
Schema Settings: Create a virtual called friendCount to retrieve the length of the user's friends array field on query.
Thought:

Fields: thoughtText (String, Required, 1-280 characters), createdAt (Date, Default current timestamp), username (String, Required), reactions (Array of nested documents).
Schema Settings: Create a virtual called reactionCount to retrieve the length of the thought's reactions array field on query.
Reaction (Schema Only):

Fields: reactionId (Mongoose's ObjectId data type), reactionBody (String, Required, 280 character max), username (String, Required), createdAt (Date, Default current timestamp).
Schema Settings: Used as the reaction field's subdocument schema in the Thought model.
API Routes:

/api/users:

GET all users
GET a single user by _id with populated thought and friend data
POST a new user
PUT to update a user by _id
DELETE to remove a user by _id (Bonus: Remove associated thoughts)
/api/users/:userId/friends/:friendId:

POST to add a new friend to a user's friend list
DELETE to remove a friend from a user's friend list
/api/thoughts:

GET all thoughts
GET a single thought by _id
POST to create a new thought (include pushing its _id to the associated user's thoughts array)
PUT to update a thought by _id
DELETE to remove a thought by _id
/api/thoughts/:thoughtId/reactions:

POST to create a reaction in a thought's reactions array
DELETE to remove a reaction by its reactionId value.



## Example Images (im currently troubleshooting 6.5.2024)
![my current issue working on it](/images/Zight%202024-6-5%20at%2010.49.19%20PM.png)
<!-- ![]()
![]()
![]()
![]() -->


## Author

Written by Lora Lainio, if you like what you see and would like to colab contact me.

## Contact Me
- GitHub: [L-Lainio](https://github.com/L-Lainio/)
- Email: arollainio@gmail.com
