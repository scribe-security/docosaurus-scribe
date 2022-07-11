---
sidebar_position: 1
---

# GitHub Actions

Integrate as a step in GitHub Actions

Get Bomber and Valint
```bash
curl https://www.scribesecurity.com/getscribe | sh
```

Here's usage example for GitHub workflow with Scribe:
```bash
- name: Generate cyclonedx json SBOM
  uses: scribe-security/actions/gensbom/bom@master
  with:
    target: 'busybox:latest'
    verbose: 2
```
