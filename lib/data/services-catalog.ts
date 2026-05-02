export type ServiceOffering = {
  title: string
  description: string
}

export type ServiceCategory = {
  id: string
  /** Lucide icon key resolved in the page */
  icon: 'code' | 'cloud' | 'brain' | 'building' | 'shield' | 'compass' | 'wrench' | 'sparkles'
  title: string
  blurb: string
  items: ServiceOffering[]
}

export const servicesIntro =
  'Pranavi Infotech delivers end-to-end IT solutions designed to support businesses at every stage of their digital journey. Our services combine technical expertise, industry best practices, and modern technologies to build scalable, secure, and future-ready systems.'

export const servicesPositioning =
  'Pranavi Infotech provides comprehensive IT services ranging from application development to enterprise transformation, enabling organizations to innovate, scale, and stay competitive in a rapidly evolving digital landscape.'

export const servicesCatalog: ServiceCategory[] = [
  {
    id: 'application-development',
    icon: 'code',
    title: 'Application Development',
    blurb:
      'We design and develop high-performance digital applications tailored to business needs.',
    items: [
      {
        title: 'Web Application Development',
        description:
          'Secure, scalable, and responsive web applications with modern architectures and seamless user experience.',
      },
      {
        title: 'Mobile Application Development',
        description:
          'Enterprise-grade mobile applications for Android and iOS focused on performance, usability, and scalability.',
      },
      {
        title: 'Custom Software Development',
        description:
          'Tailored software solutions that streamline operations, automate workflows, and solve complex business challenges.',
      },
      {
        title: 'Product Engineering',
        description:
          'End-to-end product development from concept and prototyping to deployment and continuous enhancement.',
      },
    ],
  },
  {
    id: 'cloud-and-infrastructure',
    icon: 'cloud',
    title: 'Cloud and Infrastructure',
    blurb:
      'We help businesses modernize infrastructure and leverage the full potential of cloud technologies.',
    items: [
      {
        title: 'Cloud Consulting and Migration',
        description:
          'Strategic planning and seamless migration to cloud platforms ensuring minimal disruption.',
      },
      {
        title: 'Cloud-Native Engineering',
        description:
          'Development of microservices-based, containerized, and serverless applications for high scalability and resilience.',
      },
      {
        title: 'Multi-Cloud and Hybrid Management',
        description: 'Design and management of flexible cloud environments across multiple platforms.',
      },
      {
        title: 'DevOps and Automation',
        description:
          'Implementation of CI/CD pipelines, infrastructure as code, and automated deployment processes.',
      },
      {
        title: 'Site Reliability Engineering (SRE)',
        description:
          'Ensuring system reliability, uptime, and performance through monitoring and proactive incident management.',
      },
    ],
  },
  {
    id: 'data-ai-intelligence',
    icon: 'brain',
    title: 'Data, AI, and Intelligence',
    blurb:
      'We enable organizations to leverage data and intelligent systems for better decision-making.',
    items: [
      {
        title: 'Data Engineering and Data Platforms',
        description: 'Design of scalable data pipelines, data lakes, and real-time processing systems.',
      },
      {
        title: 'Data Analytics and Business Intelligence',
        description:
          'Dashboards, reporting systems, and analytics solutions for actionable insights.',
      },
      {
        title: 'Artificial Intelligence and Machine Learning',
        description:
          'Development of AI-driven systems including predictive analytics, automation, NLP, and intelligent applications.',
      },
      {
        title: 'Decision Intelligence Systems',
        description:
          'Advanced analytics solutions that support strategic and operational decision-making.',
      },
    ],
  },
  {
    id: 'enterprise-business',
    icon: 'building',
    title: 'Enterprise and Business Solutions',
    blurb: 'We build systems that improve operational efficiency and business performance.',
    items: [
      {
        title: 'ERP and CRM Solutions',
        description:
          'Implementation and customization of enterprise systems for resource planning and customer management.',
      },
      {
        title: 'E-Commerce Development',
        description:
          'Scalable e-commerce platforms with secure transactions, inventory systems, and optimized user journeys.',
      },
      {
        title: 'API Development and Integration',
        description:
          'Secure APIs and system integrations for seamless communication between platforms.',
      },
      {
        title: 'Robotic Process Automation (RPA)',
        description:
          'Automation of repetitive business processes to improve efficiency and reduce operational costs.',
      },
    ],
  },
  {
    id: 'security-compliance',
    icon: 'shield',
    title: 'Security and Compliance',
    blurb:
      'We ensure systems are secure, compliant, and resilient against modern threats.',
    items: [
      {
        title: 'Cybersecurity Services',
        description:
          'Security assessments, implementation, monitoring, and protection of digital assets.',
      },
      {
        title: 'DevSecOps Implementation',
        description:
          'Integration of security practices into development and deployment pipelines.',
      },
      {
        title: 'Governance, Risk, and Compliance (GRC)',
        description: 'Frameworks and solutions to manage risk and meet regulatory requirements.',
      },
    ],
  },
  {
    id: 'consulting-strategy',
    icon: 'compass',
    title: 'Consulting and Strategy',
    blurb: 'We provide expert guidance to align technology with business goals.',
    items: [
      {
        title: 'Digital Transformation Consulting',
        description:
          'Modernization of business processes, systems, and customer experiences through digital strategies.',
      },
      {
        title: 'Enterprise Architecture and Solution Design',
        description: 'Design of scalable, secure, and integrated system architectures.',
      },
      {
        title: 'IT Consulting',
        description:
          'Strategic advisory to optimize technology investments and drive long-term growth.',
      },
    ],
  },
  {
    id: 'maintenance-managed',
    icon: 'wrench',
    title: 'Maintenance and Managed Services',
    blurb:
      'We ensure long-term performance, stability, and continuous improvement.',
    items: [
      {
        title: 'Managed IT Services',
        description:
          'End-to-end management of IT infrastructure and applications with defined service levels.',
      },
      {
        title: 'Software Testing and Quality Assurance',
        description:
          'Comprehensive testing services including automation, performance, and security testing.',
      },
      {
        title: 'Maintenance and Support',
        description:
          'Ongoing updates, monitoring, and technical support to ensure uninterrupted operations.',
      },
      {
        title: 'Legacy System Modernization',
        description:
          'Transformation of outdated systems into modern, efficient, and scalable platforms.',
      },
    ],
  },
  {
    id: 'emerging-technologies',
    icon: 'sparkles',
    title: 'Emerging Technologies',
    blurb: 'We help businesses stay ahead by adopting next-generation technologies.',
    items: [
      {
        title: 'Blockchain Development',
        description: 'Secure and transparent distributed systems for enterprise use cases.',
      },
      {
        title: 'Internet of Things (IoT) Solutions',
        description:
          'Connected systems for real-time data collection, monitoring, and automation.',
      },
      {
        title: 'AR/VR Solutions',
        description:
          'Immersive applications for training, visualization, and customer engagement.',
      },
    ],
  },
]
