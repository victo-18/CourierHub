const { User, State, Country, City, sequelize } = require("./Models");
const fs = require('fs');

async function insertDummy() {
    // await sequelize.sync({ force: true });

    // const countries = JSON.parse(fs.readFileSync('./db/countries.json'));
    // const states = JSON.parse(fs.readFileSync('./db/states.json'));
    // const cities = JSON.parse(fs.readFileSync('./db/cities.json'));
    // const users = JSON.parse(fs.readFileSync('./db/users.json'));

    // await Country.bulkCreate(countries);
    // await State.bulkCreate(states);
    // await City.bulkCreate(cities);
    // await User.bulkCreate(users); // .KADI9{g#g9TvF},Nng6
}

module.exports = { insertDummy }