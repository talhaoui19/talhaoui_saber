import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  TelgramIcon,
} from "@/assets/icons";

type SocialLink = {
  name: string;
  href: string;
  icon: JSX.Element;
};

export const socialLinks: SocialLink[] = [
  {
    name: "Github",
    href: "https://github.com/talhaoui19",
    icon: <GithubIcon />,
  },
  {
    name: "Telgram",
    href: "https://t.me/sabertlh",
    icon: <TelgramIcon />,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/saber-talhaoui-214106262/",
    icon: <LinkedinIcon />,
  },
  {
    name: "Facebook",
    href: "https://web.facebook.com/profile.php?id=100075067716401",
    icon: <FacebookIcon />,
  },
];
