import { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;


export interface MenuItems {
  id: number;
  link: string;
  title: string;
}

export interface SkillItems {
  title: string;
  icon: React.ReactNode;
  rating: number;
}

export interface PortfolioItems {
  id: number;
  link: string;
  title: string;
  desc: string;
  image: string;
}