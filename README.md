# AuzizAtlas

An interactive **map-based decision support system** that integrates multiple Australian government datasets to provide **comprehensive analysis for data center site selection**.

This project demonstrates how energy, connectivity, environmental, and economic data can be combined into a **GIS-based Multi-Criteria Decision Analysis (MCDA)** framework to guide evidence-based planning and investment in Australia’s data center industry.

---

## Project Overview

Australia is emerging as a leading hub for **AI, cloud computing, and data infrastructure**. With major investments such as **Amazon’s AU\$20B commitment (2025–2029)** and ongoing expansion in Sydney, Melbourne, and Perth, selecting **optimal locations** for future data centers is critical.

This tool integrates datasets from AEMO, Geoscience Australia, Bureau of Meteorology, ACMA, and BITRE to support **strategic site selection and operational optimization**.

---

## Key Features

### Interactive Map Interface

* 11 strategic locations across Australia with **color-coded suitability ratings**
* **Renewable Energy Zones (REZs)** overlay
* **Submarine cable landing points** for connectivity

### Comprehensive Location Analysis

Clicking a location provides:

* **Energy Metrics (AEMO):**

  * Real-time energy pricing (e.g., \$68/MWh in Perth vs \$125/MWh in Darwin)
  * Renewable energy penetration
  * Grid capacity & substation distance

* **Connectivity Assessment (ACMA/NBN):**

  * Latency to Asia (25–90ms)
  * Fiber infrastructure access
  * Submarine cable proximity

* **Environmental Factors (BoM/Geoscience):**

  * Cooling degree days
  * Disaster risk (flood, storm, cyclone)
  * Water availability

* **Economic Analysis (BITRE/Regional Data):**

  * Land costs
  * Skilled workforce availability
  * Incentives & subsidies

### Location Highlights

* **Tier 1 (85+ score):** Sydney (92), Melbourne (89), Perth (88)
* **Tier 2 (70–84):** Canberra (81), Newcastle (78), Brisbane (76)
* **Tier 3 (50–69):** Darwin (65), Townsville (62)

### Decision Support Tools

* Multi-criteria **radar charts**
* Comparative **scorecards**
* **Strategic recommendations** with data-backed justifications

---

## Renewable Energy Zones (REZs) Highlighted

* Central-West Orana (NSW)
* New England (NSW)
* Hunter-Central Coast (NSW)
* WA Solar Hub
* Victoria Wind Corridor

---

## Research Foundation

This tool is built on a **multi-criteria decision-making framework** that integrates:

* **Energy Infrastructure (30%)** – grid, renewables, pricing
* **Connectivity (25%)** – submarine cables, fiber, latency
* **Environmental Risk (20%)** – disasters, cooling, water
* **Land & Workforce (15%)** – availability & approval complexity
* **Economic Incentives (10%)** – costs, subsidies, state programs

The approach aligns with **Rewiring the Nation investments**, **NABERS efficiency standards**, and Australia’s goal of becoming a **renewable-powered digital hub**.

---

## Roadmap

### Phase 1 – **Interactive Dashboard** 

* GIS-based site scoring
* Real-time energy overlay
* Location-based analysis

### Phase 2 – **Operational Optimization**

* Energy consumption forecasting
* Renewable PPAs & matching
* Dynamic cooling optimization

### Phase 3 – **Predictive Analytics**

* ML-based demand forecasting
* Scenario planning for grid expansion
* Economic impact modeling

---

## How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/data-center-site-selection.git
   cd data-center-site-selection
   ```
2. Start a local server (required to bypass browser CORS issues):

   ```bash
   python -m http.server 8000
   ```
3. Open in your browser:

   ```
   http://localhost:8000
   ```

---

## Data Sources

* **AEMO (Australian Energy Market Operator)** – Grid capacity, pricing, renewables
* **Geoscience Australia** – Elevation, geology, mineral & spatial datasets
* **Bureau of Meteorology (BoM)** – Climate, rainfall, cooling degree days
* **ACMA / NBN / ACCC** – Telecommunications & broadband performance
* **BITRE / Regional Data Hub** – Land use, workforce, incentives

---

## Strategic Impact

This project highlights how **data-driven infrastructure planning** can:

* Position Australia as the **Asia-Pacific’s data center hub**
* Support **AI and cloud adoption**, adding **\$115B annually to GDP by 2030**
* Accelerate the **transition to renewable-powered digital infrastructure**

---

## License

MIT License
