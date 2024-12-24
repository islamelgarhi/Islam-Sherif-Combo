import React from 'react';
import { Linkedin, Github, Instagram, Youtube } from 'lucide-react';
import { cn } from '@/utils/cn';

export function SocialLinks() {
  const socialLinks = [
    { 
      id: 'linkedin',
      icon: Linkedin,
      href: 'https://linkedin.com/',
      label: 'LinkedIn'
    },
    {
      id: 'github',
      icon: Github,
      href: 'https://github.com/',
      label: 'GitHub'
    },
    {
      id: 'instagram',
      icon: Instagram,
      href: 'https://instagram.com/',
      label: 'Instagram'
    },
    {
      id: 'youtube',
      icon: Youtube,
      href: 'https://youtube.com/',
      label: 'Youtube'
    }
  ];

  return (
    <ul className="example-2 flex-row gap-2">
      {socialLinks.map(({ id, icon: Icon, href, label }) => (
        <li key={id} className="icon-content">
          <a href={href} aria-label={label} data-social={id} target="_blank" rel="noopener noreferrer">
            <div className="filled" />
            <Icon className="w-5 h-5" />
          </a>
          <div className="tooltip">{label}</div>
        </li>
      ))}
    </ul>
  );
}