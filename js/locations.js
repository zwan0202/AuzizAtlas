// locations.js
// Dataset of candidate locations + utilities

export const locations = [
    {
        name: "Sydney",
        suitability: 73,
        category: "good",
        coords: [-33.8688, 151.2093],
        metrics: {
            energy: {
                title: "Energy Infrastructure",
                value: "$95/MWh",
                detail: "Renewable Access: 68%<br>Grid Capacity: 800 MW available<br>Substation Distance: 8km"
            },
            connectivity: {
                title: "Network Connectivity",
                value: "Tier 1",
                detail: "3x fiber landing points<br>5G/100G available"
            },
            environment: {
                title: "Environmental Factors",
                value: "Temperate (Avg. 22°C)",
                detail: "Humidity: 60%<br>Flood: Low<br>Fire: Moderate"
            },
            infrastructure: {
                title: "Infrastructure",
                value: "Excellent",
                detail: "Airport: 20km<br>Major roads: Yes"
            },
            economics: {
                title: "Economic Factors",
                value: "$2,500/m²",
                detail: "Land: $800/m²<br>Labor: High"
            }
        },
        chartData: {
            labels: ["Energy", "Connectivity", "Environment", "Infrastructure", "Economics"],
            values: [68, 90, 60, 88, 55]
        },
        advantages: [
            "Major fiber landing point",
            "Strong grid reliability",
            "Skilled workforce"
        ],
        recommendations: [
            "Consider for hyperscale deployment",
            "Monitor energy price trends"
        ]
    },
    {
        name: "Melbourne - Derrimut",
        coords: [-37.79, 144.78],
        suitability: 89,
        category: "excellent",
        metrics: {
            energy: {
                title: "Energy Infrastructure",
                value: "$82/MWh",
                detail: "Renewable Access: 78%<br>Grid Capacity: 2,800 MW available<br>Substation Distance: 5km"
            },
            connectivity: {
                title: "Network Connectivity",
                value: "50-70ms to Asia",
                detail: "Fiber Distance: 4km<br>NBN Infrastructure: Available"
            },
            environment: {
                title: "Environmental Factors",
                value: "280 Cooling Degree Days",
                detail: "Flood Risk: Low<br>Water Access: Good"
            },
            economics: {
                title: "Economic Factors",
                value: "$380/sqm",
                detail: "Workforce: 10,000+ IT professionals<br>State Incentives: Available"
            }
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
            labels: ['Energy', 'Connectivity', 'Environment', 'Economics'],
            values: [78, 90, 92, 85]
        }
    },
    {
        name: "Perth - Malaga",
        coords: [-31.85, 115.89],
        suitability: 88,
        category: "excellent",
        metrics: {
            energy: {
                title: "Energy Infrastructure",
                value: "$68/MWh",
                detail: "Renewable Access: 85%<br>Grid Capacity: 1,800 MW available<br>Substation Distance: 4km"
            },
            connectivity: {
                title: "Network Connectivity",
                value: "35-50ms to Asia",
                detail: "Fiber Distance: 6km<br>NBN Infrastructure: Available"
            },
            environment: {
                title: "Environmental Factors",
                value: "380 Cooling Degree Days",
                detail: "Flood Risk: Very Low<br>Water Access: Moderate"
            },
            economics: {
                title: "Economic Factors",
                value: "$220/sqm",
                detail: "Workforce: 5,000+ IT professionals<br>State Incentives: Available"
            }
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
            labels: ['Energy', 'Connectivity', 'Environment', 'Economics'],
            values: [85, 85, 82, 92]
        }
    },
    {
        name: "Brisbane - Eagle Farm",
        coords: [-27.43, 153.11],
        suitability: 76,
        category: "good",
        metrics: {
            energy: {
                title: "Energy Infrastructure",
                value: "$92/MWh",
                detail: "Renewable Access: 72%<br>Grid Capacity: 1,200 MW available<br>Substation Distance: 7km"
            },
            connectivity: {
                title: "Network Connectivity",
                value: "55-75ms to Asia",
                detail: "Fiber Distance: 8km<br>NBN Infrastructure: Available"
            },
            environment: {
                title: "Environmental Factors",
                value: "520 Cooling Degree Days",
                detail: "Flood Risk: Moderate<br>Water Access: Good"
            },
            economics: {
                title: "Economic Factors",
                value: "$320/sqm",
                detail: "Workforce: 6,000+ IT professionals<br>State Incentives: Available"
            }
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
            labels: ['Energy', 'Connectivity', 'Environment', 'Economics'],
            values: [72, 78, 74, 80]
        }
    },
    {
        name: "Adelaide - Wingfield",
        coords: [-34.84, 138.55],
        suitability: 73,
        category: "good",
        metrics: {
            energy: {
                title: "Energy Infrastructure",
                value: "$95/MWh",
                detail: "Renewable Access: 68%<br>Grid Capacity: 800 MW available<br>Substation Distance: 8km"
            },
            connectivity: {
                title: "Network Connectivity",
                value: "60-80ms to Asia",
                detail: "Fiber Distance: 10km<br>NBN Infrastructure: Available"
            },
            environment: {
                title: "Environmental Factors",
                value: "350 Cooling Degree Days",
                detail: "Flood Risk: Very Low<br>Water Access: Limited"
            },
            economics: {
                title: "Economic Factors",
                value: "$180/sqm",
                detail: "Workforce: 3,000+ IT professionals<br>State Incentives: Available"
            }
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
            labels: ['Energy', 'Connectivity', 'Environment', 'Economics'],
            values: [68, 72, 70, 78]
        }
    },
    {
        name: "Canberra - Fyshwick",
        coords: [-35.33, 149.17],
        suitability: 81,
        category: "good",
        metrics: {
            energy: {
                title: "Energy Infrastructure",
                value: "$88/MWh",
                detail: "Renewable Access: 100%<br>Grid Capacity: 600 MW available<br>Substation Distance: 5km"
            },
            connectivity: {
                title: "Network Connectivity",
                value: "58-78ms to Asia",
                detail: "Fiber Distance: 3km<br>NBN Infrastructure: Available"
            },
            environment: {
                title: "Environmental Factors",
                value: "280 Cooling Degree Days",
                detail: "Flood Risk: Very Low<br>Water Access: Good"
            },
            economics: {
                title: "Economic Factors",
                value: "$380/sqm",
                detail: "Workforce: 4,000+ IT professionals<br>State Incentives: Available"
            }
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
            labels: ['Energy', 'Connectivity', 'Environment', 'Economics'],
            values: [100, 75, 82, 75]
        }
    },
    {
        name: "Darwin",
        coords: [-12.46, 130.84],
        suitability: 62,
        category: "moderate",
        metrics: {
            energy: {
                title: "Energy Infrastructure",
                value: "$105/MWh",
                detail: "Renewable Access: 65%<br>Grid Capacity: 600 MW available<br>Substation Distance: 9km"
            },
            connectivity: {
                title: "Network Connectivity",
                value: "45-65ms to Asia",
                detail: "Fiber Distance: 15km<br>NBN Infrastructure: Available"
            },
            environment: {
                title: "Environmental Factors",
                value: "850 Cooling Degree Days",
                detail: "Flood Risk: High (cyclone)<br>Water Access: Good"
            },
            economics: {
                title: "Economic Factors",
                value: "$180/sqm",
                detail: "Workforce: 1,200+ IT professionals<br>State Incentives: Available"
            }
        },
        chartData: {
            labels: ["Energy", "Connectivity", "Environment", "Economics"],
            values: [65, 70, 55, 65]
        },
        advantages: [
            "Direct Asia connectivity",
            "Strong renewable potential"
        ],
        recommendations: [
            "Mitigate cyclone risk",
            "Explore government incentives"
        ]
    },
    {
        name: "Newcastle",
        coords: [-32.93, 151.78],
        suitability: 78,
        category: "good",
        metrics: {
            energy: {
                title: "Energy Infrastructure",
                value: "$85/MWh",
                detail: "Renewable Access: 75%<br>Grid Capacity: 1,000 MW available<br>Substation Distance: 6km"
            },
            connectivity: {
                title: "Network Connectivity",
                value: "48-68ms to Asia",
                detail: "Fiber Distance: 5km<br>NBN Infrastructure: Available"
            },
            environment: {
                title: "Environmental Factors",
                value: "340 Cooling Degree Days",
                detail: "Flood Risk: Low<br>Water Access: Excellent"
            },
            economics: {
                title: "Economic Factors",
                value: "$250/sqm",
                detail: "Workforce: 2,000+ IT professionals<br>State Incentives: Available"
            }
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
            labels: ['Energy', 'Connectivity', 'Environment', 'Economics'],
            values: [75, 76, 75, 82]
        }
    },
    {
        name: "Hobart",
        coords: [-42.88, 147.33],
        suitability: 70,
        category: "good",
        metrics: {
            energy: {
                title: "Energy Infrastructure",
                value: "$78/MWh",
                detail: "Renewable Access: 100%<br>Grid Capacity: 500 MW available<br>Substation Distance: 7km"
            },
            connectivity: {
                title: "Network Connectivity",
                value: "70-90ms to Asia",
                detail: "Fiber Distance: 8km<br>NBN Infrastructure: Available"
            },
            environment: {
                title: "Environmental Factors",
                value: "180 Cooling Degree Days",
                detail: "Flood Risk: Low<br>Water Access: Excellent"
            },
            economics: {
                title: "Economic Factors",
                value: "$200/sqm",
                detail: "Workforce: 1,500+ IT professionals<br>State Incentives: Available"
            }
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
            labels: ['Energy', 'Connectivity', 'Environment', 'Economics'],
            values: [100, 65, 68, 75]
        }
    },
    {
        name: "Townsville",
        coords: [-19.26, 146.82],
        suitability: 62,
        category: "moderate",
        metrics: {
            energy: {
                title: "Energy Infrastructure",
                value: "$105/MWh",
                detail: "Renewable Access: 65%<br>Grid Capacity: 600 MW available<br>Substation Distance: 9km"
            },
            connectivity: {
                title: "Network Connectivity",
                value: "45-65ms to Asia",
                detail: "Fiber Distance: 15km<br>NBN Infrastructure: Available"
            },
            environment: {
                title: "Environmental Factors",
                value: "850 Cooling Degree Days",
                detail: "Flood Risk: High (cyclone)<br>Water Access: Good"
            },
            economics: {
                title: "Economic Factors",
                value: "$180/sqm",
                detail: "Workforce: 1,200+ IT professionals<br>State Incentives: Available"
            }
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
            labels: ['Energy', 'Connectivity', 'Environment', 'Economics'],
            values: [65, 68, 60, 70]
        }
    }
];