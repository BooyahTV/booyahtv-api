-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-09-2021 a las 20:15:42
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `booyahtv`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `emotes`
--

CREATE TABLE `emotes` (
  `emote_id` int(255) NOT NULL,
  `id` varchar(255) NOT NULL,
  `source` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `name_streamer` varchar(255) NOT NULL,
  `width` int(255) DEFAULT NULL,
  `height` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `emotes`
--

INSERT INTO `emotes` (`emote_id`, `id`, `source`, `name`, `name_streamer`, `width`, `height`) VALUES
(6, '562b9101a6646e202bcc5447', 'bttv', 'RareChar', 'elmarceloc', 0, NULL),
(7, '55f47f507f08be9f0a63ce37', 'bttv', 'HAhaa', 'elmarceloc', 0, NULL),
(10, '5d922afbc0652668c9e52ead', 'bttv', 'peepoArrive', 'elmarceloc', 0, NULL),
(11, '5afa002a1260c3359cb41ef6', 'bttv', 'PepoSabers', 'elmarceloc', 0, NULL),
(18, '660750', 'ffz', 'WeirdChamp', 'elmarceloc', 32, 32),
(19, '5aa16eb65d4a424654d7e3e5', 'bttv', 'monkaHmm', 'elmarceloc', NULL, NULL),
(20, '5d8d17d9d2458468c1f4978f', 'bttv', 'SquirtleJam', 'elmarceloc', NULL, NULL),
(21, '660739', 'ffz', 'booferS', 'elmarceloc', 28, 28),
(22, '5b157890aca8015213e555d1', 'bttv', 'PepoPopcorn', 'elmarceloc', NULL, NULL),
(23, '270930', 'ffz', 'widepeepoHappy', 'elmarceloc', 80, 19),
(29, '6116a00a47935f36575c7bbb', '7tv', 'Love', 'elmarceloc', NULL, NULL),
(31, '60bcb44f7229037ee386d1ab', '7tv', 'Okayge', 'elmarceloc', NULL, NULL),
(32, '229486', 'ffz', 'KKonaW', 'elmarceloc', 32, 32),
(33, '5bc2143ea5351f40921080ee', 'bttv', 'ricardoFlick', 'elmarceloc', NULL, NULL),
(34, '55a24e1294dd94001ee86b39', 'bttv', 'RareParrot', 'elmarceloc', NULL, NULL),
(35, '60ae6b4486fc40d488d0b324', '7tv', 'AlienGathering', 'elmarceloc', NULL, NULL),
(36, '60ae65b29627f9aff4fd8bef', '7tv', 'NOOOO', 'elmarceloc', NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `emotes`
--
ALTER TABLE `emotes`
  ADD PRIMARY KEY (`emote_id`),
  ADD KEY `id_2` (`id`),
  ADD KEY `id_3` (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `emotes`
--
ALTER TABLE `emotes`
  MODIFY `emote_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
