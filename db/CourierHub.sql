-- Members
-- ALOMIA ANGULO VICTOR ALFONSO 1943758-2711
-- CAMINO MUÑOZ JUAN SEBASTIAN 1942104-2711
-- MORENO DELGADO ANDRES FELIPE 1844728-2711
-- RUIZ BERMUDEZ JOHAN ANDRES 1942434-2711

-- Dictionaries
CREATE TABLE
    departments (id SERIAL PRIMARY KEY, department_name VARCHAR(50) NOT NULL);

CREATE TABLE
    municipalities (
        id SERIAL PRIMARY KEY,
        municipality_name VARCHAR(50) NOT NULL,
        department_id INT NOT NULL,
        FOREIGN KEY (department_id) REFERENCES departments (id)
    );

CREATE TABLE
    cities (
        id SERIAL PRIMARY KEY,
        city_name VARCHAR(50) NOT NULL,
        municipality_id INT NOT NULL,
        FOREIGN KEY (municipality_id) REFERENCES municipalities (id)
    );

-- Tables
CREATE TABLE
    users (
        phone VARCHAR(255) PRIMARY KEY,
        firstname VARCHAR(255) NOT NULL,
        lastname VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        PASSWORD VARCHAR(255) NOT NULL,
        city_id INT NOT NULL REFERENCES cities (id)
    );

CREATE TABLE
    customers (id SERIAL PRIMARY KEY, phone VARCHAR(255) NOT NULL REFERENCES users (phone));

CREATE TABLE
    delivery_couriers (id SERIAL PRIMARY KEY, phone VARCHAR(255) NOT NULL REFERENCES users (phone));

CREATE TABLE
    delegates (
        customer_id INT NOT NULL REFERENCES customers (id),
        delivery_id INT NOT NULL REFERENCES delivery_couriers (id),
        PRIMARY KEY (customer_id, delivery_id)
    );

CREATE TABLE
    transports (
        id SERIAL PRIMARY KEY,
        name_transport VARCHAR(100) NOT NULL,
        capacity NUMERIC(10, 2) NOT NULL,
        TYPE VARCHAR(50) NOT NULL CHECK (
            TYPE IN ('AIR', 'SEA', 'LAND')
        )
    );

CREATE TABLE
    requests (
        code VARCHAR(255) PRIMARY KEY,
        customer_id INT NOT NULL REFERENCES customers (id),
        date_request TIMESTAMP DEFAULT NOW(),
        origin VARCHAR(255) NOT NULL,
        destination VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        number_packages INT NOT NULL
    );

CREATE TABLE
    travels (
        request_code VARCHAR(255) REFERENCES requests (code),
        transport_id INT REFERENCES transports (id),
        PRIMARY KEY (request_code, transport_id)
    );

CREATE TABLE
    branch_offices (
        nit VARCHAR(255) PRIMARY KEY,
        customer_id INT NOT NULL REFERENCES customers (id),
        NAME VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        phone VARCHAR(255) NOT NULL
    );

CREATE TABLE
    list_states (
        id SERIAL PRIMARY KEY,
        code VARCHAR(255) NOT NULL REFERENCES requests (code),
        date TIMESTAMP DEFAULT NOW(),
        phase VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL
    );