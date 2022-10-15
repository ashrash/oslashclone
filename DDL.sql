-- DB DDL script for OSlash clone

CREATE TABLE `user`
(
 `id`           bigint NOT NULL ,
 `email`        varchar(100) NOT NULL ,
 `password`     varchar(100) NOT NULL ,
 `created_dttm` datetime NOT NULL ,
 `updated_dttm` datetime NOT NULL ,

PRIMARY KEY (`id`)
);


CREATE TABLE `shortcut`
(
 `id`           bigint NOT NULL ,
 `short_link`   varchar(60) NOT NULL ,
 `user_id`      bigint NOT NULL ,
 `description`  varchar(250) NOT NULL ,
 `created_dttm` datetime NOT NULL ,
 `update_dttm`  datetime NOT NULL ,

PRIMARY KEY (`id`),
KEY `FK_2` (`user_id`),
CONSTRAINT `FK_1` FOREIGN KEY `FK_2` (`user_id`) REFERENCES `user` (`id`)
);


CREATE TABLE `tags`
(
 `id`           bigint NOT NULL ,
 `shortcut_id`  bigint NOT NULL ,
 `tag`          varchar(45) NOT NULL ,
 `created_dttm` datetime NOT NULL ,
 `updated_dttm` datetime NOT NULL ,

PRIMARY KEY (`id`),
KEY `FK_2` (`shortcut_id`),
CONSTRAINT `FK_2` FOREIGN KEY `FK_2` (`shortcut_id`) REFERENCES `shortcut` (`id`)
);