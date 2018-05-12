DROP DATABASE IF EXISTS represented_app;
CREATE DATABASE represented_app;

\c represented_app


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password_digest VARCHAR,
  first_name VARCHAR,
  last_name VARCHAR, 
  email VARCHAR(355) UNIQUE NOT NULL,
  phone VARCHAR,
  member_since TIMESTAMP NOT NULL,
  issue_1 TEXT,
  issue_2 TEXT,
  issue_3 TEXT
);

CREATE TABLE reps (
  id SERIAL PRIMARY KEY, 
  rep_api_id VARCHAR,
  in_vote NUMERIC NOT NULL DEFAULT 0;
  out_vote NUMERIC NOT NULL DEFAULT 0;
);

CREATE TABLE users_reps (
  users_id INT REFERENCES users(id),
  reps_id INT REFERENCES reps(id)
);

