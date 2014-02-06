yet-the-same-angular-todo-app
=============================

This repo <del>is going to</del> hosts <del>the famous</del> another Angular Todo App.

I code this SPA following the [Angular-Todo repo of Jewelfarazi][url-repo]. Check out his repo to learn about his great work. 

I'm working with HEROKU, the sample application deployed to Heroku is  here: [ToDo Sample App hosted in Heroku][heroku-app]

###TO USE THIS SPA LOCALLY

1) Install Node dependencies: 

```
npm install
```

2) Start server. You can do it with node or foreman I use foreman because it's the one that the Heroku tutorial suggests: 

```
foreman start
```

```
node web.js
```

3) Open the Single Web Application at: 

```
http://localhost:5000
```


###IF YOU WANT TO DEPLOY THIS APP TO HEROKU

1) Add your heroku app remote: 

```
git remote add heroku <heroku-git-repository>
```

2) Push this repo to heroku: 

```
git push heroku master
```

###Enjoy this SPA!

[url-repo]: https://github.com/jewelfarazi/angular-todo
[heroku-app]: http://sheltered-dawn-9351.herokuapp.com
