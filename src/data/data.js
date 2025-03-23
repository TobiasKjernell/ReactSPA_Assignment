const allItems = [
    {
        "name": "Frostbite Boots",
        "description": "Boots that leave a trail of frost behind, slowing down enemies in pursuit.",
        "item_type": "boots",
        "rare": "legendary"
    },
    {
        "name": "Abyssal Helmet",
        "description": "A helmet crafted from the depths of the abyss, granting the wearer resistance to darkness.",
        "item_type": "helmets",
        "rare": "epic"
    },
    {
        "name": "Infernal Sword",
        "description": "A cursed sword that burns with infernal flames, dealing continuous fire damage.",
        "item_type": "weapons",
        "rare": "set"
    },
    {
        "name": "Earthshatter Shield",
        "description": "A shield that can summon earthquakes when slammed into the ground, stunning enemies.",
        "item_type": "shields",
        "rare": "legendary"
    },
    {
        "name": "Valkyrie Armor",
        "description": "Armor worn by legendary warriors, increasing both strength and speed.",
        "item_type": "armors",
        "rare": "legendary"
    },
    {
        "name": "Ghost Arrow",
        "description": "An arrow that can pass through walls and strike enemies from unexpected angles.",
        "item_type": "arrows",
        "rare": "epic"
    },
    {
        "name": "Windwalker Boots",
        "description": "Boots that allow the wearer to walk on air, avoiding ground-based traps and hazards.",
        "item_type": "boots",
        "rare": "legendary"
    },
    {
        "name": "Demon's Helm",
        "description": "A helmet adorned with demonic horns, providing resistance to fire and dark magic.",
        "item_type": "helmets",
        "rare": "legendary"
    },
    {
        "name": "Eclipse Sword",
        "description": "A sword that absorbs the light around it, creating an area of darkness on every swing.",
        "item_type": "weapons",
        "rare": "epic"
    },
    {
        "name": "Obsidian Shield",
        "description": "A shield forged from obsidian, offering unparalleled resistance to physical damage.",
        "item_type": "shields",
        "rare": "rare"
    },
    {
        "name": "Golem Armor",
        "description": "Armor crafted from the stone of golems, providing incredible defense and strength.",
        "item_type": "armors",
        "rare": "legendary"
    },
    {
        "name": "Moonstone Boots",
        "description": "Boots that glow with the light of the moon, providing enhanced agility and night vision.",
        "item_type": "boots",
        "rare": "epic"
    },
    {
        "name": "Blight Arrow",
        "description": "An arrow tipped with a dark poison that slowly corrupts its target, weakening them over time.",
        "item_type": "arrows",
        "rare": "set"
    },
    {
        "name": "Falconry Helm",
        "description": "A helmet designed for falconers, allowing them to communicate with birds of prey.",
        "item_type": "helmets",
        "rare": "uncommon"
    },
    {
        "name": "Sunstrike Sword",
        "description": "A sword forged from the rays of the sun, capable of dealing radiant damage to the undead.",
        "item_type": "weapons",
        "rare": "set"
    },
    {
        "name": "Rune Shield",
        "description": "A shield inscribed with ancient runes, granting the user magical resistance and protection.",
        "item_type": "shields",
        "rare": "epic"
    },
    {
        "name": "Wraith Boots",
        "description": "Boots made from the essence of wraiths, allowing the wearer to phase through solid objects.",
        "item_type": "boots",
        "rare": "legendary"
    },
    {
        "name": "Crimson Armor",
        "description": "Armor crafted from the blood of fallen warriors, offering protection and increased health regeneration.",
        "item_type": "armors",
        "rare": "rare"
    },
    {
        "name": "Venomfang Sword",
        "description": "A sword that drips with poison, each strike weakening the target with venomous energy.",
        "item_type": "weapons",
        "rare": "rare"
    },
    {
        "name": "Phantom Shield",
        "description": "A shield that can become intangible, making it nearly impossible to break or damage.",
        "item_type": "shields",
        "rare": "set"
    },
    {
        "name": "Tornado Boots",
        "description": "Boots that allow the wearer to move at the speed of wind, leaving a whirlwind in their wake.",
        "item_type": "boots",
        "rare": "epic"
    },
    {
        "name": "Bloodraven Armor",
        "description": "Armor crafted from the feathers of a bloodraven, offering enhanced stealth and agility.",
        "item_type": "armors",
        "rare": "legendary"
    },
    {
        "name": "Titan's Sword",
        "description": "A massive sword forged for titans, dealing massive damage to all enemies in its path.",
        "item_type": "weapons",
        "rare": "set"
    },
    {
        "name": "Celestial Shield",
        "description": "A shield crafted by the gods, offering divine protection and the ability to reflect damage.",
        "item_type": "shields",
        "rare": "legendary"
    },
    {
        "name": "Berserker Boots",
        "description": "Boots that grant the wearer increased speed and strength during combat.",
        "item_type": "boots",
        "rare": "set"
    },
    {
        "name": "Frostfang Helmet",
        "description": "A helmet forged from the teeth of an ancient frost dragon, granting cold resistance.",
        "item_type": "helmets",
        "rare": "legendary"
    },
    {
        "name": "Silverclaw Armor",
        "description": "Armor forged with the claws of silver wolves, offering both defense and increased attack speed.",
        "item_type": "armors",
        "rare": "epic"
    },
    {
        "name": "Thunderstrike Arrow",
        "description": "An arrow imbued with the power of lightning, causing thunderous explosions on impact.",
        "item_type": "arrows",
        "rare": "set"
    },
    {
        "name": "Raging Bull Sword",
        "description": "A sword with the strength of a bull, capable of charging through enemies.",
        "item_type": "weapons",
        "rare": "epic"
    },
    {
        "name": "Magus Shield",
        "description": "A shield that can absorb magical attacks and redirect them back to their caster.",
        "item_type": "shields",
        "rare": "legendary"
    },
    {
        "name": "Vortex Boots",
        "description": "Boots that allow the wearer to teleport short distances in a flash of wind.",
        "item_type": "boots",
        "rare": "legendary"
    },
    {
        "name": "Serpent's Fang Armor",
        "description": "Armor made from the skin of an ancient serpent, offering poison resistance and increased agility.",
        "item_type": "armors",
        "rare": "set"
    },
    {
        "name": "Oblivion Sword",
        "description": "A sword that can sever the bonds of reality, causing enemies to fade from existence.",
        "item_type": "weapons",
        "rare": "legendary"
    },
    {
        "name": "Ghostblade",
        "description": "A blade made from the essence of ghosts, able to bypass physical defenses and strike directly at the soul.",
        "item_type": "weapons",
        "rare": "epic"
    },
    {
        "name": "Specter Helm",
        "description": "A helmet that allows the wearer to see through the eyes of specters, granting enhanced awareness.",
        "item_type": "helmets",
        "rare": "legendary"
    },
    {
        "name": "Solarflare Boots",
        "description": "Boots that allow the wearer to dash through enemies, leaving a trail of solar flames.",
        "item_type": "boots",
        "rare": "epic"
    },
    {
        "name": "Shattered Shield",
        "description": "A shield that can be shattered to unleash a powerful shockwave, damaging all nearby enemies.",
        "item_type": "shields",
        "rare": "set"
    },
    {
        "name": "Storm Herald Armor",
        "description": "Armor that grants the wearer the power of storms, able to summon lightning during battle.",
        "item_type": "armors",
        "rare": "legendary"
    },
    {
        "name": "Ironclad Sword",
        "description": "A sword forged from the hardest iron, capable of cutting through the toughest armor.",
        "item_type": "weapons",
        "rare": "rare"
    },
    {
        "name": "Lunar Shield",
        "description": "A shield that reflects lunar magic and heals the wielder with each reflection.",
        "item_type": "shields",
        "rare": "epic"
    },
    {
        "name": "Elder Boots",
        "description": "Boots worn by the ancient protectors, providing superior defense and agility.",
        "item_type": "boots",
        "rare": "set"
    },
    {
        "name": "Elder Helm",
        "description": "A helm that grants wisdom and knowledge of ancient magic, allowing the wearer to cast spells with greater precision.",
        "item_type": "helmets",
        "rare": "set"
    },
    {
        "name": "Frostbite Sword",
        "description": "A sword that freezes its victims with each strike, slowing them down and dealing cold damage.",
        "item_type": "weapons",
        "rare": "epic"
    },
    {
        "name": "Shadowcloak",
        "description": "A cloak that allows the wearer to blend into the shadows, becoming nearly invisible.",
        "item_type": "armors",
        "rare": "legendary"
    },
    {
        "name": "Lightbringer Boots",
        "description": "Boots that give the wearer the ability to move without making a sound, perfect for stealthy maneuvers.",
        "item_type": "boots",
        "rare": "set"
    },
    {
        "name": "Lich King's Helm",
        "description": "A dark helmet that gives the wearer command over the undead, summoning minions in battle.",
        "item_type": "helmets",
        "rare": "legendary"
    },

    {
        "name": "Blazing Arrow",
        "description": "An arrow that ignites upon impact, causing flames to erupt on its target.",
        "item_type": "arrows",
        "rare": "legendary"
    },
    {
        "name": "Cloak of the Wind",
        "description": "A cloak that allows the wearer to move with the speed of the wind.",
        "item_type": "armors",
        "rare": "epic"
    },
    {
        "name": "Heavy Iron Boots",
        "description": "Boots forged from iron, designed to provide maximum protection but heavy on the feet.",
        "item_type": "boots",
        "rare": "uncommon"
    },
    {
        "name": "Silver Helmet",
        "description": "A helmet crafted from pure silver, offering a blend of style and protection.",
        "item_type": "helmets",
        "rare": "uncommon"
    },
    {
        "name": "Sapphire Sword",
        "description": "A sword crafted with a sapphire in its hilt, capable of cutting through any material.",
        "item_type": "weapons",
        "rare": "epic"
    },
    {
        "name": "Mystic Boots",
        "description": "Boots enchanted with magic, enhancing the wearer's agility and stealth.",
        "item_type": "boots",
        "rare": "legendary"
    },
    {
        "name": "Celestial Armor",
        "description": "Armor forged in the heavens, offering incredible defense and the power of the stars.",
        "item_type": "armors",
        "rare": "legendary"
    },
    {
        "name": "Elven Arrow",
        "description": "An arrow forged by elves, designed for both accuracy and speed.",
        "item_type": "arrows",
        "rare": "rare"
    },
    {
        "name": "Guardian Boots",
        "description": "Boots worn by legendary protectors, offering superior defense and comfort.",
        "item_type": "boots",
        "rare": "set"
    },
    {
        "name": "Steel Helm",
        "description": "A sturdy helmet made of steel, providing reliable protection in battle.",
        "item_type": "helmets",
        "rare": "set"
    },
    {
        "name": "Infernal Sword",
        "description": "A sword imbued with the power of hell, capable of summoning flames.",
        "item_type": "weapons",
        "rare": "set"
    },
    {
        "name": "Phoenix Shield",
        "description": "A shield with the feathers of a phoenix, offering incredible resilience.",
        "item_type": "shields",
        "rare": "set"
    },
    {
        "name": "Nightblade Sword",
        "description": "A sword forged in darkness, its blade can blend into the shadows.",
        "item_type": "weapons",
        "rare": "epic"
    },
    {
        "name": "Vampire Armor",
        "description": "Armor that grants enhanced strength and resilience, the gift of vampires.",
        "item_type": "armors",
        "rare": "legendary"
    },
    {
        "name": "Hallowed Helmet",
        "description": "A helmet blessed with divine magic, offering protection from evil forces.",
        "item_type": "helmets",
        "rare": "legendary"
    },
    {
        "name": "Iceborn Boots",
        "description": "Boots made from the essence of ice, they grant the wearer unmatched cold resistance.",
        "item_type": "boots",
        "rare": "set"
    },
    {
        "name": "Runestone Armor",
        "description": "Armor adorned with ancient runes, providing magical protection.",
        "item_type": "armors",
        "rare": "epic"
    },
    {
        "name": "Golem's Shield",
        "description": "A massive shield made from enchanted stone, offering incredible durability.",
        "item_type": "shields",
        "rare": "set"
    },
    {
        "name": "Thunderstrike Sword",
        "description": "A sword charged with the power of a thunderstorm, capable of shocking enemies.",
        "item_type": "weapons",
        "rare": "legendary"
    },
    {
        "name": "Shadow Cloak",
        "description": "A cloak that blends into the shadows, making the wearer nearly invisible.",
        "item_type": "armors",
        "rare": "epic"
    },
    {
        "name": "Druid's Helm",
        "description": "A helmet infused with the magic of nature, offering protection and enhanced healing.",
        "item_type": "helmets",
        "rare": "epic"
    },
    {
        "name": "Arcane Arrow",
        "description": "An arrow imbued with arcane magic, capable of dealing magical damage.",
        "item_type": "arrows",
        "rare": "epic"
    },
    {
        "name": "Demonhide Armor",
        "description": "Armor crafted from the hide of demons, providing resistance to dark magic.",
        "item_type": "armors",
        "rare": "set"
    },
    {
        "name": "Assassin's Boots",
        "description": "Boots designed for stealth and speed, allowing the wearer to move undetected.",
        "item_type": "boots",
        "rare": "epic"
    },
    {
        "name": "Bloodthirsty Sword",
        "description": "A sword that grows stronger with each enemy it strikes, feeding on their life force.",
        "item_type": "weapons",
        "rare": "legendary"
    },
    {
        "name": "Knight's Shield",
        "description": "A reliable shield used by knights, providing great defense against enemy attacks.",
        "item_type": "shields",
        "rare": "uncommon"
    },
    {
        "name": "Dragon's Breath Arrow",
        "description": "An arrow tipped with dragon's flame, capable of incinerating its target.",
        "item_type": "arrows",
        "rare": "legendary"
    },
    {
        "name": "Ironclad Armor",
        "description": "Heavy armor made from iron, providing excellent protection but with added weight.",
        "item_type": "armors",
        "rare": "uncommon"
    },
    {
        "name": "Vortex Boots",
        "description": "Boots designed to increase the wearer's speed and agility, perfect for quick getaways.",
        "item_type": "boots",
        "rare": "epic"
    },
    {
        "name": "Frost Shield",
        "description": "A shield made from enchanted ice, capable of freezing attackers on contact.",
        "item_type": "shields",
        "rare": "legendary"
    },
    {
        "name": "Golden Helm",
        "description": "A helmet forged from pure gold, offering both style and protection.",
        "item_type": "helmets",
        "rare": "uncommon"
    },
    {
        "name": "Valkyrie's Armor",
        "description": "Armor worn by the Valkyries, offering speed, strength, and grace in battle.",
        "item_type": "armors",
        "rare": "set"
    },
    {
        "name": "Spectral Sword",
        "description": "A sword that can phase through solid objects, making it difficult to block.",
        "item_type": "weapons",
        "rare": "epic"
    },
    {
        "name": "Wraith's Shield",
        "description": "A shield that allows the user to pass through solid walls for a short period of time.",
        "item_type": "shields",
        "rare": "set"
    },
    {
        "name": "Elder's Boots",
        "description": "Boots that enhance the wearer's wisdom and perception, worn by ancient sages.",
        "item_type": "boots",
        "rare": "legendary"
    },
    {
        "name": "Warlock's Helm",
        "description": "A helm that channels the power of dark magic, increasing the wearer's mystical abilities.",
        "item_type": "helmets",
        "rare": "set"
    },
    {
        "name": "Giant's Sword",
        "description": "A massive sword forged by giants, able to deal devastating damage with a single strike.",
        "item_type": "weapons",
        "rare": "legendary"
    },
    {
        "name": "Moonstone Shield",
        "description": "A shield made from a rare moonstone, providing increased defense during the night.",
        "item_type": "shields",
        "rare": "set"
    },
    {
        "name": "Titan's Armor",
        "description": "Armor worn by the Titans themselves, offering supreme defense and strength.",
        "item_type": "armors",
        "rare": "legendary"
    },
    {
        "name": "Stormcrow Arrow",
        "description": "An arrow infused with storm magic, capable of calling down lightning on impact.",
        "item_type": "arrows",
        "rare": "epic"
    },
    {
        "name": "Sorcerer's Boots",
        "description": "Boots worn by powerful sorcerers, enhancing their spellcasting abilities and speed.",
        "item_type": "boots",
        "rare": "legendary"
    },
    {
        "name": "Vengeful Blade",
        "description": "A sword that grows stronger the more enemies it strikes, fueled by vengeance.",
        "item_type": "weapons",
        "rare": "epic"
    },
    {
        "name": "Spectral Helmet",
        "description": "A helmet crafted from the essence of ghosts, granting protection from dark magic.",
        "item_type": "helmets",
        "rare": "legendary"
    },
    {
        "name": "Soulsteel Armor",
        "description": "Armor made from the souls of fallen warriors, providing unmatched durability.",
        "item_type": "armors",
        "rare": "epic"
    },
    {
        "name": "Warrior's Boots",
        "description": "Boots worn by elite warriors, designed to enhance speed and combat efficiency.",
        "item_type": "boots",
        "rare": "uncommon"
    },
    {
        "name": "Raven's Cloak",
        "description": "A cloak that allows the wearer to summon crows to distract and confuse enemies.",
        "item_type": "armors",
        "rare": "set"
    },
    {
        "name": "Dragon Bone Shield",
        "description": "A shield made from the bones of an ancient dragon, providing immense strength and defense.",
        "item_type": "shields",
        "rare": "legendary"
    },
    {
        "name": "Flamestrike Sword",
        "description": "A sword that engulfs enemies in fire with each strike, dealing burning damage.",
        "item_type": "weapons",
        "rare": "set"
    },
    {
        "name": "Silver Arrow",
        "description": "A standard silver arrow, highly effective against supernatural creatures.",
        "item_type": "arrows",
        "rare": "uncommon"
    },
    {
        "name": "Ironfang Armor",
        "description": "Armor made from the hide of a magical beast, granting the wearer increased strength.",
        "item_type": "armors",
        "rare": "rare"
    },
    {
        "name": "Glacier Boots",
        "description": "Boots that leave a trail of ice behind them, freezing enemies who follow too closely.",
        "item_type": "boots",
        "rare": "legendary"
    },
    {
        "name": "Doomsday Shield",
        "description": "A shield capable of withstanding the worst of battles, offering unrivaled protection.",
        "item_type": "shields",
        "rare": "epic"
    },
    {
        "name": "Venom Arrow",
        "description": "An arrow dipped in poison, causing enemies to weaken over time after being struck.",
        "item_type": "arrows",
        "rare": "set"
    }
]


const itemsCategory = [...new Set(allItems.map(item => item.item_type))]

export const getItemsByCategory = category => allItems.filter(item => item.item_type === category);

export const getSortedByFilter = (items, sortBy) => {
    let sortedItems;
    if (sortBy === 'none') sortedItems = items;
    if (sortBy === 'name') sortedItems = items.toSorted((a, b) => a.name.localeCompare(b.name));
    if (sortBy === 'rare') sortedItems = items.toSorted((a, b) => a.rare.localeCompare(b.rare));

    return sortedItems;
}

//ChatGPT didnt like to add custom strings, adding some random images on items
getItemsByCategory('armors').forEach(armor => armor.image = 'armor_' + (Math.floor(Math.random() * 7)));
getItemsByCategory('shields').forEach(armor => armor.image = 'shield_' + (Math.floor(Math.random() * 6)));
getItemsByCategory('boots').forEach(armor => armor.image = 'boots_' + (Math.floor(Math.random() * 6)));
getItemsByCategory('helmets').forEach(armor => armor.image = 'helmet_' + (Math.floor(Math.random() * 7)));
getItemsByCategory('weapons').forEach(armor => armor.image = 'weapon_' + (Math.floor(Math.random() * 16)));
getItemsByCategory('arrows').forEach(armor => armor.image = 'arrow_' + (Math.floor(Math.random() * 5)));

export { itemsCategory, allItems };
