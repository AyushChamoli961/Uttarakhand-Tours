interface PackagePropsType {
    id: number;
    title: string;
    description: string;
    itinerary: string; // HTML string
    price: number | any; // Change from number to Decimal
    createdAt: Date; // ISO date string
    updatedAt: Date; // ISO date string
    city: string;
    country: string;
    tripType: 'DOMESTIC' | 'INTERNATIONAL'; // Use a union type if tripType has specific values
    dates: Date[]; // Array of ISO date strings
    duration_in_days: number;
    duration_in_nights: number;
    images: { url: string }[]; // Assuming images is an array of objects with a url property
  }

  interface heading {
    heading : string
  }
  
  export interface packagePropsType {
    data: PackagePropsType[]; // Array of packages
  }
  export interface packagePropsTypeForDomestic {
    packages: PackagePropsType[]; // Array of packages
  }