const { User } = require('../sequelize/models')

const firstName = await User.findOne({
  where: {
    id: 2
  }
})

export default {
    greetings: {
      intro: [
        'firstName',
        'lastaname'
      ],
      explanation: [
        "I'm a bot who has been trained with some intents, so I have learnt from examples.",
      ],
      tryMe: ["Coba tanyakan cuaca 😙"],
    },
    farewell: [
        'Sampai jumpa kembali'
    ],
    thanks: [
        'Terima kasih kembali.'
    ],
    getDirections: [
        'Ini lokasi nya'
    ],
    getDirectionsSuggestion: [
        'Saya sarankan untuk menaiki stasiun terdekat'
    ],
    jokes: [
        'Dua tiga tutup botol'
    ],
    jokesError: [
      "I'm sorry. I could not find anything in those servers. I'm a mess. 😢",
    ],
    weather: [
        'Berikut merupakan pra kiraan cuaca'
    ],
    notFound: [
        '404 tidak ditemukan'
    ],
}
