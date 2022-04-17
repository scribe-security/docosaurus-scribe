---
sidebar_position: 5
---

# sign Command

You can use the ‘sign’ command to cryptographically sign a statement created by Scribe's CLI tool and turn it into an attestation. The command accepts as a target a specific SBOM or statement file.

If you do not provide a specific file, the command will search for that image’s SBOM or statement in the bomber cahce (default ‘tmp/scribe). 

Note that in order to sign a statement or an SBOM, by default bomber expects you to be online and it would use the library sigstore to get your credentials – either GitHub, Google or, Microsoft credentials.  You would be requested to log in to sigstore in order to successfully sign the attestation.
<!-- ![Sigstore link](/static/img/cli/sigstore_link.png) -->
<img src='../img/cli/sigstore_link.png' alt='Sigstore link' /> 

<img src='../img/cli/sigstore_login.png' alt='Sigstore login' width="600" /><br/>   

Once you have logged in using your preferred method, you’d receive a code representing your credentials that you need to copy to the CLI. 

<img src='../img/cli/sigstore_login_code.png' alt='Sigstore login code' width="350" />   

<!-- ![Signing success](/static/img/cli/sign_success.png)   -->
<img src='../img/cli/sign_success.png' alt='Signing success' />  

The verification code created is a one-time use code so there is no need to save it.

Here are some examples to using this command:   
```gensbom sign file:./sbom.json``` - sign the specified SBOM or statement file. The file needs to have been created by bomber. If the file doesn’t exist nothing will happen.

```gensbom sign docker:yourrepo/yourimage:tag``` - explicitly use the Docker daemon
```gensbom sign docker-archive:path/to/yourimage.tar``` - use a tarball from disk for archives created from "docker save"
```gensbom sign oci-archive:path/to/yourimage.tar``` - use a tarball from disk for OCI archives (from Skopeo or otherwise)
```gensbom sign dir:path/to/yourproject``` - read directly from a path on disk (any directory)
```gensbom sign registry:yourrepo/yourimage:tag``` - pull image directly from a registry (no container runtime required)

Here are the flags relevant to the ‘sign’ command.

<table>
  <tr>
    <th width='18%'>Flag</th>
    <th>Alt</th>
    <th>Format</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>--context-type</td>
    <td>-C</td>
    <td>string</td>
    <td>The context of the bomber’s run – what is the source of the CLI tool. The current options are Jenkins, GitHub, and Local. The default is "Local" and it’s added to the attestation created.</td>
  </tr>
  <tr>
    <td>--format</td>
    <td>-o</td>
    <td>string</td>
    <td>The format searched for. The options are cyclonedx-json, cyclonedx-xml, attest-cyclonedx-json, and statement-cyclonedx-json. The default is "cyclonedx-json".</td>
  </tr>
  <tr>
    <td>--force</td>
    <td>-f</td>
    <td></td>
    <td>Force an overwrite so that even if the destination (by default the cache) already includes an SBOM for the requested image or directory, bomber will still run and create a new SBOM.</td>
  </tr>
  <tr>
    <td>--input-format</td>
    <td>-i</td>
    <td>string</td>
    <td>Sbom input format, options are cyclonedx-json and cyclonedx-xml. Thee default is "cyclonedx-json".</td>
  </tr>
  <tr>
    <td>--name</td>
    <td>-n</td>
    <td>string</td>
    <td>Custom project name to be added to the attestation.</td>
  </tr>  
  <tr>
    <td>--help</td>
    <td>-h</td>
    <td></td>
    <td>Presents all the help information for the ‘find’ command.</td>
  </tr>
</table>
