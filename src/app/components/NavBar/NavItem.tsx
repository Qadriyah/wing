"use client";

import React, { LiHTMLAttributes } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkProps = LiHTMLAttributes<HTMLLIElement> & {
  route: string;
};

const NavItem: React.FC<LinkProps> = ({ route, children }) => {
  const pathname = usePathname();

  return <Link href={route}>{children}</Link>;
};

export default NavItem;
