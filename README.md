# Hello, World Microservices

This is a Hello World project where you can add a programming language and its hello world code. It comprises of a frontend ReactJS application, a Python Flask backend API application, and a MongoDB database. The goal of this project is to compile each individual service into its own container image and deploy to a kubernetes cluster on IBM Cloud.

### Web UI
- Add a new Language with Hello World code (URL: /new)
![Add new Language](https://github.ibm.com/nife/helloworld-ms/blob/master/helloworld-media/new-language.png)

- List all Languages (URL: /)
![All Languages](https://github.ibm.com/nife/helloworld-ms/blob/master/helloworld-media/all-languages.png)


## Steps to Run the Project

### Create an IBM Cloud account 
Create an IBM Cloud account if you haven't done so already

### Create IBM CLoud IAM API Key
- Open IBM Cloud console
- Go to Manage > Access (IAM)
- In the new window, on the left navigation menu, select API Keys, and Create an IBM Cloud API Key.
![Add new API Key](https://github.ibm.com/nife/helloworld-ms/blob/master/helloworld-media/apikeys.png)
- Copy the key and store it somewhere safe

### Create an IBM Cloud Container Registry
- Click on "Catalog" in the header menu on IBM Cloud
- Search for "Container Registry", and select "Container Registry"
- Click on Create button, to create a new Container Registry
- Navigate to the "Namespaces", and click "Create +" button to add a new namespace.


### Install Docker
[Install Docker on your machine](https://docs.docker.com/engine/installation/)

- Install Docker Desktop, and login to Docker Desktop
Create Docker Hub Account [Here](https://hub.docker.com/), If you don't already have one.

### Login to your container registry
```
docker login us.icr.io/<container_registry_namespace> -u iamapikey -p <ibm_iam_cloud_api_key>
```

### Pull Mongo DB image from Docker Hub
```
docker pull mongo:4.2.6
```

### Build and Push the Hello World Flask and React Applications
Still in the root directory of this project, run the commands to build and push the image for each service:

_HelloWorld Flask_
```
docker build -t us.icr.io/<container_registry_namespace>/helloworld-flask helloworld-flask
docker push us.icr.io/<container_registry_namespace>/helloworld-flask
```

_HelloWorld React_
```
docker build -t us.icr.io/<container_registry_namespace>/helloworld-react helloworld-react
docker push us.icr.io/<container_registry_namespace>/helloworld-react
```

### Deploy Kubernetes Resources
**See Runbook [Here](https://github.ibm.com/nife/helloworld-ms/blob/master/helloworld-terraform/README.md)**

### Running the Projects
To Run each individual project, see their respective README
- [MonogDB](https://github.ibm.com/nife/helloworld-ms/blob/master/helloworld-mongodb/README.md)
- [Python Flask](https://github.ibm.com/nife/helloworld-ms/blob/master/helloworld-flask/README.md)
- [React JS Frontent](https://github.ibm.com/nife/helloworld-ms/blob/master/helloworld-react/README.md)


### Using Terraform
I created a terraform script to deploy a free kubernetes cluster to ibm cloud, and run the deploy the kubernetes resources using a bash script.
**See Runbook [Here](https://github.ibm.com/nife/helloworld-ms/blob/master/helloworld-terraform/README.md)**
