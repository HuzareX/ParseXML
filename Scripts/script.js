function mapAttributesToHashMap(attributes) {
    



    const result = attributes.reduce(function(map, obj){
      map[obj.key] = obj.value
      return map
    } ,{})

    console.log(result);
    
  
    

    
}

mapAttributesToHashMap([
    {
      "key": "rotateTo",
      "value": "1736"
    },
    {
      "key": "destroyTo",
      "value": "2254"
    }
])

// JSON to JS
// const jsonString = '[{"author" : "Plato", "name" : "Republic", "releaseYear" : "375BC"}, {"author" : "Plato", "name" : "Republic", "releaseYear" : "375BC"}]';

// const book = JSON.parse(jsonString);
// console.log(book); //zapytać czemu typeof zwraca obiekt?????????????????????????????????????????????????????????????????????

// arr to hash map
// const arr = [
//   {
//     key: "rotateTo",
//     value: 1736
//   },
//   {
//     key: "destroyTo",
//     value: 2254
//   }
// ]

// const result = arr.reduce(function(map, obj) {
//   map[obj.key] = obj.value
//   return map
// }, {})

// console.log(result);


