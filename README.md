# Quality Faster

### Pre-requisites
Install Meteor:
```bash
curl https://install.meteor.com/ | sh
```

Install Java 8 **JDK** [from here](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) (Must be the JDK, not the JRE)

Install Node v4.3 
*You might want to use [NVM](https://github.com/creationix/nvm#install-script)*
```bash
nvm install v4.3
nvm use v4.3
npm install
```

#### Using Windows?
* [Meteor installer](https://install.meteor.com/windows)
* [NVM installer](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows)

### Run
Start Wallaby (use the `.wallaby.js` configuration)

open two terminals:

Run Meteor in Terminal 1:
```bash
npm run meteor
```

Once that has started:

Run Chimp in Terminal 2: (for OSX/Linux)
```bash
npm run chimp
```

Run Chimp in Terminal 2: (for Windows)
```bash
npm instal -g chimp
.scripts\run-chimp.bat
```

Do BDD with your team!
