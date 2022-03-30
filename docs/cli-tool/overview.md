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
To create an SBOM the basic command is:
`gensbom bom [TARGET]`

**TARGET** is the docker image or file directory you wish to create an SBOM for.

The simplest way to get an SBOM is to use the command in this way:  
`gensbom bom alpine:latest` – This command will create a default (CycloneDX json) SBOM from the docker image of alpine:latest.

Unless you specified a different path you can access the new SBOM in the default Scribe’s CLI tool’s cache, in path `/tmp/scribe/registry/alpine/latest`.

The part of the path `/tmp/scribe` is by default always the same. You can change the cache default path using the flag -d. The rest of the path depends on the image you created an SBOM for, in this case `/alpine/latest`, and where it came from, in this case the `registry`.

Note that the SBOM itself has, by default, a name that represents the hash value of the image you analyzed. This way, if you try to create a SBOM for an image or directory you already have an SBOM for in the Scribe’s CLI tool cache you’ll get the notification 'Cache hit' with the exact path to the file or files that have the same hash name:  
![Cache hit](/img/cli/cache_hit.png)

You now have an SBOM file you can look over and experiment with.

If you want to dive deeper into the functionality of Scribe’s CLI tool read on.

