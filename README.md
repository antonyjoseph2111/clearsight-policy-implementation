# Clear Sight: Delhi-NCR Air Quality Policy Dashboard 🌍💨

> **Comprehensive Policy Analysis & Impact Assessment (2020-2025)**

**Clear Sight** is an advanced interactive dashboard designed to analyze, visualize, and forecast the impact of government policies on air quality in the Delhi-NCR region. It serves as a tool for policymakers, researchers, and citizens to understand the effectiveness of interventions like BS-VI norms, GRAP, and EV policies.

![Project Status](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-MIT-blue)
![Tech Stack](https://img.shields.io/badge/Tech-HTML%20%7C%20JS%20%7C%20Python-orange)

## 🚀 Key Features

*   **📊 Interactive Visualizations**: Dynamic charts powered by **Chart.js** displaying AQI trends, seasonal variations, and pollutant breakdowns (PM2.5, PM10, NO2, etc.).
*   **🗺️ Geospatial Analysis**: Interactive maps using **Leaflet.js** showing district-wise AQI heatmaps, pollution hotspots, and cross-state pollution transport.
*   **📜 Policy Inventory**: A detailed, searchable database of major policy interventions (2020-2025) with detailed impact assessments.
*   **📉 Impact Analysis**: Dedicated sections analyzing specific policies like the "BS-VI Implementation" and "Stubble Burning Control".
*   **🤖 Backend Analysis**: Includes a Python script (`policy_impact_analysis.py`) that processes raw CSV data to generate static reports and statistical summaries.
*   **⚡ Deployment Ready**: Configured for easy deployment to **Firebase Hosting**.

## 📂 Project Structure

```
├── dashboard.html          # Main application entry point
├── dashboard_style.css     # Dashboard styling
├── dashboard_main.js       # Core logic and initialization
├── dashboard_data.js       # Data processing & static policy database
├── dashboard_charts.js     # Chart.js and Leaflet visualization logic
├── dashboard_interactions.js # UI interactions, filtering, and export
├── policy_impact_analysis.py # Python text/image analysis tool
├── combined_delhi_aqi_from_graphs1.csv # Source data
├── prepare_deploy.py       # Deployment automation script
└── README.md               # Project documentation
```

## 🛠️ Installation & Setup

### Prerequisites
*   A modern web browser (Chrome, Firefox, Edge).
*   **Python 3.x** (for running analysis scripts).
*   **Git** (for version control).

### Local Setup

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/antonyjoseph2111/clearsight-policy-implementation.git
    cd clearsight-policy-implementation
    ```

2.  **Run the Dashboard**:
    *   Simply open `dashboard.html` in your web browser.
    *   *Note: For best results with local CSV loading, use a local server (e.g., Live Server in VS Code or Python HTTP server).*
    ```bash
    # Python Simple Server
    python -m http.server
    # Open http://localhost:8000/dashboard.html
    ```

3.  **Run Policy Analysis (Python)**:
    *   Install dependencies:
    ```bash
    pip install pandas matplotlib seaborn numpy
    ```
    *   Run the script:
    ```bash
    python policy_impact_analysis.py
    ```
    *   This will generate a detailed comprehensive plot image (`policy_impact_analysis.png`) and print a statistical report to the console.

## 🌐 Deployment

The project is set up for **Firebase Hosting**.

1.  **Prepare files**:
    Run the preparation script to organize files into a `public/` directory:
    ```bash
    python prepare_deploy.py
    ```

2.  **Deploy**:
    ```bash
    firebase login
    firebase init  # Select 'Hosting', choose 'public' as directory
    firebase deploy
    ```

## 📊 Data Source
The dashboard utilizes `combined_delhi_aqi_from_graphs1.csv`, which contains historical and aggregated air quality data for the Delhi-NCR region, structured for policy correlation analysis.

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
