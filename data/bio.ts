import { BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";
import { BsGithub, BsPhone, BsTelegram } from "react-icons/bs";

export const bio = {
    firstName: 'Artem',
    lastName: 'Kalancha',
    birthday: new Date(2000, 1, 21),
    country: 'Ukraine',
    city: 'Chernivtsi',
    languages: [
        {
            shortName: 'RO',
            name: 'Romanian',
            description: '',
        },
        {
            shortName: 'UA',
            name: 'Ukranian',
            description: '',
        },
        {
            shortName: 'EN',
            name: 'English',
            description: '',
        },
        {
            shortName: 'RU',
            name: 'Russian',
            description: '',
        }
    ],
    contacts: [
        {
            icon: BsPhone,
            title: '+380679659789',
            url: 'tel:+380679659789',
        },
        {
            icon: BiLogoGmail,
            title: 'kalancha.artem@gmail.com',
            url: 'mailto:kalancha.artem@gmail.com',
        },
        {
            icon: BsTelegram,
            title: 'a_kelen',
            url: 'https://t.me/a_kelen',
        },
        {
            icon: BiLogoLinkedin,
            title: 'artem-kalancha',
            url: 'https://www.linkedin.com/in/artem-kalancha',
        },
        {
            icon: BsGithub,
            title: 'a-kelen',
            url: 'https://github.com/a-kelen',
        },
    ]

}