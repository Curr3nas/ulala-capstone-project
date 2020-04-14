let warriorSkills = [
  {
    name: "Resolution",
    rarity: "Normal",
    type: false,
    description: "Gain a shield of 29%(+25) Armor for 12 seconds",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Resolution.png"
  },
  {
    name: "Swipe",
    rarity: "Normal",
    type: false,
    description: "Inflict 60%(+80) ATK DMG to enemy units ahead of you. Gain a shield of 9%(+7) Armor for each enemy target hit for 12 seconds",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Swipe.png"
  },
  {
    name: "Bramble Shield",
    rarity: "Normal",
    type: false,
    description: "Gain a Thorn Shield of 18%(+15) Armor for 12 seconds. When the shield breaks, inflict 72%(+96) ATK DMG on the enemy unit in front of it",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Bramble_shield.ong"
  },
  {
    name: "Fearless Shield",
    rarity: "Normal",
    type: false,
    description: "Gain a shield of 21%(+17) Armor for 12 seconds, during which convert 40% of the first skill DMG received into a shield for 12 seconds",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Fearless_shield.png"
  },
  {
    name: "Last Stand",
    rarity: "Normal",
    type: false,
    description: "Gain a shield of 41%(+35) Armor for 12 seconds, during which the DMG received is reduced by 10%",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Last_stand.png"
  },
  {
    name: "Hoo kham kham",
    rarity: "Normal",
    type: false,
    description: "Taunt all enemies to attack you and gain a shield of 13%(+11) of armor for 12 secodns (The Taunt effect has a 100% hit rate for enemy units at Lv10 or lower)",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Hoo_kham_kham.png"
  },
  {
    name: "Protection Stance",
    rarity: "Normal",
    type: false,
    description: "Enter the Protection Stance to increase your Block by 9%(+90) for 10 seconds, during which Armor increases by 1% upon each successful block for up to 10% of Armor",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Protection_stance.png"
  },
  {
    name: "Shield of Protection",
    rarity: "Normal",
    type: false,
    description: "Obtain a shield with 23%(+20) Armor for 12 seconds. If in the Protection Stance, the shield effect increases by 50%",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Shield_of_protection.png"
  },
  {
    name: "Lion's Roar",
    rarity: "Normal",
    type: "Charge",
    description: "Roar to interrupt the enemy's skill casting and inflict 34%(+46) ATK DMG. Successful interruption increases your block rate by 8% for 12 seconds (The Interrupted effect has a 100% hit rate for enemy units at Lv10 or lower)",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Lions_roar.png"
  },
  {
    name: "Safeguard",
    rarity: "Normal",
    type: false,
    description: "Gain a shield with 17%(+14) Armor and take 40% DMG received by the teammate with the lowest HP upon every attack for 12 seconds",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Safeguard"
  },
  {
    name: "Giant's Return",
    rarity: "Normal",
    type: false,
    description: "Transform into a giant and gain Control Immunity for 18 seconds. Obtain a shield of 22%(+18) Armor for 12 seconds",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Giants_return.png"
  },
  {
    name: "Hoo hah hah",
    rarity: "Normal",
    type: false,
    description: "Reduce ",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Hoo_hah_hah.png"
  },
  {
    name: "Unbreakable Will",
    rarity: "Normal",
    type: false,
    description: "Gain a shield of 12%(+17) Armor for 12 seconds. The lower the HP, the higher the shield points",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Unbreakable_will.png"
  },
  {
    name: "Unwavering Will",
    rarity: "Normal",
    type: false,
    description: "Remove 1 random debuffs for yourself and gain a shield of 22%(+18) Armor for 12 seconds",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Unwavering_will.png"
  },
  {
    name: "Powerful Knock Up",
    rarity: "Normal",
    type: "Charge",
    description: "Deal the enemy a hard punch to inflict 60%(+80) ATK DMG and knock the target into the air (This effect has  100% hit rate for the enemy units at Lv10 or lower)",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Powerful_knock_up.png"
  },
  {
    name: "Call to Arms",
    rarity: "Normal",
    type: false,
    description: "Inspire your party and increase ATK by 15%(+20) for 6 seconds",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Call_to_arms.png"
  },
  {
    name: "Stockpile",
    rarity: "Normal",
    type: "Charge",
    description: "Gain a shield of 23%(+19) Armor for 12 seconds, during which recover 1 point of energy if 20% of HP lost",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Stockpile.png"
  },
  {
    name: "Final Blow",
    rarity: "Normal",
    type: false,
    description: "Inflict 120%(+160) ATK DMG on the enemy. If in the Overwhelming Assault state, DMG increases by 20%. If the target is killed within 3 seconds, gain a shield of 18%(+15) Armor for 12 seconds",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Final_blow.png"
  },
  {
    name: "Overwhelming Assault",
    rarity: "Normal",
    type: false,
    description: "Enter the Overwhelming Assault state and lower Armor by 30% to increase ATK by 30%. Inflict 64%(+86) ATK DMG on the enemy with the lowest HP, and lower its healing by 16%. In the Overwhelming Assault state, the skill's DMG increases by 50%",
    img: "../ulala-media/warrior-skill-thumbnails/60px-Overwhelming_assault.png"
  },
  {
    name: "Come Here",
    rarity: "Normal",
    type: false,
    description: "Inflice 38%(+51) ATK DMG to the enemy. If in the Overwhelming Assault state, the attack will aim at the enemy unit with the lowest HP, and the target will be pulled over and stunned for 0.6 seconds (The Pulled effect has a 100% hit rate for enemy units at Lv10 or lower)",
    img: "../ulala-media/warrior-skill-thumbnails/60px-"
  },
];