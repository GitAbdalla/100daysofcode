CREATE TABLE
    "cards" ("id" INTEGER);

CREATE TABLE
    "stations" (
        "id" INTEGER,
        "name" TEXT NOT NULL UNIQUE,
        "line" TEXT NOT NULL,
        PRIMARY KEY ("id")
    );

CREATE TABLE
    "swipes" (
        "id" INTEGER,
        "card_id" INTEGER,
        "station_id" INTEGER,
        "type" TEXT NOT NULL CHECK ("type" IN ('enter', 'exit', 'deposit')),
        "datetime" NUMERIC DEFAULT CURRENT_TIMESTAMP,
        "amount" NUMERIC NOT NULL CHECK ("amount" != 0),
        PRIMARY KEY ("id"),
        FOREIGN KEY ("card_id") REFERENCES "riders" ("id"),
        FOREIGN KEY ("station_id") REFERENCES "stations" ("id")
    );
