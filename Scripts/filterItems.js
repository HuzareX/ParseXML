const fs = require('fs')

const jsonData = fs.readFileSync('../JSON files/items.json', 'utf-8')
const parsedData = JSON.parse(jsonData)

const filterBodyItems = (result, outputPath) => {
	const filteredItems = result.items.filter(
		item =>
			item.attributes && Array.isArray(item.attributes) && item.attributes.some(attribute => attribute.value === 'body')
	)
	const outputData = {
		items: filteredItems,
	}

	fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf-8')
}

const filterHeadItems = (result, outputPath) => {
	const filteredItems = result.items.filter(
		item =>
			item.attributes && Array.isArray(item.attributes) && item.attributes.some(attribute => attribute.value === 'head')
	)

	const outputData = {
		items: filteredItems,
	}

	fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf-8')
}

const filterLegsItems = (result, outputPath) => {
	const filteredItems = result.items.filter(
		item =>
			item.attributes && Array.isArray(item.attributes) && item.attributes.some(attribute => attribute.value === 'legs')
	)
	const outputData = {
		items: filteredItems,
	}

	fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf-8')
}

const filterBootsItems = (result, outputPath) => {
	const filteredItems = result.items.filter(
		item =>
			item.attributes && Array.isArray(item.attributes) && item.attributes.some(attribute => attribute.value === 'feet')
	)
	const outputData = {
		items: filteredItems,
	}

	fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf-8')
}

const filterShieldsItems = (result, outputPath) => {
	const filteredItems = result.items.filter(
		item =>
			item.attributes &&
			Array.isArray(item.attributes) &&
			item.attributes.some(attribute => attribute.value === 'shield')
	)
	const outputData = {
		items: filteredItems,
	}

	fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf-8')
}

const filterQuiversItems = (result, outputPath) => {
	const filteredItems = result.items.filter(
		item =>
			item.attributes &&
			Array.isArray(item.attributes) &&
			item.attributes.some(attribute => attribute.value === 'quiver')
	)
	const outputData = {
		items: filteredItems,
	}

	fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf-8')
}

const filterAxesItems = (result, outputPath) => {
	const filteredItems = result.items.filter(
		item =>
			item.attributes && Array.isArray(item.attributes) && item.attributes.some(attribute => attribute.value === 'axe')
	)
	const outputData = {
		items: filteredItems,
	}

	fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf-8')
}

const filterSwordsItems = (result, outputPath) => {
	const filteredItems = result.items.filter(
		item =>
			item.attributes &&
			Array.isArray(item.attributes) &&
			item.attributes.some(attribute => attribute.value === 'sword')
	)
	const outputData = {
		items: filteredItems,
	}

	fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf-8')
}

const filterClubsItems = (result, outputPath) => {
	const filteredItems = result.items.filter(
		item =>
			item.attributes && Array.isArray(item.attributes) && item.attributes.some(attribute => attribute.value === 'club')
	)
	const outputData = {
		items: filteredItems,
	}

	fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf-8')
}

const filterWandsItems = (result, outputPath) => {
	const filteredItems = result.items.filter(
		item =>
			item.attributes && Array.isArray(item.attributes) && item.attributes.some(attribute => attribute.value === 'wand')
	)
	const outputData = {
		items: filteredItems,
	}

	fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf-8')
}

const filterBackpacksItems = (result, outputPath) => {
	const filteredItems = result.items.filter(
		item =>
			item.attributes &&
			Array.isArray(item.attributes) &&
			item.attributes.some(attribute => attribute.value === 'backpack')
	)
	const outputData = {
		items: filteredItems,
	}

	fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf-8')
}

const filterThrowItems = (result, outputPath) => {
	const filteredItems = result.items.filter(
		item =>
			item.attributes &&
			Array.isArray(item.attributes) &&
			item.attributes.some(attribute => attribute.value === 'distance') &&
			item.attributes.some(attribute => attribute.key === 'shootType')
	)
	const outputData = {
		items: filteredItems,
	}

	fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf-8')
}

const filterAmmunitionItems = (result, outputPath) => {
	const filteredItems = result.items.filter(
		item =>
			item.attributes &&
			Array.isArray(item.attributes) &&
			item.attributes.some(attribute => attribute.value === 'ammunition')
	)
	const outputData = {
		items: filteredItems,
	}

	fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf-8')
}

const filterBowsItems = (result, outputPath) => {
	const filteredItems = result.items.filter(
		item =>
			item.attributes &&
			Array.isArray(item.attributes) &&
			item.attributes.some(attribute => attribute.value === 'arrow') &&
			item.attributes.some(attribute => attribute.value === 'two-handed')
	)

	const outputData = {
		items: filteredItems,
	}

	fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf-8')
}

const filterCrossbowsItems = (result, outputPath) => {
	const filteredItems = result.items.filter(
		item =>
			item.attributes &&
			Array.isArray(item.attributes) &&
			item.attributes.some(attribute => attribute.value === 'bolt') &&
			item.attributes.some(attribute => attribute.value === 'two-handed')
	)

	const outputData = {
		items: filteredItems
	}

	fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf-8')
}

filterBodyItems(parsedData, '../JSON files/armors.json')
filterHeadItems(parsedData, '../JSON files/helmets.json')
filterLegsItems(parsedData, '../JSON files/legs.json')
filterBootsItems(parsedData, '../JSON files/boots.json')
filterShieldsItems(parsedData, '../JSON files/shields.json')
filterQuiversItems(parsedData, '../JSON files/quivers.json')
filterAxesItems(parsedData, '../JSON files/axes.json')
filterSwordsItems(parsedData, '../JSON files/swords.json')
filterClubsItems(parsedData, '../JSON files/clubs.json')
filterWandsItems(parsedData, '../JSON files/wands.json')
filterBackpacksItems(parsedData, '../JSON files/backpacks.json')
filterThrowItems(parsedData, '../JSON files/throw.json')
filterAmmunitionItems(parsedData, '../JSON files/ammunition.json')
filterBowsItems(parsedData, '../JSON files/bows.json')
filterCrossbowsItems(parsedData, '../JSON files/crossbows.json')
