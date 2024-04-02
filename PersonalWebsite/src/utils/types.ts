type CVItem = {
    role: string;
    company: string;
    startDate?: string;
    companyLogoUrl?: string; 
    endDate?: string;
    description?: string;
    location?: string;
    detailedDescription?: string[];
}

type PublicationItem = {
    title: string;
    authors: string;
    journal: string;
    doi: string;
    abstract?: string;
    journalLogoUrl?: string;
}

export type { CVItem, PublicationItem };