# Spede Frontend

## One time setup

- In this directory, `./frontend`, create a `.env` file with the following fields:
- For testing, use localhost and comment out the IP of the VM
- For live demoing, use the VM and comment out the localhost

```
# LIVE
REACT_APP_BACKEND_IP="http://10.90.72.120"

# LOCAL
# REACT_APP_BACKEND_IP="http://localhost"

REACT_APP_BACKEND_PORT="8080"
PORT="3000"
```

## Starting the frontend

```bash
# Use the correct Node version
$ nvm use

# Install dependencies
$ npm install

# Start the API
$ npm start
```