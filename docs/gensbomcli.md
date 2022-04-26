---
sidebar_position: 3
---

# Generating an SBOM from CLI

Scribe gensbom CLI tool can generate an SBOM for docker images, OCI images, or local file directories. For example, you can invoke gensbom from your CI pipeline at the end of every stage to generate an SBOM for the output image. Alternatively, you can run gensbom on images in a registry or in a file directory. Once an SBOM is ready, you can store and share it using your own internal process. You can also run it through tools that report known vulnerabilities found in the listed components such as Grype.

## Prerequisites

The tool works on Mac and Linux systems only. If you want access to external docker images from public registries, docker daemon should be installed before you install the CLI tool.   
You can download the latest gensbom CLI tool here:
Linux: <a href='http://resources.production.scribesecurity.com/linux/amd64/gensbom'>http://resources.production.scribesecurity.com/linux/amd64/gensbom</a>
Mac Intel: <a href='http://resources.production.scribesecurity.com/darwin/amd64/gensbom'>http://resources.production.scribesecurity.com/darwin/amd64/gensbom</a>
Mac M1: <a href='http://resources.production.scribesecurity.com/darwin/amd64/gensbom'>http://resources.production.scribesecurity.com/darwin/amd64/gensbom</a>

before running the tool make sure you have the right privileges for the file by typing:
```chmod u+x gensbom```

Then, move gensbom to ```/usr/local/bin``` or run it with ```./gensbom``` from the directory it was downloaded into.

## Generate an SBOM

```gensbom bom <target>```

```<target>``` is the docker image: <i>name:tag</i>, <i>file path</i>, or <i>registry URL</i>.

Example:
```gensbom bom alpine:latest```
  
This creates a default SBOM in a CycloneDX JSON format, from the image of alpine:latest found in dockerhub. The SBOM is found by default under ```/tmp/scribe/registry/alpine/latest```.

By default the SBOM file name is the hash of the image. You can specify another output file path and name as follows:  
```gensbom bom <target> [--output-file /path/file_name.json]```

You can also set an output directory as follows:  
```gensbom bom <target> [--output-directory /file_path]```

Output SBOMs path segments are: target source, image name, image tag. 
Example:  ```/tmp/scribe/registry/alpine/latest```.
(The path for SBOMs of alpine:latest from registry)

## Examples   

### Target (image) locations:

```gensbom bom yourrepo/yourimage:tag```  

By default the image is retrieved by dockerd. If the docker daemon is running, the image is pulled directly from the registry (by default, dockerhub).  

Explicitly use the Docker daemon:
```gensbom bom docker:yourrepo/yourimage:tag ```  

Use a local traball created by "docker save":  
```gensbom bom docker-archive:path/to/yourimage.tar ```  

Use a tarball from your local disk for OCI archives (for example, Skopeo):
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
