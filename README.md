# cloud-hosted-web-deployment
Cloud-based web deployment using Amazon S3, static website hosting, access permissions

## Project Overview

This project demonstrates the deployment of a web application using Amazon Web Services (AWS). It focuses on cloud storage, static website hosting, access permissions, and the fundamentals of cloud-based application deployment.

## Objectives

- Deploy web content using AWS cloud infrastructure.
- Configure Amazon S3 for static website hosting.
- Understand object storage and bucket-level permissions.
- Publish and manage website files using version control.
- Verify deployment across desktop and mobile browsers.

## Technologies and Services

- **Amazon S3** — Object storage and static website hosting
- **AWS IAM and S3 Permissions** — Understanding access control
- **HTML5, CSS3, JavaScript** — Web application files
- **Git** — Version control
- **Web Browsers** — Deployment testing and verification

## Architecture

User Browser → Amazon S3 Static Website Endpoint → Website Files Stored in S3

## Implementation

1. Created an Amazon S3 bucket for hosting website files.
2. Enabled static website hosting.
3. Uploaded the required HTML, CSS, JavaScript, and image files.
4. Configured the necessary bucket permissions for website access.
5. Verified that the deployed website and its assets loaded correctly.
6. Tested the deployment on desktop and mobile devices.

## Key Learnings

- Cloud-based static website deployment
- Amazon S3 bucket and object management
- Static website hosting configuration
- Public access and permission troubleshooting
- Version control and source code management
- Basic cloud deployment architecture

## Security Considerations

- Public read access should be limited to the files required for the website.
- AWS credentials and secret keys must never be committed to the repository.
- HTTPS can be configured using Amazon CloudFront in a future enhancement.

## Future Enhancements

- Configure HTTPS using Amazon CloudFront.
- Connect a custom domain.
- Automate deployment using a CI/CD pipeline.
- Explore AWS monitoring and logging services.

## Live Deployment

Add your S3 static website endpoint here.

## Author

Sanjay Banait
