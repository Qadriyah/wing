"use client";

import React, { LiHTMLAttributes } from "react";
import Link from "next/link";

type LinkProps = LiHTMLAttributes<HTMLLIElement> & {
  route: string;
};

const NavItem: React.FC<LinkProps> = ({ route, children }) => {
  return <Link href={route}>{children}</Link>;
};

export default NavItem;
