---
sidebar_position: 1
---
<img src='https://repository-images.githubusercontent.com/503625714/7e2cd452-c7f1-4718-8b5b-e2e89f43eb37' alt='Gitgat' width="400" />
# Overview

Scribe is a solution for organizations who are concerned about threats from their software supply chain. 
DevSecOps teams securing software builds and security teams responsible for software in-use, can use Scribe as a means to continuously assure this software is secure.

## How Scribe works

### Software Bill of Materials (SBOM)

Scribe can generate an SBOM for every build with a tool you can run in your build pipeline. With Scribe Online, you can store SBOMs and share them on a continuous basis with subscribers you authorize, even if they reside across organizational borders.
In the next sections, we explain how Scribe can augment the supply chain risk management with security analysis and apply security policies on SBOMs and other types of information.
An SBOM is a standard format for expressing information about the components making up a software artifact, useful for managing software supply chain risks. An SBOM can be utilized for identifying vulnerabilities inherited from dependencies, during both the development phase and the use phase. It can also be used to identify open-source dependencies with low reputation. Today, organizations are not always aware of the full extent of the open-source dependencies in the software they build or use. Moreover, if such information exists, it is not methodically tracked or communicated to the stakeholders who consume this software. This is especially true in vendor-customer relationships.

Read more on SBOM <a href='https://scribesecurity.com/sbom/'>here</a>.

### Integrity Validation and Open Source Authentication

Scribe validates the integrity of your software build by tracking every file’s hash value from the file’s origin to the built artifact, throughout the software development lifecycle. This origin can be open-source or internal: a code repo, a package manager or a container registry. In the process, Scribe flags suspicious modifications while accounting for legitimate changes such as linting and compilation. Scribe also validates the build environment and tools in a similar way. With its open-source package intelligence service, Scribe authenticates the open-source components, thus assuring that they were not maliciously modified. Scribe enriches SBOMs with this granular validation information and you can share it with relevant stakeholders.
Advanced user can cryptographically sign and validate critical evidence with customer keys, throughout the software development lifecycle (SDLC). This method provides resistance against tampering. It can also be regarded as extending the well known concept of software signing to the SDLC.

### CVEs - Published Vulnerabilities

Scribe generates CVE reports and continuously tracks newly published CVEs for software builds delivered to production based on the SBOMs it stores and manages for the built software.

### Govern the Security of the Software Development Lifecycle

As a DevSecOps or a Security engineer, you can use Scribe to set a local or an organizational SDLC policy that governs your acceptable risk. For instance, you can whitelist open-source components, mandate certain security tests, or flag severe warnings from tools running in your pipeline checking for CVEs or performing application security tests. 
In a more advanced use case, Scribe enables software customers to govern, by policy, artifacts delivered from their vendors such as in a subcontracting relationship. The policy owner can also mandate a minimum level for the software vendor’s build environment security level.
In another advanced use case, Scribe policy mandates the signage of commits and identity of committers.

