const e=`#section Act 4
➞ {enter|b_1_4_town} #Kingsmarch
Talk to {generic|Doryani}
Talk to {generic|Alva}
Take {quest_text|Boat Charter}
Talk to {generic|Makoru}

➞ {enter|b_1_4_9} #Isle of Kin
kill {kill|Kill The Blind Beast}
    #sub {reward_quest|+2 Weapon Set Skill Points}
    
➞ {enter|b_1_4_9b} #Volcanic Warrens
kill {kill|Krutog, Lord of Kin}
Talk to {generic|Matiki}
Return to ship (button)

➞ {enter|b_1_4_6} #Whakapanu Island
➞ {enter|b_1_4_6a} #Singing Caverns
Search {quest_text|Beckoning Clam}
    #sub take {quest_text|Humming Pearl}
kill {kill|Diamora, Song of Death}
Return to ship (button)

➞ {enter|b_1_4_1} #Abandoned Prison
Search {quest_text|Chapel Key}
    #sub Take {reward_quest|30% increased Life Recovery from Flasks} OR
    #sub Take {reward_quest|30% increased Mana Recovery from Flasks}
➞ {enter|b_1_4_1a} #Solitary Confinement
kill {kill|The Prisoner}
Return to ship (button)

➞ {enter|b_1_4_4} #Shrike Island
kill {kill|Scourge of the Skies}
{portal|use}
Talk to {generic|The hooded one}
Talk to {generic|Rog} #quest delivery pearl
Talk to {generic|Makoru}

➞ {enter|b_1_4_7} #Eye of Hinekora
Talk to {generic|Matiki}
Interact with {generic|Well of Passing}
Complete {quest|b_a4q13} #Ngamahu's Test of meddle
Complete {quest|b_a4q11} #Tawhoa's Test of meddle
Complete {quest|b_a4q12} #Tasalio's Test of meddle
Find {generic|The Silent Hall} and {quest_text|Pay your respects}
    #sub {reward_quest|5% increased maximum mana}

➞ {enter|b_1_4_7a} #Halls of the dead
Complete {quest|b_a4q13} #Ngamahu's Test
    #sub {reward_quest|+5 Strength or +5% Fire Resist}    
Complete {quest|b_a4q11} #Tawhoa's Test
    #sub {reward_quest|+5 Dexterity or +5% Lighting Resist}        
Complete {quest|b_a4q12} #Tasalio's Test
    #sub {reward_quest|+5 Intelligence or +5% Cold Resist}      
kill {kill|Yama, the White}
Take {quest_text|Silver Coin}

➞ {enter|b_1_4_7b} #Trial Of the Ancestors
Talk to {generic|Navali}
    #sub {reward_quest|+2 Weapon Set Skill Points}  
{portal|use}  

➞ {enter|b_1_4_8} #Arastas
    #sub (Optional) Morning Bell in the Town Square {reward_quest|x3 Regal Orb}
    #sub (Optional) Evening Bell at the Cliffside {reward_quest|x3 Exalted Orb}
kill {kill|Torvian, Hand of the Saviour}

➞ {enter|b_1_4_8a} #The Excavation
kill {kill|Benedictus, First Herald}
Forge the Weapon
{portal|use}

➞ {enter|b_1_4_2} #Ngakanu
➞ {enter|b_1_4_2a} #Heart of the tribe
kill {kill|Tavakai}
{portal|use}
Talk to {generic|The Hooded One}
`;export{e as default};
