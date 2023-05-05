# Spede Backend

## One time setup

1. Run `sql/baseline.sql`
2.  In this directory, `./backend`, create a `.env` file with the following fields:

```
DB_HOST = <localhost> or <ip address of VM>
DB_NAME = "spede"
DB_USER = <DB username>
DB_PASSWORD = <DB password> 
DB_PORT = 3306

BACKEND_IP = <ip of VM> or <localhost>
BACKEND_PORT = <port of backend>
```
## Starting the backend server

```bash
# Use the correct Node version
$ nvm use

# Install dependencies
$ npm install

# Start the API
$ npm start
```