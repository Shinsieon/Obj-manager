const ObjManager = {};

/**
 * check if one of keys of Obj is typeof object
 *
 * @param {Object} obj object
 * @return boolean
 */
ObjManager.hasChildOfObj = (obj) => {
  let has = false;
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === "object") {
      has = true;
    }
  }
  return has;
};
/**
 * get All keys of Obj
 *
 * @param {Object} obj object
 * @param keys array
 * @return array
 */
ObjManager.getAllKeys = (obj, keys = []) => {
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      keys.push(key);
      ObjManager.getAllKeys(obj[key], keys);
    } else {
      keys.push(key);
    }
  }
  return keys;
};
/**
 * Find the key of Object by value
 *
 * @param {Object} obj object
 * @param value any
 * @return array
 */
ObjManager.getKeysByValue = (obj, value, keys = []) => {
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === "number" || typeof obj[key] === "string") {
      if (obj[key] == value) {
        keys.push(key);
      }
    } else if (typeof obj[key] === "object") {
      if (Array.isArray(obj[key])) {
        if (obj[key].includes(value)) keys.push(key);
      } else {
        ObjManager.getKeysByValue(obj[key], value, keys);
      }
    }
  }
  return keys;
};
var testObj = {
  key1: 1,
  key2: 2,
  key3: { key4: 4, key5: 5, key6: 6 },
  key7: 7,
  key8: 8,
  key9: {
    key10: 10,
    key11: 11,
    key12: {
      key13: 13,
      key14: 14,
      key15: { key16: 16, key17: [17, 18, 19], key18: "string18" },
    },
  },
};
var testObj2 = {
  key1: 1,
  key2: 2,
  key7: 7,
  key8: 8,
  key9: 9,
};
module.exports = ObjManager;
console.log(ObjManager.getKeysByValue(testObj, 7));
