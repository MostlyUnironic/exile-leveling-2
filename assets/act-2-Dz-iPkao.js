const e=`#section Act 2
➞ {enter|b_1_2_1} #Vastiri Outskirts
    #sub {image|b_1_2_1|250|250}
Kill {kill|Rathbreaker}
{portal|set} ➞ {enter|b_1_2_1} #Vastiri Outskirts
Hand in {quest|b_a2q1} #Earning Passage
    #sub {reward_quest|Lvl 5 Uncut Skill gem}    
    
➞ {enter|b_1_2_town} #The Ardura Caravan
Talk to {generic|Sekhema Asala}

➞ {enter|b_1_2_6a} #Halani gates
Talk to {generic|Sekhema Asala}
{portal|use}

➞ {enter|b_1_2_2} #Mawdun Quarry
    #sub {image|b_1_2_2|250|250}
➞ {enter|b_1_2_2a} #Mawdun Mine
    #sub {image|b_1_2_2a|250|250}
Kill {kill|Rudja}
{portal|use}
Talk to {generic|Risu}
Talk to {generic|Sekhema Asala}

➞ {enter|b_1_2_6} #Traitor's Passage
    #sub {image|b_1_2_6v1|250|250} {image|b_1_2_6v2|250|250}
Kill {kill|Balbala}
    #sub {reward_quest|Balbala's Barya}
    
➞ {enter|b_1_2_6a} #The Halani Gates
    #sub {image|b_1_2_6a|250|250}
Defeat {kill|Jamanra the risen king}
Go down the stairs and to the bottom right of the zone
{portal|use}
Talk to {generic|Shambrim}

➞ {enter|b_1_2_4} #Keth
    #sub {image|b_1_2_4|250|250}
Kill {kill|Kabala, the constrictor queen}
    #sub {reward_quest|Book of Specialisation (+2 Weapon Set Skill Points)}
find the {quest_text|Kabala Clan relic}
    #sub Kill (snake) monsters
➞ {enter|b_1_2_4a} #The Lost City
    #sub {image|b_1_2_4a|250|250}
➞ {enter|b_1_2_4b} #The Buried Shrines
    #sub {image|b_1_2_4b|250|250}
➞ {arena|Heart of Keth}
Kill {kill|Azarin, the Forsaken Son}
Talk to the goddess
    #sub loot the cinders and burn the goddess 
Take {quest_text|Essence of Water}
{portal|use}
Talk to {generic|Shambrim}

➞ {enter|b_1_2_3} #Mastodon Badlands
    #sub {image|b_1_2_3|250|250}
➞ {enter|b_1_2_3a} #Bone Pits
    #sub {image|b_1_2_3a|250|250}
find the {quest_text|Sun Clan Relic}
    #sub Kill (hyena) enemies
Kill {kill|Iktab, the Deathlord and Ekbab, Ancient Steed}
{portal|use}
Talk to {generic|Shambrim}

➞ {enter|b_1_2_5} #The Valley of the Titans
    #sub {image|b_1_2_5|250|250}
Find and click the three ancient seals
Find the medallion and place the two relics in there
➞ {enter|b_1_2_5a} #Titan Grotto
    #sub {image|b_1_2_5a|250|250}
Kill {kill|Zalmarath, the Living Colossus}
{portal|use}  
Talk to {generic|Shambrim}  


Talk to Zarka, then Asala
Use the desert map to travel to the {enter|b_1_2_6a} #The Halani Gates
Go to the front of the caravan and sound the horn

➞ {enter|b_1_2_7} #Trial of Sekhemas
    #sub Ascend
{portal|use}  

➞ {enter|b_1_2_8} #Deshar
    #sub {image|b_1_2_8|250|250}
Find the final letter on a corpse on the ground
➞ {enter|b_1_2_8a} #The Path of Mourning
    #sub {image|b_1_2_8a|250|250}
➞ {enter|b_1_2_8b} #The Spires of Deshar
    #sub {image|b_1_2_8b|250|250}
Find the sisters of Garukhan
{kill|Tor Gul, the Defiler}
{portal|set} ➞ {enter|b_1_2_town} #The Ardura Caravan
Hand in {quest|b_a2q6}
    #sub {reward_quest|Book of Specialisation (+2 Weapon Set Skill Points)}
    
➞ {enter|b_1_2_9} #The Dreadnought
    #sub {image|b_1_2_9|250|250}
➞ {enter|b_1_2_9a} #dreadnought vanguard

{portal|use}  
Talk to the Hooded one
Talk to Asala

`;export{e as default};
