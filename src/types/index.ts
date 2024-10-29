import { SVGProps } from "react";

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

export interface MenuProps {
  className?: boolean;
  onCancel: () => void; // Callback funksiyasi
}

export type IconProps = SVGProps<SVGSVGElement>;
