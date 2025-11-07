export interface Service {
  id: string
  name: string
  description: string
  features: string[]
  priceInCents: number | string // Allow string for "To be defined" pricing
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
    priceInCents: 800000,
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
    priceInCents: 1200000,
    duration: "1 month",
  },
  {
    id: "tailor-made",
    name: "Product strategy & payment workflow review",
    description:
      "Let's discuss your needs in between product strategy, payment ops & financial workflows",
    features: [
      "Tech architecture & processes review",
      "Integration strategy & data governance",
      "Development velocity rampup",
      "Functional & technical documentation",
    ],
    priceInCents: "",
    duration: "",
  },
]
