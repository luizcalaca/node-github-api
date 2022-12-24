# Node.js + Github API

This project connects to a thirdy part API and get data in three routes:

Number is a query string optional

```zh
/api/users?since={number}
```

Username is a parameter necessary to get the details

```zh
/api/users/:username/details
```

Username is a parameter necessary to get the repos

```zh
/api/users/:username/repos
```

## How to access?

### Running on local machine

1. clone the project
2. npm install in root folder
3. npm tests
4. npm start
5. Use some HTTP client to access the routes listed above

### Running on cloud

1. Access (API)[https://node-github-api-production.up.railway.app/api/users/]
2. Change for each desire route listed above.
