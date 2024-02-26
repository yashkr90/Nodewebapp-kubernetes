# Nodewebapp-kubernetes

1. Create a simple web app using nodejs
2. Create a Dockerfile inside it
3. build it using ``` docker build -t yashkr90/nodewebapp . ```
4. Push the image to docker hub using ``` docker push yashkr90/nodewebapp ```
5. Create two kinds of file viz deployment.yaml and service.yaml for kubernetes
6. Start minikube using ``` minikube start ```
7. apply the yaml configuration using ``` kubectl apply -f deployment.yaml ``` and ```kubectl apply -f service.yaml ```
8. see the pods using ``` kubectl get pods ```
9. run the pod uisng  ``` kubectl service nodewebapp ```
