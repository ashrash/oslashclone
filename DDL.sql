-- DB DDL script for OSlash clone
CREATE TABLE `users`
(
 `email`        varchar(100) NOT NULL ,
 `name`         varchar(100) NOT NULL ,
 `password`     varchar(100) NOT NULL ,
 `created_dttm` datetime NOT NULL ,
 `updated_dttm` datetime NOT NULL ,

PRIMARY KEY (`email`)
);


CREATE TABLE `shortcuts`
(
 `short_link` varchar(60) NOT NULL ,
 `email_id`     varchar(100) NOT NULL ,
 `url` 			varchar(100) NOT NULL ,
 `description`  varchar(250) NOT NULL ,
 `created_dttm` datetime NOT NULL ,
 `updated_dttm`  datetime NOT NULL ,

PRIMARY KEY (`short_link`),
KEY `FK_2` (`email_id`),
CONSTRAINT `FK_1` FOREIGN KEY `FK_2` (`email_id`) REFERENCES `users` (`email`)
);



CREATE TABLE `tags`
(
 `id`           bigint NOT NULL ,
 `short_link_id` varchar(60) NOT NULL ,
 `tag`          varchar(45) NOT NULL ,
 `created_dttm` datetime NOT NULL ,
 `updated_dttm` datetime NOT NULL ,

PRIMARY KEY (`id`),
KEY `FK_2` (`short_link_id`),
CONSTRAINT `FK_3` FOREIGN KEY `FK_2` (`short_link_id`) REFERENCES `shortcuts` (`short_link`)
);