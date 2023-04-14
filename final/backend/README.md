# Spede Backend

## One time setup

- Run `sql/baseline.sql`
- In this directory, `./backend`, create a `.env` file with the following fields:

```
PORT = <port of backend>
DB_HOST = <localhost> or <ip address of VM>
DB_NAME = "spede"
DB_USER = <DB username>
DB_PASSWORD = <DB password> 
DB_PORT = 3306
```
## Starting the server

```bash
# Install dependencies
$ npm install

# Start the API
$ npm start
```