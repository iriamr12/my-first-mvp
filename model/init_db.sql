--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists citizens;
DROP TABLE if exists education;
SET foreign_key_checks = 1;

--
-- Create Tables
--
CREATE TABLE citizens(
  id                      INT NOT NULL AUTO_INCREMENT,
  firstname               varchar(35) NOT NULL,
  lastname                varchar(35) NOT NULL,
  id_number               INT         NOT NULL,
  date_of_birth           DATE        NOT NULL,
  place_of_birth          varchar(35) NOT NULL,
  university_degrees      LONGTEXT  NOT NULL,
  masters_degrees         LONGTEXT  NOT NULL,
  non_university_degrees  LONGTEXT  NOT NULL,
  other_titles            LONGTEXT  NOT NULL,
  cip_number              varchar(35) NOT NULL,
  
  PRIMARY KEY (id)
);


INSERT INTO citizens (firstname, lastname, id_number, date_of_birth, place_of_birth, university_degrees, masters_degrees, non_university_degrees, other_titles) 
  VALUES ('Iria', 
         'Moreno', 
          53969098, 
          '1998-08-07', 
          'Barcelona', 
          'Political Science and Public Administration', 
          'Government and Public Administration', 
          '', 
          'Full Stack Developement'), 
          
          ('Andrea', 
          'Moreno', 
          10000001, 
          '1997-10-20', 
          'Valencia', 
          'Tourism', 
          'Events Management', 
          '', 
          'Language courses'),
          
          ('Javier', 
          'García', 
          10000002, 
          '1997-10-20', 
          'Valencia', 
          'Tourism', 
          'Events Management', 
          '', 
          'Language courses'),
          
          ('Carla', 
          'Fernandez', 
          10000003, 
          '1987-07-10', 
          'Granada', 
          'Medicine', 
          'Cardiology', 
          '', 
          'Childs cardiology'),
          
          ('Ingrid', 
          'Segovia', 
          10000004, 
          '1998-11-26', 
          'Hostalric', 
          'Political Science', 
          'Public Administration', 
          '', 
          'Theatre studies'),
          
          ('Oriol', 
          'Roca', 
          10000005, 
          '1936-07-18', 
          'Sant Joan Despí', 
          'Public Relationships', 
          'Mass Media and Political Parties Propaganda', 
          '', 
          'Speech course'),
          
          ('Esther', 
          'Rodriguez', 
          10000006, 
          '1971-05-13', 
          'Cornella', 
          'Design', 
          'Retail Management', 
          '', 
          'Accountancy'),
          
          ('Marc', 
          'Minoves', 
          10000007, 
          '2017-10-01', 
          'Berga', 
          'Architecture', 
          'Urban Planning', 
          '', 
          'Language courses'),
          
          ('Andres', 
          'Ramos', 
          10000008, 
          '1950-04-20', 
          'Navarra', 
          'Industrial Engineering', 
          'Big Data', 
          '', 
          'Language courses'),
          
          ('Raquel', 
          'Castellano', 
          10000009, 
          '1967-12-03', 
          'Extremadura', 
          'Physics', 
          'Astrophysics', 
          '', 
          'Language courses');


