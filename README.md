# create-spa-war

Create war for single page applications for Java EE 6 compliant servers.

## Features

* Create war file without java and it's build systems
* Includes Java EE filter that always redirects to `index.html` if file does not exist. This allows routing without `hash` (`#`).

## Usage

### yarn create

```shell
yarn create spa-war <inputPath> <generated-war-name>
# outputs war size
```

### npx

```shell
npx create-spa-war <inputPath> <generated-war-name>
# outputs war size
```

### Locally

* Add package to your project

#### npm

```
npm install create-spa-war --save-dev
```

#### yarn

```
yarn add create-spa-war --dev
```

* Create script on `package.json`. Example: 

```
scripts: {
    "build": "webpack -p",
    "postbuild": "create-spa-war ./dist ./my-project.war"
}
```
