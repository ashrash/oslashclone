# Oslashclone


Tech: Node + Express + MySQL/sequelize + Typescript + Swagger + Docker


## Folder structure 
```
├── .github/workflows
├── src
│   ├── config
│   ├── controllers
│   ├── interfaces
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── tests
│   ├── utils
│   ├── app.ts
│   └── index.ts
```


## Running App in DEV mode
``` 
#Install dependencies
npm i 

#Start app in dev mode. Default port: 3000
npm run dev 
```

## Running Tests
Make sure the app is running using the above command.
```
npm run test
```

## Swagger endpoint

``` http://localhost:3000/api-docs ```



The kind of API chosen - Rest API 

The kind of authentication mechanism - Basic Username and password auth with JWT. 

The database chosen - Mysql

Table(s) design -

![Screenshot 2022-10-15 at 3 13 07 PM](https://user-images.githubusercontent.com/7907139/195979882-b588337d-478b-4f0c-9777-e8cff9ce8122.png)
added feat1