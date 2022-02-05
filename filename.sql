-- MariaDB dump 10.19  Distrib 10.5.12-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: booyahtv
-- ------------------------------------------------------
-- Server version	10.5.12-MariaDB-0+deb11u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `donos`
--

DROP TABLE IF EXISTS `donos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `donos` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `color` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `badge_source` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `badge` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitch_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=123 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donos`
--

LOCK TABLES `donos` WRITE;
/*!40000 ALTER TABLE `donos` DISABLE KEYS */;
INSERT INTO `donos` VALUES (3,'CheemsFroger','XDDD','1 MILLON DE BADGES GUY','#8a2be2','bttv','617ba43a1f8ff7628e6b7ea2','CheemsFroger'),(4,'Nonsito',NULL,NULL,NULL,NULL,NULL,'Nonsito'),(5,'elmarceloc','Navidad  ','Feliz','#68da0b','bttv','6038a2037c74605395f34895','elmarceloc'),(6,'BTigre','','','#ffb9e1','ffz','464074','BTigre'),(7,'xbab',NULL,NULL,NULL,NULL,NULL,'xbab'),(9,'kenny16c','UwU ','No consuman drogas','#ff6117','bttv','5dbc760b27360247dd64e628','kenny16c'),(22,'Jeonh13 🐖💎','<3','Top donador de booyah.tv',NULL,'bttv','616162ffb63cc97ee6d57add','Jeonh13'),(23,'Benjaxter_EZ','RICO    ','BOOBA','#00ff00','bttv','','Benjaxter_EZ'),(24,'akole',NULL,NULL,NULL,NULL,NULL,'akole'),(27,'Joaquop',NULL,NULL,NULL,NULL,NULL,'JoaquoCL'),(28,'EmiUwU','<3','Los Amo a Todos/as','#e4717a','bttv','5c63d3db4c7f0220299eeacd','EmiUwU'),(30,'hopemoonie',NULL,NULL,'#95e0fa','bttv','5ec9b5cdfdee545e30650f88','hopemoonie'),(31,'Sophia Starr','<3 ','Donadora Top #1 de booyah.tv','#eb0000','bttv','5dbc2a33b537d747e37aa1b8','Sophia Starr'),(32,'Josew1000','<3','Top donador de booyah.tv','#007bff','ffz','670962','Josew1000'),(34,'Lechurryy','Regalada por Josew1000','','#009dff','bttv','5f38abea8abf185d76c6ed3d','Lechurryy'),(35,'roqb','','','#00ff00','bttv','5fa8f232eca18f6455c2b2e1','roqb'),(36,'Crowmeca_bs','Regalada por Josew1000','','#8a2be2','bttv','600df0934e3ab965ef759f55','Crowmeca_bs'),(38,'Didelachu','épico','O','#f47825','ffz','86409','didelachu'),(39,'Remp','Puesto #8 donde Cristianghost ','Wena po','#fa0000','bttv','6064d2cea407570b72f28b5b','rempalagooxd'),(40,'UnTercermundistaPromedio','','hola','#ff0000','bttv','5df2af0691129e77b47cd3d3','untercermundistapromedio'),(41,'Cata','','Donadora de Booyah.tv','#e22cbb','bttv','5b1740221c5a6065a7bad4b5','catatauvu'),(42,'꧁༒☬nekoSemi☬༒ৡ꧂','sexo','omero','#b928e2','bttv','617dcc751f8ff7628e6bb477','nekosemi_'),(43,'AweonasoBot','','',NULL,'bttv','602de36bee839b1e5ec6deeb','AweonasoBot'),(44,'Matipz','gay','FAN DE DREAM','#8cff00','bttv','5f6e95f8b2fa7c0b06521e42','Matia 😈'),(45,'PyroDrake','(=^-ω-^=) ','Gato Baile','#ff2e2e','bttv','5fd03d2acac2fb4621e5690a','PyroDrake'),(46,'FranciscoJr12','','Wena chat','#fe0000','bttv','5e0502e69e2cd00d968d5677','FranciscoJr12'),(47,'PDanny','POGGER','Epidance','#00d5ff','bttv','61a5a443371b825d3f6dcb4a','PDanny'),(48,'Spider-Gabo',' ','Tkm a todos <3','#ff0000','bttv','5b58941cc0c5fe407247b5e5','🧐🍷Spider-Gabo'),(49,'Facha Ghost','','','#00ff5e','bttv','5f27cd6fcf6d2144653de74c','Facha Ghost'),(52,'Sophia Starr','Cattos','Mi banda personal','#eb0000','bttv','5b832af6e44b1e2906469c08','Sophia Starr'),(55,'Un Poco de MoaiGr','<3','Tester de booyah.tv',NULL,'bttv','614cec7bb63cc97ee6d2fb7d','Un Poco de MoaiGr'),(56,'Matia 😈','<3','Tester de booyah.tv',NULL,'bttv','614cec7bb63cc97ee6d2fb7d','Matia 😈'),(57,'WatonGhost','Teórico oficial de la aweonasogang ','El WatonGhost',NULL,'bttv','61886bb81f8ff7628e6ce97d','MrHararbu'),(58,'Facha Ghost','un pepoide na que decir','El tio facha',NULL,'bttv','5590b223b344e2c42a9e28e3','Facha Ghost'),(59,'Sophia Starr','<3  ','¡FELIZ NAVIDAD CHIAT!','#eb0000','bttv','5fab753df447d2645c1fd569','Sophia Starr'),(60,'Facha Ghost','Regalada por Sophia Starr','Donador de booyah.tv',NULL,'bttv','616162ffb63cc97ee6d57add','Facha Ghost'),(61,'Facha Ghost','<3','Tester de booyah.tv',NULL,'bttv','5b490e73cf46791f8491f6f4','Facha Ghost'),(62,'Fijxu','Booyah tv dev','Fijxu',NULL,'bttv','5b490e73cf46791f8491f6f4','Fijxu'),(63,'ppL','','un floppa','#1a1a19','bttv','61a21c7bb50549e7e5011f5d','ppL'),(64,'BlupBlup',' <3 ','T amo bingus pls','#ff4d70','bttv','5fc49977e22688461fed45bc','BlupBlup'),(67,'Un batido de Chocapic con leche','Hoal','Un Batido de Chocapic/Bcl','#8fff96','bttv','604dbad8306b602acc59c9fc','Un batido de Chocapic con leche'),(78,'CheemsFroger','  ','Farmeador de Emblemas',NULL,'bttv','616cf40d054a252a431f8e0d','CheemsFroger'),(79,'CheemsFroger','<3 ','Tester de booyah.tv',NULL,'bttv','614cec7bb63cc97ee6d2fb7d','CheemsFroger'),(80,'AxLWan','(Gracias Sophia Starr)','Top #?? en CristianGhost','#00d103','ffz','677882','AxLWan'),(81,'skeldyaroksha','','','#a30f0f','bttv','5f62b9cdadcc2603e2a0c759','skeldyaroksha'),(82,'davidmied0',NULL,NULL,NULL,NULL,NULL,'davidmied0'),(83,'Tsukei','😈🖕','','#00f7db','bttv','5f40328f8abf185d76c761ac','Tsukei'),(84,'꧁༒☬nekoSemi☬༒ৡ꧂','Empresaria','Nekosemi','#b928e2','bttv','608468d839b5010444d05835','꧁༒☬nekoSemi☬༒ৡ꧂'),(85,'꧁༒☬nekoSemi☬༒ৡ꧂','CHAD  ','WAWA','#b928e2','bttv','61532b57b63cc97ee6d3bfe2','꧁༒☬nekoSemi☬༒ৡ꧂'),(86,'꧁༒☬nekoSemi☬༒ৡ꧂','','muy pro','#b928e2','bttv','61394016af28e956864caa1a','꧁༒☬nekoSemi☬༒ৡ꧂'),(87,'Cristop948',' ','EZ','#8a2be2','bttv','5590b223b344e2c42a9e28e3','Cristop948'),(88,'Cristop948','  ','','#8a2be2','bttv','','Cristop948'),(90,'Kuroneko','<3','Nya','#b22222','bttv','5eb6b0b8813f921693554568','Kuroneko'),(95,'whitezushi','peepo waton','peepo waton','#ff8ac4','bttv','60deb5bc8ed8b373e421c7e2','whitezushi'),(96,'Whitn\'t','he got the drip','Drip','#e4717a','ffz','474636','Whitn\'t'),(97,'desssssssuki','wa','ando lol','#001eff','bttv','5fd528f6f0c558349268cae9','desssssssuki'),(98,'RakúnLeBugs !','👌','RakunJam','#fb04f3','bttv','60c4630df8b3f62601c3ca35','RakúnLeBugs !'),(99,'cCcArLa','wa','ando lol','#0001ff','bttv','5fd528f6f0c558349268cae9','cCcArLa'),(100,'RakúnLeBugs','👌','RakunJam','#fb04f3','bttv','60c4630df8b3f62601c3ca35','RakúnLeBugs'),(101,'ClaudinosT','','','#0fe612','bttv','61905d9654f3344f88058e49','ClaudinosT'),(102,'legendarien','que lee','pico pal','#00fbff','ffz','539977','legendarien'),(103,'Isaku','UWU','GATO','#8a2be2','bttv','5e4dda7008b4447d56a92431','Isaku'),(104,'Agniob',':)','enjoyer of SEXO','#56f59b','bttv','5fcfd3759d354846334575ec','Agniob'),(105,'ThePyroJr96',':v','Hola','#3e86e5','bttv','5e22fcfebca2995f13fbae53','ThePyroJr96'),(106,'MrLAIF','  ','Feliz navidad chat ♥','#ff0000','bttv','618994291f8ff7628e6d04c2','MrLAIF'),(107,'MrLAIF','   ','Temazo','#ff0000','bttv','60dd8ed78ed8b373e421c0ff','MrLAIF'),(108,'Benjaxter_EZ','RICO     ','Boooty','#00ff00','bttv','','Benjaxter_EZ'),(109,'Sophia Starr','<3','Contribuidora de booyah tv',NULL,'bttv','614cec7bb63cc97ee6d2fb7d','Sophia Starr'),(110,'Matipz','gay','FAN DE DREAM','#8cff00','bttv','5f6e95f8b2fa7c0b06521e42','Matipz'),(111,'🍁★valentina ★🍁','elpepe','Feliz navidad chat','#ff6bdf','bttv','618a6b801f8ff7628e6d1a4a','🍁★valentina ★🍁'),(112,'Sexo rico 🥵','Conchetumare?','y Perri?','#00ffee','bttv','60902d2d39b5010444d0ae9e','Sexo rico 🥵'),(113,'Sexo rico 🥵','Conchetumare?','y Perri?','#00ffee','bttv','60902d2d39b5010444d0ae9e','Sexo rico 🥵'),(114,'-Lol-','    ','',NULL,'bttv','60c93675f8b3f62601c3e5fd','-Lol-'),(118,'kenny16c','𝓟𝓸𝓽𝓸, 𝔂 𝓽𝓮 𝓭𝓮𝓼𝓮𝓸 𝓾𝓷 𝓫𝓾𝓮𝓷 𝓭𝓲𝓪\r\n','𝓟𝓸𝓽𝓸, 𝔂 𝓽𝓮 𝓭𝓮𝓼𝓮𝓸 𝓾𝓷 𝓫𝓾𝓮𝓷 𝓭𝓲𝓪\r\n',NULL,'bttv','608b212639b5010444d08b9c','kenny16c'),(119,'Usagii.Chuwu','Open Commissions! ','Artista🎨 ','#d8b8ff','bttv','6069cdaba407570b72f2ae97','🐰Usagii.Chuwu🐰'),(120,'Emanuel Castillo',' ','',NULL,'bttv','5f1b0186cf6d2144653d2970','Emanuel Castillo'),(121,'Nonsito','','lider nonsiter',NULL,'bttv','61d101cf06fd6a9f5bdef70c','Nonsito'),(122,'-Lol-',' ','',NULL,'bttv','5f29a2dc1ab9be446c4e43f9','-Lol-');
/*!40000 ALTER TABLE `donos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emotes`
--

DROP TABLE IF EXISTS `emotes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `emotes` (
  `emote_id` int(255) NOT NULL AUTO_INCREMENT,
  `id` varchar(255) NOT NULL,
  `source` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `name_streamer` varchar(255) NOT NULL,
  `width` int(255) DEFAULT NULL,
  `height` int(255) DEFAULT NULL,
  PRIMARY KEY (`emote_id`),
  KEY `id_2` (`id`),
  KEY `id_3` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1140 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emotes`
--

LOCK TABLES `emotes` WRITE;
/*!40000 ALTER TABLE `emotes` DISABLE KEYS */;
INSERT INTO `emotes` VALUES (45,'60815dc639b5010444d040a4','bttv','isaacDumpy','cristianghost',NULL,NULL),(1048,'615b1406b63cc97ee6d4c76c','bttv','NERDGE','cristianghost',NULL,NULL),(1049,'59420c88023a013b50774872','bttv','PepeS','cristianghost',NULL,NULL),(1050,'57850b9df1bf2c1003a88644','bttv','FeelsRainMan','cristianghost',NULL,NULL),(1051,'5afdd149b5f610729e2f6e75','bttv','lickR','cristianghost',NULL,NULL),(1052,'5afdd15ab5f610729e2f6e7a','bttv','lickL','cristianghost',NULL,NULL),(1053,'6089e5e239b5010444d08237','bttv','picarDIA','cristianghost',NULL,NULL),(1054,'5e87b595acae25096140ca84','bttv','PagMan','cristianghost',NULL,NULL),(1055,'5f61c26968d9d86c020ea765','bttv','Muted','cristianghost',NULL,NULL),(1057,'60f7fa352d1eba5400d0c61b','bttv','Mexico','cristianghost',NULL,NULL),(1058,'56e644ac21a42d3e05a4b528','bttv','Brazil','cristianghost',NULL,NULL),(1059,'60d0b2438ed8b373e421752d','bttv','Sdlg','cristianghost',NULL,NULL),(1060,'605ab0317493072efdeb3698','bttv','ElNoSabe','cristianghost',NULL,NULL),(1061,'60204c953c0e786c9950152b','bttv','PogChimp','cristianghost',NULL,NULL),(1062,'609aa91539b5010444d0fa3e','bttv','peepoBed','cristianghost',NULL,NULL),(1063,'5eb5abe69af1ea16863a5399','bttv','peepoAngrySit','cristianghost',NULL,NULL),(1064,'609753d339b5010444d0e33e','bttv','TULAKA','cristianghost',NULL,NULL),(1065,'5f0bda7a19a5bd0524ec8422','bttv','PeepoBuff','cristianghost',NULL,NULL),(1066,'6182bd3e1f8ff7628e6c434a','bttv','PeepoCuriosity','cristianghost',NULL,NULL),(1067,'6074db6e39b5010444cfe1bf','bttv','PeepoExit','cristianghost',NULL,NULL),(1068,'60cd5d058ed8b373e421629d','bttv','MINIONS','cristianghost',NULL,NULL),(1069,'57f4382e0a3d97d50ede116e','bttv','MinionDAB','cristianghost',NULL,NULL),(1070,'60e776d98ed8b373e421fb73','bttv','MinionDancing','cristianghost',NULL,NULL),(1071,'60143a18f5d29f65e86de154','bttv','minionDumpy','cristianghost',NULL,NULL),(1072,'60d5d7538ed8b373e4219608','bttv','minionG','cristianghost',NULL,NULL),(1073,'60dc74438ed8b373e421ba95','bttv','Chillin','cristianghost',NULL,NULL),(1074,'601b23cff5d29f65e86e5a65','bttv','ShowMe','cristianghost',NULL,NULL),(1075,'604122b2306b602acc596f2e','bttv','PogTasty','cristianghost',NULL,NULL),(1076,'61a647a0371b825d3f6dd900','bttv','QUEPRO2','cristianghost',NULL,NULL),(1077,'61a6478e371b825d3f6dd8fb','bttv','QUEPRO1','cristianghost',NULL,NULL),(1078,'6179f4c21f8ff7628e6b529e','bttv','Peeposelfie','cristianghost',NULL,NULL),(1079,'611305f376ea4e2b9f768617','bttv','Bota','cristianghost',NULL,NULL),(1080,'6066875fa407570b72f297d7','bttv','OMEGADANCE','cristianghost',NULL,NULL),(1081,'5cd2bcbab75608209334a28d','bttv','FeelsCringeManW','cristianghost',NULL,NULL),(1082,'54fa92a701e468494b85b550','bttv','PokerFace','cristianghost',NULL,NULL),(1083,'54fa90d601e468494b85b544','bttv','FukYea','cristianghost',NULL,NULL),(1084,'54fa92d701e468494b85b552','bttv','RageFace','cristianghost',NULL,NULL),(1085,'54fa8fb201e468494b85b53b','bttv','CHAccepted','cristianghost',NULL,NULL),(1087,'550288fe135896936880fdd4','bttv','puke','cristianghost',NULL,NULL),(1088,'61aabeba002cdeedc21e1a94','bttv','moaiPls','cristianghost',NULL,NULL),(1089,'6189d6521f8ff7628e6d0cfa','bttv','CynthiaPet','cristianghost',NULL,NULL),(1090,'61412d1c686f1c747a863fa1','bttv','peepoComfy18','cristianghost',NULL,NULL),(1091,'611c836476ea4e2b9f77debd','bttv','Offline','cristianghost',NULL,NULL),(1092,'60dd49b38ed8b373e421bfdb','bttv','Bananacatrun','cristianghost',NULL,NULL),(1093,'6082852b39b5010444d049cc','bttv','Applecatrun','cristianghost',NULL,NULL),(1094,'6072bec339b5010444cfd11c','bttv','Applecat','cristianghost',NULL,NULL),(1095,'60989bf239b5010444d0eba4','bttv','Porro','cristianghost',NULL,NULL),(1096,'617dcc751f8ff7628e6bb477','bttv','SEXO','cristianghost',NULL,NULL),(1097,'60cfaf1b8ed8b373e4216f9d','bttv','PagU','cristianghost',NULL,NULL),(1098,'5fecb5fa60488f2e470efd74','bttv','OMEGALULiguess','cristianghost',NULL,NULL),(1099,'59143b496996b360ff9b807c','bttv','gachiHYPER','cristianghost',NULL,NULL),(1100,'6020f2f5cc5c150246d90c39','bttv','peepoBand5','cristianghost',NULL,NULL),(1101,'5e1b12868af14b5f1b43921d','bttv','ModTime','cristianghost',NULL,NULL),(1102,'60f3e0882d1eba5400d030a1','bttv','AlienPls','cristianghost',NULL,NULL),(1104,'601b8266f4d51165fed9dea1','bttv','HomeroBye','cristianghost',NULL,NULL),(1105,'6170c7d978e76c144f05aa76','bttv','homeroTF','cristianghost',NULL,NULL),(1107,'61633db0b63cc97ee6d5afe6','bttv','homeroXD','cristianghost',NULL,NULL),(1108,'6088603e39b5010444d0756c','bttv','TABIEN','cristianghost',NULL,NULL),(1109,'5cf11a501b2ddd446eaf3048','bttv','AYAYAHey','cristianghost',NULL,NULL),(1110,'6151d872b63cc97ee6d39236','bttv','Mhmm','cristianghost',NULL,NULL),(1111,'6122d9dc76ea4e2b9f78c69d','bttv','FeelsDankMan','cristianghost',NULL,NULL),(1112,'60cd19468ed8b373e4216071','bttv','Countdown','cristianghost',NULL,NULL),(1114,'6189da891f8ff7628e6d0d9d','bttv','Cristian4K','cristianghost',NULL,NULL),(1115,'61532b57b63cc97ee6d3bfe2','bttv','BabyCHAD','cristianghost',NULL,NULL),(1116,'6152a224b63cc97ee6d3b1cb','bttv','Epico360HD','cristianghost',NULL,NULL),(1117,'6152a3e7b63cc97ee6d3b203','bttv','PETTHEBOOYAH','cristianghost',NULL,NULL),(1118,'6189d6de1f8ff7628e6d0d0b','bttv','Cristianelpico','cristianghost',NULL,NULL),(1121,'60949aed39b5010444d0cfb0','bttv','Mardge','cristianghost',NULL,NULL),(1123,'288800','ffz','peepoFat','cristianghost',32,30),(1124,'608819c239b5010444d072bf','bttv','pepeSad','cristianghost',NULL,NULL),(1125,'5f470b2d3212445d6fb517a2','bttv','CowDance','cristianghost',NULL,NULL),(1126,'5e15ccf3b640b52102c67fee','bttv','Flushed','cristianghost',NULL,NULL),(1127,'609b5d4467644f1d67e8488f','bttv','Svin','cristianghost',NULL,NULL),(1128,'5fe6676b66689834fd59d924','bttv','sadMonkey','cristianghost',NULL,NULL),(1129,'600f1681f1cfbf65dbe0b9bb','bttv','MMMM','cristianghost',NULL,NULL),(1130,'600f15cbf5d29f65e86d8a29','bttv','OOOO','cristianghost',NULL,NULL),(1131,'5c8b071bc9b377041a1b2506','bttv','WineTime','cristianghost',NULL,NULL),(1132,'5f7abba6e016be4a882f1b6b','bttv','BONKTHEMODS','cristianghost',NULL,NULL),(1133,'60cda1a18ed8b373e42163ed','bttv','peepoDemand','cristianghost',NULL,NULL),(1134,'59a6d3dedccaf930aa8f3de1','bttv','TriKool','cristianghost',NULL,NULL),(1135,'608468d839b5010444d05835','bttv','CorteEmpresario','cristianghost',NULL,NULL),(1136,'5f4c21553769246c0320aeca','bttv','TRBruh','cristianghost',NULL,NULL);
/*!40000 ALTER TABLE `emotes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-03  0:52:45
