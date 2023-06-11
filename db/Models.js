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
    numericCode: {
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
    currencyName: {
        type: DataTypes.STRING(255),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    },
    currencySymbol: {
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
    countryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Country,
            key: 'id'
        }
    },
    countryCode: {
        type: DataTypes.STRING(2),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    },
    fipsCode: {
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
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: null
    },
    updatedAt: {
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
    stateId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: State,
            key: 'id',
        },
    },
    stateCode: {
        type: DataTypes.STRING(255),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false,
    },
    countryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Country,
            key: 'id',
        },
    },
    countryCode: {
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
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: '2014-01-01 06:31:01',
    },
    updatedAt: {
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
        primaryKey: true // Unique
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
    role: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            isIn: [['ADMIN', 'CLIENT', 'COURIER']],
        },
    },
    cityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: City,
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
            model: User,
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
            model: User,
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
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Customer,
            key: 'id'
        }
    },
    deliveryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: DeliveryCourier,
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
    nameTransport: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    capacity: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    type: {
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
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Customer,
            key: 'id',
        },
    },
    dateRequest: {
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
    numberPackages: {
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
    requestCode: {
        type: DataTypes.STRING(255),
        references: {
            model: Request,
            key: 'code',
        },
    },
    transportId: {
        type: DataTypes.INTEGER,
        references: {
            model: Transport,
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
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Customer,
            key: 'id',
        },
    },
    name: {
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
    requestCode: {
        type: DataTypes.STRING(255),
        allowNull: false,
        references: {
            model: Request,
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
        defaultValue: "SOLICITADO",
        validate: {
            isIn: [['SOLICITADO', 'EN_CAMINO', 'ENTREGADO']],
        }
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
}, {
    sequelize,
    modelName: 'ListState',
    tableName: 'list_states'
});

Request.hasMany(ListState, { foreignKey: "requestCode" });
Request.belongsTo(Customer, { foreignKey: "customerId" })
Customer.belongsTo(User, { foreignKey: "phone" });
DeliveryCourier.belongsTo(User, { foreignKey: "phone" });

module.exports = {
    sequelize,
    Country,
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
    ListState
};
