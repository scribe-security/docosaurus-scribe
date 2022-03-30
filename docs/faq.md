---
sidebar_position: 4
---

# FAQ

## What's integrity

Put in simple terms, software integrity is a measure of code and/or files changing along the development life cycle where they're not supposed to.
Having evidance demonstrating that your source code, tools, and images were not changed where they were not supposed to would boost confidance in your code/product as well as in your development proccess.  

## What's an SBOM

An SBOM, Softwarre Bill Of Materials, is a list of a software artifact’s components down to the file level. SBOMs are a tool for the receiver or operator of this software to manage risks such as exposure to new and existing vulnerabilities in the open-source dependencies in that software. The SBOM includes information such as the dependencies, versions, package URLs, and file locations.

## What's continuous assurance

CA (Continuous Assurance) is a concept and a set of solutions in the making, complementary to DevOps discipline’s already familiar concepts of Continuous Integration, Development, and Testing. CA granularly collects evidence about all events in the development life cycle including the product build, and deployment that might affect the eventual software product’s security. It is a means for consumers of software (such as users, buyers, and other risk stakeholders) to control the risk from the products they use. 

CA’s immediate outcome is a means to assure that software products were not tampered with and that critical security-related tests were performed during the development, but there is more to be gained from it.

To thwart tampering by attackers or vendor cover-ups of under-the-hood components from dubious origin such as from banned countries, CA turns the collected evidence into a tamper-resistant attestation by signing the information cryptographically and storing it in an immutable store in an isolated secure environment. 

By making the collected evidence machine-readable, a policy engine can continuously validate the norms or rules set by the risk stakeholder for every product version or update. This way, stakeholders can be assured of a product’s compliance with its security standards. 

## Where can I find the SBOM files if I didn't spesify a location

The gensbom CLI tool has a default cache location where all created files (SBOMs, statments and attestations) are saved by default. Even if you define a different output path, the file is still saved in the default cache as well. The default gensbom cache is ```/tmp/scribe```. 
You can change the default location using the flag ```--output-directory``` or ```-d```. Changing the default directory of the cache means that for that command only, the created file will be saved in that location. As an example, here's how you change the default output directory while creating an SBOM:
```gensbom bom alpine:latest --output-directory /tmp/my_directory```

Unless you specified a different path you can access all your files in the default cache, in path ```/tmp/scribe```.
The files will be grouped by where they came from and then the image or directory name and tag.
For example, all files concerning alpine:latest will be found by default in ```/tmp/scribe/registry/alpine/latest```.
The image came from the registry and it was an image for alpine/latest.

You can change the default cache location permenantly through the configuration file. The configuration file, bomber.yaml, can include multiple fields and set multiple parameters. Configuration fields can be overridden by the CLI for a spesific command.

The configuration file should be placed in one of the following locations:  
.bomber.yaml  
.bomber/bomber.yaml  
~/.bomber.yaml  
/bomber/bomber.yaml  

To change the default cahce location set the parameter output-directory to it's new location:  
```output-directory: /tmp/my_directory```

## How do I change the output SBOM file location

To change the output SBOM file location use the flag ```--output-file``` to set the output path. Example:  
```gensbom bom alpine:latest --output-file /tmp/file/path/my-first-sbom.json```  

To avoid confusion make sure the file suffix ending matches the type of file format that you’re generating - .json for cyclonedx-json or statement-cyclonedx-json, and .xml for cyclonedx-xml.            





