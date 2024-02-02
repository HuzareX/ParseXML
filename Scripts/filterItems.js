const fs = require('fs')

const jsonData = fs.readFileSync('../JSON files/items.json', 'utf-8')
const parsedData = JSON.parse(jsonData)

const filterItems = (result, attributeValue) => {
	return result.items.filter(item => {
		if (
			!item.attributes ||
			!Array.isArray(item.attributes) ||
			!item.attributes.some(attribute => attribute.value === attributeValue)
		) {
			return false
		}

		return true
	})
}

const attributeValues = ['body', 'arrow', 'axe', 'backpack', 'feet', 'ammunition', 'club', 'head', 'legs', 'necklace', 'quiver', 'ring', 'shield', 'sword', 'wand']

attributeValues.forEach(attributeValue => {
	const filteredResult = filterItems(parsedData, attributeValue)
	const filteredJson = JSON.stringify(filteredResult, null, 2)

	const createFile = `../JSON files/${attributeValue}.json`

	fs.writeFileSync(createFile, filteredJson, 'utf-8')

})
