
# Express App Template

This is a quick setup template to use for Nodejs/Express. All code given are examples of how you can set up your own routes using this format. 



## Tech Stack

**Server:** Node, Express

**Database**: Mongoose, MongoDB

**Template Language**: EJS




## Folder Structure

```
.
├── README.md
├── controllers
│   ├── exampleFuncCtrl.js
│   └── index.js
├── models
│   ├── Example.js
│   └── index.js
├── package.json
├── public
│   ├── assets
│   └── css
├── routes
│   ├── exampleRoute.js
│   └── index.js
├── server.js
└── views
    └── index.ejs
```


## Installation

To use this template will need a small bit of setup for things not included, like ```.env```.

1. Use this Template to 'Create a new repository'

2. Once you have created your repo and cloned it down, as per usual Github methods, you will need to ```touch .env```.

3. Things to put inside the ```.env```, PORT and DB_URI. Below are my values, but replace the PORT with your desired port and likewise with your mongoDB url. This works with either Atlas or local.


```bash
  PORT=4000
  DB_URI=mongodb://127.0.0.1:27010/exmaple
```

4. Make any changes to the package.json as you see fit.

5. All routes/controllers/models given are merely examples of how to use this template's format. Please replace those with your own desired code/data.

6. Run it! ```npm start```

**IMPORTANT**: This template uses *mongoose v6.10*, v7 seems to break it for now.
## Feedback + Bugs

If you have any feedback/suggestions/bugs to report, please open an [Issue](https://github.com/NikkiHmltn/express-app-template/issues)!


## License

[MIT](https://choosealicense.com/licenses/mit/)

