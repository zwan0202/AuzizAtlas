// locations.js
// Dataset of candidate locations + utilities

export const locations = [
    {
        name: "Sydney - Eastern Creek",
        suitability: 92,
        category: "excellent",
        coords: [-33.8, 150.86],
        metrics: {
            energy: {
                title: "Energy Infrastructure",
                value: "$78/MWh",
                detail: "Renewable Access: 82%<br>Grid Capacity: 3,200 MW available<br>Substation Distance: 3.5km"
            },
            connectivity: {
                title: "Network Connectivity",
                value: "45-65ms to Asia",
                detail: "Fiber Distance: 2km<br>NBN Infrastructure: Available"
            },
            environment: {
                title: "Environmental Factors",
                value: "320 Cooling Degree Days",
                detail: "Flood Risk: Low<br>Water Access: Excellent"
            },
            economics: {
                title: "Economic Factors",
                value: "$450/sqm",
                detail: "Workforce: 12,000+ IT professionals<br>State Incentives: Available"
            }
        },
        chartData: {
            labels: ['Energy', 'Connectivity', 'Infrastructure', 'Risk', 'Economics'],
            values: [90, 95, 94, 85, 88]
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
        ]
    },
    {
        name: "Melbourne - Derrimut",
        suitability: 89,
        category: "excellent",
        coords: [-37.79, 144.78],
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
        chartData: {
            labels: ['Energy', 'Connectivity', 'Infrastructure', 'Risk', 'Economics'],
            values: [88, 90, 92, 87, 85]
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
        ]
    },
    {
        name: "Perth - Malaga",
        suitability: 88,
        category: "excellent",
        coords: [-31.85, 115.89],
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
        chartData: {
            labels: ['Energy', 'Connectivity', 'Infrastructure', 'Risk', 'Economics'],
            values: [95, 85, 82, 90, 92]
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
        ]
    },
    {
        name: "Brisbane - Eagle Farm",
        suitability: 76,
        category: "good",
        coords: [-27.43, 153.11],
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
        chartData: {
            labels: ['Energy', 'Connectivity', 'Infrastructure', 'Risk', 'Economics'],
            values: [75, 78, 74, 70, 80]
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
        ]
    },
    {
        name: "Adelaide - Wingfield",
        suitability: 73,
        category: "good",
        coords: [-34.84, 138.55],
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
        chartData: {
            labels: ['Energy', 'Connectivity', 'Infrastructure', 'Risk', 'Economics'],
            values: [70, 72, 70, 85, 78]
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
        ]
    },
    {
        name: "Canberra - Fyshwick",
        suitability: 81,
        category: "good",
        coords: [-35.33, 149.17],
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
        chartData: {
            labels: ['Energy', 'Connectivity', 'Infrastructure', 'Risk', 'Economics'],
            values: [85, 75, 82, 88, 75]
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
        ]
    },
    {
        name: "Darwin",
        suitability: 65,
        category: "moderate",
        coords: [-12.46, 130.84],
        metrics: {
            energy: {
                title: "Energy Infrastructure",
                value: "$125/MWh",
                detail: "Renewable Access: 55%<br>Grid Capacity: 400 MW available<br>Substation Distance: 10km"
            },
            connectivity: {
                title: "Network Connectivity",
                value: "25-40ms to Asia",
                detail: "Fiber Distance: 12km<br>NBN Infrastructure: Available"
            },
            environment: {
                title: "Environmental Factors",
                value: "1,200 Cooling Degree Days",
                detail: "Flood Risk: High (cyclone)<br>Water Access: Seasonal"
            },
            economics: {
                title: "Economic Factors",
                value: "$150/sqm",
                detail: "Workforce: 1,000+ IT professionals<br>State Incentives: Available"
            }
        },
        chartData: {
            labels: ['Energy', 'Connectivity', 'Infrastructure', 'Risk', 'Economics'],
            values: [60, 85, 58, 50, 72]
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
        ]
    },
    {
        name: "Newcastle",
        suitability: 78,
        category: "good",
        coords: [-32.93, 151.78],
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
        chartData: {
            labels: ['Energy', 'Connectivity', 'Infrastructure', 'Risk', 'Economics'],
            values: [78, 76, 75, 80, 82]
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
        ]
    },
    {
        name: "Hobart",
        suitability: 70,
        category: "good",
        coords: [-42.88, 147.33],
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
        chartData: {
            labels: ['Energy', 'Connectivity', 'Infrastructure', 'Risk', 'Economics'],
            values: [90, 65, 68, 82, 75]
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
        ]
    },
    {
        name: "Townsville",
        suitability: 62,
        category: "moderate",
        coords: [-19.26, 146.82],
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
            labels: ['Energy', 'Connectivity', 'Infrastructure', 'Risk', 'Economics'],
            values: [65, 68, 60, 55, 70]
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
        ]
    }
];
 