CREATE TABLE playerNames(
id SERIAL PRIMARY KEY NOT NULL,
names TEXT NOT NULL
);

CREATE TABLE scoreBoard(
id SERIAL PRIMARY KEY NOT NULL,
score INT NOT NULL,
player_id  SERIAL  NOT NULL,
FOREIGN KEY (player_id) REFERENCES playerNames(id)
);

CREATE TABLE poses(
id SERIAL PRIMARY KEY NOT NULL,
path TEXT NOT NULL,
poseName TEXT NOT NULL
);

INSERT INTO playerNames (names) values ('Peggy'); 
INSERT INTO playerNames (names) values ('Lusanda');
INSERT INTO playerNames (names) values ('Ishmael');
INSERT INTO playerNames (names) values ('Vhonani'); 
INSERT INTO playerNames (names) values ('Diane');

INSERT INTO scoreBoard (score,player_id) values (20,1); 
INSERT INTO scoreBoard (score,player_id) values (15,2);
INSERT INTO scoreBoard (score,player_id) values (10,3);
INSERT INTO scoreBoard (score,player_id) values (5,4); 
INSERT INTO scoreBoard (score,player_id) values (25,5);

INSERT INTO poses (path,poseName) values ('../images/chair-yoga.jpg','Chair pose'); 
INSERT INTO poses (path,poseName) values  ('../images/disco-pose.jpg','Disco pose'); 
INSERT INTO poses (path,poseName) values ('../images/michael-jackson-pose.jpg','Michael Jackson Pose'); 
INSERT INTO poses (path,poseName) values ('../images/tree-pose.jpg','Bending tree Pose');  
INSERT INTO poses (path,poseName) values ('../images/Triangula-Pose.jpg','Triangular Forward Pose'); 
INSERT INTO poses (path,poseName) values ('../images/Warrior-pose.jpg','Warrior Pose'); 
INSERT INTO poses (path,poseName) values ('../images/yoga-tree.jpg','Yoga tree Pose'); 
INSERT INTO poses (path,poseName) values ('../images/stand-Pose.jpg','Standing Pose'); 


