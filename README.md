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

![Insomnia](https://user-images.githubusercontent.com/98834723/197753608-c78b4a9b-746f-4430-940d-0c9388db446b.png)

# Get registered in MongoDB
Now it's time for the **databases**. In this project I use **MongoDB**. To get more information about MongoDB read the [MongoDB Documentation](https://www.mongodb.com/docs/)

After the registration you will need to create a project. Name it as you want, the name doesn't really matter. 

Then, create a cluster and name it also as you want, but remember the **username and password** with which you have created your cluster.

![mongodb](https://user-images.githubusercontent.com/98834723/197753634-c26da67f-644d-44f8-806d-3b496ea38b70.png)

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
**POST** request to add or update the information in some section
![add-example](https://user-images.githubusercontent.com/98834723/197754396-8e8b390f-6f67-4bc6-90eb-3aded9bb646c.png)
![Screenshot from 2022-10-25 13-54-17](https://user-images.githubusercontent.com/98834723/197754475-1b92c649-ec12-42b2-bdb3-ab3109c5b266.png)

**GET** request to see the all info in the section
![get-example](https://user-images.githubusercontent.com/98834723/197754001-8027c2e4-0b2e-47e3-8783-fc49f20fffd5.png)

**DELETE** request to delete an object with specified id
![Screenshot from 2022-10-25 13-55-12](https://user-images.githubusercontent.com/98834723/197754896-85aeaf98-8f40-4a51-bc00-13fea31860fe.png)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
