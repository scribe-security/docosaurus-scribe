---
sidebar_position: 1
---

# Overview

The Scribe CLI tool is designed to allow you to create a full Software Bill of Materials (SBOM) of any docker image or file folder you have access to, down to the file level. There will be no more hidden files or dependencies in any of the packages or images you are working with.

Scribe's CLI tool’s SBOM allows you to:

- Verify individual packages (open-source or third party)
- Check for known vulnerable packages (like Colors or Log4j)
- Document your image’s integrity and provenance
- Show compliance to new regulations (NIST SP 800-218, EO 14028)

After you’ve created an SBOM you can cryptographically sign it making it into an attestation.

## QuickStart

Scribe’s CLI tool produces an SBOM in a JSON or XML format in the CycloneDX SBOM standard.  

System prerequisite:
The tool works on Mac and Linux systems only. If you want access to external docker images from public registries, docker daemon should be installed before you install the CLI tool.   

To create an SBOM the basic command is:  
`gensbom bom <target> `

`<target>` is the docker image: name:tag, file path, or registry URL Example:  
`gensbom bom alpine:latest`

This creates a default SBOM in a CycloneDX JSON format, from the image of alpine:latest found in dockerhub. The SBOM is found by default under 
`/tmp/scribe/registry/alpine/latest`.  

By default the SBOM file name is the hash of the image. You can specify another output file path and name as follows:  
`gensbom bom <target> [--output-file /path/file_name.json]`  

You can also set an output directory as follows:  
`gensbom bom <target> [--output-directory /file_path]`  

Output SBOMs path segments are: target source, image name, image tag. 
Example:  `/tmp/scribe/registry/alpine/latest`.  

(The path for SBOMs of alpine:latest from registry)

You now have an SBOM file you can look over and experiment with.

## Examples

Target (image) locations:  
`gensbom bom yourrepo/yourimage:tag`  

By default the image is retrieved by dockerd. If the docker daemon is running, the image is pulled directly from the registry (by default, dockerhub).
To explicitly use the Docker daemon:   
`gensbom bom docker:yourrepo/yourimage:tag`  

Use a local traball created by "docker save":  
`gensbom bom docker-archive:path/to/yourimage.tar`  

Use a tarball from your local disk for OCI archives (for example, Skopeo):  
`gensbom bom oci-archive:path/to/yourimage.tar`  

Read the image directly from a path on your local disk (any directory):  
`gensbom bom dir:path/to/yourproject`  

Pull image directly from a registry:  
`gensbom bom registry:yourrepo/yourimage:tag`  

Read directly from a path on disk (any single file):  
`gensbom bom file:path/to/yourproject/file`  
 
Output SBOM locations:  
`gensbom bom alpine:latest --output-file /your_sboms/sample-sbom.json`  
`gensbom bom alpine:latest --output-directory /your_sboms`

If you want to dive deeper into the functionality of Scribe’s CLI tool read on.

