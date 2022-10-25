# CRUD app JSON

This application is very similiar to [JSONplaceholder](https://jsonplaceholder.typicode.com/).

# Installation
## Packages
Now let's get started with installation of all required packages and applications, etc...

```bash
$ npm i mongoose dotenv express cors --save
```
The **Node package manager** will install this packages which we need for running the application

## Insomnia
As you installed the packages mentioned at the top, now it's time to install [INSOMNIA](https://insomnia.rest/download)

You will be able to see the possible version of **Insomnia** in your PC

# Get registered in MongoDB
Now it's time for the **databases**. In this project I use **MongoDB**. To get more information about MongoDB read the [MongoDB Documentation](https://www.mongodb.com/docs/)

After the registration you will need to create a project. Name it as you want, the name doesn't really matter. 

Then, create a cluster and name it also as you want, but remember the **username and password** with which you have created your cluster.

# Time for coding !

## To run this application, you only need to type in your command line
``` bash
$ npm start
```
This command will run for you the **server.js** file and you will get an output like this
```javascript
> node.js-project@1.0.0 start
> node server.js

App is listening on port 7777
Connected to MongoDB
```
If you got something like this, congratulations, now you can modify your data

Now go to **Insomnia** and type on the search bar    ```http://localhost:7777/ ```

As I mentioned before this application will be similiar to [JSONplaceholder](https://jsonplaceholder.typicode.com/). So you can modify data in the following sections and each of this sections has its describing members

### /posts - Members are userId, id, title & body
### /comments - Members are postId, id, name, email & body
### /albums - Members are userId, id & title
### /photos - Members are albumId, id, title, url & thumbnailUrl
### /todos - Members are userId, id, title & completed
### /users - Members are id, name, username, email, address, phone, website & company

As this is a **CRUD (Create, Read, Update, Delete)** app, you can do the following modifications on this application and they are
### Get    Post & Delete

# Some examples

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
