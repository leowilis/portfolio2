export type ContactSocial = {
  name: string;
  url: string;
};

export const CONTACT_LOCATION = {
  city: 'Medan',
  label: "Leo's base",
  latitude: 3.5952,
  longitude: 98.6722,
} as const;

export const CONTACT_EMAIL = 'leowilis9898@gmail.com';

export const CONTACT_SOCIALS: ContactSocial[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/leowilis',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/leonardo-wilis-dev/',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/code.leonardo/',
  },
];
