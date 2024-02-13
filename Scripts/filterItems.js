const fs = require('fs')
const { parse } = require('path')

class ItemFilter {
	constructor(dataPath) {
		this.jsonData = fs.readFileSync(dataPath, 'utf-8')
		this.parsedData = JSON.parse(this.jsonData)
	}

	mapAttributesToHashMap(attributes) {
		const result = attributes.reduce(function (map, obj) {
			map[obj.key] = obj.value
			return map
		}, {})

		return result
	}

	filterItems(attributePairs, outputPath) {
		const items = {}
		this.parsedData.items.forEach(x => {
			if (!x.attributes || !x.id) {
				return
			}
			items[x.id] = {
				...x,
				attributes: this.mapAttributesToHashMap(x.attributes),
			}
		})
	
		const filteredItems = {}

		for (const item in items) {
            console.log(item);
			if (items[item].attributes) {
				const condition = attributePairs[0]
				if (items[item].attributes[condition.key] && items[item].attributes[condition.key] === condition.value) {
					filteredItems[item.id] = item
				}
			}
		}
        console.log(filteredItems);
		// const filteredItems = this.parsedData.items.filter(
		// 	item =>
		// 		item.attributes &&
		// 		Array.isArray(item.attributes) &&
		// 		attributePairs.every(pair =>
		// 			item.attributes.some(attribute =>
		// 				pair.key ? attribute.key === pair.key && (pair.value ? attribute.value === pair.value : true) : true
		// 			)
		// 		)
		// )

		// const outputData = {
		// 	items: filteredItems,
		// }

		// fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf-8')
	}
}

const bodyItemsFilter = new ItemFilter('../JSON files/items.json')
bodyItemsFilter.filterItems([{ key: 'slotType', value: 'body' }], '../JSON files/armors.json')

// const headItemsFilter = new ItemFilter('../JSON files/items.json')
// headItemsFilter.filterItems([{ key: 'slotType', value: 'head' }], '../JSON files/helmets.json')

// const legsItemsFilter = new ItemFilter('../JSON files/items.json')
// legsItemsFilter.filterItems([{ key: 'slotType', value: 'legs' }], '../JSON files/legs.json')

// const bootsItemsFilter = new ItemFilter('../JSON files/items.json')
// bootsItemsFilter.filterItems([{ key: 'slotType', value: 'feet' }], '../JSON files/boots.json')

// const shieldsItemsFilter = new ItemFilter('../JSON files/items.json')
// shieldsItemsFilter.filterItems([{ key: 'weaponType', value: 'shield' }], '../JSON files/shields.json')

// const quiversItemsFilter = new ItemFilter('../JSON files/items.json')
// quiversItemsFilter.filterItems([{ key: 'weaponType', value: 'quiver' }], '../JSON files/quivers.json')

// const axesItemsFilter = new ItemFilter('../JSON files/items.json')
// axesItemsFilter.filterItems([{ key: 'weaponType', value: 'axe' }], '../JSON files/axes.json')

// const swordsItemsFilter = new ItemFilter('../JSON files/items.json')
// swordsItemsFilter.filterItems([{ key: 'weaponType', value: 'sword' }], '../JSON files/swords.json')

// const clubsItemsFilter = new ItemFilter('../JSON files/items.json')
// clubsItemsFilter.filterItems([{ key: 'weaponType', value: 'club' }], '../JSON files/clubs.json')

// const wandsItemsFilter = new ItemFilter('../JSON files/items.json')
// wandsItemsFilter.filterItems([{ key: 'weaponType', value: 'wand' }], '../JSON files/wands.json')

// const backpacksItemsFilter = new ItemFilter('../JSON files/items.json')
// backpacksItemsFilter.filterItems([{ key: 'slotType', value: 'backpack' }], '../JSON files/backpacks.json')

// const ammunitionItemsFilter = new ItemFilter('../JSON files/items.json')
// ammunitionItemsFilter.filterItems([{ key: 'weaponType', value: 'ammunition' }], '../JSON files/ammunition.json')

// const crossbowsItemsFilter = new ItemFilter('../JSON files/items.json')
// crossbowsItemsFilter.filterItems(
// 	[
// 		{ key: 'slotType', value: 'two-handed' },
// 		{ key: 'ammoType', value: 'bolt' },
// 	],
// 	'../JSON files/crossbows.json'
// )

// const bowsItemsFilter = new ItemFilter('../JSON files/items.json')
// bowsItemsFilter.filterItems(
// 	[
// 		{ key: 'slotType', value: 'two-handed' },
// 		{ key: 'ammoType', value: 'arrow' },
// 	],
// 	'../JSON files/bows.json'
// )

// const throwItemsFilter = new ItemFilter('../JSON files/items.json')
// throwItemsFilter.filterItems(
// 	[{ key: 'weaponType', value: 'distance' }, { key: 'shootType' }],
// 	'../JSON files/throw.json'
// )
