"use strict";
function getProperty(obj, key) {
    obj[key];
}
const property = getProperty({
    name: 'Mr. X',
    age: 20
}, 'age');
const a = {
    name: 'Mr. X',
    age: 20
};
a['name'];
