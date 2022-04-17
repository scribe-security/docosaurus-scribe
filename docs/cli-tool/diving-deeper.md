---
sidebar_position: 2
---

# Diving Deeper

The Scribe CLI tool can do several things:

- Create an SBOM of a directory or docker image
- Create a statement or an attestation of a directory or docker image
- Search for (find) an SBOM, statement, or an attestation that was created by the Scribe CLI in the tool's cache or in a specified directory
- Sign a statement created by Scribe's CLI tool, thereby turning it into an attestation
- Verify the signature on an attestation created by Scribe's CLI tool

To clarify, an attestation is a <a href='https://github.com/slsa-framework/slsa/blob/main/controls/attestations.md'>specific format defined by the SLSA framework</a>.  
It includes metadata (a statement) about a software artifact and is cryptographically signed to maintain its integrity.  
A Scribe statement is created in the same format as an attestation, it’s just missing the signature.  
<img src='/static/img/cli/available_commands.png' alt='Available commands' width="400" />

The SBOM, statement, and attestation are all created using the ‘bom’ command.
The ‘find’ command is used to do a search for a specific SBOM, statement, or attestation that was created by Scribe's CLI tool.
The command ‘sign’ is used to sign a Scribe statement and turn it into an attestation.
The command ‘verify’ is used to verify the signature on a specific attestation.

There are several global flags that can be used throughout the Scribe CLI tool. Some only have meaning for some of the commands and not all of them, for example the flag --output-file is meaningless for the ‘find’ command since that command isn’t writing anything to the local disk.

<table>
  <tr>
    <th width='18%'>Flag</th>
    <th>Alt</th>
    <th>Format</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>--config</td>
    <td>-c</td>
    <td>string</td>
    <td>A location for the bomber configuration file. We’ll cover the configuration file in depth later. The file can contain various defaults that you want to set as long as they differ from the current defaults. No matter what you set in the configuration file you can still change the default in a specific command by using the appropriate flag.</td>
  </tr>
  <tr>
    <td>--failonerror</td>
    <td></td>
    <td></td>
    <td>Fail on errors (true by default)</td>
  </tr>
  <tr>
    <td>--filter-regex</td>
    <td>-F</td>
    <td>strings</td>
    <td>Filter out files by regex. This flag appears in an array format. The default filter is [.*\.pyc,.*\.git/.*] and it filters out files ending with .pyc and any files that include the combination .git in their path. Skipped files will not be included in the SBOM.</td>
  </tr>
  <tr>
    <td>--output-directory</td>
    <td>-d</td>
    <td>string</td>
    <td>The result output directory (cache). The default is "/tmp/scribe".</td>
  </tr>
  <tr>
    <td>--output-file</td>
    <td></td>
    <td>string</td>
    <td>The output path and file name for the current command’s result. Note that no matter the path, the result will also be placed in the default path (scribe cache, by default is "/tmp/scribe").</td>
  </tr>
  <tr>
    <td>--quiet</td>
    <td>-q</td>
    <td></td>
    <td>Suppress all logging output</td>
  </tr>
  <tr>
    <td>--scribe.enable</td>
    <td>-E</td>
    <td></td>
    <td>Enable the Scribe client – this command will enable the connection to the Scribe API and send the command’s result to Scribe's backend as well as save it locally.</td>
  </tr>
  <tr>
    <td>--scribe.password</td>
    <td>-P</td>
    <td>string</td>
    <td>Scribe backend password or identity provider login.</td>
  </tr>
  <tr>
    <td>--scribe.url</td>
    <td>-u</td>
    <td>string</td>
    <td>Scribe backend's url (default "https://api.dev.scribesecurity.com").</td>
  </tr>
  <tr>
    <td>--scribe.username</td>
    <td>-U</td>
    <td>string</td>
    <td>The username used to access Scribe's backend.</td>
  </tr>
  <tr>
    <td>--show</td>
    <td>-s</td>
    <td></td>
    <td>Print output to stdout. Plainly, it prints the log to the screen so you can see what’s happening.</td>
  </tr>
  <tr>
    <td>--verbose</td>
    <td>-v</td>
    <td></td>
    <td>Increase verbosity (visibility of what is happening). -v will present more info and 
-vv is used for debugging – it will present even more information.</td>
  </tr>
  <tr>
    <td>--version</td>
    <td></td>
    <td></td>
    <td>Present the bomber version currently in use.</td>
  </tr>
  <tr>
    <td>--help</td>
    <td>-h</td>
    <td></td>
    <td>Present Scribe's tool help including all these flags.</td>
  </tr>
</table>  

We’ll dive deeper into each of the commands in the following sections.  

