const fs = require('fs')

const jsonData = fs.readFileSync('../JSON files/items.json', 'utf-8')
const parsedData = JSON.parse(jsonData)

fs.writeFile('../JSON files/backpacks.json','', (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('The file was saved');
} )

const filterItems = result => {
	return result.items.filter(item => {
		if (
			!item.attributes ||
			!Array.isArray(item.attributes) ||
			!item.attributes.some(attribute => attribute.value === 'backpack')
		) {
			return false
		}

		return true
	})
}

const filteredResult = filterItems(parsedData)



const filteredJsonData = JSON.stringify(filteredResult, null, 2)
fs.writeFileSync('../JSON files/backpacks.json', filteredJsonData, 'utf-8')

console.log('Correct')
