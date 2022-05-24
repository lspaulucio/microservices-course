# Mini Microservice Application

This very simple application looks like a blog system where a user can create new posts and others can comment on them.


## Enabling Ingress Nginx
In this project Ingress Nginx is used to redirect requests from React App to the different services. So, to install this controller follow the instructions below.
### Local development with Minikube Cluster
The ingress controller can be installed through minikube's addons system [^1]:

```bash
~/> minikube addons enable ingress
```

[^1]: Source: https://kubernetes.github.io/ingress-nginx/deploy/#minikube.