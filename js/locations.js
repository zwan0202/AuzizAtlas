// locations.js
// Dataset of candidate locations + utilities

export const locations = [
    {
        name: "Sydney - Eastern Creek",
        coords: [-33.8, 150.86],
        suitability: 92,
        category: "excellent",
        metrics: {
            energyPrice: "$78/MWh",
            renewableAccess: "82%",
            gridCapacity: "3,200 MW available",
            latencyAsia: "45-65ms",
            fiberDistance: "2km",
            coolingDegDays: "320",
            floodRisk: "Low",
            workforce: "12,000+ IT professionals",
            landCost: "$450/sqm",
            waterAccess: "Excellent",
            substationDist: "3.5km"
        },
        advantages: [
            "Largest existing data center hub with 850MW capacity",
            "Direct access to Southern Cross Cable landing",
            "$4.7B Rewiring the Nation investment approved",
            "Stack Infrastructure's 450MW expansion underway",
            "5-star NABERS rated facilities available"
        ],
        recommendations: [
            "Optimal for hyperscale AI workloads",
            "Implement liquid cooling for GPU clusters",
            "Secure renewable PPA through Central-West Orana REZ",
            "Consider edge nodes in Parramatta for latency optimization"
        ],
        chartData: {
            labels: ['Energy', 'Connectivity', 'Infrastructure', 'Risk', 'Economics'],
            values: [90, 95, 94, 85, 88]
        }
    },
    {
        name: "Melbourne - Derrimut",
        coords: [-37.79, 144.78],
        suitability: 89,
        category: "excellent",
        metrics: {
            energyPrice: "$82/MWh",
            renewableAccess: "78%",
            gridCapacity: "2,800 MW available",
            latencyAsia: "50-70ms",
            fiberDistance: "4km",
            coolingDegDays: "280",
            floodRisk: "Low",
            workforce: "10,000+ IT professionals",
            landCost: "$380/sqm",
            waterAccess: "Good",
            substationDist: "5km"
        },
        advantages: [
            "Second largest market with 650MW capacity",
            "AWS $20B investment includes major expansion",
            "Excellent renewable energy from Victorian wind farms",
            "Strong submarine cable connectivity planned",
            "Lower cooling requirements than Sydney"
        ],
        recommendations: [
            "Focus on cloud and enterprise workloads",
            "Leverage Victorian renewable energy certificates",
            "Implement groundwater cooling where permitted",
            "Partner with local universities for talent pipeline"
        ],
        chartData: {
            labels: ['Energy', 'Connectivity', 'Infrastructure', 'Risk', 'Economics'],
            values: [88, 90, 92, 87, 85]
        }
    },
    {
        name: "Perth - Malaga",
        coords: [-31.85, 115.89],
        suitability: 88,
        category: "excellent",
        metrics: {
            energyPrice: "$68/MWh",
            renewableAccess: "85%",
            gridCapacity: "1,800 MW available",
            latencyAsia: "35-50ms",
            fiberDistance: "6km",
            coolingDegDays: "380",
            floodRisk: "Very Low",
            workforce: "5,000+ IT professionals",
            landCost: "$220/sqm",
            waterAccess: "Moderate",
            substationDist: "4km"
        },
        advantages: [
            "Lowest energy costs in Australia",
            "Closest to Southeast Asian markets",
            "$3B Rewiring the Nation for SWIS grid",
            "GreenSquareDC's $1B AI-focused facility",
            "50GW Western Green Energy Hub planned"
        ],
        recommendations: [
            "Ideal for AI and cryptocurrency operations",
            "Develop direct Singapore connectivity",
            "Implement advanced evaporative cooling",
            "Secure long-term renewable PPAs now"
        ],
        chartData: {
            labels: ['Energy', 'Connectivity', 'Infrastructure', 'Risk', 'Economics'],
            values: [95, 85, 82, 90, 92]
        }
    },
    {
        name: "Brisbane - Eagle Farm",
        coords: [-27.43, 153.11],
        suitability: 76,
        category: "good",
        metrics: {
            energyPrice: "$92/MWh",
            renewableAccess: "72%",
            gridCapacity: "1,200 MW available",
            latencyAsia: "55-75ms",
            fiberDistance: "8km",
            coolingDegDays: "520",
            floodRisk: "Moderate",
            workforce: "6,000+ IT professionals",
            landCost: "$320/sqm",
            waterAccess: "Good",
            substationDist: "7km"
        },
        advantages: [
            "Growing market with 280MW capacity",
            "Sunshine Coast Cable landing nearby",
            "Strong solar generation potential",
            "Lower competition for sites",
            "Government incentives available"
        ],
        recommendations: [
            "Focus on edge computing and CDN",
            "Implement robust flood mitigation",
            "Maximize solar PV on-site generation",
            "Target local enterprise customers"
        ],
        chartData: {
            labels: ['Energy', 'Connectivity', 'Infrastructure', 'Risk', 'Economics'],
            values: [75, 78, 74, 70, 80]
        }
    },
    {
        name: "Adelaide - Wingfield",
        coords: [-34.84, 138.55],
        suitability: 73,
        category: "good",
        metrics: {
            energyPrice: "$95/MWh",
            renewableAccess: "68%",
            gridCapacity: "800 MW available",
            latencyAsia: "60-80ms",
            fiberDistance: "10km",
            coolingDegDays: "350",
            floodRisk: "Very Low",
            workforce: "3,000+ IT professionals",
            landCost: "$180/sqm",
            waterAccess: "Limited",
            substationDist: "8km"
        },
        advantages: [
            "Low natural disaster risk",
            "Affordable land prices",
            "Battery storage hub development",
            "Government support for tech sector",
            "Growing renewable capacity"
        ],
        recommendations: [
            "Suitable for disaster recovery sites",
            "Implement air-side economization",
            "Partner with SA battery projects",
            "Focus on government contracts"
        ],
        chartData: {
            labels: ['Energy', 'Connectivity', 'Infrastructure', 'Risk', 'Economics'],
            values: [70, 72, 70, 85, 78]
        }
    },
    {
        name: "Canberra - Fyshwick",
        coords: [-35.33, 149.17],
        suitability: 81,
        category: "good",
        metrics: {
            energyPrice: "$88/MWh",
            renewableAccess: "100%",
            gridCapacity: "600 MW available",
            latencyAsia: "58-78ms",
            fiberDistance: "3km",
            coolingDegDays: "280",
            floodRisk: "Very Low",
            workforce: "4,000+ IT professionals",
            landCost: "$380/sqm",
            waterAccess: "Good",
            substationDist: "5km"
        },
        advantages: [
            "100% renewable energy available",
            "Government and defense contracts",
            "CDC's major presence established",
            "Excellent data sovereignty for government",
            "Low cooling requirements"
        ],
        recommendations: [
            "Target government cloud services",
            "Implement high-security certifications",
            "Leverage cold climate for free cooling",
            "Develop sovereign cloud capabilities"
        ],
        chartData: {
            labels: ['Energy', 'Connectivity', 'Infrastructure', 'Risk', 'Economics'],
            values: [85, 75, 82, 88, 75]
        }
    },
    {
        name: "Darwin",
        coords: [-12.46, 130.84],
        suitability: 65,
        category: "moderate",
        metrics: {
            energyPrice: "$125/MWh",
            renewableAccess: "55%",
            gridCapacity: "400 MW available",
            latencyAsia: "25-40ms",
            fiberDistance: "12km",
            coolingDegDays: "1,200",
            floodRisk: "High (cyclone)",
            workforce: "1,000+ IT professionals",
            landCost: "$150/sqm",
            waterAccess: "Seasonal",
            substationDist: "10km"
        },
        advantages: [
            "Closest to Southeast Asia",
            "$250M Rewiring the Nation investment",
            "Strategic for defense applications",
            "Multiple submarine cables planned",
            "Land availability excellent"
        ],
        recommendations: [
            "Focus on edge/CDN for Asia",
            "Implement cyclone-resistant design",
            "Maximize liquid cooling efficiency",
            "Partner with defense contractors"
        ],
        chartData: {
            labels: ['Energy', 'Connectivity', 'Infrastructure', 'Risk', 'Economics'],
            values: [60, 85, 58, 50, 72]
        }
    },
    {
        name: "Newcastle",
        coords: [-32.93, 151.78],
        suitability: 78,
        category: "good",
        metrics: {
            energyPrice: "$85/MWh",
            renewableAccess: "75%",
            gridCapacity: "1,000 MW available",
            latencyAsia: "48-68ms",
            fiberDistance: "5km",
            coolingDegDays: "340",
            floodRisk: "Low",
            workforce: "2,000+ IT professionals",
            landCost: "$250/sqm",
            waterAccess: "Excellent",
            substationDist: "6km"
        },
        advantages: [
            "Hunter Valley renewable energy zone",
            "Former coal infrastructure conversion",
            "Lower costs than Sydney",
            "Good transport links to Sydney",
            "Port facilities for equipment"
        ],
        recommendations: [
            "Develop as Sydney overflow market",
            "Leverage industrial cooling water",
            "Target manufacturing IoT workloads",
            "Implement waste heat recovery"
        ],
        chartData: {
            labels: ['Energy', 'Connectivity', 'Infrastructure', 'Risk', 'Economics'],
            values: [78, 76, 75, 80, 82]
        }
    },
    {
        name: "Hobart",
        coords: [-42.88, 147.33],
        suitability: 70,
        category: "good",
        metrics: {
            energyPrice: "$78/MWh",
            renewableAccess: "100%",
            gridCapacity: "500 MW available",
            latencyAsia: "70-90ms",
            fiberDistance: "8km",
            coolingDegDays: "180",
            floodRisk: "Low",
            workforce: "1,500+ IT professionals",
            landCost: "$200/sqm",
            waterAccess: "Excellent",
            substationDist: "7km"
        },
        advantages: [
            "100% renewable hydro power",
            "Lowest cooling requirements",
            "Marinus Link cable to mainland",
            "Battery of the Nation project",
            "Low natural disaster risk"
        ],
        recommendations: [
            "Ideal for cold storage and archive",
            "Leverage free air cooling year-round",
            "Target sustainability-focused clients",
            "Develop as green data center hub"
        ],
        chartData: {
            labels: ['Energy', 'Connectivity', 'Infrastructure', 'Risk', 'Economics'],
            values: [90, 65, 68, 82, 75]
        }
    },
    {
        name: "Townsville",
        coords: [-19.26, 146.82],
        suitability: 62,
        category: "moderate",
        metrics: {
            energyPrice: "$105/MWh",
            renewableAccess: "65%",
            gridCapacity: "600 MW available",
            latencyAsia: "45-65ms",
            fiberDistance: "15km",
            coolingDegDays: "850",
            floodRisk: "High (cyclone)",
            workforce: "1,200+ IT professionals",
            landCost: "$180/sqm",
            waterAccess: "Good",
            substationDist: "9km"
        },
        advantages: [
            "Strategic military presence",
            "Growing solar generation",
            "Lower land costs",
            "Regional development incentives",
            "Coral Sea Cable access"
        ],
        recommendations: [
            "Focus on defense contracts",
            "Implement robust disaster recovery",
            "Maximize solar + battery storage",
            "Target regional government services"
        ],
        chartData: {
            labels: ['Energy', 'Connectivity', 'Infrastructure', 'Risk', 'Economics'],
            values: [65, 68, 60, 55, 70]
        }
    }
];