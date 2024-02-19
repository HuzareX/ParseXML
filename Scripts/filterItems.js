const fs = require("fs");


class ItemFilter {
  constructor(dataPath) {
    this.jsonData = fs.readFileSync(dataPath, "utf-8");
    this.parsedData = JSON.parse(this.jsonData);
    this.mappedItems = 
  }

  _mapArrayToHashMap(array) {
    return array.reduce(function (map, obj) {
      map[obj.key] = obj.value;
      return map;
    }, {});
  }

  _mapAttributesToArray(hashMap) {
    return Object.keys(hashMap).map((key) => {
      return { key: key, value: hashMap[key] };
    });
  }

  _mapAttributesToHashMap(data) {
    const mappedData = {};

    data.forEach((x) => {
      if (!x.attributes || !x.id) return;

      const attributesAsHashMap = this._mapArrayToHashMap(x.attributes);
      mappedData[x.id] = { ...x, attributes: attributesAsHashMap };
    });

    

    return mappedData;
  }

  findItemsByConditions(conditions) {
    const items = this._mapAttributesToHashMap(this.parsedData.items);
    const filteredItems = [];

    for (const id in items) {
      const item = items[id];

      if (item.attributes) {
        conditions.every((condition) => {
          if (item.attributes[condition.key] === condition.value) {
            filteredItems.push({
              ...item,
              attributes: this._mapAttributesToArray(item.attributes),
            });
          }
        });
      }
    }

    return { items: filteredItems };
  }

  saveItemsToJson(items, path) {
    fs.writeFileSync(path, JSON.stringify(items, null, 2), "utf-8");
  }
}

const itemFilter = new ItemFilter("../JSON files/items.json");

const armors = itemFilter.findItemsByConditions([
  { key: "slotType", value: "body" },
]);
const helmets = itemFilter.findItemsByConditions([
  { key: "slotType", value: "head" },
]);
const legs = itemFilter.findItemsByConditions([
  { key: "slotType", value: "legs" },
]);
const boots = itemFilter.findItemsByConditions([
  { key: "slotType", value: "feet" },
]);
const shields = itemFilter.findItemsByConditions([
  { key: "weaponType", value: "shield" },
]);
const quivers = itemFilter.findItemsByConditions([
  { key: "weaponType", value: "quiver" },
]);
const axes = itemFilter.findItemsByConditions([
  { key: "weaponType", value: "axe" },
]);
const swords = itemFilter.findItemsByConditions([
  { key: "weaponType", value: "sword" },
]);
const clubs = itemFilter.findItemsByConditions([
  { key: "weaponType", value: "club" },
]);
const wands = itemFilter.findItemsByConditions([
  { key: "weaponType", value: "wand" },
]);
const backpacks = itemFilter.findItemsByConditions([
  { key: "slotType", value: "backpack" },
]);
const ammunition = itemFilter.findItemsByConditions([
  { key: "weaponType", value: "ammunition" },
]);
const crossbows = itemFilter.findItemsByConditions([
  { key: "slotType", value: "two-handed" },
  { key: "ammoType", value: "bolt" },
]);

const bows = itemFilter.findItemsByConditions([
  { key: "slotType", value: "two-handed" },
  { key: "ammoType", value: "arrow" },
]);

const throwItems = itemFilter.findItemsByConditions([
  { key: "weaponType", value: "distance" },
  { key: "shootType", value: "throw" },
]);

itemFilter.saveItemsToJson(armors, "../JSON files/armors.json");
itemFilter.saveItemsToJson(helmets, "../JSON files/helmets.json");
itemFilter.saveItemsToJson(legs, "../JSON files/legs.json");
itemFilter.saveItemsToJson(boots, "../JSON files/boots.json");
itemFilter.saveItemsToJson(shields, "../JSON files/shields.json");
itemFilter.saveItemsToJson(quivers, "../JSON files/quivers.json");
itemFilter.saveItemsToJson(axes, "../JSON files/axes.json");
itemFilter.saveItemsToJson(swords, "../JSON files/swords.json");
itemFilter.saveItemsToJson(clubs, "../JSON files/clubs.json");
itemFilter.saveItemsToJson(wands, "../JSON files/wands.json");
itemFilter.saveItemsToJson(backpacks, "../JSON files/backpacks.json");
itemFilter.saveItemsToJson(ammunition, "../JSON files/ammunition.json");
itemFilter.saveItemsToJson(crossbows, "../JSON files/crossbows.json");
itemFilter.saveItemsToJson(bows, "../JSON files/bows.json");
itemFilter.saveItemsToJson(throwItems, "../JSON files/throw.json");
