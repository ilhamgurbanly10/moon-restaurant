// OurStory
export interface AboutUsPost {
    id: number;
    title: string;
    img: string;
    description: string;
    slug: string;
}

export interface AboutUs {
    title: string;
    icon: string;
    data: AboutUsPost[];
}

export interface AboutUsObj {
    data: AboutUs | null;
    error: boolean;
}

// daily-specials
export interface DailySpecialsTopData {
    title: string;
    id: number;
    price: string;
    description: string; 
}

export interface DailySpecialsTop {
    title: string;
    bg_img: string;
    data: DailySpecialsTopData[];
}

export interface DailySpecialsBody {
    title: string;
    bg_img: string;
    description: string;
}

export interface DailySpecialsBottom {
    title: string;
    bg_img: string;
    description: string;
}

export interface DailySpecials {
    top: DailySpecialsTop;
    body: DailySpecialsBody;
    bottom: DailySpecialsBottom;
}

export interface DailySpecialsObj {
    data: DailySpecials | null;
    error: boolean;
}

// visit
export interface Visit {
    title: string;
    bg_img: string;
    lunch_txt: string[];
    dinner_txt: string[];
}

export interface VisitObj {
    data: Visit | null;
    error: boolean;
}


