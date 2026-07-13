/**
 * Describe the structure of work experience data
 */
export type Work = {
    title: string;
    company: string;
    location: string;
    start_date: string;
    end_date: string;
    responsibilities: Array<string>; 
};

/**
 * Describe the structure of education data
 */
export type Education = {
    school: string;
    degree: string;
    major: string;
    start_date: string;
    end_date: string;
    achievements: Array<string>;
};

/**
 * Describe the structure of certification data
 */
export type Certification = {
    title: string;
    issuer: string;
    date: string;
    description: string;
};

/**
 * Describe the structure of project data
 */
export type Project = {
    title: string;
    key_words: Array<String>;
    date: string;
    description: string;
};