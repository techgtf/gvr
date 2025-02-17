-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 31, 2025 at 12:21 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `greate_value`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin@gmail.com', NULL, '$2y$10$fI2Qrx26uQw8poaFzTKHyeHowQhGHUPO6m1Yui/fELXa0OkBNmiKK', NULL, '2024-12-19 00:22:01', '2024-12-19 00:22:01'),
(2, 'Test', 'test@gmail.com', NULL, '$2y$10$utfnCLHmwuAtZis1JF7IcuNuDURXRVdOngc8ySO3RzHUy1L7mR6BS', NULL, '2025-01-31 04:01:46', '2025-01-31 04:01:46');

-- --------------------------------------------------------

--
-- Table structure for table `amenities`
--

CREATE TABLE `amenities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `icons` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `amenities`
--

INSERT INTO `amenities` (`id`, `icons`, `title`, `status`, `created_at`, `updated_at`) VALUES
(1, 'amenities-icon/1734614733.Eldeco Fairway Reservelogo-1730809217.png', 'Poolssss', 1, '2024-12-19 07:55:33', '2024-12-19 07:56:35');

-- --------------------------------------------------------

--
-- Table structure for table `banner_contents`
--

CREATE TABLE `banner_contents` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sub_heading` varchar(255) DEFAULT NULL,
  `headinng` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `banner_offers`
--

CREATE TABLE `banner_offers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `md_image` varchar(255) NOT NULL,
  `sm_image` varchar(255) DEFAULT NULL,
  `alt` varchar(255) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `banner_sliders`
--

CREATE TABLE `banner_sliders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` longtext NOT NULL,
  `desktop_image` varchar(255) NOT NULL,
  `mobile_image` varchar(255) NOT NULL,
  `image_alt` varchar(255) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category` int(11) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `heading` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `short_description` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `blog_categories`
--

CREATE TABLE `blog_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `slug` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `careers`
--

CREATE TABLE `careers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `experience_id` int(11) NOT NULL,
  `job_timing` varchar(255) NOT NULL,
  `destination` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `short_description` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `slug` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `slug`, `name`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'commercial-2', 'Commercial', 1, '2024-12-19 00:51:17', '2024-12-19 00:51:17', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `category_typologies`
--

CREATE TABLE `category_typologies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `categories_id` int(11) NOT NULL,
  `typologies_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `state_id` int(11) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `is_popular` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` bigint(20) NOT NULL,
  `message` text NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `slug` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `country_code` varchar(255) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `developers`
--

CREATE TABLE `developers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `slug` varchar(255) NOT NULL,
  `developer` varchar(255) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `mobile` bigint(20) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `rera` varchar(255) DEFAULT NULL,
  `description` text NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `is_popular` varchar(255) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ethos`
--

CREATE TABLE `ethos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `icons` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `infrastructures`
--

CREATE TABLE `infrastructures` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `icons` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `value` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_applications`
--

CREATE TABLE `job_applications` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `experience_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `destination` varchar(255) NOT NULL,
  `phone` bigint(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `resume` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `slug` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `localities`
--

CREATE TABLE `localities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `city_id` int(11) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `locality` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `country_id` int(11) NOT NULL,
  `state_id` int(11) NOT NULL,
  `locality` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_admins_table', 1),
(2, '2014_10_12_000000_create_users_table', 1),
(3, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(4, '2019_08_19_000000_create_failed_jobs_table', 1),
(5, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(6, '2024_03_29_070314_create_amenities_table', 1),
(7, '2024_03_29_070314_create_ethos_table', 1),
(8, '2024_03_29_070314_create_infrastructure_table', 1),
(9, '2024_03_29_070314_create_timelines_table', 1),
(10, '2024_03_29_084331_create_states_table', 1),
(11, '2024_03_29_085734_create_countries_table', 1),
(12, '2024_03_29_093708_create_locations_table', 1),
(13, '2024_03_30_055017_create_cities_table', 1),
(14, '2024_03_30_060851_create_localities_table', 1),
(15, '2024_04_04_053657_create_categories_table', 1),
(16, '2024_04_08_074645_create_blog-categories_table', 1),
(17, '2024_04_08_103602_create_blogs_table', 1),
(18, '2024_04_08_123814_create_developers_table', 1),
(19, '2024_04_10_100603_create_sub_typologies_table', 1),
(20, '2024_04_10_100603_create_typologies_table', 1),
(21, '2024_04_10_113419_create_testimonials_table', 1),
(22, '2024_04_13_045721_create_project_sections_table', 1),
(23, '2024_04_15_122042_create_project_amenities_table', 1),
(24, '2024_04_15_122042_create_project_banner_table', 1),
(25, '2024_04_15_122042_create_project_floor_plans_table', 1),
(26, '2024_04_15_122042_create_project_gallery_table', 1),
(27, '2024_04_15_122042_create_project_pricing_table', 1),
(28, '2024_04_17_102433_create_category_typologies_table', 1),
(29, '2024_04_17_102433_create_typology_sub_typologies_table', 1),
(30, '2024_04_18_063450_create_page_sections_list_table', 1),
(31, '2024_04_18_063450_create_project_sections_list_table', 1),
(32, '2024_04_18_102935_create_projects_table', 1),
(33, '2024_04_23_092058_create_enquiries_table', 1),
(34, '2024_04_23_121304_create_banner_offers_table', 1),
(35, '2024_04_24_074740_create_project_faqs_table', 1),
(36, '2024_04_24_074740_create_project_higttlights_table', 1),
(37, '2024_04_25_073634_create_project_locations_table', 1),
(38, '2024_04_25_160632_add_logo_column_to_projects_table', 1),
(39, '2024_04_25_160632_add_primary_column_to_typologies_table', 1),
(40, '2024_05_01_064402_create_contacts_table', 1),
(41, '2024_05_01_084349_create_job_applications_query_table', 1),
(42, '2024_05_01_095938_create_job_applications_table', 1),
(43, '2024_05_02_071800_create_banner_contents_table', 1),
(44, '2024_05_02_093848_create_banner_sliders_table', 1),
(45, '2024_05_02_105843_create_project_location_advantage', 1),
(46, '2024_05_03_055323_add_brochure_in_projects_table', 1),
(47, '2024_05_03_055323_add_is_feature_projects_table', 1),
(48, '2024_05_03_055323_add_is_popular_in_developers_table', 1),
(49, '2024_05_03_055323_add_meta_in_projects_table ', 1),
(50, '2024_05_03_055323_add_slug_in_job_applications_table', 1),
(51, '2024_05_03_115233_create_platters_table', 1),
(52, '2024_05_04_064307_create_platter_banners_table', 1),
(53, '2024_05_08_041419_create_page_metas_table', 1),
(54, '2024_05_08_041737_create_pages_table', 1),
(55, '2024_11_07_064131_create_page_sections_table', 1),
(56, '2024_11_12_111420_create_project_specifications_table', 1),
(57, '2024_11_12_115841_create_project_specification_lists_table', 1),
(58, '2024_12_19_073256_add_more_column_floor_plan', 2);

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `page_metas`
--

CREATE TABLE `page_metas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `page` int(11) NOT NULL,
  `meta_title` longtext NOT NULL,
  `meta_keyword` longtext DEFAULT NULL,
  `meta_description` longtext DEFAULT NULL,
  `head_data` longtext DEFAULT NULL,
  `footer_data` longtext DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `page_sections`
--

CREATE TABLE `page_sections` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT '1',
  `seq` varchar(255) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `page_section_lists`
--

CREATE TABLE `page_section_lists` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `page_id` int(11) NOT NULL,
  `page_section` varchar(255) NOT NULL,
  `heading` longtext NOT NULL,
  `description` longtext DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `platters`
--

CREATE TABLE `platters` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category` int(11) DEFAULT NULL,
  `typology` int(11) DEFAULT NULL,
  `sub_typology` int(11) DEFAULT NULL,
  `cities` int(11) DEFAULT NULL,
  `type` int(11) NOT NULL DEFAULT 0,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_keyword` varchar(255) DEFAULT NULL,
  `meta_description` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `platter_banners`
--

CREATE TABLE `platter_banners` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `platter_id` int(11) NOT NULL,
  `desktop_image` varchar(255) NOT NULL,
  `mobile_image` varchar(255) NOT NULL,
  `alt_text` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `categorie_id` int(11) NOT NULL,
  `typologie_id` int(11) NOT NULL,
  `sub_typologie_id` int(11) DEFAULT NULL,
  `project_status` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `ivr_no` varchar(255) DEFAULT NULL,
  `whatsapp_no` varchar(255) DEFAULT NULL,
  `payment_plan` varchar(255) DEFAULT NULL,
  `rera_no` varchar(255) DEFAULT NULL,
  `feature_image` varchar(255) DEFAULT NULL,
  `is_feature` tinyint(1) NOT NULL DEFAULT 0,
  `logo` varchar(255) DEFAULT NULL,
  `short_description` varchar(255) DEFAULT NULL,
  `brochure` longtext DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `meta_title` longtext DEFAULT NULL,
  `meta_keyword` longtext DEFAULT NULL,
  `meta_description` longtext DEFAULT NULL,
  `head_data` longtext DEFAULT NULL,
  `footer_data` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `categorie_id`, `typologie_id`, `sub_typologie_id`, `project_status`, `name`, `slug`, `ivr_no`, `whatsapp_no`, `payment_plan`, `rera_no`, `feature_image`, `is_feature`, `logo`, `short_description`, `brochure`, `created_at`, `updated_at`, `deleted_at`, `meta_title`, `meta_keyword`, `meta_description`, `head_data`, `footer_data`) VALUES
(1, 1, 1, NULL, 1, 'DLF MALL', 'dlf-mall', '9999999999', NULL, NULL, NULL, 'feature-image/1734589458.High Rise Residential Project 200 Ftfeature-image-1719551863.jpg', 0, NULL, NULL, NULL, '2024-12-19 00:54:18', '2024-12-19 00:54:18', NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `project_amenities`
--

CREATE TABLE `project_amenities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `project_id` int(11) NOT NULL,
  `amenities_id` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `project_banners`
--

CREATE TABLE `project_banners` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `project_id` int(11) NOT NULL,
  `desktop_image` varchar(255) NOT NULL,
  `mobile_image` varchar(255) DEFAULT NULL,
  `alt_text` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `project_enquiries`
--

CREATE TABLE `project_enquiries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `project_id` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `phone` bigint(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `project_faqs`
--

CREATE TABLE `project_faqs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `project_id` int(11) DEFAULT NULL,
  `question` longtext NOT NULL,
  `answer` longtext NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `project_floor_plans`
--

CREATE TABLE `project_floor_plans` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `project_id` int(11) NOT NULL,
  `sub_typology` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `protected` int(11) NOT NULL DEFAULT 0,
  `size` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `more_typology` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `carpet_area` int(11) DEFAULT NULL,
  `balcony_area` int(11) DEFAULT NULL,
  `super_area` int(11) DEFAULT NULL,
  `sizes_type` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `project_floor_plans`
--

INSERT INTO `project_floor_plans` (`id`, `project_id`, `sub_typology`, `image`, `protected`, `size`, `status`, `created_at`, `updated_at`, `deleted_at`, `more_typology`, `price`, `carpet_area`, `balcony_area`, `super_area`, `sizes_type`) VALUES
(1, 1, 1, 'project/floor-plans/1734608687.auth-login-illustration-light.png', 0, 2283, 1, '2024-12-19 05:35:46', '2024-12-19 06:14:47', NULL, 'DD/ 4 BR/ Study / Kitchen/ 4 Toilets/ Bal.', 10700000, 1477, 230, 2283, 1);

-- --------------------------------------------------------

--
-- Table structure for table `project_gallery`
--

CREATE TABLE `project_gallery` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `project_id` int(11) NOT NULL,
  `alt_text` varchar(255) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `project_highlights`
--

CREATE TABLE `project_highlights` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `project_id` int(11) NOT NULL,
  `highlight` longtext NOT NULL,
  `key_highlight` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `project_locations`
--

CREATE TABLE `project_locations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `project_id` int(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `longtitude` varchar(255) DEFAULT NULL,
  `state` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `locality` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `project_location_advantages`
--

CREATE TABLE `project_location_advantages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `project_id` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `distance` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `project_prices`
--

CREATE TABLE `project_prices` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `project_id` int(11) NOT NULL,
  `sub_typology` int(11) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `size_type` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `project_sections`
--

CREATE TABLE `project_sections` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `seq` int(11) NOT NULL DEFAULT 0,
  `project_id` int(11) NOT NULL,
  `section_type` varchar(255) NOT NULL,
  `heading` varchar(255) NOT NULL,
  `sub_heading` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `image_alt` varchar(255) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `project_sections_list`
--

CREATE TABLE `project_sections_list` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT '1',
  `seq` varchar(255) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `project_specifications`
--

CREATE TABLE `project_specifications` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `project_id` int(11) NOT NULL,
  `heading` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `project_specification_lists`
--

CREATE TABLE `project_specification_lists` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `spec_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `value` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `states`
--

CREATE TABLE `states` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `country_id` int(11) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sub_typologies`
--

CREATE TABLE `sub_typologies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `slug` varchar(255) NOT NULL,
  `typology` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sub_typologies`
--

INSERT INTO `sub_typologies` (`id`, `slug`, `typology`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, '4-bhk', '4 Bhk', '1', '2024-12-19 00:45:32', '2024-12-19 00:45:32', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `destination` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `timelines`
--

CREATE TABLE `timelines` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) NOT NULL,
  `year` varchar(255) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `typologies`
--

CREATE TABLE `typologies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `slug` varchar(255) NOT NULL,
  `typology` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `primary` int(11) NOT NULL DEFAULT 0,
  `status` varchar(255) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `typologies`
--

INSERT INTO `typologies` (`id`, `slug`, `typology`, `image`, `primary`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'appartmenta', 'Appartmenta', 'typology/1734589365.1703571880.banner1.jpg', 0, '1', '2024-12-19 00:52:45', '2024-12-19 00:52:45', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `typology_sub_typologies`
--

CREATE TABLE `typology_sub_typologies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `typologies_id` int(11) NOT NULL,
  `sub_typologies_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_email_unique` (`email`);

--
-- Indexes for table `amenities`
--
ALTER TABLE `amenities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `banner_contents`
--
ALTER TABLE `banner_contents`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `banner_offers`
--
ALTER TABLE `banner_offers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `banner_sliders`
--
ALTER TABLE `banner_sliders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog_categories`
--
ALTER TABLE `blog_categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `blog_categories_name_unique` (`name`);

--
-- Indexes for table `careers`
--
ALTER TABLE `careers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_name_unique` (`name`);

--
-- Indexes for table `category_typologies`
--
ALTER TABLE `category_typologies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cities_slug_unique` (`slug`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `countries_slug_unique` (`slug`);

--
-- Indexes for table `developers`
--
ALTER TABLE `developers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ethos`
--
ALTER TABLE `ethos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `infrastructures`
--
ALTER TABLE `infrastructures`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `job_applications`
--
ALTER TABLE `job_applications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `localities`
--
ALTER TABLE `localities`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `localities_slug_unique` (`slug`);

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `page_metas`
--
ALTER TABLE `page_metas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `page_sections`
--
ALTER TABLE `page_sections`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `page_section_lists`
--
ALTER TABLE `page_section_lists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `platters`
--
ALTER TABLE `platters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `platter_banners`
--
ALTER TABLE `platter_banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_amenities`
--
ALTER TABLE `project_amenities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_banners`
--
ALTER TABLE `project_banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_enquiries`
--
ALTER TABLE `project_enquiries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_faqs`
--
ALTER TABLE `project_faqs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_floor_plans`
--
ALTER TABLE `project_floor_plans`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_gallery`
--
ALTER TABLE `project_gallery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_highlights`
--
ALTER TABLE `project_highlights`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_locations`
--
ALTER TABLE `project_locations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_location_advantages`
--
ALTER TABLE `project_location_advantages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_prices`
--
ALTER TABLE `project_prices`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_sections`
--
ALTER TABLE `project_sections`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_sections_list`
--
ALTER TABLE `project_sections_list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_specifications`
--
ALTER TABLE `project_specifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_specification_lists`
--
ALTER TABLE `project_specification_lists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `states`
--
ALTER TABLE `states`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `states_slug_unique` (`slug`);

--
-- Indexes for table `sub_typologies`
--
ALTER TABLE `sub_typologies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `timelines`
--
ALTER TABLE `timelines`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `typologies`
--
ALTER TABLE `typologies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `typology_sub_typologies`
--
ALTER TABLE `typology_sub_typologies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `amenities`
--
ALTER TABLE `amenities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `banner_contents`
--
ALTER TABLE `banner_contents`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `banner_offers`
--
ALTER TABLE `banner_offers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `banner_sliders`
--
ALTER TABLE `banner_sliders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blog_categories`
--
ALTER TABLE `blog_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `careers`
--
ALTER TABLE `careers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `category_typologies`
--
ALTER TABLE `category_typologies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `developers`
--
ALTER TABLE `developers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ethos`
--
ALTER TABLE `ethos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `infrastructures`
--
ALTER TABLE `infrastructures`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `job_applications`
--
ALTER TABLE `job_applications`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `localities`
--
ALTER TABLE `localities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `locations`
--
ALTER TABLE `locations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `page_metas`
--
ALTER TABLE `page_metas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `page_sections`
--
ALTER TABLE `page_sections`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `page_section_lists`
--
ALTER TABLE `page_section_lists`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `platters`
--
ALTER TABLE `platters`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `platter_banners`
--
ALTER TABLE `platter_banners`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `project_amenities`
--
ALTER TABLE `project_amenities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `project_banners`
--
ALTER TABLE `project_banners`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `project_enquiries`
--
ALTER TABLE `project_enquiries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `project_faqs`
--
ALTER TABLE `project_faqs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `project_floor_plans`
--
ALTER TABLE `project_floor_plans`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `project_gallery`
--
ALTER TABLE `project_gallery`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `project_highlights`
--
ALTER TABLE `project_highlights`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `project_locations`
--
ALTER TABLE `project_locations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `project_location_advantages`
--
ALTER TABLE `project_location_advantages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `project_prices`
--
ALTER TABLE `project_prices`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `project_sections`
--
ALTER TABLE `project_sections`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `project_sections_list`
--
ALTER TABLE `project_sections_list`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `project_specifications`
--
ALTER TABLE `project_specifications`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `project_specification_lists`
--
ALTER TABLE `project_specification_lists`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `states`
--
ALTER TABLE `states`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sub_typologies`
--
ALTER TABLE `sub_typologies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `timelines`
--
ALTER TABLE `timelines`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `typologies`
--
ALTER TABLE `typologies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `typology_sub_typologies`
--
ALTER TABLE `typology_sub_typologies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
