const e=`#section Act 1
Find and kill {kill|The Bloated Miller}

➞ {enter|b_1_1_town} #Clearfell Emcampment
Hand in {quest|b_a1q1}
Talk to {generic|Una}

➞ {enter|b_1_1_2} #Clearfell
    #sub {image|b_1_1_2v1|250|250} {image|b_1_1_2v2|250|250}

Take a detour to the right or left to the Mysterious Campsite 
    #sub Get {reward_quest|Lvl 1 Uncut Skill Gem}

Head to the North {dir|0} to kill {kill|Beira of the Rotten Pack} 
    #sub {reward_quest|+10% to Cold Resistance buff}
    #sub [Optional] {arena|Mud Burrow} - Grants a {reward_quest|Lvl 2 Uncut Skill Gem} (Boss Drop) and {reward_quest|Lvl 1 Uncut Support} (Reward). The boss spawns directly opposite the entrance. Not often worth doing.

#ifdef LEAGUE_START
    Get {waypoint_get}
#endif

➞ {enter|b_1_1_3} #The Grelwood
    #sub Points of Interest: Diamond Pattern
    #sub After entering the zone, head straight and try to find the first point of interest, then head diagonally up or down to find the next and so on. The entrance to The Red Vale is almost always, in the same quadrant of the Brambleghast boss arena.
    #sub [Optional] kill {kill|Brambleghast} - Grants a {reward_quest|Uncut Skill Gem (Lvl 1)}
    
kill {kill|Areagne} in Areagne’s Hut
    #sub Get {reward_quest|Flasks and Uncut Skill Gem (Lvl 1)}
    
#ifdef LEAGUE_START
Get {waypoint_get} near Tree of Souls
#endif
    
Talk to {generic|Una}
    
➞ {enter|b_1_1_4} #The Grim Tangle
Get {waypoint_get}, and go back out

➞ {enter|b_1_1_3a} #The Red Vale
Find the three Rust Altars and get the three quest items
    #sub Roughly circular pattern
{logout}    
Get {quest_text|Runic tools} - {generic|Renly}

{waypoint|b_1_1_3} #The Grelwood
Release the Runic Seals

{waypoint|b_1_1_town} #Clearfell Emcampment
Hand in {quest|b_a1q3} #Secrets In the dark

{waypoint|b_1_1_4} #The Grim Tangle
    #sub Respawn at checkpoint to skip scene
    #sub [Optional] Kill {kill|The Rotten Druid:} and {reward_quest|Lvl 2 Uncut Support Gem}    
    
➞ {enter|b_1_1_5} #Cemetary of the eternals
    #sub Usually to the left {dir|270}
    #sub Take iron ring in the {generic|sorrowfull semoriam}
    #sub Find the 2 tombs first, do the second and reload the instance for +1 monster lvl
    
➞ {enter|b_1_1_5a} #Mausoleum of the praetor
kill {kill|Draven}
{portal|use} 
{waypoint|b_1_1_5} #Cemetary of the eternals

Find {enter|b_1_1_5b} #Tomb of the Consort
    #sub [Optional] Haunted Treasure ({kill|the Eternal Knight}) {reward_quest|Lvl 2 Uncut Support Gem}
kill {kill|Asinia}
{waypoint|b_1_1_5} #Cemetary of the eternals

Hand in {quest|b_a1q7}

kill {kill|Lachlann of Endless Lament}
    #sub {reward_quest|Lvl 2 Uncut Support Gem}  
    
➞ {enter|b_1_1_6} #Hunting Grounds
    #sub {image|b_1_1_6|400|300}
    
kill {kill|Crowbell}
    #sub {reward_quest|Book of Specialisation (+2 Weapon Set Skill Points)}
    
kill {kill|Dyadric Ritual}
    #sub {reward_quest|Uncut Support Gem Lvl 1}
    
➞ {enter|b_1_1_6a} #Feythorn
kill {kill|king of the mists}
    #sub {reward_quest|+30 Spirit}
    #sub {reward_quest|Uncut Spirit Gem}

{portal|use}  #Clearfell Emcampment
Hand in {quest|b_a1q8} #Ominous Altars
    #sub {reward_quest|Fire, Cold or Lighting Charm}
 
{waypoint} ➞ {enter|b_1_1_7} #Ogham farmlands
    #sub [Optional] Find Crop Circle, {reward_quest|Lvl 12 Uncut Skill Gem}
Find {quest_text|Una's lute}
    
    
➞ {enter|b_1_1_8} #Ogham village
#ifdef LEAGUE_START
{quest_text|Find Smithing tools}
#endif
kill {kill|The Executioner}
    #sub {reward_quest|Lvl 2 Uncut Support Gem} (Boss Drop)
    
➞ {enter|b_1_1_9} #The Manor Ramparts
    #sub [Optional] The Gallows - {reward_quest|Lvl 2 Uncut Support Gem}
    
➞ {enter|b_1_1_10} #Ogham Manor 1F
    #sub If you find the stairs first, go down, take {waypoint}, then go back up.
kill {kill|Candlemass, the Living Rite}
    #sub {reward_quest|+20 to Maximum Life}
➞ {arena|Ogham Manor} 2F
➞ {arena|Ogham Manor} 3F
{portal|use}  #Clearfell Emcampment
Hand in {quest|b_a1q6} #The Lost lute
    #sub {reward_quest|Book of Specialisation (+2 Weapon Set Skill Points)}
Hand in {quest|b_a1q9} #The Trial of corruption
    #sub {reward_quest|Lvl 5 Uncut Skill Gem}
Hand in {quest|b_a1q5} #Finding the Forge
    #sub {reward_quest|1x Rune}
    
kill {kill|Count Geonor}
Talk to {generic|Renly}
Talk to {generic|The Hooded One}
`;export{e as default};
