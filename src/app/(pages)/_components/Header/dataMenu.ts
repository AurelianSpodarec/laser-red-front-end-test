import { WebsiteRoutes } from "@/config/routes";

export interface IMenuItem {
  name: string;
  link: WebsiteRoutes
}

const dataMenu: IMenuItem[] = [
  {
    name: "Solutions",
    link: WebsiteRoutes.SOLUTIONS
  },
  {
    name: "Software",
    link: WebsiteRoutes.SOFTWARE
  },
  {
    name: "Services",
    link: WebsiteRoutes.SERVICES
  },
  {
    name: "Case Studies",
    link: WebsiteRoutes.CASE_STUDIES
  },
  {
    name: "Company",
    link: WebsiteRoutes.COMPANY
  }
]

export default dataMenu