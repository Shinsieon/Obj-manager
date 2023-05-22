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
 * @param value string || number
 * @return array
 */
ObjManager.getKeysByValue = (obj, value, keys = []) => {
  if (typeof value === "number" || typeof value === "string") {
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
  } else return -1;
};

/**
 * Find the index of key of Object by key
 *
 * @param {Object} obj object
 * @param key string || number
 * @return number
 */
ObjManager.getIndexOfKey = (obj, key) => {
  if (typeof key === "number" || typeof key === "string")
    return Object.keys(obj).indexOf(key);
  else return -1;
};

/**
 * Depth of value in Object
 *
 * @param {Object} obj object
 * @param value string || number
 * @return array
 */
ObjManager.getDepthOfValue = (obj, value, currentKey = "", keysArray = []) => {
  if (typeof value === "number" || typeof value === "string") {
    for (const key of Object.keys(obj)) {
      if (obj.hasOwnProperty(key)) {
        const currentValue = obj[key];

        if (currentValue === value) {
          keysArray.push(currentKey + key);
        }

        if (typeof currentValue === "object") {
          ObjManager.getDepthOfValue(
            currentValue,
            value,
            currentKey + key + ".",
            keysArray
          );
        }
      }
    }
    return keysArray;
  } else return -1;
};

module.exports = ObjManager;
