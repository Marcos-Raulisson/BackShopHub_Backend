CREATE DATABASE BackShopHubAPI CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE user_profile (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  status ENUM('online', 'offline') DEFAULT 'offline',
  nick_name VARCHAR(10) NOT NULL,
  img_url VARCHAR(255),
  email VARCHAR(60) NOT NULL,
  password_hash VARCHAR(100) NOT NULL,
  phone_one VARCHAR(20) NOT NULL,
  phone_two VARCHAR(20),
  sex VARCHAR(50),
  birth DATE,
  access_level ENUM('adm', 'client') DEFAULT 'client',
  config_2FA ENUM('yes', 'no') DEFAULT 'no'
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE address (
  address_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  cep char(8) NOT NULL,
  state VARCHAR(50),
  city VARCHAR(50),
  bairro VARCHAR(20),
  number INT,
  complement VARCHAR(100),
  locals VARCHAR(20),
  FOREIGN KEY (user_id) REFERENCES user_profile(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE payment_information (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT,
  card_type VARCHAR(10),
  card_number VARCHAR(16),
  expiration_date DATE,
  card_holder VARCHAR(50),
  security_code CHAR(3),
  validation_status VARCHAR(50),
  creation_date DATE,
  FOREIGN KEY (user_id) REFERENCES user_profile(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE billing_address (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  payment_information_id INT,
  full_name VARCHAR(60),
  phone VARCHAR(10),
  cep CHAR(8),
  state VARCHAR(50),
  city VARCHAR(50),
  bairro VARCHAR(20),
  number INT,
  complement VARCHAR(100),
  locals VARCHAR(20),
  FOREIGN KEY (payment_information_id) REFERENCES payment_information(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
