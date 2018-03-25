# Code Touch Challange

## Contents 
1. [Install Vagrant](#install-vagrant)
2. [Install VM Box](#install-vm-box)
3. [Install GIT](#install-git)
4. [Run Vagrant](#run-vagrant)
5. [Install Project Dependencies](#install-project-dependencies)
6. [Projec Routes](#project-routes) 

---------

### Install vagrant
* Go to vagrant [downloads page](https://www.vagrantup.com/downloads.html) and choose an installer . 

###Install VM Box
* Vagrant need a provider, i recommend Virtual Box since it needs no configuration, here it's [download page](https://www.virtualbox.org/wiki/Downloads).
* Note you can use other VM Boxes like VMWare but you will need to espicify your [provider](https://www.vagrantup.com/docs/providers/) in your `Vagrent`. 

### Install GIT
* We will need Git to clone our project, in case you are using Mac/Linux its usually installed, you can use this command `sudo apt-get install git` to install it via terminal . 
* You also can download Git from [here](https://git-scm.com/downloads) for windows, mac, linux and Solaris . 

### Run Vagrant
* Run Git Bash as admin on windows or Linux terminal as `su` AKA super user . 
* Go to your working directory using `cd <path>` . 
* Clone our small project using `git clone https://github.com/hellsinglord22/CodeTouchChallange` and `cd` into our project . 
* Execute this command `vagrant up` to fire up the machine, go make yourself a sandwich because its going to take few minutes . 
* After your terminal/bash give you the prompts you are now ready to `ssh` into your machine using `vagrant ssh` . 

### Install Project Dependencies
* Inside Vagrant change directory to the working directory `cd /vagrant` . 
* Run `npm install` to install your dependencies .

### Run Project
* Run `npm start` to start web server, notice that the webserver need `127.0.0.1:3000` to run on your on your browser . 
* Open a browser and write `127.0.0.1:3000` to start home page. 
* In case you want to give your IP a domain name you can go to your host file and add ip + domain name . 
```
windows host file path: C:\Windows\System32\drivers\etc
mac/linux host file path: /etc/hosts
```
* I need to mention that both files require super user priviliage to edit . 

### Project Routes
| Route                	| method 	| Description                           	|
|----------------------	|--------	|---------------------------------------	|
| signup               	| get    	| View signup page                      	|
| signup               	| post   	| Sign user up                          	|
| login                	| get    	| View login page                       	|
| login                	| post   	| Log user in                           	|
| logout               	| get    	| Log user out                          	|
| index                	| get    	| Go to home page                       	|
| users                	| get    	| Get all user                          	|
| users/seed           	| get    	| Delete then seed database             	|
| profile              	| get    	| Check if user is authenticated or not 	|
| auth/google          	| get    	| Authenticate using google OAuth2      	|
| auth/google/callback 	| get    	| Callback From Google                  	|



