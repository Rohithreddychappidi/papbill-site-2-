-- PapBill Lead Management Database Schema
-- Compatible with MySQL 8.0+ / MariaDB 10.5+

CREATE TABLE IF NOT EXISTS `leads` (
  `id` VARCHAR(64) PRIMARY KEY,
  `name` VARCHAR(150) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(32) NOT NULL,
  `business_name` VARCHAR(255) NOT NULL,
  `business_type` ENUM('cafe', 'qsr', 'fine-dining', 'cloud-kitchen', 'multi-branch', 'other') DEFAULT 'cafe',
  `outlet_count` VARCHAR(32) DEFAULT '1',
  `interested_products` TEXT,
  `timeline` ENUM('immediate', '1-month', '3-months', 'exploring') DEFAULT 'immediate',
  `message` TEXT,
  `privacy_consent` BOOLEAN NOT NULL DEFAULT TRUE,
  `consent_timestamp` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `source_page` VARCHAR(128) DEFAULT 'website',
  `status` ENUM('new', 'contacted', 'qualified', 'converted') DEFAULT 'new',
  `ip_address` VARCHAR(64),
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_email` (`email`),
  INDEX `idx_phone` (`phone`),
  INDEX `idx_created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
