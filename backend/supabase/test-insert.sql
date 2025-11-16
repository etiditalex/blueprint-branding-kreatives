-- Test inserts to verify everything is working
-- Run these after verifying tables exist

-- Test insert into contacts table
INSERT INTO contacts (name, email, phone, message)
VALUES ('Test User', 'test@example.com', '+1234567890', 'This is a test message')
RETURNING *;

-- Test insert into bookings table
INSERT INTO bookings (first_name, last_name, email, phone, service, preferred_date, preferred_time)
VALUES ('John', 'Doe', 'john@example.com', '+1234567890', 'Web Design & SEO Services', CURRENT_DATE + INTERVAL '7 days', '10:00:00')
RETURNING *;

-- Check the inserted records
SELECT * FROM contacts ORDER BY created_at DESC LIMIT 5;
SELECT * FROM bookings ORDER BY created_at DESC LIMIT 5;


