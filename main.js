const myMap = new Map([
    ["a",1],
    ["b",2],
    ["c",6],
    ["d",7],
    ["e",9],
    ["f",11],
    ["h",20],
    ["i",8]
])
function filterMap(mapCollection, callbackFunction) {
    const filteredMap = new Map( );

    mapCollection.forEach((value, key) => {
        if (callbackFunction(value, key)) {
            filteredMap.set(key, value);
        }
    });

    return filteredMap;
}

function filter(value, key) {
    return value % 2 === 0;
}

const myFilteredMap = filterMap(myMap, filter);
console.log(myFilteredMap);
