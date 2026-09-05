This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


Database schemas

### profiles
| Column       | PostgreSQL type | Required | Default |
| ------------ | --------------- | -------: | ------- |
| `id`         | `uuid`          |        ✅ | —       |
| `full_name`  | `text`          |        ❌ | `null`  |
| `avatar_url` | `text`          |        ❌ | `null`  |
| `created_at` | `timestamptz`   |        ✅ | `now()` |
| `updated_at` | `timestamptz`   |        ✅ | `now()` |


#### business
| Column          | Type          | Required |
| --------------- | ------------- | -------: |
| `id`            | `uuid`        |        ✅ |
| `owner_id`      | `uuid`        |        ✅ |
| `name`          | `text`        |        ✅ |
| `slug`          | `text`        |        ✅ |
| `description`   | `text`        |        ❌ |
| `business_type` | `text`        |        ❌ |
| `location`      | `text`        |        ❌ |
| `website`       | `text`        |        ❌ |
| `phone`         | `text`        |        ❌ |
| `email`         | `text`        |        ❌ |
| `logo_url`      | `text`        |        ❌ |
| `created_at`    | `timestamptz` |        ✅ |
| `updated_at`    | `timestamptz` |        ✅ |

#### brand_settings
| Column               | Type          |
| -------------------- | ------------- |
| `id`                 | `uuid`        |
| `business_id`        | `uuid`        |
| `primary_language`   | `text`        |
| `secondary_language` | `text`        |
| `tone`               | `text`        |
| `target_audience`    | `text`        |
| `brand_description`  | `text`        |
| `primary_color`      | `text`        |
| `secondary_color`    | `text`        |
| `brand_keywords`     | `text[]`      |
| `avoid_words`        | `text[]`      |
| `created_at`         | `timestamptz` |
| `updated_at`         | `timestamptz` |

#### social_accounts
| Column          | Type          |
| --------------- | ------------- |
| `id`            | `uuid`        |
| `business_id`   | `uuid`        |
| `platform`      | `text`        |
| `account_name`  | `text`        |
| `account_id`    | `text`        |
| `access_token`  | `text`        |
| `refresh_token` | `text`        |
| `expires_at`    | `timestamptz` |
| `status`        | `text`        |
| `created_at`    | `timestamptz` |
| `updated_at`    | `timestamptz` |

### products
| Column          | Type          |
| --------------- | ------------- |
| `id`            | `uuid`        |
| `business_id`   | `uuid`        |
| `platform`      | `text`        |
| `account_name`  | `text`        |
| `account_id`    | `text`        |
| `access_token`  | `text`        |
| `refresh_token` | `text`        |
| `expires_at`    | `timestamptz` |
| `status`        | `text`        |
| `created_at`    | `timestamptz` |
| `updated_at`    | `timestamptz` |


### content
| Column           | Type          | Required |
| ---------------- | ------------- | -------: |
| `id`             | `uuid`        |        ✅ |
| `business_id`    | `uuid`        |        ✅ |
| `created_by`     | `uuid`        |        ✅ |
| `title`          | `text`        |        ❌ |
| `topic`          | `text`        |        ❌ |
| `content_type`   | `text`        |        ✅ |
| `platform`       | `text`        |        ✅ |
| `language`       | `text`        |        ✅ |
| `caption`        | `text`        |        ❌ |
| `hashtags`       | `text[]`      |        ❌ |
| `call_to_action` | `text`        |        ❌ |
| `image_url`      | `text`        |        ❌ |
| `status`         | `text`        |        ✅ |
| `scheduled_at`   | `timestamptz` |        ❌ |
| `published_at`   | `timestamptz` |        ❌ |
| `created_at`     | `timestamptz` |        ✅ |
| `updated_at`     | `timestamptz` |        ✅ |

### content_generations
| Column           | Type          | Required |
| ---------------- | ------------- | -------: |
| `id`             | `uuid`        |        ✅ |
| `business_id`    | `uuid`        |        ✅ |
| `created_by`     | `uuid`        |        ✅ |
| `title`          | `text`        |        ❌ |
| `topic`          | `text`        |        ❌ |
| `content_type`   | `text`        |        ✅ |
| `platform`       | `text`        |        ✅ |
| `language`       | `text`        |        ✅ |
| `caption`        | `text`        |        ❌ |
| `hashtags`       | `text[]`      |        ❌ |
| `call_to_action` | `text`        |        ❌ |
| `image_url`      | `text`        |        ❌ |
| `status`         | `text`        |        ✅ |
| `scheduled_at`   | `timestamptz` |        ❌ |
| `published_at`   | `timestamptz` |        ❌ |
| `created_at`     | `timestamptz` |        ✅ |
| `updated_at`     | `timestamptz` |        ✅ |

### usage
| Column           | Type          | Required |
| ---------------- | ------------- | -------: |
| `id`             | `uuid`        |        ✅ |
| `business_id`    | `uuid`        |        ✅ |
| `created_by`     | `uuid`        |        ✅ |
| `title`          | `text`        |        ❌ |
| `topic`          | `text`        |        ❌ |
| `content_type`   | `text`        |        ✅ |
| `platform`       | `text`        |        ✅ |
| `language`       | `text`        |        ✅ |
| `caption`        | `text`        |        ❌ |
| `hashtags`       | `text[]`      |        ❌ |
| `call_to_action` | `text`        |        ❌ |
| `image_url`      | `text`        |        ❌ |
| `status`         | `text`        |        ✅ |
| `scheduled_at`   | `timestamptz` |        ❌ |
| `published_at`   | `timestamptz` |        ❌ |
| `created_at`     | `timestamptz` |        ✅ |
| `updated_at`     | `timestamptz` |        ✅ |

### subscriptions
| Column                 | Type          |
| ---------------------- | ------------- |
| `id`                   | `uuid`        |
| `business_id`          | `uuid`        |
| `provider`             | `text`        |
| `customer_id`          | `text`        |
| `subscription_id`      | `text`        |
| `plan`                 | `text`        |
| `status`               | `text`        |
| `current_period_start` | `timestamptz` |
| `current_period_end`   | `timestamptz` |
| `cancel_at_period_end` | `boolean`     |
| `created_at`           | `timestamptz` |
| `updated_at`           | `timestamptz` |

