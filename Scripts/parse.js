const fs = require('fs')
const xml2js = require('xml2js')

const xmlData = fs.readFileSync('items.xml', 'utf-8')

const parser = new xml2js.Parser()


const getItems = result => {
	const itemsArray = result.items.item.map(item => {
		const newItem = {}

		const attributes = Object.keys(item.$)
		attributes.forEach(x => {
			newItem[x] = item.$[x]
		})
		if (item.attribute && Array.isArray(item.attribute)) {
			newItem.attributes = item.attribute.map(attribute => {
				return { key: attribute.$.key, value: attribute.$.value }
			})
		}

		return newItem
	})

	return itemsArray
}

parser.parseString(xmlData, (err, result) => {
	if (err) {
		console.error('Błąd podczas parsowania XML:', err)
		return
	}
	if (!result || !result.items || !Array.isArray(result.items.item)) {
        console.error('Błąd podczas konwersji: Brak tablicy items lub item w XML.')
		return
	}
	result.items = getItems(result)

	const jsonData = JSON.stringify(result, null, 2)

	fs.writeFileSync('items.json', jsonData, 'utf-8', err => {
		if (err) {
			console.error('Błąd podczas zapisywania JSON:', err)
		} else {
			console.log('Zapisano plik JSON pomyślnie.')
		}
	})

	console.log('Konwersja zakończona pomyślnie.')
})
