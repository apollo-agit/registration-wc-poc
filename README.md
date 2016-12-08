# registration-wc-poc
POC for a web component based POC

## Prerequisites
Node must be installed:
[Download Node](https://nodejs.org/en/download/)

From Node we must init the install of...
* NPM (Node Package Manager)
* Bower package manager
* Grunt build tool
```
npm install npm -g
npm install bower -g
npm install grunt-cli -g
```

## How to Build

We must build both code based since the POC is remote Web Component client DOM cohesion

```
git clone https://github.com/apollo-agit/registration-wc-poc.git
cd registration-wc-poc
npm install
bower install
grunt dist --target='local'
grunt dist --target='remote'
```

## How to Run

We now need to start both Express Servers in two seperate command instances

```
node dist/server/server.js
```
```
node dist-remote/server/server.js
```

Open a browser and navigate to
http://localhost:8888/
