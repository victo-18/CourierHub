const { User, State, Country, City, sequelize, Customer, Request, Travel, Transport, ListState } = require("./Models");
const fs = require('fs');

async function insertDummy() {
    // await sequelize.sync({ force: true });

    // const countries = JSON.parse(fs.readFileSync('./db/json/countries.json'));
    // const states = JSON.parse(fs.readFileSync('./db/json/states.json'));
    // const cities = JSON.parse(fs.readFileSync('./db/json/cities.json'));
    // const users = JSON.parse(fs.readFileSync('./db/json/users.json'));
    // const transports = JSON.parse(fs.readFileSync('./db/json/transport.json'));
    // const customers = JSON.parse(fs.readFileSync('./db/json/customers.json'));
    // const requests = JSON.parse(fs.readFileSync('./db/json/requests.json'));
    // const travels = JSON.parse(fs.readFileSync('./db/json/travels.json'));
    // const listState = JSON.parse(fs.readFileSync('./db/json/listState.json'));

    // await Country.bulkCreate(countries, { ignoreDuplicates: true });
    // await State.bulkCreate(states, { ignoreDuplicates: true });
    // await City.bulkCreate(cities, { ignoreDuplicates: true });
    // await User.bulkCreate(users, { ignoreDuplicates: true }); // .KADI9{g#g9TvF},Nng6
    // await Transport.bulkCreate(transports, { ignoreDuplicates: true });
    // await Customer.bulkCreate(customers, { ignoreDuplicates: true });
    // await Request.bulkCreate(requests, { ignoreDuplicates: true });
    // await Travel.bulkCreate(travels, { ignoreDuplicates: true });
    // await ListState.bulkCreate(listState, { ignoreDuplicates: true });
}

module.exports = { insertDummy }