# React App + Django API

A simple integration between a Django API

Based on article: [Creating an app with React and Django](https://blog.logrocket.com/creating-an-app-with-react-and-django/).

This project consists of two internal projects:

- *pump_data*: the Django project containing the REST API along with all the backend code;
- *base-fe*: the React project with all the Node dependencies, settings and things related to the frontend.

## Run it locally

In order to run the projects locally you need to have Node, npm and `python3` installed on your machine.

### Running the Django project

First, create a Python virtual environment to isolate the projects:

```bash
python3 -m venv agmonitor_env
```

Then, activate it:

```bash
source agmonitor_env/bin/activate
```

`cd` into the _venv_ and unzip the file

```bash
unzip coding_exercise.zip
```

Add the Django dependencies:

```bash
pip install -r django_react_project/requirements.txt
```

Finally, run the project:

```bash
python manage.py runserver
```

That's it!

Access the address http://localhost:8000/api/pump_data/files and check if the API is up.

### Running the React project

First, `cd` the _basic_fe_ directory and run it.  

```bash
yarn install
export NODE_OPTIONS=--openssl-legacy-provider
yarn start
```

This should open a web browser to port 3000 and show a dropdown listing the choices.

