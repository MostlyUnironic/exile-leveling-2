const e=`#section Act 3
➞ {enter|b_1_3_1} #Sandswept Marsh
➞ {enter|b_1_3_town} #Ziggurat encampment
➞ {enter|b_1_3_2} #Jungle Ruins
Find the {enter|b_1_3_2a} #Venom crypts
    #sub Near {waypoint}
kill {kill|The Mighty Silverfist}
➞ {enter|b_1_3_3} #Infested Barrens
Find the {enter|b_1_3_5} #Chimeral Wetlands, enter the zone, grab the {waypoint} and go back out
Find the {enter|b_1_3_4} #Azak bog, enter the zone, grab the {waypoint} and go back out
Find the {enter|b_1_3_9} #Matlan Waterways
    #sub Near {waypoint}
{waypoint} ➞ {enter|b_1_3_2} #Jungle Ruins
➞ {enter|b_1_3_2a} #Venom crypts
Find {quest_text|Venom phial}
{portal|set} ➞ {enter|b_1_3_town} #Ziggurat encampment
Turn in phial at Servi for a reward
➞ {enter|b_1_3_4} #Azak Bog
    #sub Find the Flameskin ritual and activate all, it gives 25% fire res and rarity for the rest of the zone.
kill {kill|Ignagduk}
{portal|set} ➞ {enter|b_1_3_town} #Ziggurat encampment
➞ {enter|b_1_3_5} #Chimeral Wetlands
Find the {enter|b_1_3_6} #Temple/trial of chaos, enter the zone, grab the {waypoint} and go back out
kill {kill|Xyclucian}
➞ {enter|b_1_3_7} #Jiquani's Machinarium
Find the first small soul core, then open the door
Find two more small soul cores
kill {kill|Blackjaw}
➞ {enter|b_1_3_8} #Jiquani's Sanctum
Get {waypoint_get}
Talk to alva
Find two medium soul cores
Activate both generator 1
Activate both generator 2
    #sub Place portal {portal|set} Before activation
{portal|set} ➞ {enter|b_1_3_town} #Ziggurat encampment
{waypoint} ➞ {enter|b_1_3_8} #Jiquani's Sanctum
kill {kill|Zicoatl}
{waypoint} ➞ {enter|b_1_3_3} #Infested Barrens
Insert the {quest_text|large soul core} into pedestal
➞ {enter|b_1_3_9} #Matlan Waterways
Activate lever at the end of the zone
{portal|set} ➞ {enter|b_1_3_town} #Ziggurat encampment
Talk to {generic|alva}
➞ {enter|b_1_3_10} #The Drowned City
Find the {enter|b_1_3_10a} #Molten vault, enter the zone, grab the {waypoint} and go back out.
Find the {enter|b_1_3_11} #Apex of filth, enter the zone, grab the {waypoint} and go back out.
{waypoint} ➞ {enter|b_1_3_10a} #Molten vault
kill {kill|Mektul}
    #sub {reward_quest|The Hammer of Kamasa} (Quest Item)
    #sub Unlock {generic|Reforging Bench}  (Only needed on first character per league)
{portal|set} ➞ {enter|b_1_3_town} #Ziggurat encampment
{waypoint} ➞ {enter|b_1_3_11} #The Apex of Filth
kill {kill|The Queen of Filth}
{portal|set} ➞ {enter|b_1_3_town} #Ziggurat encampment
➞ {enter|b_1_3_12} #The Temple of Kopec 1F
    #sub Down the stairs
➞ {enter|b_1_3_12} #The Temple of Kopec 2F
➞ {enter|b_1_3_12} #The Temple of Kopec 3F
kill {kill|Ketzuli, High priest of the Sun}
Talk to {generic|alva}
Go through the gateway
➞ {enter|b_1_3_13} #Ziggurat encampment (Past)
➞ {enter|b_1_3_14} #Utzaal
    #sub {reward_quest|The sacrificial heart} can randomly drop in this zone
kill {kill|Viper Napuatzi}
➞ {enter|b_1_3_15} #Aggorat
    #sub {reward_quest|The sacrificial heart} can randomly drop in this zone
Find the Sacrificial table
    #sub Place {reward_quest|The sacrificial heart} and stab it
    #sub {reward_quest|+2 Passive points}
➞ {enter|b_1_3_16} #The Black Chambers
Defeat {kill|Doryani}
{portal|set} ➞ {enter|b_1_3_town} #Ziggurat encampment

`;export{e as default};
