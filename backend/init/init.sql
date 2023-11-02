DROP DATABASE IF EXISTS metadata WITH (FORCE);
CREATE DATABASE metadata;

CREATE TABLE items (
    id INTEGER PRIMARY KEY,
    created TIMESTAMP WITHOUT TIME ZONE DEFAULT now() NOT NULL,
    updated TIMESTAMP WITHOUT TIME ZONE DEFAULT now() NOT NULL
);

CREATE TABLE store (
    store_id INTEGER PRIMARY KEY,
    name CHARACTER VARYING(128) NOT NULL,
    address CHARACTER VARYING(64) NOT NULL,
    city CHARACTER VARYING(64) NOT NULL,
    state CHARACTER VARYING(2) NOT NULL,
    zip_code NUMERIC(5,0) NOT NULL,
    latitude NUMERIC(9,6) NOT NULL,
    longitude NUMERIC(9,6) NOT NULL,
    created TIMESTAMP WITHOUT TIME ZONE DEFAULT now() NOT NULL,
    updated TIMESTAMP WITHOUT TIME ZONE DEFAULT now() NOT NULL
);

INSERT INTO
    items(id)
VALUES
    (0001),
    (0002),
    (0003),
    (0004),
    (0005),
    (0006),
    (0007),
    (0008),
    (0009),
    (0010),
    (0011),
    (0012),
    (0013),
    (0014),
    (0015),
    (0016),
    (0017),
    (0018),
    (0019),
    (0020),
    (0021);

INSERT INTO
    store (store_id, name, address, city, state, zip_code, latitude, longitude)
VALUES
    (2803, 'Santa Clara', '3149 Stevens Creek Boulevard', 'San Jose', 'CA', 95117, 37.323886, -121.952181),
    (3025, 'Sunnyvale', '1247 West El Camino Real', 'Sunnyvale', 'CA', 94086, 37.375004, -122.057389),
    (3027, 'San Jose - Willow Glen', '1133 Lincoln Avenue', 'San Jose', 'CA', 95125, 37.307687, -121.900973),
    (3028, 'San Jose - Blossom Hill', '871 Blossom Hill Road', 'San Jose', 'CA', 95123, 37.251831, -121.857595),
    (3033, 'San Jose - Westgate', '5205 Prospect Road', 'San Jose', 'CA', 95129, 37.292896, -121.99263),
    (6602, 'Los Gatos', '636 Blossom Hill Road', 'Los Gatos', 'CA', 95032, 37.2354774, -121.9640198);
