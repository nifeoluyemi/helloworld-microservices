# Hello, World Mongo Database
MongoDB Database for the Hello, World Application

### Commands
- Pull the mogo image from docker hub
```
docker pull mongo:4.2.6
```

- Start the helloworld-mongodb container
```
docker run -d -p 27017:27017 --name helloworld-mongodb mongo:4.2.6
```

- Go into the conatiner
```
docker exec -it helloworld-mongodb bash
```