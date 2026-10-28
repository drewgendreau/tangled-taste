CREATE TABLE IF NOT EXISTS feedback (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT    NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now')),
  category   TEXT    NOT NULL DEFAULT 'other',  -- bug | idea | other
  name       TEXT,
  email      TEXT,
  message    TEXT    NOT NULL,
  user_agent TEXT
);
CREATE INDEX IF NOT EXISTS feedback_created ON feedback (created_at);
