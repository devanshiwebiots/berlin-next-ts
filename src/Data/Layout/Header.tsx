import { FileText, Mail, Send, Settings, ShoppingCart, Truck, User } from "react-feather";

export const headerMenu = [
    { id: 1, title: 'Default Dashboard', link: '/dashboard/default' },
    { id: 2, title: 'Ecommerce Dashboard', link: '/dashboard/ecommerce' },
    { id: 3, title: 'General Widgets', link: '/widgets/general' }
]

export const cartsData = [
    {
        image: "06.jpg",
        title: "Men Jacket",
        amount: "1 X $ 299.00"
    },
    {
        image: "02.jpg",
        title: "Women Top",
        amount: "2 X $ 150.00"
    }
]

export const bookMarkData = [
    {
        icon: "form",
        path: `/forms/form_controls/validation_form`,
        title: "Form",
    },
    {
        icon: "user",
        path: `/app/users/user_profile`,
        title: "Profile",
    },
    {
        icon: "table",
        path: `/table/reactstrap_table/basic_table`,
        title: "Tables",
    },
];

export const headerNotificationsData = [
    {
        id: 1,
        color: 'primary',
        icon: <Truck className="stroke-primary" />,
        title: 'Delivery processing',
        path: '/app/ecommerce/recent_order',
        time: '6 hr'
    },
    {
        id: 2,
        color: 'secondary',
        icon: <ShoppingCart className="stroke-secondary" />,
        title: 'Order Complete',
        path: '/app/ecommerce/cart',
        time: '3 hr'
    },
    {
        id: 3,
        color: 'success',
        icon: <FileText className="stroke-success" />,
        title: 'Tickets Generated',
        path: '/app/ecommerce/invoice/invoice_6',
        time: '1 hr'
    },
    {
        id: 4,
        color: 'warning',
        icon: <Send className="stroke-warning" />,
        title: 'Delivery Complete',
        path: '/app/letter_box',
        time: '45 min'
    }
]

export const headerMessageData = [
    {
        id: 1,
        image: '3.jpg',
        name: 'Helen Walter',
        text: 'Do you want to go see movie?',
    },
    {
        id: 2,
        image: '6.jpg',
        name: 'Jason Borne',
        text: 'Thank you for rating us.',
    },
    {
        id: 3,
        image: '10.jpg',
        name: 'Sarah Loren',
        text: 'What`s project report update?',
    }
]

export const headerProfileData = [
    {
        id: 1,
        icon: <User />,
        title: 'Account',
        path: '/app/users/user_profile'
    },
    {
        id: 2,
        icon: <Mail />,
        title: 'Inbox',
        path: '/app/letter_box'
    },
    {
        id: 3,
        icon: <FileText />,
        title: 'Taskboard',
        path: '/app/tasks'
    },
    {
        id: 4,
        icon: <Settings />,
        title: 'Settings',
        path: '/app/users/edit_profile'
    }
]

export let languageData = [
    {
        languageParameter: "en",
        languageName: "English",
        languageIconClassName: "us",
        subTitle: "US"
    },
    {
        languageParameter: "du",
        languageName: "Deutsch",
        languageIconClassName: "de",
    },
    {
        languageParameter: "es",
        languageName: "Español",
        languageIconClassName: "es",
    },
    {
        languageParameter: "fr",
        languageName: "Français",
        languageIconClassName: "fr",
    },
    {
        languageParameter: "pt",
        languageName: "Português",
        languageIconClassName: "pt",
        subTitle: "BR"
    },
    {
        languageParameter: "cn",
        languageName: "简体中文",
        languageIconClassName: "cn",
    },
    {
        languageParameter: "ae",
        languageName: "لعربي",
        languageIconClassName: "ae",
        subTitle: "ae"
    },
];