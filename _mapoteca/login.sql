-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 13-Ago-2017 às 13:35
-- Versão do servidor: 10.1.13-MariaDB
-- PHP Version: 7.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "-03:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `system_tec`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(250) NOT NULL,
  `user` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `avatar` varchar(350) NOT NULL,
  `nome` varchar(150) NOT NULL,
  `nivel` enum('0','1','2','3') NOT NULL DEFAULT '0',
  `proprietario` int(11) NULL,
  `grupoLoja` int(11) NULL,
  `loja` int(11) NULL,
  `nivel` enum('0','1','2','3','4') NOT NULL DEFAULT '0',
  `ativo` enum('0','1') NOT NULL DEFAULT '0',
  `cadastro` date NOT NULL DEFAULT '0000-00-00',
  `ultimo_login` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `login`
--

INSERT INTO `usuario` (`id`, `nome`, `email`, `user`, `password`, `nivel`, `ativo`, `cadastro`, `ultimo_login`) VALUES
(1, 'Fabio Bonina', 'fabiobonina@gmail.com', 'fabio.bonina', '123abc', '3', '0', '2016-10-03', '2016-10-03 11:56:01'),
(2, 'Alexandre Melo', 'alexandre.melo@gruposabara.com', 'alexandre.melo', '123abc', '2', '0', '2016-11-01', '2016-11-01 10:45:16'),
(3, 'Rafael Carlos', 'rafael.carlos@gruposabara.com', 'rafael.carlos', 'rafael', '2', '0', '2016-11-01', '2016-11-01 11:03:17'),
(4, 'Thonpson Carvalho', 'thonpson.carvalho@gruposabara.com', 'thonpson', '210500', '2', '0', '2016-11-01', '2016-11-01 11:37:59'),
(5, 'Francinei Pantoja', 'francinei@gruposabara.com', 'francinei', '123abc', '0', '0', '2016-11-01', '2016-11-01 13:00:53'),
(6, 'Gladson de Oliveira Marinho', 'gladson.marinho@gruposabara.com', 'gladson.marinho', 'gl080208', '0', '0', '2016-11-01', '2016-11-01 16:13:08'),
(7, 'Nahim Cardoso Pantoja', 'nahim.pantoja@gruposabara.com', 'nahim.pantoja', '123abc', '0', '0', '2016-11-02', '2016-11-02 09:36:31'),
(8, 'RICARDO LOPES', 'ricardo@gruposabara', 'ricardo.lopes', 'lu102432', '0', '0', '2016-11-03', '2016-11-03 14:23:57'),
(9, 'AILTON SILVA', 'ailtondasneves@globo.com', 'ailton.silva', 'sabrina1931', '2', '0', '2016-11-03', '2016-11-03 14:26:33'),
(10, 'FRANCISCO BARBOSA JR', 'francisco.barbosa@gruposabara.com', 'francisco.barbosa', '123abc', '0', '0', '2016-11-03', '2016-11-03 19:15:57'),
(11, 'Sergio Medeiros', 'sergio@sabara.com', 'sergio', '123abc', '2', '0', '2016-11-03', '2016-11-03 23:14:17'),
(12, 'REGINALDO BARBOSA JR', 'reginaldo.barbosa@gruposabara.com', 'reginaldo.barbosa', 'abc123', '0', '0', '2016-11-04', '2016-11-04 00:00:00'),
(13, 'BRUNO ALVES', 'bruno.alves@gruposabara.com', 'bruno.alves', 'abc123', '0', '0', '2016-11-04', '2016-11-04 00:00:00'),
(14, 'DAGMO ESBELL', 'dagmo.esbell@gruposabara.com', 'dagmo.esbell', 'daniloesbell', '0', '0', '2016-11-16', '2016-11-16 11:59:35'),
(15, 'João Batista', 'joao.batista@gruposabara.com', 'joao.batista', '123abc', '2', '0', '2017-02-16', '0000-00-00 00:00:00'),
(16, 'Antonio Ricardo', 'antonio.ferreira@gruposabara.com', 'antonio.ferreira', 'abc123', '0', '0', '2017-02-16', '0000-00-00 00:00:00'),
(17, 'Jose Wilson', 'jose.wilson@gruposabara.com', 'jose.wilson', '1234ab', '0', '0', '2017-06-28', '0000-00-00 00:00:00'),
(18, 'Cleber Souza', 'cleber.souza@gruposabara.com', 'cleber.souza', 'abc123', '0', '0', '2017-06-13', '0000-00-00 00:00:00');


--
-- Indexes for dumped tables
--

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
