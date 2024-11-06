/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('questions').del();

  // Inserts seed entries
  await knex('questions').insert([
      {
          question: "What is the total number of tiles in a standard Japanese Mahjong game?",
          choices: ["108", "136", "144", "152"],
          answer: "136"
      },
      {
          question: "In Japanese Mahjong, what is the name of the winning hand formed with only honor tiles?",
          choices: ["Kokushi Musou", "Chiitoitsu", "Toi-Toi", "Tanyao"],
          answer: "Toi-Toi"
      },
      {
          question: "How many identical tiles are required to make a 'Pon'?",
          choices: ["2", "3", "4", "5"],
          answer: "3"
      },
      {
          question: "Which of the following is not an honor tile?",
          choices: ["East", "Red Dragon", "Bamboo", "White Dragon"],
          answer: "Bamboo"
      },
      {
          question: "True or False: A Riichi declaration can be when you have an open hand.",
          choices: ["True", "False"],
          answer: "False"
      },
      {
          question: "What is the minimum number of tiles required to declare a winning hand in Japanese Mahjong?",
          choices: ["12", "13", "14", "15"],
          answer: "14"
      },
      {
          question: "Which hand allows a player to win with just one tile of each honor and terminal?",
          choices: ["Kokushi Musou", "San Ankou", "Toi-Toi", "Riichi"],
          answer: "Kokushi Musou"
      },
      {
          question: "What is the Japanese term for the Dora indicator tile?",
          choices: ["Chii", "Pon", "Kan", "Dora"],
          answer: "Dora"
      },
      {
          question: "How many tiles form a Kan in Japanese Mahjong?",
          choices: ["3", "4", "5", "6"],
          answer: "4"
      },
      {
          question: "True or False: A Kan adds a new Dora indicator.",
          choices: ["True", "False"],
          answer: "True"
      },
      {
          question: "Which of these hands is a valid Yaku in Japanese Mahjong?",
          choices: ["San Ankou", "Toi-Toi", "Both", "Neither"],
          answer: "Both"
      },
      {
          question: "What does 'Riichi' mean in Japanese Mahjong?",
          choices: ["Reach", "Double Reach", "Winning hand", "Closed hand"],
          answer: "Reach"
      },
      {
          question: "What is the term for drawing a tile that completes your hand on your last draw?",
          choices: ["Rinshan Kaihou", "Haitei Raoyue", "Houtei Raoyui", "Ippatsu"],
          answer: "Haitei Raoyue"
      },
      {
          question: "Which tile cannot be discarded when going for a 'Tanyao' hand?",
          choices: ["1 Pin", "2 Sou", "5 Man", "6 Sou"],
          answer: "1 Pin"
      },
      {
          question: "True or False: Dora tiles add extra points even without a Yaku.",
          choices: ["True", "False"],
          answer: "False"
      },
      {
          question: "What does 'Chii' refer to in Japanese Mahjong?",
          choices: ["A sequence", "A pair", "Three identical tiles", "A quad"],
          answer: "A sequence"
      },
      {
          question: "Which Yaku is achieved by having three identical sets in different suits?",
          choices: ["Sanshoku Doujun", "San Ankou", "Shousangen", "Toi-Toi"],
          answer: "Sanshoku Doujun"
      },
      {
          question: "What does 'Pinfu' mean in Japanese Mahjong?",
          choices: ["Peaceful hand", "Dragon hand", "Outside hand", "Closed hand"],
          answer: "Peaceful hand"
      },
      {
          question: "True or False: A player must win with an open hand to achieve Tanyao.",
          choices: ["True", "False"],
          answer: "False"
      },
      {
          question: "What is the value of a Yakuman hand in terms of Han?",
          choices: ["8", "10", "12", "13"],
          answer: "13"
      },
      {
          question: "What is the term for a pair in Japanese Mahjong?",
          choices: ["Kanchan", "Toitsu", "Shanten", "Ippatsu"],
          answer: "Toitsu"
      },
      {
          question: "Which term refers to a concealed triplet?",
          choices: ["San Ankou", "Toi-Toi", "Pon", "Chii"],
          answer: "San Ankou"
      },
      {
          question: "Which tile set is needed to complete a flush hand?",
          choices: ["All honors", "One suit only", "Two suits only", "Mixed honors and suits"],
          answer: "One suit only"
      },
      {
          question: "True or False: In Japanese Mahjong, you can win with a hand of only honor tiles.",
          choices: ["True", "False"],
          answer: "True"
      },
      {
          question: "What is the value of a 'Sanbaiman' hand in terms of points?",
          choices: ["6,000", "8,000", "12,000", "18,000"],
          answer: "12,000"
      },
      {
          question: "Which Yaku is awarded for a hand with a 1-9 sequence in one suit?",
          choices: ["Chanta", "Honroutou", "Ittsuu", "Ryanpeikou"],
          answer: "Ittsuu"
      },
      {
          question: "Which of the following is a Yaku requiring a closed hand?",
          choices: ["Riichi", "Pinfu", "Both", "Neither"],
          answer: "Both"
      },
      {
          question: "What does 'Ippatsu' signify?",
          choices: ["Winning on first draw", "Winning within one turn", "Winning with extra points", "Winning with a concealed hand"],
          answer: "Winning within one turn"
      },
      {
          question: "How many Han is required for a Mangan hand?",
          choices: ["1", "2", "3", "5"],
          answer: "5"
      },
      {
          question: "True or False: A Ron win means you completed your hand from the wall.",
          choices: ["True", "False"],
          answer: "False"
      }
  ]);
};