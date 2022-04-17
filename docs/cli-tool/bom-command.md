---
sidebar_position: 3
---

# bom Command

The ‘bom’ command is used to create an SBOM, statement, or attestation of the directory or docker image it’s targeting. Other than the command’s target it can accept various flags.

<table>
  <tr>
    <th width='18%'>Flag</th>
    <th>Alt</th>
    <th>Format</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>--components</td>
    <td></td>
    <td>strings</td>
    <td>Select the SBOM components groups in an array format. The options include metadata, layers, packages, files, and dep. The default is all of them - [metadata,layers,packages,files,dep]. Unless you have a really good reason (like, you only want the SBOM’s metadata) there is no reason to change this.</td>
  </tr>
  <tr>
    <td>--context-type</td>
    <td>-C</td>
    <td>string</td>
    <td>The context of the Scribe CLI tool’s run – what is the source of the tool. The current options are Jenkins, GitHub, and Local. The default is "Local" and it’s added to the SBOM created.</td>
  </tr>
  <tr>
    <td>--env</td>
    <td>-e</td>
    <td>string</td>
    <td>Environment keys (custom envrionments names) you want to include in the SBOM.</td>
  </tr>
  <tr>
    <td>--force</td>
    <td>-f</td>
    <td></td>
    <td>Force an overwrite so that even if the destination (by default the cache) already includes an SBOM for the requested image or directory, bomber will still run and create a new SBOM.</td>
  </tr>
  <tr>
    <td>--format</td>
    <td>-o</td>
    <td>string</td>
    <td>The SBOM’s desired format. The options are cyclonedx-json, cyclonedx-xml, attest-cyclonedx-json, and statement-cyclonedx-json. The default is "cyclonedx-json".</td>
  </tr>
  <tr>
    <td>--name</td>
    <td>-n</td>
    <td>string</td>
    <td>A custom name to be added to the SBOM or project.</td>
  </tr>
  <tr>
    <td>--help</td>
    <td>-h</td>
    <td></td>
    <td>Present bom command help including all these flags.</td>
  </tr>
</table>

Here are some examples:
```gensbom bom alpine:latest``` - create a default (cyclonedx json) SBOM from the docker image of alpine:latest. 
```gensbom bom alpine:latest -o cyclonedx-xml``` - create cyclonedx XML SBOM (the flag -o is used to change the default SBOM format) from the docker image of alpine:latest.

Instead of naming a docker hub image you can use a private image location like this:  
 ```gensbom bom yourrepo/yourimage:tag``` - Defaults to using images from a Docker daemon. If Docker is not present, the image is pulled directly from the registry.

You can also explicitly specify the scheme to use:  
```gensbom bom docker:yourrepo/yourimage:tag``` - Explicitly use the Docker daemon  
```gensbom bom docker-archive:path/to/yourimage.tar``` - Use a tarball from your local disk for archives created from "docker save"  
```gensbom bom oci-archive:path/to/yourimage.tar``` - Use a tarball from your local disk for OCI archives (for example: Skopeo)  
```gensbom bom dir:path/to/yourproject``` - Read the image directly from a path on your local disk (any directory)  
```gensbom bom registry:yourrepo/yourimage:tag```  - Pull image directly from a registry   
```gensbom bom file:path/to/yourproject/file``` - Read directly from a path on disk (any single file)  

Other than creating an SBOM you can use the bom command to create a statement or an attestation. An attestation is a <a href='https://github.com/slsa-framework/slsa/blob/main/controls/attestations.md'>specific format defined by the SLSA framework</a>. It includes metadata (a statement) about a software artifact and is cryptographically signed to maintain its integrity. A bomber statement is created in the same format as an attestation, it’s just missing the signature. 

Note that by default the resulting file (SBOM, statement, or attestation) will have the same name (the hash value of the image or directory targeted) and will differ only by the file’s ending. An SBOM in the json format will have the .json ending. A statement will have the .json.statement ending and an attestation will have the .json.sig ending. Replace the .json with .xml for the xml format.

To change the result‘s format you can use the -o flag (see above).  
The command to create a CycloneDX JSON statement:  
```gensbom bom alpine:latest -o statement-cyclonedx-json```

The command to create a CycloneDX JSON attestation is very similar:  
```gensbom bom alpine:latest -o attest-cyclonedx-json```

This command both creates the SBOM and turns it into a signed attestation. Signing an existing statement is done using the ‘sign’ command and covered in that chapter. Note that in order to sign an attestation, by default Scribe's tool expects you to be online and it would use the library <a href='https://github.com/sigstore'>sigstore</a> to get your credentials – either GitHub, Google or, Microsoft credentials. You would be requested to log in to Sigstore in order to successfully sign the attestation.
![Sigstore link](/static/img/cli/sigstore_link.png)  

<img src='../static/img/cli/sigstore_login.png' alt='Sigstore login' width="600" /><br/>   

Once you have logged in using your preferred method, you’d receive a code representing your credentials that you need to copy to the CLI. 

<img src='../static/img/cli/sigstore_login_code.png' alt='Sigstore login code' width="350" />   

![Signing success](/static/img/cli/sign_success.PNG)  

The verification code created is a one-time use code so there is no need to save it.

You can change the default system used to sign statements using the configuration file. We’ll cover that in a later segment.

