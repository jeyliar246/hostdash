# Supabase Storage Setup

For image and video uploads to work, you need to create a Supabase Storage bucket.

## Steps:

1. Go to your Supabase dashboard: https://supabase.com/dashboard
2. Navigate to **Storage** in the left sidebar
3. Click **"New bucket"**
4. Name it: `media`
5. Set it as **Public bucket** (to allow public access to uploaded files)
6. Click **"Create bucket"**

## Bucket Policies (Optional - for better security):

You can add RLS policies to control who can upload:

```sql
-- Allow authenticated users to upload
CREATE POLICY "Users can upload media"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'media');

-- Allow authenticated users to update their own uploads
CREATE POLICY "Users can update own media"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'media')
WITH CHECK (bucket_id = 'media');

-- Allow public read access
CREATE POLICY "Public read access"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'media');
```

## Storage Structure:

Files will be organized as:
- `media/{table_name}/{listing_id}/{filename}`

For example:
- `media/properties/123/image1.jpg`
- `media/meals/456/video.mp4`

This keeps all media organized by listing type and ID.

