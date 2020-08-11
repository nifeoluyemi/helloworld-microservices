output "k8s_cluster_name" {
  value = "${ibm_container_cluster.helloworld_kube.name}"
}

output "k8s_cluster_id" {
  value = "${ibm_container_cluster.helloworld_kube.id}"
}

output "k8s_cluster_crn" {
  value = "${ibm_container_cluster.helloworld_kube.crn}"
}
