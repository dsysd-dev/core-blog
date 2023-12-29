import { Icon } from '@iconify/react';

import { SideNavItem } from './types';
import { faYoutube, faTwitter, faMedium, faDev, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SIDENAV_ITEMS: SideNavItem[] = [
    {
        title: 'Home',
        path: '/',
        icon: <Icon icon="lucide:home" width="24" height="24" />,
    },
    {
        title: 'Posts',
        path: '/posts',
        icon: <Icon icon="lucide:folder" width="24" height="24" />,
        // submenu: true,
        // subMenuItems: [
        //     { title: 'All', path: '/posts' },
        //     { title: 'AWS Quickstart', path: '/posts/aws-quickstart' },
        //     { title: 'Blockchain', path: '/posts/aws-quickstart' },
        // ],
    },
    {
        title: 'Email',
        path: 'mailto:dsysd.mail@gmail.com',
        icon: <Icon icon="lucide:mail" width="24" height="24" />,
    },
    {
        title: 'YouTube',
        path: 'https://www.youtube.com/@dsysd-dev',
        icon: <FontAwesomeIcon icon={faYoutube} width="24" height="24" />,
    },
    {
        title: 'Github',
        path: 'https://github.com/dsysd-dev/',
        icon: <FontAwesomeIcon icon={faGithub} width="24" height="24" />,
    },
    {
        title: 'Twitter',
        path: 'https://twitter.com/dsysd_dev',
        icon: <FontAwesomeIcon icon={faTwitter} width="24" height="24" />,
    },
    {
        title: 'Medium',
        path: 'https://dsysd-dev.medium.com/',
        icon: <FontAwesomeIcon icon={faMedium} width="24" height="24" />,
    },
    {
        title: 'Dev.to',
        path: 'https://dev.to/dsysd_dev/',
        icon: <FontAwesomeIcon icon={faDev} width="24" height="24" />,
    },
    {
        title: 'Instagram',
        path: 'https://www.instagram.com/dsysd.dev/',
        icon: <FontAwesomeIcon icon={faInstagram} width="24" height="24" />,
    },
    {
        title: 'LinkedIn',
        path: 'https://www.linkedin.com/company/dsysd/',
        icon: <FontAwesomeIcon icon={faLinkedin} width="24" height="24" />,
    },
    // {
    //     title: 'Posts',
    //     path: '/',
    //     icon: <Icon icon="lucide:folder" width="24" height="24" />,
    //     submenu: true,
    //     subMenuItems: [
    //         { title: 'All', path: '/' },
    //         { title: 'AWS Quickstart', path: '/posts/aws-quickstart' },
    //         { title: 'Blockchain', path: '/posts/aws-quickstart' },
    //     ],
    // },
    // {
    //     title: 'Messages',
    //     path: '/messages',
    //     icon: <Icon icon="lucide:mail" width="24" height="24" />,
    // },
    // {
    //     title: 'Settings',
    //     path: '/settings',
    //     icon: <Icon icon="lucide:settings" width="24" height="24" />,
    //     submenu: true,
    //     subMenuItems: [
    //         { title: 'Account', path: '/settings/account' },
    //         { title: 'Privacy', path: '/settings/privacy' },
    //     ],
    // },
    // {
    //     title: 'Help',
    //     path: '/help',
    //     icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
    // },
];