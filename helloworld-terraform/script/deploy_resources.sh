#!/bin/bash

ibmcloud_k8s_cluster_id="$1"
if [ -z "${ibmcloud_k8s_cluster_id}" ]; then
    echo "No Kubernetes Cluster ID specified."
    exit 1
fi

ibmcloud_username="$2"
if [ -z "${ibmcloud_username}" ]; then
    echo "Specify an IBM Cloud Username"
    exit 1
fi

ibmcloud_password="$3"
if [ -z "${ibmcloud_password}" ]; then
    echo "Specify an IBM Cloud user password"
    exit 1
fi


which ibmcloud > /dev/null 2>&1
ibmcloud_cli_exists="$?"

which kubectl > /dev/null 2>&1
kubectl_exists="$?"

if [[ ${ibmcloud_cli_exists} -ne 0 || ${kubectl_exists} -ne 0 ]]; then
    echo "Installing IBMCloud CLI tools and the Kubernetes Service plug-in"
    curl -sL https://ibm.biz/idt-installer | bash
fi

ibmcloud login -a cloud.ibm.com -r us-south -g Default -u "${ibmcloud_username}" -p "${ibmcloud_password}"
if [ $? -ne 0 ]; then
    echo "Failed to login to IBM Cloud."
    echo "Check Username and Password combination"
    exit 1
fi

ibmcloud ks cluster config --cluster ${ibmcloud_k8s_cluster_id}
if [ $? -ne 0 ]; then
    echo "Failed to set the Kubernetes context to your cluster"
    exit 1
fi

terraform_directory="$(dirname "$(pwd)")"
helloworld_directory="$(dirname "${terraform_directory}")"
kubernetes_resources_directory="${helloworld_directory}/helloworld-kubernetes"

# Create Storage Class Resource
kubectl apply -f "${kubernetes_resources_directory}/helloworld-sc.yaml"

# Create all resources needed for mongodb pod
kubectl apply -f "${kubernetes_resources_directory}/helloworld-mongodb-pv.yaml"
kubectl apply -f "${kubernetes_resources_directory}/helloworld-mongodb-pvc.yaml"
kubectl apply -f "${kubernetes_resources_directory}/helloworld-mongodb-deployment.yaml"
kubectl apply -f "${kubernetes_resources_directory}/helloworld-mongodb-service.yaml"

# Create all resources needed for flask api backend
kubectl apply -f "${kubernetes_resources_directory}/helloworld-flask-deployment.yaml"
kubectl apply -f "${kubernetes_resources_directory}/helloworld-flask-service.yaml"

# Create all resources needed for reactjs frontend
kubectl apply -f "${kubernetes_resources_directory}/helloworld-react-deployment.yaml"
kubectl apply -f "${kubernetes_resources_directory}/helloworld-react-service.yaml"