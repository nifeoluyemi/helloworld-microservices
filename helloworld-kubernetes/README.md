# Hello, World Kubernetes


### Deploy services to kubernetes

- Create an IBM Kubernetes Cluster on IBM Cloud
- Follow the the "Access" guidelines in your cluster dashboard on IBM Cloud to connect to your cluster in your terminal
![Add new API Key](https://github.com/nifeoluyemi/helloworld-microservices/blob/master/helloworld-media/ibm-ks-connect.png)

In the same terminal, Run the following commands

```
kubectl apply -f helloworld-sc.yaml

kubectl apply -f helloworld-mongodb-pv.yaml
kubectl apply -f helloworld-mongodb-pvc.yaml
kubectl apply -f helloworld-mongodb-deployment.yaml
kubectl apply -f helloworld-mongodb-service.yaml

kubectl apply -f helloworld-flask-deployment.yaml
kubectl apply -f helloworld-flask-service.yaml

kubectl apply -f helloworld-react-deployment.yaml
kubectl apply -f helloworld-react-service.yaml
```

### Clean up

Run the following commandds tot erase all the created resources

```
kubectl delete deployment helloworld-react
kubectl delete service helloworld-react-service

kubectl delete deployment helloworld-flask
kubectl delete service helloworld-flask-service

kubectl delete deployment helloworld-mongo 
kubectl delete pvc helloworld-mongo-pvc
kubectl delete pv helloworld-mongo-pv 

kubectl delete sc helloworld-storage-class

```

### Resources

- https://kubernetes.io/docs/concepts/services-networking/service/
- https://testdriven.io/blog/running-flask-on-kubernetes/
- https://dev.to/rieckpil/deploy-a-react-application-to-kubernetes-in-5-easy-steps-516j