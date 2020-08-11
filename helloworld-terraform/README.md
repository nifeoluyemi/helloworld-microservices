# Hello, World Terraform
Provision a free kubernetes cluster to IBM Cloud using terraform

## Installing terraform on MAC OS

Run these commands to install terraform
```
brew install tfenv
tfenv install 0.12.24
tfenv use 0.12.24
```

Download the IBM terraform provider plugin to plugins directory 
```
mkdir -p ~/.terraform.d/plugins
cd ~/.terraform.d/plugins
wget https://github.com/IBM-Cloud/terraform-provider-ibm/releases/download/v1.2.0/darwin_amd64.zip
unzip darwin_amd64.zip
```

### Run the following commands to deploy the service to IBM Cloud
In the helloworld-terraform project directory, run the following commands

```
terraform init
```

```
terraform plan
```

```
terraform apply
```




### Resources

https://cloud.ibm.com/docs/terraform?topic=terraform-container-resources#container-cluster

https://www.terraform.io/docs/provisioners/local-exec.html 