---
sidebar_position: 2
---

# Jenkins

Integrate as a step in Jenkins pipelines

Get Bomber and Valint
```bash
curl https://www.scribesecurity.com/getscribe | sh
```

Here's usage example for Jenkins workflow with Scribe:  

Add the following at the very top of your Jenkinsfile.
```bash
library identifier: 'JSL@master', retriever: modernSCM(
     [$class       : 'GitSCMSource',
      remote       : 'https://github.com/scribe-security/JSL.git'])
```

Define the needed function:
```bash
def report(Map conf)
```

Usage:
```bash
 report(target: "busybox:latest", 
      verbose: 2,
       scribe-enable: true,
      scribe-clientid: ${{ inputs.clientid }}
      scribe-clientsecret: ${{ inputs.clientsecret }}
      )
```
