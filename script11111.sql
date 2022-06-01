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
    
insert into UserTable (userName, userPassword) values
('Gelato', '1234'),('Tama', '1234'),('ShindoL', '2222');
    
insert into Pictures (idPic, picName) values
	(1, 'Auriel'),
    (2, 'Guldfryn'),
    (3, 'Akane'),
    (4, 'Yumi'),
    (5, 'Shaba'),
    (6, 'Avri');
    
insert into UserToPic (fkPic, fkUser, userLike) values
	(1, 1, 1), (2, 1, 0), (3, 1, 1), (4, 1, 0), (5, 1, 0), (6, 1, 0),
    (1, 2, 1), (2, 2, 0), (3, 2, 1), (4, 2, 0), (5, 2, 0), (6, 2, 0),
    (1, 3, 0), (2, 3, 0), (3, 3, 1), (4, 3, 0), (5, 3, 0), (6, 3, 0);
    
-- select * from
-- (select sum(userLike) as 'Like1' from UserToPic where fkPic = 1),
-- (select sum(userLike) as 'Like2' from UserToPic where fkPic = 2),
-- (select sum(userLike) as 'Like3' from UserToPic where fkPic = 3),
-- (select sum(userLike) as 'Like4' from UserToPic where fkPic = 4),
-- (select sum(userLike) as 'Like5' from UserToPic where fkPic = 5),
-- (select sum(userLike) as 'Like6' from UserToPic where fkPic = 6);
    
select (sum(userLike)),
(select (sum(userLike)) from UserToPic where fkPic = 1),
(select (sum(userLike)) from UserToPic where fkPic = 2),
(select (sum(userLike)) from UserToPic where fkPic = 3),
(select (sum(userLike)) from UserToPic where fkPic = 4),
(select (sum(userLike)) from UserToPic where fkPic = 5),
(select (sum(userLike)) from UserToPic where fkPic = 6)
from UserToPic;