var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, object, {[key]: value});
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
