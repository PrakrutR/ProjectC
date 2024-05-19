ALTER TABLE profiles ADD COLUMN gooseai_api_key TEXT CHECK (char_length(gooseai_api_key) <= 1000);
