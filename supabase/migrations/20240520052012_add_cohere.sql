ALTER TABLE profiles ADD COLUMN cohere_api_key TEXT CHECK (char_length(cohere_api_key) <= 1000);
