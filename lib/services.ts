export interface Service {
  id: string
  name: string
  description: string
  features: string[]
  priceInCents: number
  duration?: string
}

export const SERVICES: Service[] = [
  {
    id: "product-organisation-audit",
    name: "Product Organisation Audit",
    description: "Comprehensive assessment of your product team structure, processes, and delivery capabilities",
    features: [
      "Team structure analysis",
      "Process efficiency review",
      "Stakeholder interviews",
      "Actionable recommendations report",
      "2-week engagement",
    ],
    priceInCents: 800000, // 8,000€
    duration: "2 weeks",
  },
  {
    id: "financial-flows-expertise",
    name: "Financial Flows Expertise",
    description: "Expert consultation on payment systems, financial integrations, and transaction flow optimization",
    features: [
      "Payment architecture review",
      "Integration strategy",
      "Compliance guidance",
      "Technical documentation",
      "1-month engagement",
    ],
    priceInCents: 1200000, // 12,000€
    duration: "2 weeks",
  },
]
