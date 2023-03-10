-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(3) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `email` varchar(500) NOT NULL,
  `password` varchar(255) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=10;

-- Dumping test data for table `users` - Only for testing purposes
--

INSERT INTO `users` (`id`, `email`, `password`, `date`) VALUES
(1, 'felix@gmail.com', '12345', '2023-03-07 11:37:39');

