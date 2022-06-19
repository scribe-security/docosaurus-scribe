---
sidebar_position: 5
---

# A Sample Project

You can try out Scribe with an open-source Node.js project at:  
https://github.com/Zineeddine998/Backend_challenge

Copy and run the following commands in a bash shell on your workstation.
 
1. Get Scribe gensbom CLI tool

    ```curl https://www.scribesecurity.com/getscribe | sh```
 
2. Clone the project from Github

    ```gh repo clone Zineeddine998/Backend_challenge```

3. Run gensbom to collect metadata about the source code

    ```$HOME/.scribe/bin/gensbom bom dir:Backend_challenge --scribe.clientid=<client_id> --scribe.clientsecret=<client_secret> --name=scribe -E -f -v```

    Replace ```<client_id>``` and ```<client_secret>``` with the values from step 3 in the Scribe installation instructions page.  

4. Build a docker image for the project

    ```CD Backend_challenge```

    ```docker build -t backend_challenge```

5. Run gensbom to collect metadata about the docker image

    ```$HOME/.scribe/bin/gensbom bom backend_challenge:latest --scribe.clientid=<client_id> --scribe.clientsecret=<client_secret> --name=scribe -E -f -v```

    Replace ```<client_id>``` and ```<client_secret>``` with the same values as in step 3, above (values appear in the Scribe installation instructions page).

6. When gensbom is done go to the Scribe installation instructions web page and click the <b>Done, View Results</b> button.
