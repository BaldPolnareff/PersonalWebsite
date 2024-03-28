type CVItem = {
    role: string;
    company: string;
    startDate: string;
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
}

export type { CVItem, PublicationItem };