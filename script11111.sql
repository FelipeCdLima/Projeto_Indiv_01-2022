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

