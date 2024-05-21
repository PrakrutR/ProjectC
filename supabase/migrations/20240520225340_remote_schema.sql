alter table "public"."profiles" add column "cloudfare_api_key" text;

alter table "public"."profiles" add constraint "profiles_cloudfare_api_key_check" CHECK ((char_length(cloudfare_api_key) <= 1000)) not valid;

alter table "public"."profiles" validate constraint "profiles_cloudfare_api_key_check";


