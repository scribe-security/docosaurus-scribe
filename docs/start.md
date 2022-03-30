---
sidebar_position: 1
---
# Getting started

Scribe is a solution for DevSecOps teams and Security teams who want to govern security of software in the development process. Scribe enables you to collect and share evidence about the security level of these processes. You can share such evidence with stakeholders who are responsible for the internal deployment or with external consumers of your software. For example, with Scribe you can analyze and share the Software Bill of Materials (<a href='https://scribesecurity.com/sbom/'>SBOM</a>) of your product with your customers.
## QuickStart

Find out what all the components that made their way into your Node.js’s project final docker image are and make sure they are all identical when compared to their origin.
Scribe tracks all files from their origin source code repo up to the final image and validates that each file’s hash value hasn’t changed if it wasn’t supposed to. 
## Generating a report through the Scribe site

At the moment the only way to get the scribe tool’s analysis report is to run it through the scribe website. Go to: TBD and register to get an account with Scribe. This account will allow you to always get back to the starting page and re-run the code to generate a new report.

* Open a bash session

* To download the Scribe tool type in the following command:  
```   curl https://static.snyk.io/cli/latest/snyk-install.sh | bash ```

* To run the tool on a specific Git repo and a specific Docker image, enter the following command:   
```   --source-code <git-path> --artifact <artifact path> --scribe-token 321hhjkl22 ```

**git path** is the path to your git repo, for example: ```github.com/MrBLightning/IFeelU```  
Note – you cannot run the tool on a Git repo you do not have administrator permissions for.

**artifact path** is the path to the final docker image, for example: ```hub.docker.com/_/couchbase```   
If the docker image is hosted locally on your machine, simply enter the path to that final image.   
Image sources supported are docker-daemon, OCI storage, docker archive, and OCI archive.

The **scribe-token** would be generated automatically by our site and will change each time you enter the page. It’s important to always use the correct and current scribe-token for your session.  

* Once the Scribe tool has finished it’s run, you’ll see the following screen:   
![TBD](/img/start/TBD.png) 

* Now you can generate the report by clicking the button on the screen:
![Done, View Results](/img/start/done_view_results.png)  

* This will take you to your analysis report screen. The screen looks like this:  
![analysis report screen](/img/start/sample_data.png)  

The first area to note is on the top left, the **Source Code Validation**:  
<img src='../img/start/source_code_validation.png' alt='Source Code Validation' width="300" />

This area tells you how many files were validated (exact match to their original hashes) when compared to the source control repo. In this example 220 files were validated out of 23 repositories. There is 1 suspicious file that changed unexpectadly between the repository and the build.

The second area to note is in the top middle of the page, the **Open-Source Dependency Validation**: 
<img src='../img/start/oss_validation.png' alt='Open-Source Dependency Validation' width="300" />

This area tells you how many open-source packages were validated (exact match to their original hashes) when compared to the Scribe’s record of the correct open-source package location. In this example 756 packages were identified and validated. 

At the very top of the page on the right you can see the button that allows you to download a signed SBOM describing exactly the list of components, packages and files described in this report. The SBOM is cryptographically signed using Scribe’s certificate.
<img src='../img/start/export_sbom.png' alt='export SBOM' width="400" />  

At the bottom part of the page, you can see a full list of the files and packages identified in your image and the comparison result.  

The Filter button on the left allows you to filter the results by various options, for example, to see all files that were modified between the source repo and the final image.   

The Search button on the right allows you to search for particular packages or files you are interested in finding, for example Log4J. Note that for each file you can see its exact path in your image.   

And that’s it – you have now seen tha analysis report and can download an SBOM you can look over and experiment with.  

If you want to dive deeper into the functionality of Scribe’s CLI tool you’re welcome to read on.


