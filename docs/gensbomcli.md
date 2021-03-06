---
sidebar_position: 3
---

# How to generate an SBOM

Scribe's *gensbom* CLI tool generates an SBOM for docker images and OCI images. You can call *gensbom* from your CI pipeline after the build stage, or run it from a bash shell and point it to an image in your registry.  

*gensbom* runs on Mac or Linux. To access docker images in public registries, have dockerd installed on your machine.

1. Get Scribe *gensbom* CLI tool  
```curl https://www.scribesecurity.com/getscribe | sh```

2. Generate an *SBOM*  
```gensbom bom <target>```  
```<target>``` is the docker image: *name:tag, file path, or registry URL*  
This creates a default SBOM in a CycloneDX JSON format. For example:  
```gensbom bom alpine:latest```  
creates the SBOM of image *alpine:latest* from Dockerhub. The SBOM is found by default under ```/tmp/scribe/registry/alpine/latest```  

<br/>  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By default, the SBOM file name is the hash of the image. You change the output file path and name as follows:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```gensbom bom <target> [--output-file /path/file_name.json]```  

<br/>  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You can also change the output directory as follows:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```gensbom bom <target> [--output-directory /file_path]```  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SBOMs path format is as follows: ```{target source}/{image name}/{image tag}```
For example:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```/tmp/scribe/registry/alpine/latest```

## Examples   

### Target (image) locations:

```gensbom bom yourrepo/yourimage:tag```    
By default the image is retrieved by dockerd on dockerhub.  

Explicitly use the *Docker* daemon:  
```gensbom bom docker:yourrepo/yourimage:tag ```  

Use a local traball created by "docker save":  
```gensbom bom docker-archive:path/to/yourimage.tar ```  

Use a tarball from your local disk for *OCI archives* (for example, Skopeo):  
```gensbom bom oci-archive:path/to/yourimage.tar ```  

Read the image directly from a path on your local disk (any directory):  
```gensbom bom dir:path/to/yourproject```  

Pull image directly from a registry:  
```gensbom bom registry:yourrepo/yourimage:tag```  

Read directly from a path on disk (any single file):  
```gensbom bom file:path/to/yourproject/file ```

### Output SBOM locations

```gensbom bom alpine:latest --output-file /your_sboms/sample-sbom.json  ```  
```gensbom bom alpine:latest --output-directory /your_sboms```
