#obj-manager

Package for managing and handling of Object structure of Javascript.

Just use this for find all keys, values or other boring process of handling Object.

## Installing

````bash
npm install -g obj-manager


## Basic Usage
```javascript
const objM = require("obj-manager");

const testObj = {
  key1: 1,
  key2: 2,
  key7: 7,
  key8: 8,
  key9: 9,
}

console.log(objM.getAllKeys(testObj));
//returns [ 'key1', 'key2', 'key7', 'key8', 'key9' ]
````

## Methods

- hasChildOfObj
- getAllKeys
- getKeysByValue
