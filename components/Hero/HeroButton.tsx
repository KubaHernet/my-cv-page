import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  children?: React.ReactNode;
};

const HeroButton = (props: Props) => {
  const { href, children } = props;

  return (
    <Link href={href}>
      <button className="heroButton">{children}</button>
    </Link>
  );
};

export default HeroButton;
