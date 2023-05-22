# obj-manager

Package for managing and handling of Object structure of Javascript.

Just use this for find all keys, values or other boring process of handling Object.

## Installing

```bash
npm install -g obj-manager
```

## Basic Usage

```javascript
const objM = require("obj-manager");

//fake object
var testObj = {
  key1: 1,
  key2: 2,
  key3: { key4: 4, key5: 5, key6: 6 },
  key7: 7,
  key8: 8,
  key9: {
    key10: 10,
    key11: 6,
    key12: {
      key13: 13,
      key14: 14,
      key15: { key16: 16, key17: [17, 17.2, 17.3], key18: "18" },
    },
  },
};

console.log(objM.getAllKeys(testObj));
//returns [ 'key1', 'key2', 'key7', 'key8', 'key9' ]

console.log(objM.hasChildOfObj(testObj));
//returns true

console.log(objM.getKeysByValue(testObj, 6));
//returns [ 'key6', 'key11' ] or -1 if given value is not a string or number

console.log(objM.getDepthOfValue(testObj, 6));
//returns [ 'key3.key6', 'key9.key11' ] or -1 if given value is not a string or number
```

## Methods

1. hasChildOfObj

- check if one of keys of Object is typeof given object

2. getAllKeys

- get All keys of given object

3. getKeysByValue

- get all keys of Object which are exactly same as given value.

4. getDepthOfValue

- get depths of value.
