/**@let This module contains the skill objects held in arrays by class to be used in other modules */

export let assassinSkills = [
  {
    name: "Reckless Lunge",
    rarity: "Normal",
    type: false,
    description: "Attack the enemy 3 times, each inflicting 58%(+70) ATK DMG",
    img: "../ulala-media/assassin-skill-thumbnails/60px-Reckless_lunge.png",
    recommended: false
  },
  {
    name: "Reverberating Slam",
    rarity: "Normal",
    type: false,
    description: "Inflict 145%(+174) ATK DMG to the enemy",
    img: "../ulala-media/assassin-skill-thumbnails/60px-Reverberating_slam.png",
    recommended: false
  },
  {
    name: "Double Throw Knives",
    rarity: "Normal",
    type: false,
    description: "Hurl throwing knives at 3 random enemy units and inflict 65%(+78) ATK DMG",
    img: "../ulala-media/assassin-skill-thumbnails/60px-Double_throw_knives.png",
    recommended: "AFK"
  },
  {
    name: "Bounce bounce bounce",
    rarity: "Normal",
    type: "Charge",
    description: "Toss 1 knife which will bounce between enemies and inflict 62%(+74) ATK DMG (by default 1 enemy bounces once)",
    img: "../ulala-media/assassin-skill-thumbnails/60px-Bounce_bounce_bounce.png",
    recommended: "AFK, AOE"
  },
  {
    name: "Cloak of Bush",
    rarity: "Normal",
    type: false,
    description: "Disguise as a bush to gain Control Immunity for 6 seconds and increase DMG Mitigation by 20% and ATK by 24%(+28)",
    img: "../ulala-media/assassin-skill-thumbnails/60px-Cloak_of_bush.png",
    recommended: "Hunt, AOE"
  },
  {
    name: "Pounce",
    rarity: "Normal",
    type: false,
    description: "Inflict 115%(+138) ATK DMG on the enemy and gain 2 Technique Points (Each Technique Point increases Evasion by 1%",
    img: "../ulala-media/assassin-skill-thumbnails/60px-Pounce.png",
    recommended: false
  },
  {
    name: "Pursuing",
    rarity: "Normal",
    type: false,
    description: "Inflict 150%(+181) ATK to the enemy. The lower the enemy's HP, the higher the DMG",
    img: "../ulala-media/assassin-skill-thumbnails/60px-Pursuing.png",
    recommended: false
  },
  {
    name: "Roundhouse",
    rarity: "Normal",
    type: "Charge",
    description: "Charge for 0.5 seconds and then kick the enemy. Inflict 105%(+126) ATK DMG and interrupt the target (The Interrupted effect has a 100% hit rate for enemy units at Lv10 or lower",
    img: "../ulala-media/assassin-skill-thumbnails/60px-Roundhouse.png",
    recommended: false
  },
  {
    name: "Backstab",
    rarity: "Normal",
    type: false,
    description: "Create a phantom and instantly move it behind the enemy, inflicting 40%(+48) ATK DMG. The phantom will launch a bonus attack for each Technique Point",
    img: "../ulala-media/assassin-skill-thumbnails/60px-Backstab.png",
    recommended: false
  },
  {
    name: "Fan of Knives",
    rarity: "Normal",
    type: false,
    description: "Inflict 59%(+70) ATK DMG on 3 random enemy units and gain Combo",
    img: "../ulala-media/assassin-skill-thumbnails/60px-Fan_of_knives.png",
    recommended: "AFK, AOE"
  },
  {
    name: "Scatter Blade",
    rarity: "Normal",
    type: false,
    description: "Inflict 105%(+126) ATK DMG to the enemy and remove 1 buff. Successful removal increases DMG by 10%",
    img: "../ulala-media/assassin-skill-thumbnails/60px-Scatter_blade.png",
    recommended: false
  },
  {
    name: "Fatal Knife",
    rarity: "Normal",
    type: "Charge",
    description: "Inflict 88%(+105) ATK DMG on 3 enemy units. If in the Combo state, DMG increases by 8%",
    img: "../ulala-media/assassin-skill-thumbnails/60px-Fatal_knife.png",
    recommended: "AFK, AOE"
  },
  {
    name: "Rupture",
    rarity: "Normal",
    type: false,
    description: "Inflict bleeding DMG of 179%(+214) ATK over 6 seconds and gain 3 Technique Points (Each Technique Point increases evasion by 1%",
    img: "../ulala-media/assassin-skill-thumbnails/60px-Rupture.png",
    recommended: false
  },
  {
    name: "Lacerations",
    rarity: "Normal",
    type: false,
    description: "Deal 137%(+164) ATK DMG to enemy. Skill ignores 20% of enemy's Armor",
    img: "../ulala-media/assassin-skill-thumbnails/60px-Lacerations.png",
    recommended: false
  },
  {
    name: "Zeal",
    rarity: "Normal",
    type: false,
    description: "Inflict 87%(+104) ATK DMG on the enemy and heal for 11%(+13) of ATK over 6 seconds. The lower your HP, the higher the healing",
    img: "../ulala-media/assassin-skill-thumbnails/60px-Zeal.png",
    recommended: false
  },
  {
    name: "Ambush",
    rarity: "Normal",
    type: false,
    description: "Cast up to 2 Technique Points to inflict 55%(+66) ATK DMG to the enemy and stun the target for 1 second. Each Technique Point extends the stun by 0.5 seconds (The Stun effect has a 100% hit rate for enemy units at Lv10 or lower)",
    img: "../ulala-media/assassin-skill-thumbnails/60px-Ambush.png",
    recommended: false
  },
  {
    name: "Poison Coat",
    rarity: "Normal",
    type: false,
    description: "Apply Bonus Poison effect to the enemy. Each layer of Poison causes 1.3%(+2) ATK DMG per second for 12 seconds. 1 layer is added upon each basic attack dealt by an Assassin to a max of 15 layers. When the target dies, the seals will be passed on to nearby enemy units",
    img: "../ulala-media/assassin-skill-thumbnails/60px-Poison_coat.png",
    recommended: "Hunt"
  },
  {
    name: "Shiv",
    rarity: "Normal",
    type: false,
    description: "Inflict 95%(+114) ATK DMG to the enemy and rest the effective duration of Poison",
    img: "../ulala-media/assassin-skill-thumbnails/60px-Shiv.png",
    recommended: "Hunt"
  },
  {
    name: "Swiftwind Daggers",
    rarity: "Normal",
    type: false,
    description: "Hurl 4 throwing knives randomly, each inflicting 51%(+61) ATK DMG. If the same target is hit consecutively, the DMG dealt decreases (by 25% every time, to a maximum of 50%)",
    img: "../ulala-media/assassin-skill-thumbnails/60px-Swiftwind_daggers.png",
    recommended: false
  },
  {
    name: "Fish Bone Throwing Knife",
    rarity: "Normal",
    type: false,
    description: "Throw between 1 and 3 fish bone throwing knives with a barb to inflict 65%(+78) ATK DMG to the enemy. If the enemy targets have Poison, DMG increases by 25%",
    img: "../ulala-media/assassin-skill-thumbnails/60px-Fishbone_throwing_knife.png",
    recommended: "Hunt"
  },
  {
    name: "Mortal Wounds",
    rarity: "Normal",
    type: false,
    description: "Inflict 120%(+144) ATK DMG to the enemy and lower the target's Healing by 16% for 6 seconds",
    img: "../ulala-media/assassin-skill-thumbnails/60px-Mortal_wounds.png",
    recommended: false
  },
];

export let druidSkills = [
  {
    name: "Mend",
    rarity: "Normal",
    type: false,
    description: "Heal the most injured teammate for 14%(+27) of ATK and another same amount of HP over 5 seconds",
    img: "../ulala-media/druid-skill-thumbnails/60px-Mend.png",
    recommended: false
  },
  {
    name: "Song of Life",
    rarity: "Normal",
    type: "Cast",
    description: "Sing the Song of Life to heal the most injured teammate for 27%(+52) of ATK",
    img: "../ulala-media/druid-skill-thumbnails/60px-Song_of_life.png",
    recommended: "Hunt"
  },
  {
    name: "Seed of Replenishment",
    rarity: "Normal",
    type: false,
    description: "Throw 2 Seeds to heal 2 teammates with the lowest HP for 20%(+38) of ATK",
    img: "../ulala-media/druid-skill-thumbnails/60px-Seed_of_replenishment.png",
    recommended: false
  },
  {
    name: "Quills",
    rarity: "Normal",
    type: false,
    description: "Attack 3 random enemy units and inflict 57%(+110) ATK DMG. At the same time, heal the teammate with the lowest HP for 17%(+33)",
    img: "../ulala-media/druid-skill-thumbnails/60px-Quills.png",
    recommended: "AFK"
  },
  {
    name: "Purification Seed",
    rarity: "Normal",
    type: "Cast",
    description: "Purify the teammate with the lowest HP. Heal for 19%(+38) of ATK and shield it from any debuff for 3 seconds",
    img: "../ulala-media/druid-skill-thumbnails/60px-Purification_seed.png",
    recommended: "Hunt"
  },
  {
    name: "Lilly Transform",
    rarity: "Normal",
    type: false,
    description: "Transform into the Lily to increase Healing done by 10% and heal the most injured teammate for 13%(+25) of ATK over 5 seconds",
    img: "../ulala-media/druid-skill-thumbnails/60px-Lilly_transformation.png",
    recommended: "Hunt, AOE"
  },
  {
    name: "Tree Ward",
    rarity: "Normal",
    type: "Cast",
    description: "Cast the Tree Ward for the most injured teammate and heal for 28%(+55) of ATK. If in the Lily state, cast an extra shield with 40% of the HP recovered. It lasts for 10 seconds",
    img: "../ulala-media/druid-skill-thumbnails/60px-Tree_ward.png",
    recommended: "Hunt"
  },
  {
    name: "Binding Heal",
    rarity: "Normal",
    type: false,
    description: "Heal yourself and the most injured teammate for 22%(+43) of ATK over 5 seconds",
    img: "../ulala-media/druid-skill-thumbnails/60px-Binding_heal.png",
    recommended: false
  },
  {
    name: "Flower Seed",
    rarity: "Normal",
    type: "Cast",
    description: "Throw Flower Seeds at 3 random enemy units and inflict 54%(+104) ATK DMG. If the targets are killed within 3 seconds, the seeds will heal the teammate with the lowest HP for 22%(+42) of ATK",
    img: "../ulala-media/druid-skill-thumbnails/60px-Flower_seed.png",
    recommended: "AFK"
  },
  {
    name: "Luna Blessing",
    rarity: "Normal",
    type: "Guide",
    description: "Guide the Luna Blessing and heal 2 most injured teammates for 22%(+42) of ATK over 4 seconds",
    img: "../ulala-media/druid-skill-thumbnails/60px-Luna_blessing.png",
    recommended: false
  },
  {
    name: "Song of Protection",
    rarity: "Normal",
    type: "Cast",
    description: "Sing the Song of Protection to heal the teammate with the lowest HP for 23%(+45) of ATK over 3 seconds. The lower the teammate's HP, the higher the heal",
    img: "../ulala-media/druid-skill-thumbnails/60px-Song_of_protection.png",
    recommended: false
  },
  {
    name: "Seed of Life",
    rarity: "Normal",
    type: false,
    description: "Heal all party for 5%(+10) of ATK over 5 seconds and gift them the seed of life",
    img: "../ulala-media/druid-skill-thumbnails/60px-Seed_of_life.png",
    recommended: "AOE"
  },
  {
    name: "Tranquility",
    rarity: "Normal",
    type: "Guide",
    description: "Heal all party for 17%(+33) of ATK over 4 seconds. Instantly heal for another 25% of the HP restored for each layer of seed of life the teammates own",
    img: "../ulala-media/druid-skill-thumbnails/60px-Tranquility.png",
    recommended: "AOE"
  },
  {
    name: "Force of Bud",
    rarity: "Normal",
    type: false,
    description: "Heal all party for 8%(+16) of ATK over 5 seconds and gift them the seed of life. If a target already has a seed of life, increase healing by 10%",
    img: "../ulala-media/druid-skill-thumbnails/60px-Force_of_bud.png",
    recommended: "AOE"
  },
  {
    name: "Life Bloom",
    rarity: "Normal",
    type: false,
    description: "Remove 1 debuffs for all party members and heal 10%(+20) of ATK. Increase HP recovered by 10% for each debuff removed",
    img: "../ulala-media/druid-skill-thumbnails/60px-Life_bloom.png",
    recommended: false
  },
  {
    name: "Extended Healing",
    rarity: "Normal",
    type: "Cast",
    description: "Cast a Branch Shield for the teammate with the lowest HP. The shield's value equals to 32%(+63) ATK. It absorbs 80% of the DMG received by the teammate for 10 seconds",
    img: "../ulala-media/druid-skill-thumbnails/60px-Extended_healing.png",
    recommended: false
  },
  {
    name: "Revitalize Nature",
    rarity: "Normal",
    type: false,
    description: "Cast a shield of 10%(+19) of ATK for teammates, lasting 10 seconds",
    img: "../ulala-media/druid-skill-thumbnails/60px-Revitalize_nature.png",
    recommended: false
  },
  {
    name: "Natural Aegis",
    rarity: "Normal",
    type: false,
    description: "Heal the teammate with the lowest HP for 14%(+28) of ATK over 5 seconds, and shorten your next skill's guiding time by 0.5 seconds",
    img: "../ulala-media/druid-skill-thumbnails/60px-Natural_aegis.png",
    recommended: false
  },
  {
    name: "Ukaka Transform",
    rarity: "Normal",
    type: false,
    description: "Transform into Ukaka and increase your DMG by 8%. For the first 10 seconds after the transformation, each attack inflicts bonus 23.8%(+46) ATK DMG",
    img: "../ulala-media/druid-skill-thumbnails/60px-Ukaka_transformation.png",
    recommended: "AFK"
  },
  {
    name: "New Bud",
    rarity: "Normal",
    type: "Cast",
    description: "Inflict 23%(+44) ATK DMG on all enemy units and silence the targets for 1 seconds (The Silence effect has a 100% hit rate for enemy units at Lv10 or lower",
    img: "../ulala-media/druid-skill-thumbnails/60px-New_bud.png",
    recommended: false
  },
  {
    name: "Quills Thrust",
    rarity: "Normal",
    type: "Cast",
    description: "Inflict 42%(+81) ATK DMG on all enemy units and lower the enemy's Healing by 8%",
    img: "../ulala-media/druid-skill-thumbnails/60px-Quills_thrust.png",
    recommended: "AFK"
  },
];

export let gladSkills = [
  {
    name: "Blood Howl",
    rarity: "Normal",
    type: false,
    description: "Restore 5.2%(+24) HP over 10 seconds and reduce the DMG received by 10% for 10 seconds",
    img: "../ulala-media/gladiator-skill-thumbnails/60px-Blood_howl.png",
    recommended: "AOE"
  },
  {
    name: "Whirlwind",
    rarity: "Normal",
    type: false,
    description: "Spin 3 times to inflict 40%(+40) ATK DMG on all enemy units nearby. Restore 2.1%(+10) HP per hit",
    img: "../ulala-media/gladiator-skill-thumbnails/60px-Whirlwind.png",
    recommended: "AFK"
  },
  {
    name: "Cleave",
    rarity: "Normal",
    type: false,
    description: "Inflict 120%(+120) ATK DMG on enemy units ahead of you and restore 2.7%(+12) HP",
    img: "../ulala-media/gladiator-skill-thumbnails/60px-Cleave.png",
    recommended: "AFK"
  },
  {
    name: "Toughen",
    rarity: "Normal",
    type: false,
    description: "Heal 4.6%(+21) over 10 seconds, during which healing another 45% of the first skill DMG received",
    img: "../ulala-media/gladiator-skill-thumbnails/60px-Toughen.png",
    recommended: "Hunt"
  },
  {
    name: "Boil Blood",
    rarity: "Normal",
    type: false,
    description: "Restore 3.5%(+16) HP over 10 seconds",
    img: "../ulala-media/gladiator-skill-thumbnails/60px-Boil_blood.png",
    recommended: false
  },
  {
    name: "Hoo kham kham",
    rarity: "Normal",
    type: false,
    description: "Taunt all the enemies to attack you and restore 2.7%(+12) HP over 10 seconds (The Taunt effect has a 100% hit rate for targets at Lv10 or lower)",
    img: "../ulala-media/gladiator-skill-thumbnails/60px-Hoo_kham_kham.png",
    recommended: false
  },
  {
    name: "Barbarian Veins",
    rarity: "Normal",
    type: false,
    description: "Activate Barbarian Veins to raise Max HP by 10% for 8 seconds and restore HP of 4.4%(+20) over 10 seconds",
    img: "../ulala-media/gladiator-skill-thumbnails/60px-Barbarian_veins.png",
    recommended: "Hunt"
  },
  {
    name: "Blood Force",
    rarity: "Normal",
    type: false,
    description: "Increase the Healing received by 10% and restore 4.6%(+21) HP over 10 seconds. If in the Barbarian Veins state, increase healing by 50%",
    img: "../ulala-media/gladiator-skill-thumbnails/60px-Blood_force.png",
    recommended: "Hunt"
  },
  {
    name: "Intercept",
    rarity: "Normal",
    type: false,
    description: "Inflict 70%(+70) ATK DMG on an enemy unit and interrupt its skill casting. Successful interruption restores 2.7%(+12) HP and reduces DMG received from the enemy by 8% for 10 seconds (The Interrupted effect has a 100% hit rate for enemy units at Lv10 or lower)",
    img: "../ulala-media/gladiator-skill-thumbnails/60px-Intercept.png",
    recommended: false
  },
  {
    name: "Sacrifice",
    rarity: "Normal",
    type: false,
    description: "Restore 3.1%(+14) HP over 10 seconds and take 40% of the DMG received every time for the teammate with the lowest HP",
    img: "../ulala-media/gladiator-skill-thumbnails/60px-Sacrifice.png",
    recommended: "AOE"
  },
  {
    name: "Rising Rage",
    rarity: "Normal",
    type: false,
    description: "Immune to control effects for 16 seconds and restore 4%(+18) HP over 10 seconds",
    img: "../ulala-media/gladiator-skill-thumbnails/60px-Rising_rage.png",
    recommended: false
  },
  {
    name: "Hoo Hoo Hoo",
    rarity: "Normal",
    type: false,
    description: "Reduce DMG taken by other teammates by 16% over 10 seconds. Up to 2.5%(+11) of your HP can be reduced",
    img: "../ulala-media/gladiator-skill-thumbnails/60px-Hoo_hoo_hoo.png",
    recommended: "AOE"
  },
  {
    name: "Death Denied",
    rarity: "Normal",
    type: false,
    description: "Restore 4.1%(+19) HP over 5 seconds. The lower the HP the higher the healing",
    img: "../ulala-media/gladiator-skill-thumbnails/60px-Death_denied.png",
    recommended: false
  },
  {
    name: "Uppercut",
    rarity: "Normal",
    type: "Charge",
    description: "Attack the enemy with an uppercut, inflicting 60%(+60) ATK DMG, and knock the target into the air (This effect has a 100% hit rate for enemy units at Lv10 or lower)",
    img: "../ulala-media/gladiator-skill-thumbnails/60px-Uppercut.png",
    recommended: false
  },
  {
    name: "Battle Shout",
    rarity: "Normal",
    type: false,
    description: "Remove 1 debuffs for yourself and restore 4%(+18) HP over 10 seconds",
    img: "../ulala-media/gladiator-skill-thumbnails/60px-Battle_shout.png",
    recommended: false
  },
  {
    name: "Let's charge",
    rarity: "Normal",
    type: false,
    description: "Inspire your party and increase ATK by 13%(+13) for 6 seconds",
    img: "../ulala-media/gladiator-skill-thumbnails/60px-Lets_charge.png",
    recommended: "Hunt, AFK, AOE"
  },
  {
    name: "Bloody Combat",
    rarity: "Normal",
    type: "Charge",
    description: "Restore 3.1%(+14) HP over 10 seconds, during which recover 1 point of energy if the damage taken is more than 25% of HP",
    img: "../ulala-media/gladiator-skill-thumbnails/60px-Bloody_combat.png",
    recommended: false
  },
  {
    name: "Severing Strike",
    rarity: "Normal",
    type: false,
    description: "Consume 20% of your current HP to inflict 105%(+105) ATK DMG to enemy units in the back row. If the targets are killed within 3 seconds, restore 2.7%(+12) of your HP. If in the frenzied state, DMG increases by 50%",
    img: "../ulala-media/gladiator-skill-thumbnails/60px-Severing_strike.png",
    recommended: false
  },
  {
    name: "Frenzy",
    rarity: "Normal",
    type: false,
    description: "Enter the Frenzied state to increase ATK by 30%, at the cost of 30% Max HP. Inflict 184%(+184) ATK DMG on the enemy with the lowest HP, and lower its healing by 16%. In the Frenzied state, DMG increases by 50%",
    img: "../ulala-media/gladiator-skill-thumbnails/60px-Frenzy.png",
    recommended: "AFK"
  },
  {
    name: "Fevered Pursuit",
    rarity: "Normal",
    type: "Charge",
    description: "Attack 3 times and inflict 13%(+13) ATK DMG. If in the Frenzied state, attack range increases and attacks focus on the enemy unit with the lowest HP, stunning the target for 0.5 seconds (The Stun effect has a 100% hit rate for enemy units at Lv10 or lower)",
    img: "../ulala-media/gladiator-skill-thumbnails/60px-Fevered_pursuit.png",
    recommended: false
  }
];

export let hunterSkills = [
  {
    name: "Storm Shot",
    rarity: "Normal",
    type: "Charge",
    description: "Inflict 210%(+476) ATK DMG to the enemy",
    img: "../ulala-media/hunter-skill-thumbnails/60px-Storm_shot.png",
    recommended: "Hunt"
  },
  {
    name: "Steady Shot",
    rarity: "Normal",
    type: false,
    description: "Inflict 93%(+210) ATK DMG on the enemy and shorten the next skill's carging time by 40%",
    img: "../ulala-media/hunter-skill-thumbnails/60px-Steady_shot.png",
    recommended: false
  },
  {
    name: "Arrow Barrage",
    rarity: "Normal",
    type: false,
    description: "Inflict 54%(+122) ATK DMG on all enemy units",
    img: "../ulala-media/hunter-skill-thumbnails/60px-Arrow_barrage.png",
    recommended: "AFK, AFK"
  },
  {
    name: "Multi-Shot",
    rarity: "Normal",
    type: false,
    description: "Inflict 68%(+153) ATK DMG on 3 enemy units",
    img: "../ulala-media/hunter-skill-thumbnails/60px-Multi-shot.png",
    recommended: "AFK, AOE"
  },
  {
    name: "Apspect of the Eagle",
    rarity: "Normal",
    type: "Charge",
    description: "Inflict 100%(+227) ATK DMG on enemy units and command Hawks to aid. Heal yourself fr 15%(+33) of ATK over 10 seconds",
    img: "../ulala-media/hunter-skill-thumbnails/60px-Aspect_of_the_eagle.png",
    recommended: false
  },
  {
    name: "Hawk Call - Sheen",
    rarity: "Normal",
    type: false,
    description: "Summon Hawk - Sheen and increase Hunter's Crit rate by 4%. Sheen inflicts 15.5%(+35) ATK DMG upon each strike and lasts for 22 seconds",
    img: "../ulala-media/hunter-skill-thumbnails/60px-Hawk_call_sheen.png",
    recommended: "Hunt"
  },
  {
    name: "Weakpoint Shot",
    rarity: "Normal",
    type: "Charge",
    description: "Inflict 149%(+337) ATK DMG to the enemy. The lower the enemy's HP, the higher the DMG",
    img: "../ulala-media/hunter-skill-thumbnails/60px-Weakpoint_shot.png",
    recommended: false
  },
  {
    name: "Hawk Call = Gal",
    rarity: "Normal",
    type: "Charge",
    description: "Summon Hawk - Gal. It inflicts 22%(+49) ATK DMG on the enemy upon each strike and lasts for 12 seconds. For each Hawk present on the battlefield when summoned, increase DMG by 25%",
    img: "../ulala-media/hunter-skill-thumbnails/60px-Hawk_call_gal.png",
    recommended: false
  },
  {
    name: "Numbing Shot",
    rarity: "Normal",
    type: "Charge",
    description: "Fire a spearhead Arrow to inflict 57%(+129) ATK DMG on the target and interrupt its skill casting (The Interrupted effect has a 100% hit rate for enemy units at Lv10 or lower)",
    img: "../ulala-media/hunter-skill-thumbnails/60px-Numbing_shot.png",
    recommended: false
  },
  {
    name: "Explosive Shot",
    rarity: "Normal",
    type: "Charge",
    description: "Fire an explosive charge into the enemy target and inflict 81%(+184) ATK DMG on 3 enemy units. If the targets are in the Scorch effect, the DMG dealt increases by 20%",
    img: "../ulala-media/hunter-skill-thumbnails/60px-Explosive_shot.png",
    recommended: "AFK, AOE"
  },
  {
    name: "Scatter Shot",
    rarity: "Normal",
    type: false,
    description: "Inflict 110%(+249) ATK DMG on the enemy and remove 1 random buffs. Successful removal increases DMG by 10%",
    img: "../ulala-media/hunter-skill-thumbnails/60px-Scatter_shot.png",
    recommended: false
  },
  {
    name: "Burning Shot",
    rarity: "Normal",
    type: "Charge",
    description: "Fire 3 burning arrows to inflict 60%(+136) ATK DMG on 3 enemy units and apply the Scorch state",
    img: "../ulala-media/hunter-skill-thumbnails/60px-Burning_shot.png",
    recommended: "AFK, AOE"
  },
  {
    name: "Hawk Call - Pan",
    rarity: "Normal",
    type: false,
    description: "Summon Hawk - Pan and increase Hunter's Impale rate by 8%. Pan inflicts 9.5%(+22) ATK DMG upon each strike and lasts for 22 seconds",
    img: "../ulala-media/hunter-skill-thumbnails/60px-Hawk_call_pan.png",
    recommended: false
  },
  {
    name: "Sunder Armor Shot",
    rarity: "Normal",
    type: "Charge",
    description: "Deal 194%(+440) ATK DMG to enemy. Skill ignores 20% of enemy's Armor",
    img: "../ulala-media/hunter-skill-thumbnails/60px-Sunder_armor_shot.png",
    recommended: "Hunt"
  },
  {
    name: "Flaying Arrow",
    rarity: "Normal",
    type: false,
    description: "Inflict 75%(+170) ATK DMG on enemy units and heal yourself for 10%(+23) of ATK",
    img: "../ulala-media/hunter-skill-thumbnails/60px-Flaying_arrow.png",
    recommended: false
  },
  {
    name: "Boar's Rush",
    rarity: "Normal",
    type: "Charge",
    description: "Summon a boar to ram into the enemy and inflict 140$(+317) ATK DMG and stun the target for 1 seconds (The Stun effect has a 100% hit rate for enemy units at Lv10 or lower)",
    img: "../ulala-media/hunter-skill-thumbnails/60px-Boars_rush.png",
    recommended: "Hunt"
  },
  {
    name: "Aimed Shot",
    rarity: "Normal",
    type: "Charge",
    description: "Inflict 159%(+360) ATK DMG to the enemy and gain 2 layers of Concentration (Each layer of Concentration increases Hit rate by 1%)",
    img: "../ulala-media/hunter-skill-thumbnails/60px-Aimed_shot.png",
    recommended: false
  },
  {
    name: "Piercing Shot",
    rarity: "Normal",
    type: "Charge",
    description: "Inflict 204%(+462) ATK DMG to the enemy and release up to the 3 layers of Concentration, each dealing a bonus 25% of DMG",
    img: "../ulala-media/hunter-skill-thumbnails/60px-Piercing_shot.png",
    recommended: false
  },
  {
    name: "Quick Shot",
    rarity: "Normal",
    type: false,
    description: "Aim and fire at the enemy. Inflict 101%(+230) ATK DMG and gain 1 layer of Concentration",
    img: "../ulala-media/hunter-skill-thumbnails/60px-Quick_shot.png",
    recommended: false
  },
  {
    name: "Volley",
    rarity: "Normal",
    type: "Charge",
    description: "Launch 4 random attacks, each inflicting 55%(+125) ATK DMG. If a same target is hit consecutively, the DMG dealt decreases (by 25% every time to a maximum 50%)",
    img: "../ulala-media/hunter-skill-thumbnails/60px-Volley.png",
    recommended: false
  },
  {
    name: "Lunar Shot",
    rarity: "Normal",
    type: false,
    description: "Inflict 125%(+283) ATK DMG to the enemy and lower the target's Healing by 16% for 10 seconds",
    img: "../ulala-media/hunter-skill-thumbnails/60px-Lunar_shot.png",
    recommended: false
  }
];

export let mageSkills = [
  {
    name: "Magic Blast",
    rarity: "Normal",
    type: "Cast",
    description: "Cast a Magic Blast to inflict 214%(+571) ATK DMG on the enemy",
    img: "../ulala-media/mage-skill-thumbnails/60px-Magic_blast.png",
    recommended: false
  },
  {
    name: "Magic Intellect",
    rarity: "Normal",
    type: false,
    description: "Break through the upper limit of magic control. Shorten the next skill's casting time by 40% and inflict 155%(+414) ATK DMG on the enemy",
    img: "../ulala-media/mage-skill-thumbnails/60px-Magic_intellect.png",
    recommended: false
  },
  {
    name: "Mirror Image",
    rarity: "Normal",
    type: "Cast",
    description: "Inflict 71%(+190) ATK DMG on the enemy and link yourself with 1 magic clone with HP of 12%(+31) of ATK. Your DMG received will be transferred to the mirror image. It lasts for 12 seconds",
    img: "../ulala-media/mage-skill-thumbnails/60px-Mirror_image.png",
    recommended: false
  },
  {
    name: "Meteorite",
    rarity: "Normal",
    type: "Cast",
    description: "Form 3 huge fireballs to inflict 118%(+315) ATK DMG on 3 random enemy units",
    img: "../ulala-media/mage-skill-thumbnails/60px-Meteorite.png",
    recommended: "AFK, AOE"
  },
  {
    name: "Lightning Wave",
    rarity: "Normal",
    type: false,
    description: "Attack all enemy units and inflict 45%(+120) ATK DMG",
    img: "../ulala-media/mage-skill-thumbnails/60px-Lightning_wave.png",
    recommended: "AFK, AOE"
  },
  {
    name: "Fireball",
    rarity: "Normal",
    type: "Cast",
    description: "Throw 1 fireball and inflict 140%(+373) ATK DMG on the enemy. The lower the enemy's HP, the higher then DMG",
    img: "../ulala-media/mage-skill-thumbnails/60px-Fireball.png",
    recommended: "Hunt"
  },
  {
    name: "Scorch",
    rarity: "Normal",
    type: false,
    description: "Scorch the enemy and inflict 136%(+364) ATK DMG on the enemy target. Crits cast the skill again",
    img: "../ulala-media/mage-skill-thumbnails/60px-Scorch.png",
    recommended: "Hunt"
  },
  {
    name: "Fire Blast",
    rarity: "Normal",
    type: "Cast",
    description: "Control fire to attack the enemy and inflict 195%(+520) ATK DMG. Next skill's Crit rate increses by 14%",
    img: "../ulala-media/mage-skill-thumbnails/60px-Fire_blast.png",
    recommended: "Hunt"
  },
  {
    name: "Silence",
    rarity: "Normal",
    type: "Cast",
    description: "Silence the enemy for 2 seconds and inflict 110%(+293) ATK DMG (The Silence effect has a 100% hit rate for enemy units at Lv10 or lower)",
    img: "../ulala-media/mage-skill-thumbnails/60px-Silence.png",
    recommended: false
  },
  {
    name: "Purification Wave",
    rarity: "Normal",
    type: false,
    description: "Inflict 110%(+293) ATK DMG on the enemy and remove 1 random buffs. Successful removal increases DMG by 10%",
    img: "../ulala-media/mage-skill-thumbnails/60px-Purification_wave.png",
    recommended: false
  },
  {
    name: "Seal Storm",
    rarity: "Normal",
    type: "Cast",
    description: "Inflict 60%(+160) ATK DMG on 3 random enemy units and apply bonus Magic Seal",
    img: "../ulala-media/mage-skill-thumbnails/60px-Seal_storm.png",
    recommended: "AFK, AOE"
  },
  {
    name: "Terminal Storm",
    rarity: "Normal",
    type: false,
    description: "Inflict 54%(+144) ATK DMG on 3 random enemy units. If the targets have the Magic Seal, deal a bonus 50% of DMG",
    img: "../ulala-media/mage-skill-thumbnails/60px-Terminal_storm.png",
    recommended: "AFK, AOE"
  },
  {
    name: "Lightning Blast",
    rarity: "Normal",
    type: "Cast",
    description: "Cast Lightning Charge, deal 204%(+543) ATK DMG to enemy. Skill ignores 20% of enemy's Armor",
    img: "../ulala-media/mage-skill-thumbnails/60px-Lightning_blast.png",
    recommended: "Hunt"
  },
  {
    name: "Serenity",
    rarity: "Normal",
    type: false,
    description: "Inflict bonus 103%(+274) ATK DMG on the first target of the next skill",
    img: "../ulala-media/mage-skill-thumbnails/60px-Serenity.png",
    recommended: false
  },
  {
    name: "Frost Missile",
    rarity: "Normal",
    type: "Charge",
    description: "Fire 3 Frost Missiles to inflict 48%(+129) ATK DMG on the enemy and apply 3 layers of Frost (Every 4 layers of Frost will stun the target for 2 seconds)(The Frost effect has a 100% Hit rate for enemy units at Lv10 or lower)",
    img: "../ulala-media/mage-skill-thumbnails/60px-Frost_missile.png",
    recommended: false
  },
  {
    name: "Cone of Cold",
    rarity: "Normal",
    type: false,
    description: "Cast Ice to attack the enemy. Inflict 23%(+61) ATK DMG on the target, and apply 1 extra layer of Frost (Every 4 layers of Frost will stun the target for 2 seconds)(The Frost effect has a 100% Hit rate for enemy units at Lv10 or lower)",
    img: "../ulala-media/mage-skill-thumbnails/60px-Cone_of_cold.png",
    recommended: false
  },
  {
    name: "Magic Missile",
    rarity: "Normal",
    type: "Guide",
    description: "Launches three waves of Magic Missiles at the enemy for 2 sec, causing 58%(+155) ATK DMG per wave, with a 50% chance of recovering 1 point of energy - up to 2 points",
    img: "../ulala-media/mage-skill-thumbnails/60px-Magic_missile.png",
    recommended: false
  },
  {
    name: "Frostbolt",
    rarity: "Normal",
    type: false,
    description: "Launces a bolt of frost at the enemy, inflicting 57%(+152) ATK DMG and adds 2 layers of Frost to the target (Every 4 layers of Frost will stun the target for 2 seconds)(The Frost effect has a 100% Hit rate for enemy units at Lv10 or lower)",
    img: "../ulala-media/mage-skill-thumbnails/60px-Frostbolt.png",
    recommended: false
  },
  {
    name: "Blizzard",
    rarity: "Normal",
    type: "Guide",
    description: "Control a blizzard to inflict 30%(+80) ATK DMG on all enemy units for 3 seconds. The DMG dealt to the enemy in the Cold state increases by 30%. Afterwards, apply bonus Cold state to all enemy units",
    img: "../ulala-media/mage-skill-thumbnails/60px-Blizzard.png",
    recommended: false
  },
  {
    name: "Frost Nova",
    rarity: "Normal",
    type: "Cast",
    description: "Inflict 48%(+128) ATK DMG on all enemy units and apply bonus Cold state to all targets. The DMG dealt to the enemy in the Cold state increases by 30%",
    img: "../ulala-media/mage-skill-thumbnails/60px-Frost_nova.png",
    recommended: false
  },
  {
    name: "Magic Suppression",
    rarity: "Normal",
    type: false,
    description: "Inflict 125%(+333) ATK DMG to the enemy and lower the target's Healing by 10% for 10 seconds",
    img: "../ulala-media/mage-skill-thumbnails/60px-Magic_suppression.png",
    recommended: false
  },
];

export let shamanSkills = [
  {
    name: "Rain Dance",
    rarity: "Normal",
    type: "Cast",
    description: "Dance in the rain to heal the teammate with the lowest HP for 27%(+52) of ATK",
    img: "../ulala-media/shaman-skill-thumbnails/60px-Rain_dance.png",
    recommended: false
  },
  {
    name: "Riptide",
    rarity: "Normal",
    type: "Instant",
    description: "Heal the teammate with the lowest HP for 14%(+27) of ATK, and another same amount of HP over 5 seconds",
    img: "../ulala-media/shaman-skill-thumbnails/60px-Riptide.png",
    recommended: false
  },
  {
    name: "Spring Totem",
    rarity: "Normal",
    type: "Instant",
    description: "Summon 1 Spring Totem to heal the 2 teammates with the lowest HP for 17%(+32) of ATK over 5 seconds",
    img: "../ulala-media/shaman-skill-thumbnails/60px-Spring_totem.png",
    recommended: false
  },
  {
    name: "Drums of Purge",
    rarity: "Normal",
    type: "Cast",
    description: "Purify the teammate with the lowest HP. Heal them for 22%(+42) of ATK and sheild them from any debuff for 3 seconds",
    img: "../ulala-media/shaman-skill-thumbnails/60px-Drums_of_purge.png",
    recommended: false
  },
  {
    name: "Electric Shock",
    rarity: "Normal",
    type: "Cast",
    description: "Heal the teammate with the lowest HP for 24%(+46) of ATK and cast an electric current to travel back and forth between enemy units 5 times, each time inflicting 24%(+46) ATK DMG",
    img: "../ulala-media/shaman-skill-thumbnails/60px-Electric_shock.png",
    recommended: "AFK"
  },
  {
    name: "Ancestral Protection",
    rarity: "Normal",
    type: "Instant",
    description: "Call for Ancestral Protection to increase healing by 10%. Heal the teammate with the lowest HP for 16.2%(+31) of ATK",
    img: "../ulala-media/shaman-skill-thumbnails/60px-Ancestral_protection.png",
    recommended: "Hunt"
  },
  {
    name: "Faith Protection",
    rarity: "Normal",
    type: "Cast",
    description: "Heal the teammate with the lowest HP for 22%(+42) of ATK. If in the Ancestral Protection state, provide the target with extra protection for 10 seconds and heal them for another 40% of the HP restored when they are attacked the next time",
    img: "../ulala-media/shaman-skill-thumbnails/60px-Faith_protection.png",
    recommended: "Hunt"
  },
  {
    name: "Dance With Me",
    rarity: "Normal",
    type: "Cast",
    description: "Healself and the teammate with the lowest HP for 19%(+37) of ATK",
    img: "../ulala-media/shaman-skill-thumbnails/60px-Dance_with_me.png",
    recommended: false
  },
  {
    name: "Thunder Heart",
    rarity: "Normal",
    type: "Instant",
    description: "Gain the Thunder Force and inflict 14%(+26) ATK DMG on 3 enemy units upon the next 3 basic attacks. Heal the teammate with the lowest hp for 4%(+8) of ATK",
    img: "../ulala-media/shaman-skill-thumbnails/60px-Thunder_heart.png",
    recommended: "AFK"
  },
  {
    name: "Drums of Recovery",
    rarity: "Normal",
    type: "Cast",
    description: "Play the drums and heal the teammate with the lowest HP for 20%(+38) of ATK. The lower the teammates HP, the higher the healing",
    img: "../ulala-media/shaman-skill-thumbnails/60px-Drums_of_recovery.png",
    recommended: false
  },
  {
    name: "Drums of Rain",
    rarity: "Normal",
    type: "Cast",
    description: "Heal the 2 teammates with the lowest HP for 18.9%(+37) of ATK",
    img: "../ulala-media/shaman-skill-thumbnails/60px-Drums_of_rain.png",
    recommended: false
  },
  {
    name: "Ancestral Gift",
    rarity: "Normal",
    type: "Cast",
    description: "Pray for the Ancestor's Strength to heal the party for 10%(+20) of ATK and gain 1 Ancestral Mark",
    img: "../ulala-media/shaman-skill-thumbnails/60px-Ancestral_gift.png",
    recommended: "AOE"
  },
  {
    name: "Chain Heal",
    rarity: "Normal",
    type: "Cast",
    description: "Release the Ancestral Mark to heal the party for 13%(+25) of ATK. Increase healing by 25% for each Ancestral Mark you own",
    img: "../ulala-media/shaman-skill-thumbnails/60px-Chain_heal.png",
    recommended: "AOE"
  },
  {
    name: "Blessing of Spirits",
    rarity: "Normal",
    type: "Instant",
    description: "Pray for the Ancestor's Strength to heal the party for 11%(+21) of ATK and obtain 1 Ancestral Mark. For those who already own the Ancestral Mark, healing increases by 10%",
    img: "../ulala-media/shaman-skill-thumbnails/60px-Blessing_of_spirits.png",
    recommended: "AOE"
  },
  {
    name: "Font of Purge",
    rarity: "Normal",
    type: "Cast",
    description: "Remove 1 debuff from all party members and heal 15%(+29) of ATK. Increase the HP recovered by 10% for each debuff removed",
    img: "../ulala-media/shaman-skill-thumbnails/60px-Font_of_purge.png",
    recommended: "AOE, AFK"
  },
  {
    name: "Recovery Totem",
    rarity: "Normal",
    type: "Instant",
    description: "Summon 1 Recovery Totem to heal the entire party for 9.5%(+18) of ATK over 5 seconds",
    img: "../ulala-media/shaman-skill-thumbnails/60px-Recovery_totem.png",
    recommended: false
  },
  {
    name: "Life Totem",
    rarity: "Normal",
    type: "Instant",
    description: "Summon a Life Totem with HP of 23%(+45) of ATK. Links to the teammate with the lowest HP to transfer 80% of their DMG received to the totem for 10 seconds",
    img: "../ulala-media/shaman-skill-thumbnails/60px-Life_totem.png",
    recommended: "Hunt"
  },
  {
    name: "Surge",
    rarity: "Normal",
    type: "Instant",
    description: "Use the Life Force and heal the 2 teammates with the lowest HP for 13%(+25) of ATK. Shorten the next skills casting time by 40%",
    img: "../ulala-media/shaman-skill-thumbnails/60px-Surge.png",
    recommended: false
  },
  {
    name: "Ancestral Aegis",
    rarity: "Normal",
    type: "Instant",
    description: "Protect the teammate with the lowest HP. Within 10 seconds, heal 3%(+6) of ATK for each basic attack it receives. Can be triggered up to 15 times",
    img: "../ulala-media/shaman-skill-thumbnails/60px-Ancestral_aegis.png",
    recommended: "Hunt"
  },
  {
    name: "Fury of the Ancestors",
    rarity: "Normal",
    type: "Instant",
    description: "Inflict 21%(+41) of ATK as DMG on all enemy units and lower the enemy's healing by 15%",
    img: "../ulala-media/shaman-skill-thumbnails/60px-Fury_of_the_ancestors.png",
    recommended: "AFK"
  },
  {
    name: "Charm Dance",
    rarity: "Normal",
    type: "Cast",
    description: "Inflict 8.8%(+17) ATK DMG on all enemy units and silence the targets for 1 second (The Silence effect has a 100% hit rate for enemy units at Lv10 or lower",
    img: "../ulala-media/shaman-skill-thumbnails/60px-Charm_dance.png",
    recommended: false
  }
];

export let warlockSkills = [
  {
    name: "Summon Violent Frog",
    rarity: "Normal",
    type: false,
    description: "Summon the Violent Frog for 20%(+53) of Warlock's ATK for 14 seconds",
    img: "../ulala-media/warlock-skill-thumbnails/60px-Summon_violent_frog.png",
    recommended: false
  },
  {
    name: "Incinerate",
    rarity: "Normal",
    type: false,
    description: "Inflict 50%(+132) ATK DMG on all the enemies over 5 seconds",
    img: "../ulala-media/warlock-skill-thumbnails/60px-Incinerate.png",
    recommended: "AFK, AOE"
  },
  {
    name: "Soul Rebirth",
    rarity: "Normal",
    type: "Guide",
    description: "Guide the Soul Force to inflict 43%(+114) ATK DMG on the enemy every 2 seconds, and heal 5%(+13) of ATK. Lasts for 8 seconds",
    img: "../ulala-media/warlock-skill-thumbnails/60px-Soul_rebirth.png",
    recommended: false
  },
  {
    name: "Multi-Ignition",
    rarity: "Normal",
    type: false,
    description: "Inflict 68%(+180) ATK DMG on 3 random enemy units",
    img: "../ulala-media/warlock-skill-thumbnails/60px-Multi-ignition.png",
    recommended: "AFK, AOE"
  },
  {
    name: "Painful Ignition",
    rarity: "Normal",
    type: "Cast",
    description: "Inflict 210%(+560) ATK DMG to the enemy",
    img: "../ulala-media/warlock-skill-thumbnails/60px-Painful_ignition.png",
    recommended: false
  },
  {
    name: "Soul Seal",
    rarity: "Normal",
    type: false,
    description: "Aplly bonus Soul Seal to the enemy. Each layer of Soul Seal causes 2.8%(+7) ATK DMG every 2 seconds for 24 seconds. 1 layer is added upon inflicting DMG each time, to a max of 10 layers. When the target dies, the seals will be passed on to nearby enemy units",
    img: "../ulala-media/warlock-skill-thumbnails/60px-Soul_seal.png",
    recommended: "Hunt"
  },
  {
    name: "Soul Wave",
    rarity: "Normal",
    type: "Cast",
    description: "Inflict 110%(+293) ATK DMG on the enemy and reset the effective duration of its Soul Seal",
    img: "../ulala-media/warlock-skill-thumbnails/60px-Soul_wave.png",
    recommended: "Hunt"
  },
  {
    name: "Chain Ignition",
    rarity: "Normal",
    type: "Cast",
    description: "Attack an anamy unit twict, each inflicting 91%(+242) ATK DMG. If the target's HP is below 30%, launch 1 bonus attack",
    img: "../ulala-media/warlock-skill-thumbnails/60px-Chain_ignition.png",
    recommended: false
  },
  {
    name: "Quack quack quack",
    rarity: "Normal",
    type: "Cast",
    description: "Imitate a frog's croak to amuse the enemy. Silence the target for 2 seconds and inflict a bonus 110%(+293) ATK DMG (The Silence effect has a 100% hit rate for enemy units at Lv10 or lower)",
    img: "../ulala-media/warlock-skill-thumbnails/60px-Quack_quack_quack.png",
    recommended: false
  },
  {
    name: "Frog Synergy",
    rarity: "Normal",
    type: "Cast",
    description: "Attack 3 enemy units. Inflict 51%(+137) ATK DMG and extend Elder Frog's effective duration by 6 seconds",
    img: "../ulala-media/warlock-skill-thumbnails/60px-Frog_synergy.png",
    recommended: "AFK, AOE"
  },
  {
    name: "Summon Elder Frog",
    rarity: "Normal",
    type: false,
    description: "Summon the Elder Frog with 13%(+35) of Warlock's ATK for 14 seconds. The Elder Frog can attack 3 enemy units at the same time",
    img: "../ulala-media/warlock-skill-thumbnails/60px-Summon_elder_frog.png",
    recommended: "AFK, AOE"
  },
  {
    name: "Drain",
    rarity: "Normal",
    type: false,
    description: "Inflict 108%(+288) ATK DMG on the enemy over 12 seconds and remove 1 buffs. Successful removal increases DMG by 10%",
    img: "../ulala-media/warlock-skill-thumbnails/60px-Drain.png",
    recommended: false
  },
  {
    name: "Summon Pharmacist Frog",
    rarity: "Normal",
    type: false,
    description: "Summon a Pharmacist Frog with 12%(+31) of Warlock's ATK for 26 secs. Pharmacists Frog's attacks heal warlock for 20% of its DMG. Up to 30% of the warlock's Max HP can be restored",
    img: "../ulala-media/warlock-skill-thumbnails/60px-Summon_pharmacist_frog.png",
    recommended: false
  },
  {
    name: "Soul Lash",
    rarity: "Normal",
    type: "Cast",
    description: "Deal 210%(+560) ATK DMG to enemy over 3 seconds. Skill ignores 20% of enemy's Armor",
    img: "../ulala-media/warlock-skill-thumbnails/60px-Soul_lash.png",
    recommended: "Hunt"
  },
  {
    name: "Dehydration",
    rarity: "Normal",
    type: false,
    description: "Inflict 184%(+490) ATK DMG on the enemy over 12 seconds",
    img: "../ulala-media/warlock-skill-thumbnails/60px-Dehydration.png",
    recommended: false
  },
  {
    name: "Polymorph: Frog",
    rarity: "Normal",
    type: "Cast",
    description: "Inflict 90%(+240) ATK DMG on an enemy unit and transform the target into a Big-Eyed Frog for 0.5 seconds. Successful interruption doubles the effective duration of the transformation (The Transformed effect has a 100% Hit rate for enemy units at Lv10 or lower)",
    img: "../ulala-media/warlock-skill-thumbnails/60px-Polymorph_frog.png",
    recommended: false
  },
  {
    name: "Soul Twins",
    rarity: "Normal",
    type: false,
    description: "Inflict 109%(+290) ATK DMG on the enemy. If the target has the Soul Seal, add 1 bonus Sub Soul Seal (deal the same amount of DMG with the Soul Twins over 6 seconds)",
    img: "../ulala-media/warlock-skill-thumbnails/60px-Soul_twins.png",
    recommended: "Hunt"
  },
  {
    name: "Life Tap",
    rarity: "Normal",
    type: false,
    description: "Sacrifice 30% of your HP to instantly restore 3 points of energy. 25%(+66) of the sacrificed HP will return to the warlock over 12 seconds",
    img: "../ulala-media/warlock-skill-thumbnails/60px-Life_tap.png",
    recommended: false
  },
  {
    name: "Conflagrate",
    rarity: "Normal",
    type: false,
    description: "Inflict 21%(+57) ATK DMG on all enemy units and apply bonus Burn Seal",
    img: "../ulala-media/warlock-skill-thumbnails/60px-Conflagrate.png",
    recommended: false
  },
  {
    name: "Dragonfire",
    rarity: "Normal",
    type: "Guide",
    description: "Attack all enemy units and inflict 91%(+242) ATK DMG over 5 seconds. For enemy targets with the Burn Seal, deal bonus 20% DMG. Durring the duration of the skill, the DMG received by Warlocks increases by 25%",
    img: "../ulala-media/warlock-skill-thumbnails/60px-Dragonfire.png",
    recommended: false
  },
  {
    name: "Ignite",
    rarity: "Normal",
    type: "Cast",
    description: "Burn the enemy. Inflict 200%(+533) ATK DMG over 10 seconds and lower its Healing by 16%",
    img: "../ulala-media/warlock-skill-thumbnails/60px-Ignite.png",
    recommended: false
  },
];

export let warriorSkills = [
  {
    name: "Resolution",
    rarity: "Normal",
    type: false,
    description: "Gain a shield of 29%(+25) Armor for 12 seconds",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Resolution.png",
    recommended: false
  },
  {
    name: "Swipe",
    rarity: "Normal",
    type: false,
    description: "Inflict 60%(+80) ATK DMG to enemy units ahead of you. Gain a shield of 9%(+7) Armor for each enemy target hit for 12 seconds",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Swipe.png",
    recommended: "AFK"
  },
  {
    name: "Bramble Shield",
    rarity: "Normal",
    type: false,
    description: "Gain a Thorn Shield of 18%(+15) Armor for 12 seconds. When the shield breaks, inflict 72%(+96) ATK DMG on the enemy unit in front of it",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Bramble_shield.png",
    recommended: "AOE, AFK"
  },
  {
    name: "Fearless Shield",
    rarity: "Normal",
    type: false,
    description: "Gain a shield of 21%(+17) Armor for 12 seconds, during which convert 40% of the first skill DMG received into a shield for 12 seconds",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Fearless_shield.png",
    recommended: false
  },
  {
    name: "Last Stand",
    rarity: "Normal",
    type: false,
    description: "Gain a shield of 41%(+35) Armor for 12 seconds, during which the DMG received is reduced by 10%",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Last_stand.png",
    recommended: "Hunt"
  },
  {
    name: "Hoo kham kham",
    rarity: "Normal",
    type: false,
    description: "Taunt all enemies to attack you and gain a shield of 13%(+11) of armor for 12 secodns (The Taunt effect has a 100% hit rate for enemy units at Lv10 or lower)",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Hoo_kham_kham.png",
    recommended: false
  },
  {
    name: "Protection Stance",
    rarity: "Normal",
    type: false,
    description: "Enter the Protection Stance to increase your Block by 9%(+90) for 10 seconds, during which Armor increases by 1% upon each successful block for up to 10% of Armor",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Protection_stance.png",
    recommended: "Hunt"
  },
  {
    name: "Shield of Protection",
    rarity: "Normal",
    type: false,
    description: "Obtain a shield with 23%(+20) Armor for 12 seconds. If in the Protection Stance, the shield effect increases by 50%",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Shield_of_protection.png",
    recommended: "Hunt"
  },
  {
    name: "Lion's Roar",
    rarity: "Normal",
    type: "Charge",
    description: "Roar to interrupt the enemy's skill casting and inflict 34%(+46) ATK DMG. Successful interruption increases your block rate by 8% for 12 seconds (The Interrupted effect has a 100% hit rate for enemy units at Lv10 or lower)",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Lions_roar.png",
    recommended: false
  },
  {
    name: "Safeguard",
    rarity: "Normal",
    type: false,
    description: "Gain a shield with 17%(+14) Armor and take 40% DMG received by the teammate with the lowest HP upon every attack for 12 seconds",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Safeguard.png",
    recommended: "AOE"
  },
  {
    name: "Giant's Return",
    rarity: "Normal",
    type: false,
    description: "Transform into a giant and gain Control Immunity for 18 seconds. Obtain a shield of 22%(+18) Armor for 12 seconds",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Giants_return.png",
    recommended: false
  },
  {
    name: "Hoo hah hah",
    rarity: "Normal",
    type: false,
    description: "Reduce ",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Hoo_hah_hah.png",
    recommended: "AOE"
  },
  {
    name: "Unbreakable Will",
    rarity: "Normal",
    type: false,
    description: "Gain a shield of 12%(+17) Armor for 12 seconds. The lower the HP, the higher the shield points",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Unbreakable_will.png",
    recommended: "Hunt"
  },
  {
    name: "Unwavering Will",
    rarity: "Normal",
    type: false,
    description: "Remove 1 random debuffs for yourself and gain a shield of 22%(+18) Armor for 12 seconds",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Unwavering_will.png",
    recommended: false
  },
  {
    name: "Powerful Knock Up",
    rarity: "Normal",
    type: "Charge",
    description: "Deal the enemy a hard punch to inflict 60%(+80) ATK DMG and knock the target into the air (This effect has  100% hit rate for the enemy units at Lv10 or lower)",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Powerful_knock_up.png",
    recommended: "AFK"
  },
  {
    name: "Call to Arms",
    rarity: "Normal",
    type: false,
    description: "Inspire your party and increase ATK by 15%(+20) for 6 seconds",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Call_to_arms.png",
    recommended: "AOE, AFK"
  },
  {
    name: "Stockpile",
    rarity: "Normal",
    type: "Charge",
    description: "Gain a shield of 23%(+19) Armor for 12 seconds, during which recover 1 point of energy if 20% of HP lost",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Stockpile.png",
    recommended: false
  },
  {
    name: "Final Blow",
    rarity: "Normal",
    type: false,
    description: "Inflict 120%(+160) ATK DMG on the enemy. If in the Overwhelming Assault state, DMG increases by 20%. If the target is killed within 3 seconds, gain a shield of 18%(+15) Armor for 12 seconds",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Final_blow.png",
    recommended: false
  },
  {
    name: "Overwhelming Assault",
    rarity: "Normal",
    type: false,
    description: "Enter the Overwhelming Assault state and lower Armor by 30% to increase ATK by 30%. Inflict 64%(+86) ATK DMG on the enemy with the lowest HP, and lower its healing by 16%. In the Overwhelming Assault state, the skill's DMG increases by 50%",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Overwhelming_assault.png",
    recommended: false
  },
  {
    name: "Come Here",
    rarity: "Normal",
    type: false,
    description: "Inflict 38%(+51) ATK DMG to the enemy. If in the Overwhelming Assault state, the attack will aim at the enemy unit with the lowest HP, and the target will be pulled over and stunned for 0.6 seconds (The Pulled effect has a 100% hit rate for enemy units at Lv10 or lower)",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Come_here.png",
    recommended: false
  },
];