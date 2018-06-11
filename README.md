# Menual App
## Backend

Frontend to be found [here](https://github.com/Sofia-Christ/menual)

Install
```
npm install
```

Run
```
npm start
or
nodemon
```

API Localhost:3000

POST /food Request

Header:
```
'Content-Type' : 'application/json'
```
Body (JSON):
```
{"query":"theFoodImLookingFor"}
```

POST /food Response
```
JSON containing array the has various infos about food nested inside...

res.branded[0].food_name <- Example of foodname nas
```

[Postman Config Images](https://imgur.com/a/V3Knp6D) for API testing