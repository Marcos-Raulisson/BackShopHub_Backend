CREATE DATABASE BackShopHubAPI CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE user_profile (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  status_ ENUM('online', 'offline') DEFAULT 'offline',
  user_name VARCHAR(60) NOT NULL,
  email VARCHAR(60) NOT NULL,
  password_ VARCHAR(100) NOT NULL,
  phone VARCHAR()
  cpf CHAR(11),
  sex VARCHAR(50),
  birth DATE,
  img_url VARCHAR(255),
  access_level ENUM('adm', 'client') DEFAULT 'client',
  config_2FA ENUM('yes', 'no') DEFAULT 'no',
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
