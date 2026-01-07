# Clear Sight | Delhi-NCR Health Advisory System
### Government Policy Implementation & Air Quality Intelligence Portal

## 📋 Project Overview
**Clear Sight** is a comprehensive decision-support system designed for the **Government of NCT of Delhi** and the **Commission for Air Quality Management (CAQM)**. 

This platform provides real-time air quality monitoring, predictive forecasting, and a data-driven policy inventory to assist authorities in mitigating air pollution across the National Capital Region (NCR). It serves as a centralized hub for visualizing environmental data and assessing the impact of policy interventions (GRAP, odd-even, etc.).

## 🚀 Key Features

### 1. Secure Government Access
- **Restricted Login:** Access is strictly limited to authorized government personnel via verifiable credentials.
- **Authentication:** Powered by Firebase Authentication (Email/Password).
- **Security:** Public access to sensitive policy data is blocked.

### 2. Interactive Dashboard
- **Real-time Monitoring:** Visualizes live AQI data from monitoring stations across Delhi-NCR.
- **Dynamic Charts:** Trend analysis for PM2.5, PM10, NO2, and other critical pollutants.
- **Geospatial Intelligence:** Interactive maps showing station-wise pollution levels.

### 3. Policy Inventory & Impact Analysis
- **Digital Archive:** A searchable repository of all major air quality policies from 2020-2025.
- **Impact Assessment:** Quantitative analysis of policy effectiveness (e.g., "Did AQI improve after the firecracker ban?").
- **Visual Evidence:** Correlation graphs linking policy enforcement dates with air quality trends.

### 4. Forecasting & Causal Modeling
- **Predictive Analytics:** AI-driven forecasts for future air quality scenarios.
- **Causal Analysis:** Identifies primary pollution sources (vehicular, industrial, stubble burning).

---

## 🛠️ Technology Stack

- **Frontend:** HTML5, CSS3 (Modern Glassmorphism Design), Vanilla JavaScript (ES6+).
- **Visualization:** Chart.js, Leaflet (Maps), D3.js.
- **Backend/Processing:** Python (Data cleaning, embedding, and pre-processing).
- **Authentication:** Firebase Auth SDK.
- **Hosting:** Ready for **Render (Static Site)** or Firebase Hosting.

---

## 📂 Project Structure

```
/public
  ├── index.html            # Main Entry Point (Protected)
  ├── login.html            # Secure Login Page
  ├── dashboard.html        # Main Analytics Dashboard
  ├── policies.html         # Policy Inventory & Analysis
  ├── auth.js               # Authentication Logic
  ├── *.css                 # Stylesheets (Dashboard, Policies)
  ├── *.js                  # Logic Scripts (Charts, Interactions)
  └── assets/               # Images and Data (CSV)
```

---

## 🚀 Deployment Instructions

### Option 1: Render (Recommended for Submission)
1.  **Repository:** Connect this GitHub repository to Render.
2.  **Service Type:** Select **Static Site**.
3.  **Build Command:** `None` (or leave empty).
4.  **Publish Directory:** `public`
5.  **Deploy:** Render will automatically serve `public/index.html`.

### Option 2: Firebase Hosting
1.  Install Firebase CLI: `npm install -g firebase-tools`
2.  Login: `firebase login`
3.  Initialize: `firebase init` (Select Hosting, set public directory to `public`).
4.  Deploy: `firebase deploy`

---

## 🔐 Credentials
*Note: For security reasons, default admin credentials are provided separately in the confidential submission document.*

---

## 📄 License
**Government of NCT of Delhi** - Restricted Rights.
*Designed for SIH 2024 - Problem Statement 15216.*
