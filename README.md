# registration-wc-poc
POC for a web component based POC

## Prerequisites
Node must be installed:
[Download Node](https://nodejs.org/en/download/)

From Node install NPM (Node Package Manager)
```
npm install npm -g
```

## How to Build

We must build both code based since the POC is remote Web Component client DOM cohesion

```
* git clone https://github.com/apollo-agit/registration-wc-poc.git
* cd registration-wc-poc
* npm install
* bower install
* grunt dist --target='local'
* grunt dist --target='remote'
```

## How to Run

We now need to start both Express Servers in two seperate command instances

```
node dist/server/server.js
```
```
node dist-remote/server/server.js
```