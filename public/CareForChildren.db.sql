BEGIN TRANSACTION;
CREATE TABLE "Service" (
	`ID`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	`name`	TEXT NOT NULL UNIQUE
);
INSERT INTO `Service` VALUES (1,'Family Support');
INSERT INTO `Service` VALUES (2,'Pet Therapy');
INSERT INTO `Service` VALUES (3,'Growing Up');
INSERT INTO `Service` VALUES (4,'Play With Emotions');
INSERT INTO `Service` VALUES (5,'Love Music');
CREATE TABLE "People" (
	`ID`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	`firstName`	TEXT NOT NULL,
	`lastName`	TEXT NOT NULL
);
INSERT INTO `People` VALUES (1,'Emily','Clarke');
INSERT INTO `People` VALUES (2,'John','Mayer');
INSERT INTO `People` VALUES (3,'Sandra','Pittino');
INSERT INTO `People` VALUES (4,'Anna
','Rossi');
INSERT INTO `People` VALUES (5,'Marco','Sterpetti');
CREATE TABLE `OperatingServiceLocation` (
	`IDService`	INTEGER NOT NULL,
	`IDLocation`	INTEGER NOT NULL,
	PRIMARY KEY(`IDService`,`IDLocation`),
	FOREIGN KEY(`IDService`) REFERENCES Service,
	FOREIGN KEY(`IDLocation`) REFERENCES Location
);
INSERT INTO `OperatingServiceLocation` VALUES (1,1);
INSERT INTO `OperatingServiceLocation` VALUES (1,2);
INSERT INTO `OperatingServiceLocation` VALUES (1,3);
INSERT INTO `OperatingServiceLocation` VALUES (2,1);
INSERT INTO `OperatingServiceLocation` VALUES (2,2);
INSERT INTO `OperatingServiceLocation` VALUES (2,3);
INSERT INTO `OperatingServiceLocation` VALUES (3,3);
INSERT INTO `OperatingServiceLocation` VALUES (3,5);
INSERT INTO `OperatingServiceLocation` VALUES (4,3);
INSERT INTO `OperatingServiceLocation` VALUES (4,4);
INSERT INTO `OperatingServiceLocation` VALUES (4,5);
INSERT INTO `OperatingServiceLocation` VALUES (5,1);
INSERT INTO `OperatingServiceLocation` VALUES (5,2);
INSERT INTO `OperatingServiceLocation` VALUES (5,5);
CREATE TABLE `OperatingPeopleService` (
	`IDPerson`	INTEGER NOT NULL,
	`IDService`	INTEGER NOT NULL,
	PRIMARY KEY(`IDPerson`,`IDService`),
	FOREIGN KEY(`IDPerson`) REFERENCES People,
	FOREIGN KEY(`IDService`) REFERENCES Service
);
INSERT INTO `OperatingPeopleService` VALUES (1,1);
INSERT INTO `OperatingPeopleService` VALUES (1,2);
INSERT INTO `OperatingPeopleService` VALUES (1,5);
INSERT INTO `OperatingPeopleService` VALUES (2,1);
INSERT INTO `OperatingPeopleService` VALUES (2,2);
INSERT INTO `OperatingPeopleService` VALUES (2,5);
INSERT INTO `OperatingPeopleService` VALUES (3,1);
INSERT INTO `OperatingPeopleService` VALUES (3,3);
INSERT INTO `OperatingPeopleService` VALUES (3,4);
INSERT INTO `OperatingPeopleService` VALUES (4,2);
INSERT INTO `OperatingPeopleService` VALUES (4,4);
INSERT INTO `OperatingPeopleService` VALUES (5,3);
INSERT INTO `OperatingPeopleService` VALUES (5,4);
INSERT INTO `OperatingPeopleService` VALUES (5,5);
CREATE TABLE "Location" (
	`ID`	INTEGER PRIMARY KEY AUTOINCREMENT,
	`name`	TEXT,
	`telephone`	TEXT,
	`mail`	TEXT,
	`address`	TEXT,
	`Country`	TEXT
);
INSERT INTO `Location` VALUES (1,'Monza','800-123-567','CareForChildren_Monza@mail.com','Via Bartolomeo Zucchi, 24, 20052 Monza MB','Italia');
INSERT INTO `Location` VALUES (2,'Milano','765-435-654','CareForChildren_Milano@mail.com','Via Castelfidardo, 6, 20121 Milano MI','Italia');
INSERT INTO `Location` VALUES (3,'Brescia','672-443-123','CareForChildren_Brescia@mail.com','Via Marcantonio Ducco, 45, 25123 Brescia BS','Italia');
INSERT INTO `Location` VALUES (4,'Pavia','123-456-789','CareForChildren_Pavia@mail.com','Viale Camillo Golgi, 55, 27100 Pavia PV','Italia');
INSERT INTO `Location` VALUES (5,'Bergamo','253-897-005','CareForChildren_Bergamo@mail.com','Via Torquato Tasso, 18, 24121 Bergamo BG','Italia');
COMMIT;
