-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 11, 2026 at 05:50 PM
-- Server version: 11.4.7-MariaDB-ubu2404
-- PHP Version: 8.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nexuso`
--

-- --------------------------------------------------------

--
-- Table structure for table `3pievzB_users`
--

CREATE TABLE `3pievzB_users` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `user_login` varchar(60) NOT NULL DEFAULT '',
  `user_pass` varchar(255) NOT NULL DEFAULT '',
  `user_nicename` varchar(50) NOT NULL DEFAULT '',
  `user_email` varchar(100) NOT NULL DEFAULT '',
  `user_url` varchar(100) NOT NULL DEFAULT '',
  `user_registered` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `user_activation_key` varchar(255) NOT NULL DEFAULT '',
  `user_status` int(11) NOT NULL DEFAULT 0,
  `display_name` varchar(250) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Dumping data for table `3pievzB_users`
--

INSERT INTO `3pievzB_users` (`ID`, `user_login`, `user_pass`, `user_nicename`, `user_email`, `user_url`, `user_registered`, `user_activation_key`, `user_status`, `display_name`) VALUES
(3, 'Will', '$wp$2y$10$rrcmGLB1mVChvvHf26HZqeqrHY.Eyv7ZdSnrkPlmp4B6SdDW22G/m', 'will', 'will@bryantdigital.com', '', '2024-06-19 19:16:06', '', 0, 'Nexus Refrigeration'),
(6, 'Bryant Digital', '$wp$2y$10$ZjXfB2eOUUHgnXdxuJXMu.zEvBWnOO97Pud7Nirtwqgp3stzQ3tVm', 'bryant-digital', 'bryantdigitalusa@gmail.com', '', '2024-08-22 19:11:49', '', 0, 'Bryant Digital'),
(161, 'benjamin.clark2010@gmail.com', '$wp$2y$10$Eb0zf3uaBpvfFhGsVK8nv.NkxErWvvZ491GrIq1hk0V/AQE6ZQlGG', 'benjamin-clark2010gmail-com', 'benjamin.clark2010@gmail.com', '', '2025-02-25 02:03:52', '', 0, 'Benjamin Clark'),
(163, 'josiah@blacktempo.com', '$P$BmObhyH.TBPftcXFHgTSJUhRyBq8ph0', 'josiahblacktempo-com', 'josiah@blacktempo.com', '', '2025-02-26 20:13:21', '', 0, 'Josiah'),
(164, 'support@purepathnetwork.com', '$P$BTCBlA1kL5ck2X4y.gzpyr2z7FNeJ3/', 'supportpurepathnetwork-com', 'support@purepathnetwork.com', '', '2025-02-27 20:07:08', '', 0, 'josiah bryant'),
(165, 'josiahabryant@gmail.com', '$P$B0PMqDecm16JguNKHUZnHGAg5zk0rH1', 'josiahabryantgmail-com', 'josiahabryant@gmail.com', '', '2025-02-27 20:08:30', '1740687849:$P$B/NJlLYy9tvszO7tjDkOa8AogZlB1B/', 0, 'jackson smith'),
(166, 'faradi7539@apklamp.com', '$P$BY5/tgWYVnBuigBcHvhr4Ie2ETbGKd0', 'faradi7539apklamp-com', 'faradi7539@apklamp.com', '', '2025-03-03 12:47:31', '', 0, 'faradi'),
(167, 'viwoj42203@apklamp.com', '$P$B2gkjOVgKDUOwFusJDmyav8SbYvQTL/', 'viwoj42203apklamp-com', 'viwoj42203@apklamp.com', '', '2025-03-03 12:48:48', '', 0, 'viwoj user'),
(168, 'Benjamin.Clark@nexusrefrigeration.com', '$wp$2y$10$2oDTxEqisOe2vBWav8M4Be/e2RvU.B7eGiAgsZIlplYIhSW5R1tQe', 'benjamin-clarknexusrefrigeration-com', 'Benjamin.Clark@nexusrefrigeration.com', '', '2025-03-04 00:39:00', '', 0, 'Benjamin.Clark@nexusrefrigeration.com'),
(169, 'Natet', '$P$BdV6tKPXiqu.Tuf8MIwOcYzCooMSgy/', 'natet', 'ntorres@resourcecompliance.com', '', '2025-03-04 01:05:47', '1741050347:$P$B85R4/8RvxjwG8zmAeeEcvL9AaMEi4.', 0, 'Nathan Torres'),
(170, 'will2', '$P$BB2BnPZi6OsbRj0wNvzZhRdhvpf11n.', 'will2', 'test@bryantdigital.com', '', '2025-03-04 13:58:21', '1741096701:$P$BYT8sYxiOWrojh/nOQxhXd35NNccEe/', 0, 'Will Brady'),
(171, 'traci@machapsm.com', '$P$BpWlMw1UzXtCZuyfSC6COXjb3CdPVv/', 'tracimachapsm-com', 'traci@machapsm.com', '', '2025-03-04 15:54:36', '1741103676:$P$Be.srLKCSM58BRB1zJ9gkTJ7CxcaRn0', 0, 'Traci Cherry'),
(172, 'raveena24', '$P$BuuTwPJfcDGXmghyMdDTxqqZUonH5w.', 'raveena24', 'raveena@asu.edu', '', '2025-03-04 17:44:53', '1741110293:$P$BwSHk/ftebABvxjQL5HOVl2SQFD51W/', 0, 'Raveena nichani'),
(173, 'billy@joe.com', '$P$BYnKq.EGmc3VWX5ivPmVLvqbRK29l2/', 'billyjoe-com', 'billy@joe.com', '', '2025-03-11 19:14:04', '1752516711:$generic$hCitSwA-Z6mARQ33OUoSGLjjx10D8H59qt34wAPV', 0, 'Billy Joe'),
(174, 'sean.robbins@nexusrefrigeration.com', '$P$BvjakAXf3qrJCW1hld8IJHeR44UyY3.', 'sean-robbinsnexusrefrigeration-com', 'sean.robbins@nexusrefrigeration.com', '', '2025-03-13 13:33:59', '1741872839:$P$BYjjIA2xw.oLw3.mY4f3.chaLnthUX1', 0, 'Sean Robbins'),
(175, 'jsherman', '$P$BvOxGfFJ.VD4J.3ms6U4je3SK6c74n/', 'jsherman', 'jsherman@nwti.edu', '', '2025-03-13 17:44:22', '1741887862:$P$BiPkjpTKIs6c6vibjo6nG8mwc3Gaw/1', 0, 'Jeremy Sherman'),
(177, 'chris.palmer@newmarketpoultry.com', '$wp$2y$10$JEQHpzdhGimxOXlJ8G4CfefMoKtX91tAo6m6zI.awDUr/USJoX5jS', 'chris-palmernewmarketpoultry-com', 'chris.palmer@newmarketpoultry.com', '', '2025-03-19 14:14:39', '', 0, 'Christopher Palmer'),
(178, 'Jess.Harris', '$wp$2y$10$oyrwDQjSsx0Xosb7QfZo/OG7ojdAg7PZVF8Qx/f.qG06Gy3F6U6Ke', 'jess-harris', 'jess.harris@nexusrefrigeration.com', '', '2025-04-01 12:42:50', '', 0, 'Jessica Harris'),
(179, 'Mark', '$wp$2y$10$1Z7KngEgwKHbRUp0di1.CO5ExJ6qRbeFGL.5e65H4ecTT1FryVz/G', 'mark', 'Mark.Malagon@nexusrefrigeration.com', '', '2025-04-11 23:49:50', '', 0, 'Mark'),
(180, 'easton_97', '$wp$2y$10$AO0uw43yy/MqWh36YAsnUuCCkwxq/0DrfV0mIsxJ3E1fkTXHZRBrO', 'easton_97', 'elw21597@gmail.com', '', '2025-04-24 02:02:15', '1745460135:$generic$4O4cLPwX8lmaIGzIKFxzcaEmmlPNzdbC1Qy7uE0p', 0, 'Easton Williams'),
(181, 'markmalagon@yahoo.com', '$wp$2y$10$2PQBNg3/SBtD4z7mrkIf7OOk5zeej9u4VKeQJtxI4kXROf6U2bmLS', 'markmalagonyahoo-com', 'markmalagon@yahoo.com', '', '2025-04-24 13:40:18', '', 0, 'Mark'),
(182, 'jess.harris14@outlook.com', '$wp$2y$10$lOkl6asSTYHIFsNgtrQLeeIyeqvYUX1JqI1ZR3/uigNNXLI5v/sfm', 'jess-harris14outlook-com', 'jess.harris14@outlook.com', '', '2025-04-24 13:46:48', '', 0, 'Jess Harris'),
(183, 'audrey.malagon@yahoo.com', '$wp$2y$10$/deUcZWbvP4/5T29N..nZuIbO69K4gWCWkMlioSH/2KypTPjW2/EG', 'audrey-malagonyahoo-com', 'audrey.malagon@yahoo.com', '', '2025-04-24 13:50:02', '1745502602:$generic$KOz-C84kdLR9f8nwWe8XQH1k8Af-MwjZYQ2ndOFn', 0, 'Audrey Malagon'),
(184, 'dlancaster@nor-am.com', '$wp$2y$10$hq4TjEVqrcFlYLLdTEXz6.dt0/G0H5oBTPqsmNy7uPluyQ3rZlrGG', 'dlancasternor-am-com', 'dlancaster@nor-am.com', '', '2025-04-28 17:40:42', '', 0, 'Doug Lancaster'),
(185, 'ehaskell@nor-am.com', '$wp$2y$10$KLQFgtrfRJV/BF5LqYRfRO.5QiCw/g561kGgheleN0bFkWCwDZuNa', 'ehaskellnor-am-com', 'ehaskell@nor-am.com', '', '2025-04-28 17:51:29', '', 0, 'Eric Haskell'),
(186, 'jramos1@nor-am.com', '$wp$2y$10$DGiNM4u3ttvUvECU3DsGIelrbgn8R8Ognc2snD.CgMBwwnU3inIDq', 'jramos1nor-am-com', 'jramos1@nor-am.com', '', '2025-04-28 17:52:19', '', 0, 'Jose Ramos'),
(187, 'rbriones@nor-am.com', '$wp$2y$10$/OTVYX4HYljMY93N/S5fO.pz1CsbNlUNj/5bfB6Qui/u8OfCbO5wm', 'rbrionesnor-am-com', 'rbriones@nor-am.com', '', '2025-04-28 17:52:53', '', 0, 'Ramon Briones'),
(188, 'tarig@ttmconsultingllc.com', '$wp$2y$10$GyfJaU9AcSnGODhNCTM1iOhaNc4NFq.4PL.SLKvoxpRsVoD7hm0jm', 'tarigttmconsultingllc-com', 'tarig@ttmconsultingllc.com', '', '2025-05-15 15:19:24', '', 0, 'Tarig Mohamed'),
(189, 'gdradvisory', '$wp$2y$10$jxM0W.pZKCcwLeoHPVUnsOPq4VgibKjJGNeU6GwBq3DccfOxt6GVu', 'gdradvisory', 'german.rey@dgradvisoryservices.com', '', '2025-05-15 21:49:39', '', 0, 'German Rey'),
(190, 'Carter_Ameye0201', '$wp$2y$10$eSnXLSgDfjoPGqsKyfdDyeDnsWlqsagb80CNILe4olyqdi2xlC9Vy', 'carter_ameye0201', 'carter.ameye0201@gmail.com', '', '2025-05-16 14:43:24', '', 0, 'Carter Ameye'),
(191, 'piotr@pjsconstructionconsulting.com', '$wp$2y$10$CImX1OUbmT9uHMw/QStZ7esMCblTkydkoGnXjAaRbleypqJcZtF.K', 'piotrpjsconstructionconsulting-com', 'piotr@pjsconstructionconsulting.com', '', '2025-05-21 14:06:22', '', 0, 'Piotr Szul'),
(192, 'w.g.b@sbcglobal.net', '$wp$2y$10$OBvdomy1AmGuccwqAT6qhuunWxDMKrRW6dXGLzn.IBwELoTKocJRO', 'w-g-bsbcglobal-net', 'w.g.b@sbcglobal.net', '', '2025-05-30 16:16:39', '1748621799:$generic$XeeWAx2YZ2gDuCgC6CjDaikl3pdGAVmfsdETM4vc', 0, 'William Brady'),
(193, 'hello@bryantdigital.com', '$wp$2y$10$6pSzS5m3zWOKkPMuibxE0.cgpd1lDgQ6C1x/XdAnprfv2b7ej.oTW', 'hellobryantdigital-com', 'hello@bryantdigital.com', '', '2025-05-30 17:20:34', '', 0, 'Josiah'),
(194, 'michael@relishfx.com', '$wp$2y$10$xRdtMbnKEIznsShGbEdJwuazOxIxTFRcKpGWCuXtLTft5opu/Nwsa', 'michaelrelishfx-com', 'michael@relishfx.com', '', '2025-06-10 14:36:08', '1749566168:$generic$Q2gmaXjlCfWMpBbEUvApsCi5m6zVLkWUQ8_6a4_j', 0, 'Michael Wright'),
(195, 'Tom717', '$wp$2y$10$KPoDRZsnSCdTVhxGivBDheT8Z6MEBtcYRz7X1Drlk6XMPkgvW9Ja.', 'tom717', 'tom.kuck@zip.gmbh', '', '2025-06-26 07:56:31', '', 0, 'Tom Kuck'),
(196, 'Bjor5719', '$wp$2y$10$GbiktT0Sbj8G4vgq3oj4Xe.whWnvTB8YmApkmU7DyKRRL4TjZf02S', 'bjor5719', 'themintyfreshness@ymail.com', '', '2025-07-11 11:36:09', '1752233769:$generic$jl8DMOVovfApt5fA4wLm_KaDX9mZRxqKkZWH6Dzt', 0, 'Benjamin Jordan'),
(197, 'Jess.Harris3', '$wp$2y$10$fHdgsgU4OeyeLbWPSV58GOLxaR2BpRf3iicywL/XrhPmfrXHJMtK6', 'jess-harris3', 'jess.cartwright09@hotmail.com', '', '2025-07-14 18:19:53', '1752517193:$generic$cakD3y90J3AElaN4o2-_BI3BPF2CvP0B4dg1y1GU', 0, 'Jess Harris'),
(199, 'abeery2', '$wp$2y$10$tCds0sRpCOd3KfFXOSRgCeMoAGD1fhKUmTpIGVo844gM8GXFhF4Ee', 'abeery2', 'abeery2@twinpops.com', '', '2025-08-04 16:52:34', '', 0, 'Aaron Beery'),
(200, 'emclean@osigroup.com', '$wp$2y$10$3ihuuqPhbS5SBNXFxrP2qOZwk1zFpGzUCUCslID14ogKcoOJ/jRSG', 'emcleanosigroup-com', 'emclean@osigroup.com', '', '2025-08-07 20:47:13', '1754599633:$generic$QFwFVp9wvAfuj81OdAGSr_IbA3NGuKq2-nd_J2-K', 0, 'Liz McLean'),
(201, 'itswebsitedeveloper.ews@gmail.com', '$wp$2y$10$XPTtLCtJjBKIrvkhZv7k4./S7LZkEBpRfssCLsUqVCdSpqkF3JQ1O', 'itswebsitedeveloper-ewsgmail-com', 'itswebsitedeveloper.ews@gmail.com', '', '2025-08-18 13:58:02', '', 0, 'vishal soni'),
(202, 'JillianMack', '$wp$2y$10$RjDiC7Ankx4xAi.RFteLyuhGPkZYJVU0h95RS0ue3MTA8uDzg0Nd6', 'jillianmack', 'jillian@jpixx.com', '', '2025-08-26 19:17:32', '1756235852:$generic$YtI69eefBQIurFisFY6yj2Of7qoQpMfgG9OHgqqU', 0, 'Jillian Mack'),
(203, 'kkaduce@nor-am.com', '$wp$2y$10$I8pfanHOiac4jDGRtf3FDOVas0SZq.d45Tk1CSrDCnNpoD9Z4HCQC', 'kkaducenor-am-com', 'kkaduce@nor-am.com', '', '2025-09-04 19:24:50', '', 0, 'Kordell Kaduce'),
(204, 'btiemeier', '$wp$2y$10$ycTS4tswaZIVbybP5F4/y.SDXiQrtiiXb2yMEnTtQzqQDH1kDW94a', 'btiemeier', 'brian.tiemeier@darlingii.com', '', '2025-09-09 15:43:00', '', 0, 'Brian Tiemeier'),
(205, 'kylie.stokes', '$wp$2y$10$.HDdxQKO.6K9Ou/evPZqf.bNWcGHDiaKrl5sHc0iquSFJ.cAX2NIC', 'kylie-stokes', 'kylie.stokes@conagra.com', '', '2025-09-15 16:12:28', '1757952748:$generic$SvmwcSlJAaQsroBi7l-QwBmPSErcHrjsruyU4tuj', 0, 'Kylie Stokes'),
(206, 'jguerro@nor-am.com', '$wp$2y$10$wM8wrrumGXwZYvahgHzP5.SV8uLyZtirw9C.0GTjhJ/YSx0phBE6i', 'jguerronor-am-com', 'jguerro@nor-am.com', '', '2025-09-18 14:11:52', '', 0, 'Jesus Avila Guerrero'),
(207, 'Tom@outlook.com', '$wp$2y$10$TpgYSbjHRgctDL/sBqc4EOMLfZYmfKfiEmpWYnC8dmRaOplwNFAv6', 'tomoutlook-com', 'tom@outlook.com', '', '2025-09-26 22:08:15', '1758924495:$generic$NNZC4Vv1JViMuXBf5fy1VivHPhl_L1VoGk79e1F4', 0, 'Tom Tillman'),
(208, 'jdrewery@casefarms.com', '$wp$2y$10$Py4tQ5fCX9MYVSKmkWVd/e1xbLrPq3OClZzzzizX47Zvl9WexPdnO', 'jdrewerycasefarms-com', 'jdrewery@casefarms.com', '', '2025-10-07 14:08:03', '', 0, 'James'),
(209, 'bradyw85@gmail.com', '$wp$2y$10$/PVjhSQc0SLnMpj/EnyJv.j5IWlsT3WXAXiJLBb9YEJUjKf1JI4BK', 'bradyw85gmail-com', 'bradyw85@gmail.com', '', '2025-10-17 17:51:52', '1760723512:$generic$JddCdnuWnDmcO1p4DiaLfZJyeHznJ4DIogsS0jfa', 0, 'Will Brady'),
(210, 'nikkifarruggio@gmail.com', '$wp$2y$10$zQqPj4uxHzLrXcd/TOCBZOdR9IWmAFNhjpX7e.ZrEdrTz1Eo3etF2', 'nikkifarruggiogmail-com', 'nikkifarruggio@gmail.com', '', '2025-10-30 12:42:02', '1761828122:$generic$WBVFTZq6KY-Swft56nk3GdeMb-MUga_L8dvkgBEf', 0, 'Sean Robbins'),
(211, 'Jdaquino', '$wp$2y$10$SdRYJminEFmaSFUE32YP9ua3SUA5pdcrG71Xm5472ZJoTY0ddSdPm', 'jdaquino', 'jmechanicsl13@gmail.com', '', '2025-12-17 07:11:04', '1765955464:$generic$Pkd8IYwlsaLdVwG2mLKipRf9duaqCnOEIBlPXgN2', 0, 'Jarett Aquino'),
(212, 'TJameson25', '$wp$2y$10$1JjbucpUsmOhDmIxzi001uXZU9f03Ffu.Xs3Wwtk1HTR9oaLzGhFy', 'tjameson25', 'nmmaintenance@newmarketpoultry.com', '', '2025-12-18 18:39:47', '', 0, 'Tyler Jameson'),
(213, 'spartridge@nor-am.com', '$wp$2y$10$jffzPIa9j4.NFtm.3mwP4eed2eCqgnsVqi3kAvmdp.Oh6ZDgMeW92', 'spartridgenor-am-com', 'spartridge@nor-am.com', '', '2025-12-19 17:06:32', '', 0, 'Steve Partridge'),
(214, 'acote', '$wp$2y$10$kEdlS6HXDV/T1lXpBgGM2OyCFfFz2xbjUQD2pox8rt5cbnE4aTFqS', 'acote', 'acote@agne.com', '', '2026-01-11 15:28:10', '1768145290:$generic$LovL3RSZBayMB8W0JHafY3sMFkiHllTPYNaviy9s', 0, 'Alan Cote'),
(215, 'Devon.Ryan@nexusrefrigeration.com', '$wp$2y$10$xFlTzHxbJaRNXXSjbR2mqeta1D6SLj4LbXeoKZnENICLBvJWt1Zki', 'devon-ryannexusrefrigeration-com', 'Devon.Ryan@nexusrefrigeration.com', '', '2026-01-15 18:35:57', '', 0, 'Devon.Ryan@nexusrefrigeration.com'),
(216, 'McLovin33', '$wp$2y$10$vXsf06qmePQOwda5YdA3A.q3IGZj5AL2NW1Xxez5REVFABhAS8AVS', 'mclovin33', 'pmaric@leprino.com', '', '2026-01-20 03:21:28', '', 0, 'Petar Maric'),
(217, 'Jelderidge', '$wp$2y$10$no6gORRucU02EFPblNh54O9TuAdfUkz31aNuWGXF6kqA3lo4U5fq2', 'jelderidge', 'jelderidge@leprino.com', '', '2026-01-20 10:25:54', '', 0, 'Joe Elderidge'),
(218, 'ashleycowan1979@gmail.com', '$wp$2y$10$8FjxU6JlEIQr.3i72SQEaO.w1ti5s6JfrakoD64xpx5cDKuny8/sG', 'ashleycowan1979gmail-com', 'ashleycowan1979@gmail.com', '', '2026-01-21 17:26:06', '1769016366:$generic$2sjr4p7PoshS-yOHw3cOHQ4B2EJr-bU_XtY5zuf6', 0, 'Ashley Cowan'),
(219, 'ab349', '$wp$2y$10$9V4OCw45TgkTSGiSrpUSxu9iS7TA2WAJsYWFYmuY7rKBWQcZPAf7y', 'ab349', 'king02_boy@yahoo.com', '', '2026-01-21 20:43:25', '1769028205:$generic$2_0ted4JbAeihpd2kqks03Jz7LYHhwDpxeoBL95E', 0, 'Abdullah Ibrahim'),
(220, 'townerje', '$wp$2y$10$phmOkU7PoFmHpD8OFs8TEe15UeqV4RJRNaGSwm0D1./ipQogERaUa', 'townerje', 'jtowner@leprino.com', '', '2026-01-31 00:52:16', '', 0, 'Jeff Towner'),
(221, 'cellis@nor-am.com', '$wp$2y$10$pfw7zTVEB6zBAbKtUGLB6uBk6CQvbFCG7m/nuF21xAQAdrCnCc6z2', 'cellisnor-am-com', 'cellis@nor-am.com', '', '2026-02-10 14:04:31', '', 0, 'Chris Ellis'),
(222, 'dharrington@freezpak.com', '$wp$2y$10$xNuUkLPck8YYZjDsWaphRO7Waq07XrTd6r0JNiLCbakq62le8whFG', 'dharringtonfreezpak-com', 'dharrington@freezpak.com', '', '2026-02-25 19:06:25', '', 0, 'Daniel'),
(223, 'cmiller@freezpak.com', '$wp$2y$10$Q8o7AETSLfiDJIFJExHsGumscLo28FMWgl.qht38Ph.ghyGnlgopi', 'cmillerfreezpak-com', 'cmiller@freezpak.com', '', '2026-02-25 19:08:07', '', 0, 'Cullen Miller'),
(224, 'bparamore@freezpak.com', '$wp$2y$10$6saD7z.hOyKMQ04Nmg0gj.qM4JqhS5hWMEURJQch/mU2wfqN5tczm', 'bparamorefreezpak-com', 'bparamore@freezpak.com', '', '2026-02-25 19:08:52', '', 0, 'Brandon Paramore'),
(225, 'jcushman@freezpak.com', '$wp$2y$10$eFxz.5MpOW.mVPu53injvOnubCFT2rwN.yyVcQmrqUe51WVaBfUV2', 'jcushmanfreezpak-com', 'jcushman@freezpak.com', '', '2026-02-25 19:09:59', '', 0, 'Josh Cushman'),
(226, 'esantiful@freezpak.com', '$wp$2y$10$4f72qDC/12Aol0/bal84SegVYG3./UdJsWg2QH20thi.TZ3DLlry6', 'esantifulfreezpak-com', 'esantiful@freezpak.com', '', '2026-02-25 19:13:28', '', 0, 'Edward Santiful'),
(227, 'vkurve@freezpak.com', '$wp$2y$10$QEQp.RhxFtT9RPVE50UIKeEiothfH/kaJd3J.3m2a3oga2xxinl6q', 'vkurvefreezpak-com', 'vkurve@freezpak.com', '', '2026-03-05 00:06:29', '', 0, 'Vikram Kurve'),
(228, 'Jon@freezpak.com', '$wp$2y$10$hyGbtHW2CpNgZeP.oO1Dz.f352OFhfJCnHL..EAXJg9mDGJgaM/ry', 'jonfreezpak-com', 'Jon@freezpak.com', '', '2026-03-05 00:07:46', '1772669266:$generic$t0hpCHWz3kjl3_Fg2AT2752v3AUuYAkaaEQsJtus', 0, 'Jon Layme'),
(229, 'ticlark@cswg.com', '$wp$2y$10$Vcy8764M0uVk1t4udmbSMeUIZw07k5N0kFpAP2Go3HCV9JHh53iJa', 'ticlarkcswg-com', 'ticlark@cswg.com', '', '2026-03-10 20:38:52', '', 0, 'Timothy'),
(230, 'chris.rodriguez', '$wp$2y$10$SBWiWBsina0amoDKU6uLFuRLzL4tPcj4hWGUQV8y4EXCW6SrmKHCS', 'chris-rodriguez', 'christopherrrodriguez@yahoo.com', '', '2026-03-19 19:51:29', '', 0, 'Chris Rodriguez'),
(231, 'twilson', '$wp$2y$10$98WF620N2MLxjrM8NLHp9uiAG30fEhUEuqv75WL7OIhq9xlXpE1CK', 'twilson', 'twilson@devaultrefrig.com', '', '2026-03-26 13:56:46', '1774533406:$generic$OW1Je6__hWElWtI20fVnC4h6cPuKA5IG9eGO9FVk', 0, 'Taylor Wilson'),
(232, 'jrios@nor-am.com', '$wp$2y$10$ib82USKPCIEB7oGWXpV1kuxty0t.8zIwoX4uU0lh6jWK/QvMU.GoC', 'jriosnor-am-com', 'jrios@nor-am.com', '', '2026-03-27 13:14:54', '', 0, 'Julian Rios'),
(233, 'kmilliren@devaultrefrig.com', '$wp$2y$10$HNUOfe8FaYckGqK1OKGLZO0KceMrMf5.vK6oFCm7GTI0ncJYa2iNu', 'kmillirendevaultrefrig-com', 'kmilliren@devaultrefrig.com', '', '2026-03-30 11:54:19', '1774871659:$generic$X57J5iX7uVRo-8lSNXGslJrVOPS-5c59QurhQ1EW', 0, 'Kristen Milliren'),
(234, 'Carlos.Rivera@houseofraeford.com', '$wp$2y$10$ZC6o0Tn/NvuOixvC/l/11um4v7UI02GqWSuoUjXrPHdY9x9YjZkNy', 'carlos-riverahouseofraeford-com', 'Carlos.Rivera@houseofraeford.com', '', '2026-04-20 14:04:23', '', 0, 'Carlos'),
(235, 'dennis.wilson@houseofraeford.com', '$wp$2y$10$3ljby995LAt0/2mabTbvXO6199KM56XPi9vtWHvFgHBlMsmnHEPqG', 'dennis-wilsonhouseofraeford-com', 'dennis.wilson@houseofraeford.com', '', '2026-04-20 14:28:03', '', 0, 'Dennis Wilson'),
(236, 'Benjamin.rivera@houseofraeford.com', '$wp$2y$10$wyECdfg0f5pitcfyXqbXX.kI5EiMBnDOK.NxwWGr29UB6Nl0Cbtkm', 'benjamin-riverahouseofraeford-com', 'Benjamin.rivera@houseofraeford.com', '', '2026-04-23 10:41:57', '', 0, 'Benjamin Rivera'),
(237, 'Bobby.jackson@houseofraeford.com', '$wp$2y$10$VpBueO1B01O2eECj8CBOHeXZlSnhO5/vrvb9YZJKzKWhDYfIsothS', 'bobby-jacksonhouseofraeford-com', 'Bobby.jackson@houseofraeford.com', '', '2026-04-24 18:12:59', '', 0, 'Bobby Jackson'),
(238, 'edavis@nor-am.com', '$wp$2y$10$qf.wq58.F6alPfYNHOKgXO8o9j3nrdYd4REMRXQK4ir5C1U0IlGgK', 'edavisnor-am-com', 'edavis@nor-am.com', '', '2026-04-29 20:36:46', '', 0, 'Emery Davis'),
(239, 'chris.johnson', '$wp$2y$10$Q/YDuMNIWnkDL/.c/kL2gO51TPaf8yNDLDSY8SlT3hyLXvDfGEwfG', 'chris-johnson', 'chris.johnson@nexusrefrigeration.com', '', '2026-05-13 14:17:52', '1778681872:$generic$43FC8GCWZeeHgPjFmAL6IM9hFXgEDSxHMoJSCWoK', 0, 'Christopher Johnson'),
(240, 'sales@nexusrefrigeration.com', '$wp$2y$10$B4SQPKKI2x1DTJPAZTXeheJdUsDqAARAsAeGD2J0eIC7qHo.m0omC', 'salesnexusrefrigeration-com', 'sales@nexusrefrigeration.com', '', '2026-05-20 17:53:46', '', 0, 'Nexus'),
(241, 'russell.hillman@nexusrefrigeration.com', '$wp$2y$10$ldzJiamVuXbgTwq6jtdI8eykCGdp83fdu7SEgzEx/O6UwMcaGWklC', 'russell-hillmannexusrefrigeration-com', 'russell.hillman@nexusrefrigeration.com', '', '2026-05-20 17:59:49', '', 0, 'Russell Hillman'),
(242, 'jon.languasco@nexusrefrigeration.com', '$wp$2y$10$apanIxKl9D9KW24IhGCAWegSpbHafjp5sXdG/mWRlYE3Az3cCB4O2', 'jon-languasconexusrefrigeration-com', 'jon.languasco@nexusrefrigeration.com', '', '2026-05-20 18:02:33', '', 0, 'Jon Languasco'),
(243, 'amanda.murray@nexusrefrigeration.com', '$wp$2y$10$FiprCD59xOD3ydJS6LLYX.rIw2tKW79QZq.mASd7iKgEwxlzN/zsm', 'amanda-murraynexusrefrigeration-com', 'amanda.murray@nexusrefrigeration.com', '', '2026-05-20 18:05:32', '', 0, 'Amanda Murray'),
(244, 'ethan.Kishinevskiy@nexusrefrigeration.com', '$wp$2y$10$IqCXrn4q2CY9KyNr0rmWTeyHfG130kEknDSLm6lTg3MdOiNIwQFqO', 'ethan-kishinevskiynexusrefrigeration-com', 'ethan.Kishinevskiy@nexusrefrigeration.com', '', '2026-05-20 20:11:04', '1779307864:$generic$J6WN77gsLO1-fc29B8mu2mNNE16ZMALM-XhpNLZL', 0, 'Ethan Kishinevskiy'),
(245, 'Sarah.Mount@nexusrefrigeration.com', '$wp$2y$10$8WaZzE79hK2jHHXQa.zx9OvHUkQuyMxdc0Bc.6zP56v1ERSvrxsYW', 'sarah-mountnexusrefrigeration-com', 'Sarah.Mount@nexusrefrigeration.com', '', '2026-05-20 20:12:18', '', 0, 'Sarah Mount'),
(246, 'Andrea.Raymond@nexusrefrigeration.com', '$wp$2y$10$bznqQaq0KebrtfAU1vRCjeceAZZaXFVRvmvwb/8a3LhTxEVM47cJy', 'andrea-raymondnexusrefrigeration-com', 'Andrea.Raymond@nexusrefrigeration.com', '', '2026-05-20 20:13:26', '1779308006:$generic$AwS84rZqvGt2NURea2KVNng_ZghUqyQ0auO2m1kn', 0, 'Andrea Raymond'),
(247, 'Carter.Steward@nexusrefrigeration.com', '$wp$2y$10$I4RTE3EctIX4q/l8zluLz.BY3rMUqSnki3mFZ0CskdKWLqe0qe/KC', 'carter-stewardnexusrefrigeration-com', 'Carter.Steward@nexusrefrigeration.com', '', '2026-05-20 20:14:27', '', 0, 'Carter Steward'),
(248, 'Leonard.Jones@nexusrefrigeration.com', '$wp$2y$10$8CYlIAaA7X6pCEAZnJrZX.nO8KnBfXerqa6LcJpe6sU8cyqOGJe9K', 'leonard-jonesnexusrefrigeration-com', 'Leonard.Jones@nexusrefrigeration.com', '', '2026-05-20 20:15:32', '', 0, 'Leonard Jones'),
(249, 'Fred.Summs@nexusrefrigeration.com', '$wp$2y$10$9v17Z9r7lUNl87Ss97/kMeiW0WPFsKaMrTK5q2azDVwOJNQgNoHzq', 'fred-summsnexusrefrigeration-com', 'Fred.Summs@nexusrefrigeration.com', '', '2026-05-20 20:16:27', '1779308187:$generic$59cbuQIdrapvhirY_Oi-kH2m-qK7NorhxjhaGe1D', 0, 'Fred Summs'),
(250, 'Amanda.Knight@nexusrefrigeration.com', '$wp$2y$10$gcWlpmNYGHeFZlkMnXA8aeGR9JSxj3pr4QUoJePqGjzvVcOtJtxpS', 'amanda-knightnexusrefrigeration-com', 'Amanda.Knight@nexusrefrigeration.com', '', '2026-05-20 20:18:00', '1779308280:$generic$LaDPnEPpxTyV5D7z93EEz-3z80mBZv1jXLeTuo4w', 0, 'Amanda Knight'),
(251, 'Gabriel.Judy@nexusrefrigeration.com', '$wp$2y$10$KnRqONKhIjGu7atCCy2LgetNPNjkhhPx2lAXMyTviQPeYwblYTka6', 'gabriel-judynexusrefrigeration-com', 'Gabriel.Judy@nexusrefrigeration.com', '', '2026-05-20 20:19:14', '', 0, 'Gabriel Judy'),
(252, 'Ryan.Campbell@nexusrefrigeration.com', '$wp$2y$10$7I3nZS0UoT56xdFLr83X/u/0LtSq6g7X3tmSd6aDFVSPCAh7Fbo6.', 'ryan-campbellnexusrefrigeration-com', 'Ryan.Campbell@nexusrefrigeration.com', '', '2026-05-20 20:20:06', '1779308406:$generic$Zmk9AYXbLjVBMPrkTbAP523mzYEfB0jt7h1XuBvI', 0, 'Ryan Campbell'),
(253, 'miche8321@gmail.com', '$wp$2y$10$w.WvVuUjvIrQscBNhJIYyeaqYZ6rDHvCqOnH5om36h9ZtFocXlcdy', 'miche8321gmail-com', 'miche8321@gmail.com', '', '2026-05-26 22:40:33', '', 0, 'Michel Martinez-Rodriguez'),
(254, 'Tyler.Woodward@nexusrefrigeration.com', '$wp$2y$10$gAhP4T/7jXbfw0i.0NQhae6JYwYiun0ePm.BkeMQ.mDdzW26ReXCy', 'tyler-woodwardnexusrefrigeration-com', 'Tyler.Woodward@nexusrefrigeration.com', '', '2026-05-27 15:00:58', '', 0, 'Tyler Woodward'),
(255, 'jasontanksley', '$wp$2y$10$BabDbsGyL6ami0h8W4t9w.LFHt4e926rNGH2u5K7KWsn28Qvzdo6.', 'jasontanksley', 'jason.tanksley@foodcity.com', '', '2026-05-29 12:47:59', '1780058879:$generic$1PeiTFNnEKmJuoLwcPmy-58P6tNqYDZDn2wfMTXj', 0, 'Jason Tanksley'),
(256, 'data_workerdbf4c357', '$wp$2y$10$Jku7Q2vqActb/THYfhwXs.y7azzc1uwfdxUEIAIWtv51arvYJ4rnC', 'data_workerdbf4c357', 'data-worker@refrigology.com', '', '2026-06-01 21:06:28', '', 0, 'data_workerdbf4c357'),
(257, 'tdiercks', '$wp$2y$10$Ssi4c6FmX4PSP/tBJQBTOu8IRB7VoDMKgRtbw.mDsMmySC5i3IY6O', 'tdiercks', 'tyler.diercks@conagra.com', '', '2026-06-03 01:33:55', '1780450435:$generic$ckFujw1NBwxip7DXjX7DHprY8O6jKGVOB1wzOq1A', 0, 'Tyler Diercks'),
(258, 'bot', '$wp$2y$10$9uku1r7OlHscRjRTvB0sHOeDp4LjxcHbScEjHHyKCskvc0/hj4tFS', 'bot', 'bot@local.invalid', '', '2026-06-03 12:46:12', '', 0, 'Service Bot'),
(259, 'robertdeanmartin6', '$wp$2y$10$DFWxYSLIDgdcYFID4jhLqurjmH60RPYOgfwjqayTNlTxkfT2EE8l2', 'robertdeanmartin6', 'robertdeanmartin6@gmail.com', '', '2026-06-03 23:58:34', '1780531114:$generic$LYHuKdugjkC4M-MuLlehMlbLEbn-8y8nkDcAPTwd', 0, 'Robert Martin'),
(260, 'dweathers@lineagelogistics.com', '$wp$2y$10$kdIv4fF7Lf7qUE/woTUDC.vctDZEvbxP3iAZkhGQchDyppGTwpx6K', 'dweatherslineagelogistics-com', 'dweathers@lineagelogistics.com', '', '2026-06-05 17:40:50', '', 0, 'Doug Weathers'),
(261, 'mgaras@freezpak.com', '$wp$2y$10$aZ6ETbxw0LY7NktPAAGm.O3su00mFSykxTaK6vW2h1sxcBO115VRa', 'mgarasfreezpak-com', 'mgaras@freezpak.com', '', '2026-06-05 18:15:41', '', 0, 'Mena Garas'),
(262, 'kjackson@freezpak.com', '$wp$2y$10$D.OUpZoCJLTvph1nyH36UuQEHpMuJluc5oOmi.WV5QKcWaXCVaJVS', 'kjacksonfreezpak-com', 'kjackson@freezpak.com', '', '2026-06-08 15:29:10', '', 0, 'Kayani Jackson'),
(263, 'adm_fb1f4c', '$wp$2y$10$iFWZBxfcqpJNLngJWIZucuyu2XodOL9WdVrFyenWYzd.jqbF4kdrm', 'adm_fb1f4c', 'adm_fb1f4c@refrigology.com', '', '2026-06-09 01:47:10', '', 0, 'adm_fb1f4c');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `3pievzB_users`
--
ALTER TABLE `3pievzB_users`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `user_login_key` (`user_login`),
  ADD KEY `user_nicename` (`user_nicename`),
  ADD KEY `user_email` (`user_email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `3pievzB_users`
--
ALTER TABLE `3pievzB_users`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=264;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
