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
module.exports = ObjManager;
