export type NavItem = {
  label: string;
  to: string;
  children?: { label: string; to: string }[];
};

export const siteNav: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About us",
    to: "/about",
    children: [
      { label: "What is IRCYS?", to: "/about/what-is-ircys" },
      { label: "Organizer", to: "/about/organizer" },
      { label: "Aim", to: "/about/aim" },
      { label: "Concept", to: "/about/concept" },
    ],
  },
  {
    label: "Competition",
    to: "/competition",
    children: [
      { label: "Eligibility", to: "/competition/eligibility" },
      { label: "Categories", to: "/competition/categories" },
      { label: "Phases and Pathway", to: "/competition/phases-and-pathway" },
      { label: "Grand Final Mechanism", to: "/competition/grand-final-mechanism" },
      { label: "Timeline", to: "/competition/timeline" },
      { label: "Fee and Payment Policy", to: "/competition/fee-and-payment-policy" },
      { label: "Judges", to: "/competition/judges" },
      { label: "Hospitality", to: "/competition/hospitality" },
      { label: "Rules and Regulation", to: "/competition/rules-and-regulation" },
    ],
  },
  { label: "Medal and Award", to: "/medal-and-award" },
  {
    label: "Legacy",
    to: "/legacy",
    children: [
      { label: "Paper Collective", to: "/legacy/paper-collective" },
      { label: "Decree", to: "/legacy/decree" },
      { label: "Documentation", to: "/legacy/documentation" },
    ],
  },
  {
    label: "Get Involved",
    to: "/get-involved",
  },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];
