# Sanjay Banait Portfolio

A responsive, static personal portfolio for Sanjay Banait, an aspiring Cloud Engineer and Computer Science Engineering student. It uses only HTML, CSS, JavaScript, and local assets, so it is suitable for Amazon S3 static website hosting.

## What is included

- Responsive navigation with a keyboard-accessible mobile menu
- Professional dark blue cloud-engineering visual design
- About, skills, projects, achievements, education, certifications, and contact sections
- Resume download and local profile photo
- Scroll progress, section reveal, active navigation state, and back-to-top link
- A validated contact form that opens the visitor's email application through `mailto:`; it does not send data to a server

## Folder structure

```text
portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── favicon.svg
    ├── profile.jpg
    └── resume.pdf
```

`assets/profile.jpg` is the supplied professional headshot. `assets/resume.pdf` is the supplied resume. To replace either later, use the same filename and keep it in the `assets` folder.

## Run locally

1. Open this folder in Visual Studio Code.
2. For a quick preview, open `index.html` in a browser.
3. For a more realistic local test, install the VS Code **Live Server** extension, right-click `index.html`, then choose **Open with Live Server**. No installation is required for the website itself.
4. Check the browser at a narrow mobile width and at a desktop width. Test the navigation menu, resume download, GitHub link, email links, and contact form.

## Deploy to Amazon S3 static website hosting

This project is static: do not upload secrets, private resumes, credentials, or configuration files that should not be public. Use a dedicated practice bucket containing only intended public website files.

1. In the AWS console, open **S3** and choose **Create bucket**.
2. Pick a globally unique bucket name and an AWS Region. For S3 website hosting, the name does not have to match a domain name.
3. Keep the bucket dedicated to this public practice portfolio. Do not place private files in it.
4. To make this public website available, turn off **Block all public access** for this bucket only, acknowledge the warning, and save. Public read access is required for the S3 website endpoint.
5. After the bucket is created, choose **Upload** and upload the contents of this folder: `index.html`, `style.css`, `script.js`, and the whole `assets` folder. Do not upload the parent `portfolio` folder itself; `index.html` must be at the bucket root.
6. Open the bucket’s **Properties** tab. Under **Static website hosting**, choose **Edit**, enable it, choose **Host a static website**, and set the index document to `index.html`. Optionally set the error document to `index.html`.
7. Open the bucket’s **Permissions** tab and add this bucket policy, replacing `YOUR-BUCKET-NAME` exactly. It permits public reading of website files only.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadForWebsite",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
    }
  ]
}
```

8. Return to **Properties** and open the displayed **Bucket website endpoint** in a browser. An S3 static website endpoint uses **HTTP**, not HTTPS. Confirm that the profile image, favicon, stylesheet, JavaScript, resume download, and navigation all load.

## Common S3 issues

- **403 Access Denied:** Confirm that Block Public Access is configured for this dedicated public bucket, the policy has the correct bucket name, and the policy permits `s3:GetObject` on `/*`.
- **404 or blank page:** Confirm `index.html` is at the bucket root and the static-hosting index document is `index.html`.
- **No styling or image:** Check exact capitalization in asset paths. S3 object names are case-sensitive.
- **Old version still visible:** Refresh with cache bypass, then confirm the latest file upload time in the bucket.
- **Resume does not download:** Confirm the object is named `assets/resume.pdf` and was uploaded with the `assets` folder.

## Security, cost, and cleanup

- Keep this bucket limited to public, non-sensitive website files. The policy above allows anyone to read its objects.
- S3 charges can apply for storage and data transfer. Review AWS pricing and your account’s billing dashboard before experimenting at scale.
- Do not upload AWS keys, `.env` files, private documents, or personal data beyond what you intentionally want public.
- When you are finished, first empty the bucket’s objects, then delete the bucket. This stops future storage charges.

## Future improvements

After you have verified the S3 version, you could add CloudFront and a custom domain for HTTPS. That is optional and has not been configured by this project. A form service or backend could also replace the current `mailto:` contact action if server-side message delivery is needed.
