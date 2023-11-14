--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists citizens;
SET foreign_key_checks = 1;

--
-- Create Tables
--
CREATE TABLE citizens(
  id                  INT NOT NULL AUTO_INCREMENT,
  citizen_id          varchar(8)  not null,
  firstname           varchar(35) not null,
  lastname            varchar(35) not null,
  birthdate           date        null,
  gender              char(1)     null,
  address             text        null,
  PRIMARY KEY (id)
);

const SQL = `

INSERT INTO citizens (citizen_id,firstname,lastname,birthdate,gender,address) VALUES (53969098, 'Iria', 'Moreno', 07/08/1998, woman, 'C/ Miramar, 32');
INSERT INTO citizens (citizen_id,firstname,lastname,birthdate,gender,address) VALUES (46635554, 'Esther', 'Rodriguez', 13/05/1971, woman, 'C/ Miramar, 32');
INSERT INTO citizens (citizen_id,firstname,lastname,birthdate,gender,address) VALUES ();
INSERT INTO citizens (citizen_id,firstname,lastname,birthdate,gender,address) VALUES ();
INSERT INTO citizens (citizen_id,firstname,lastname,birthdate,gender,address) VALUES ();
INSERT INTO citizens (citizen_id,firstname,lastname,birthdate,gender,address) VALUES ();
INSERT INTO citizens (citizen_id,firstname,lastname,birthdate,gender,address) VALUES ();
INSERT INTO citizens (citizen_id,firstname,lastname,birthdate,gender,address) VALUES ();
INSERT INTO citizens (citizen_id,firstname,lastname,birthdate,gender,address) VALUES ();
INSERT INTO citizens (citizen_id,firstname,lastname,birthdate,gender,address) VALUES ();
`

CREATE TABLE training(
  id                INT NOT NULL AUTO_INCREMENT,
  name              VARCHAR(255),
)
