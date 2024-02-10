CREATE DATABASE BackShopHubAPI
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

CREATE TABLE user_profile (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  status ENUM('online', 'offline') DEFAULT 'offline',
  full_name VARCHAR(255) NOT NULL,
  img_url VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  phone_one VARCHAR(15) NOT NULL,
  phone_two VARCHAR(15),
  sex VARCHAR(10),
  birth DATE,
  access_level ENUM('adm', 'client') DEFAULT 'client',
  config_2FA ENUM('yes', 'no') DEFAULT 'no'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
