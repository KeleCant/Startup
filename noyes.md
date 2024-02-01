### Linux Commands
    cd - change directory
    mkdir - makes a directory


### Git commands
    git clone "https://github.com/KeleCant/Startup.git"(this must be your repository)

### Text Styling
    bold - ** ** or __ __
    Italic - * * or _ _
    striike through - ~~ ~~
    Bold and nested italics - *** ***
    Subscript - <sub> </sub>
    Superscript - <sub> </sub>
    quotes >text

### Setting Up A server
Key pair Nanosupport309998

3.231.207.24

Shell into websight
```
ssh -i ~/"CS 260"/Nanosupport309998.pem ubuntu@3.231.207.24
```

to see Caddyfiles,public_html, and services
ls -1

Access  URL Nonchanging
http://34.202.15.126/

### Deploying Files to HTML
- place files you want to deploy in workspace (for me this is my startup git hub repo)
- change directories to the folder you want to deploy
- use this command to deploy
```
$ ./deployFiles.sh -k ~/"CS 260"/Nanosupport309998.pem -h provo-must-do.xyz -s simon
```
