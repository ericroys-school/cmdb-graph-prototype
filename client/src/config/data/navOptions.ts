import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaRocket } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { StyledNavLink } from '../../types/styledNavLink';

export const links: StyledNavLink[] = [
  { name: 'About Us', href: '/', icon: FaRocket },
];

export const footerLinks: StyledNavLink[] = [
  {
    name: 'LinkedIn',
    href: 'www.linkedin.com/in/eric-roys-8689524',
    icon: FaLinkedin,
  },
  { name: 'Email', href: 'mailto:eric.roys@gmail.com', icon: MdEmail },
  {
    name: 'GitHub',
    href: 'https://github.com/ericroys-school?tab=repositories',
    icon: FaGithub,
  },
];
