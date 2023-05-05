require('dotenv').config();
const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL, { dialect: 'postgres', protocol: 'postgres', dialectOptions: { ssl: { rejectUnauthorized: false } } });

class Country extends Model { }

Country.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    },
    iso3: {
        type: DataTypes.CHAR(3),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    },
    numeric_code: {
        type: DataTypes.CHAR(3),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    },
    iso2: {
        type: DataTypes.CHAR(2),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    },
    phonecode: {
        type: DataTypes.STRING(255),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    },
    capital: {
        type: DataTypes.STRING(255),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    },
    currency: {
        type: DataTypes.STRING(255),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    },
    currency_name: {
        type: DataTypes.STRING(255),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    },
    currency_symbol: {
        type: DataTypes.STRING(255),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    },
    tld: {
        type: DataTypes.STRING(255),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    },
    native: {
        type: DataTypes.STRING(255),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    },
    region: {
        type: DataTypes.STRING(255),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    },
    subregion: {
        type: DataTypes.STRING(255),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    },
    timezones: {
        type: DataTypes.TEXT,
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    },
    translations: {
        type: DataTypes.TEXT,
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    },
    latitude: {
        type: DataTypes.DECIMAL(10, 8)
    },
    longitude: {
        type: DataTypes.DECIMAL(11, 8)
    },
    emoji: {
        type: DataTypes.STRING(191),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    },
    emojiU: {
        type: DataTypes.STRING(191),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    flag: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    wikiDataId: {
        type: DataTypes.STRING(255),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: true,
        comment: 'Rapid API GeoDB Cities'
    }
}, {
    sequelize,
    modelName: 'Country',
    tableName: 'countries',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: true
});

class State extends Model { };

State.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(255),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    },
    country_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'countries',
            key: 'id'
        }
    },
    country_code: {
        type: DataTypes.STRING(2),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    },
    fips_code: {
        type: DataTypes.STRING(255),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        defaultValue: null
    },
    iso2: {
        type: DataTypes.STRING(255),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        defaultValue: null
    },
    type: {
        type: DataTypes.STRING(191),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        defaultValue: null
    },
    latitude: {
        type: DataTypes.DECIMAL(10, 8),
        defaultValue: null
    },
    longitude: {
        type: DataTypes.DECIMAL(11, 8),
        defaultValue: null
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: null
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    flag: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    wikiDataId: {
        type: DataTypes.STRING(255),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        defaultValue: null,
        comment: 'Rapid API GeoDB Cities'
    }
}, {
    sequelize,
    modelName: 'State',
    tableName: 'states',
    timestamps: false
});


class City extends Model { };

City.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(255),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false,
    },
    state_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'states',
            key: 'id',
        },
    },
    state_code: {
        type: DataTypes.STRING(255),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false,
    },
    country_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'countries',
            key: 'id',
        },
    },
    country_code: {
        type: DataTypes.CHAR(2),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false,
    },
    latitude: {
        type: DataTypes.DECIMAL(10, 8),
        allowNull: false,
    },
    longitude: {
        type: DataTypes.DECIMAL(11, 8),
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: '2014-01-01 06:31:01',
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    flag: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    wikiDataId: {
        type: DataTypes.STRING(255),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        defaultValue: null,
        comment: 'Rapid API GeoDB Cities',
    },
}, {
    sequelize,
    modelName: 'City',
    tableName: 'cities',
    timestamps: false,
});


class User extends Model { };

User.init({
    phone: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true
    },
    firstname: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    city_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'cities',
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
});


class Customer extends Model { };

Customer.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    phone: {
        type: DataTypes.STRING(255),
        allowNull: false,
        references: {
            model: 'users',
            key: 'phone'
        }
    }
}, {
    sequelize,
    modelName: 'Customer',
    tableName: 'customers'
});


class DeliveryCourier extends Model { };

DeliveryCourier.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    phone: {
        type: DataTypes.STRING(255),
        allowNull: false,
        references: {
            model: 'users',
            key: 'phone'
        }
    }
}, {
    sequelize,
    modelName: 'DeliveryCourier',
    tableName: 'delivery_couriers'
});


class Delegate extends Model { };

Delegate.init({
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'customers',
            key: 'id'
        }
    },
    delivery_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'delivery_couriers',
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'Delegate',
    tableName: 'delegates'
});


class Transport extends Model { };

Transport.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name_transport: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    capacity: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    TYPE: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            isIn: [['AIR', 'SEA', 'LAND']],
        },
    },
}, {
    sequelize,
    modelName: 'Transport',
    tableName: 'transports'
});


class Request extends Model { };

Request.init({
    code: {
        type: DataTypes.STRING(255),
        primaryKey: true,
    },
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'customers',
            key: 'id',
        },
    },
    date_request: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
    },
    origin: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    destination: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    number_packages: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Request',
    tableName: 'requests'
});


class Travel extends Model { };

Travel.init({
    request_code: {
        type: DataTypes.STRING(255),
        references: {
            model: 'requests',
            key: 'code',
        },
    },
    transport_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'transports',
            key: 'id',
        },
    },
}, {
    sequelize,
    modelName: 'Travel',
    tableName: 'travels',
    primaryKey: true,
});


class BranchOffice extends Model { };

BranchOffice.init({
    nit: {
        type: DataTypes.STRING(255),
        primaryKey: true,
    },
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'customers',
            key: 'id',
        },
    },
    NAME: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'BranchOffice',
    tableName: 'branch_offices'
});


class ListState extends Model { };

ListState.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    code: {
        type: DataTypes.STRING(255),
        allowNull: false,
        references: {
            model: 'requests',
            key: 'code',
        },
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    phase: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'ListState',
    tableName: 'list_states'
});

module.exports = {
    sequelize,
    State,
    City,
    User,
    Customer,
    DeliveryCourier,
    Delegate,
    Transport,
    Request,
    Travel,
    BranchOffice,
};
