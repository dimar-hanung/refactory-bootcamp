"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Products", [
      {
        name: "Blonde Ambition",
        stock: 37,
        photo_url: "http://dummyimage.com/106x224.png/dddddd/000000",
        photo_id: 16,
        price: 42767,
        user_id: 2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Oh, God!",
        stock: 19,
        photo_url: "http://dummyimage.com/168x159.jpg/ff4444/ffffff",
        photo_id: 77,
        price: 27316,
        user_id: 2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "A Night at the Movies: The Suspenseful World of Thrillers",
        stock: 89,
        photo_url: "http://dummyimage.com/197x229.png/ff4444/ffffff",
        photo_id: 86,
        price: 10224,
        user_id: 2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:
          "Sexual Life of the Belgians, The (Vie sexuelle des Belges 1950-1978, La)",
        stock: 9,
        photo_url: "http://dummyimage.com/204x181.bmp/dddddd/000000",
        photo_id: 12,
        price: 69794,
        user_id: 1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Last Supper, The",
        stock: 73,
        photo_url: "http://dummyimage.com/235x102.bmp/cc0000/ffffff",
        photo_id: 30,
        price: 96064,
        user_id: 2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Gangster Squad",
        stock: 26,
        photo_url: "http://dummyimage.com/164x178.bmp/5fa2dd/ffffff",
        photo_id: 21,
        price: 97606,
        user_id: 1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "His Brother (Son frère)",
        stock: 43,
        photo_url: "http://dummyimage.com/114x235.png/5fa2dd/ffffff",
        photo_id: 23,
        price: 84823,
        user_id: 2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Company",
        stock: 15,
        photo_url: "http://dummyimage.com/122x169.jpg/cc0000/ffffff",
        photo_id: 29,
        price: 28484,
        user_id: 1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Asterix vs. Caesar (Astérix et la surprise de César)",
        stock: 2,
        photo_url: "http://dummyimage.com/215x124.png/5fa2dd/ffffff",
        photo_id: 40,
        price: 24382,
        user_id: 1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Be Cool",
        stock: 87,
        photo_url: "http://dummyimage.com/133x126.bmp/ff4444/ffffff",
        photo_id: 70,
        price: 16400,
        user_id: 1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Zoom",
        stock: 60,
        photo_url: "http://dummyimage.com/100x150.jpg/dddddd/000000",
        photo_id: 94,
        price: 11046,
        user_id: 2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Shakespeare in Love",
        stock: 25,
        photo_url: "http://dummyimage.com/175x250.png/dddddd/000000",
        photo_id: 8,
        price: 89499,
        user_id: 1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:
          "Cartoonist: Jeff Smith, BONE and the Changing Face of Comics, The",
        stock: 96,
        photo_url: "http://dummyimage.com/150x244.png/ff4444/ffffff",
        photo_id: 5,
        price: 41050,
        user_id: 1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Nothing to Lose (a.k.a. Ten Benny)",
        stock: 20,
        photo_url: "http://dummyimage.com/232x136.bmp/5fa2dd/ffffff",
        photo_id: 39,
        price: 66165,
        user_id: 2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Satanic Rites of Dracula, The",
        stock: 87,
        photo_url: "http://dummyimage.com/104x103.jpg/ff4444/ffffff",
        photo_id: 100,
        price: 39101,
        user_id: 1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "May",
        stock: 78,
        photo_url: "http://dummyimage.com/104x140.bmp/ff4444/ffffff",
        photo_id: 65,
        price: 16309,
        user_id: 2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Kronos",
        stock: 96,
        photo_url: "http://dummyimage.com/143x204.jpg/dddddd/000000",
        photo_id: 44,
        price: 19380,
        user_id: 2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Linda Linda Linda",
        stock: 60,
        photo_url: "http://dummyimage.com/180x115.bmp/ff4444/ffffff",
        photo_id: 40,
        price: 24489,
        user_id: 1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Angel in My Pocket",
        stock: 62,
        photo_url: "http://dummyimage.com/131x226.png/dddddd/000000",
        photo_id: 86,
        price: 40171,
        user_id: 1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Limuzins Janu nakts krasa",
        stock: 75,
        photo_url: "http://dummyimage.com/129x211.bmp/dddddd/000000",
        photo_id: 10,
        price: 92729,
        user_id: 1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Mummy, The",
        stock: 87,
        photo_url: "http://dummyimage.com/249x125.bmp/cc0000/ffffff",
        photo_id: 73,
        price: 14243,
        user_id: 1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Identification of a Woman (Identificazione di una donna)",
        stock: 49,
        photo_url: "http://dummyimage.com/104x194.jpg/5fa2dd/ffffff",
        photo_id: 52,
        price: 35054,
        user_id: 1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "B. Monkey",
        stock: 80,
        photo_url: "http://dummyimage.com/132x112.png/ff4444/ffffff",
        photo_id: 68,
        price: 21409,
        user_id: 2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Big Circus, The",
        stock: 84,
        photo_url: "http://dummyimage.com/180x153.jpg/ff4444/ffffff",
        photo_id: 87,
        price: 78622,
        user_id: 1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Sense & Sensibility",
        stock: 98,
        photo_url: "http://dummyimage.com/158x189.jpg/cc0000/ffffff",
        photo_id: 47,
        price: 65509,
        user_id: 1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Maid in Sweden",
        stock: 89,
        photo_url: "http://dummyimage.com/231x236.jpg/cc0000/ffffff",
        photo_id: 50,
        price: 71596,
        user_id: 2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Duplicate",
        stock: 82,
        photo_url: "http://dummyimage.com/220x248.bmp/5fa2dd/ffffff",
        photo_id: 25,
        price: 11030,
        user_id: 1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Nicholas on Holiday",
        stock: 28,
        photo_url: "http://dummyimage.com/126x216.jpg/cc0000/ffffff",
        photo_id: 49,
        price: 53439,
        user_id: 2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Iron Ladies, The (Satree lek)",
        stock: 29,
        photo_url: "http://dummyimage.com/204x156.jpg/cc0000/ffffff",
        photo_id: 36,
        price: 96496,
        user_id: 2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Same Same But Different",
        stock: 84,
        photo_url: "http://dummyimage.com/106x142.png/dddddd/000000",
        photo_id: 58,
        price: 18812,
        user_id: 2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Breakout",
        stock: 29,
        photo_url: "http://dummyimage.com/205x235.png/5fa2dd/ffffff",
        photo_id: 77,
        price: 58839,
        user_id: 2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Cry 'Havoc'",
        stock: 91,
        photo_url: "http://dummyimage.com/130x166.bmp/dddddd/000000",
        photo_id: 18,
        price: 38506,
        user_id: 2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Letter to Momo, A (Momo e no tegami)",
        stock: 60,
        photo_url: "http://dummyimage.com/150x182.bmp/ff4444/ffffff",
        photo_id: 95,
        price: 65622,
        user_id: 2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Eloise at Christmastime",
        stock: 97,
        photo_url: "http://dummyimage.com/103x246.png/dddddd/000000",
        photo_id: 98,
        price: 18419,
        user_id: 2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Volunteers",
        stock: 53,
        photo_url: "http://dummyimage.com/102x144.jpg/ff4444/ffffff",
        photo_id: 48,
        price: 13179,
        user_id: 2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Laugh, Clown, Laugh",
        stock: 24,
        photo_url: "http://dummyimage.com/194x193.jpg/cc0000/ffffff",
        photo_id: 18,
        price: 37605,
        user_id: 1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Friends with Kids",
        stock: 35,
        photo_url: "http://dummyimage.com/207x202.jpg/dddddd/000000",
        photo_id: 71,
        price: 14990,
        user_id: 2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Legacy, The",
        stock: 56,
        photo_url: "http://dummyimage.com/191x211.jpg/cc0000/ffffff",
        photo_id: 27,
        price: 51322,
        user_id: 2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Frozen",
        stock: 23,
        photo_url: "http://dummyimage.com/120x142.jpg/ff4444/ffffff",
        photo_id: 41,
        price: 84134,
        user_id: 1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Dark Alibi",
        stock: 64,
        photo_url: "http://dummyimage.com/106x250.jpg/dddddd/000000",
        photo_id: 15,
        price: 55783,
        user_id: 1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Fados",
        stock: 75,
        photo_url: "http://dummyimage.com/187x183.bmp/5fa2dd/ffffff",
        photo_id: 36,
        price: 52172,
        user_id: 2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Mortified Nation",
        stock: 55,
        photo_url: "http://dummyimage.com/141x200.jpg/dddddd/000000",
        photo_id: 92,
        price: 37845,
        user_id: 2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "American Violet",
        stock: 75,
        photo_url: "http://dummyimage.com/199x207.bmp/cc0000/ffffff",
        photo_id: 70,
        price: 96760,
        user_id: 1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "My Future Boyfriend",
        stock: 84,
        photo_url: "http://dummyimage.com/105x233.jpg/ff4444/ffffff",
        photo_id: 37,
        price: 48183,
        user_id: 1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Kitty Foyle",
        stock: 94,
        photo_url: "http://dummyimage.com/170x221.png/5fa2dd/ffffff",
        photo_id: 19,
        price: 24872,
        user_id: 2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Tom Sawyer",
        stock: 64,
        photo_url: "http://dummyimage.com/125x116.bmp/ff4444/ffffff",
        photo_id: 15,
        price: 81151,
        user_id: 1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Swinger, The",
        stock: 8,
        photo_url: "http://dummyimage.com/158x176.png/5fa2dd/ffffff",
        photo_id: 19,
        price: 66874,
        user_id: 1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Butterfly, The (Papillon, Le)",
        stock: 52,
        photo_url: "http://dummyimage.com/133x139.png/5fa2dd/ffffff",
        photo_id: 6,
        price: 99963,
        user_id: 2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Pudana Last of the Line (Sukunsa viimeinen)",
        stock: 24,
        photo_url: "http://dummyimage.com/226x149.png/dddddd/000000",
        photo_id: 70,
        price: 16582,
        user_id: 2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "The Fighting 69th",
        stock: 63,
        photo_url: "http://dummyimage.com/138x218.bmp/cc0000/ffffff",
        photo_id: 27,
        price: 92901,
        user_id: 2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Products", null, {});
  },
};
