create database BLMConcept;
use BLMConcept;

create table userTable (
	idUser int primary key auto_increment,
    userName varchar(45),
    userPassword varchar(45)
	);
    
create table Pictures (
	idPic int primary key auto_increment,
    picName varchar(45)
);

create table UserToPic (
	fkPic int,
    foreign key (fkPic) references Pictures (idPic),
    fkUser int,
    foreign key (fkUser) references userTable (idUser),
    userLike int
);
    
insert into Pictures (idPic, picName) values
	(1, 'Auriel'),
    (2, 'Guldfryn'),
    (3, 'Akane'),
    (4, 'Yumi'),
    (5, 'Shaba'),
    (6, 'Freya');