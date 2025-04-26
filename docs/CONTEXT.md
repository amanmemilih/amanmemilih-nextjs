# CONTEXT: AmanMemilih Next.js Project

## Project Overview
The **AmanMemilih** project is a web application built using the Next.js framework. It is designed to provide real-time election monitoring and results visualization for various election types, including presidential, legislative, and regional elections. The application allows users to search and view election results based on their region and polling station (TPS).

## Project Structure
The project is organized as follows:

```
amanmemilih-nextjs/
├── deploy.sh
├── docker-compose.yaml
├── Dockerfile
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── public/
│   ├── assets/
│   │   ├── css/
│   │   │   └── global.css
│   │   ├── images/
│   │   │   ├── card1.png
│   │   │   ├── logo.svg
│   │   │   └── ...other images
│   │   └── plexus.mp4
├── src/
│   ├── app/
│   │   ├── layout.jsx
│   │   ├── page.jsx
│   │   ├── berita/
│   │   │   └── [id]/
│   │   │       └── page.jsx
│   │   ├── hasil/
│   │   │   └── [id]/
│   │   │       └── [election]/
│   │   │           └── page.jsx
│   │   └── lihat-suara/
│   │       └── page.jsx
│   ├── core/
│   │   ├── components/
│   │   │   ├── Footer.jsx
│   │   │   ├── Loading.jsx
│   │   │   └── Navbar.jsx
│   │   ├── config/
│   │   │   └── index.js
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   │   └── tailwind.css
│   │   └── utils/
│   │       └── api.js
```

## Key Components

### 1. **Frontend**
- **Next.js Pages**: 
  - `src/app/lihat-suara/page.jsx`: Displays election results and allows users to search by region.
  - `src/app/hasil/[id]/[election]/page.jsx`: Displays detailed election results for a specific region and election type.
- **Components**:
  - `Navbar.jsx` and `Footer.jsx`: Provide consistent navigation and footer across the application.
  - `Loading.jsx`: Displays a loading spinner during data fetching.

### 2. **Backend Integration**
- **API Utility**: `src/core/utils/api.js` is used to interact with backend APIs for fetching election data, such as candidate summaries and regional information.

### 3. **Styling**
- **Tailwind CSS**: The project uses Tailwind CSS for styling, with custom configurations in `tailwind.config.js`.
- **Global Styles**: Defined in `src/core/styles/globals.css` and `tailwind.css`.

### 4. **Public Assets**
- Contains images, videos, and global CSS files used across the application.

## Features
- **Real-Time Election Monitoring**: Displays live election results for various election types.
- **Region-Based Search**: Allows users to search for results based on their province, district, subdistrict, village, and polling station.
- **Responsive Design**: Ensures a seamless user experience across devices.

## Deployment
The project includes deployment scripts (`deploy.sh`) and Docker configurations (`Dockerfile`, `docker-compose.yaml`) for containerized deployment.

## How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Access the application at `http://localhost:3000`.

## Notes
- Ensure the backend API is running and accessible for the application to fetch data.
- Update environment variables as needed in `.env` files.