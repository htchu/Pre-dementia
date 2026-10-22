-- 照護紀錄表
CREATE TABLE IF NOT EXISTS care_logs (
  id SERIAL PRIMARY KEY,
  caregiver_name TEXT,
  patient_nickname TEXT,
  log_date DATE NOT NULL,
  category TEXT,
  issue TEXT NOT NULL,
  action TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 索引：加速查詢
CREATE INDEX IF NOT EXISTS idx_care_logs_log_date ON care_logs(log_date DESC);
CREATE INDEX IF NOT EXISTS idx_care_logs_caregiver ON care_logs(caregiver_name);
