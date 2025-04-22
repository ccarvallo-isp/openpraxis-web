export interface ServiceType {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}

export interface TestimonialType {
  id: string;
  quote: string;
  author: string;
  company: string;
  role: string;
  avatar: string;
}

export interface ProjectType {
  id: string;
  title: string;
  description: string;
  category: string;
  client: string;
  sector: string;
  image: string;
  results: {
    label: string;
    value: string;
  }[];
  technologies: string[];
}

export interface TeamMemberType {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  education: string;
  expertise: string[];
}