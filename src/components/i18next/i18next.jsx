import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
const resources = {
    en: {
        translation: {
            soon: "Soon",
            home: 'Home',
            aboutUs: 'About Us',
            login: 'Login',
            loginText: 'Already have an account? Sign in',
            english: 'English',
            russian: 'Russian',
            armenian: 'Armenian',
            search: 'Search',
            sortBy: 'Sort By',
            latest: 'Latest',
            lowToHigh: 'Price: low to high',
            highToLow: 'Price: high to low',
            events: 'Events',
            quickLinks: 'Quick Links',
            privacyPolicy: 'Privacy Policy',
            contactUs: 'Contact Us',
            email: 'Email',
            phone: 'Phone',
            address: 'Address',
            noResult: 'There are no results for your request',
            signUp: 'Sign Up',
            signUpText: 'Dont have an account? Sign up',
            aboutText: 'We are dedicated to providing the best ticketing services. Our platform ensures a seamless experience for finding and purchasing tickets to various events. We are committed to quality and customer satisfaction',
            name: 'Name',
            password: 'Password',
            ticket: 'ticket',
            favoriteTicket: 'Favorite Tickets',
            allRights: 'All rights reserved.',
            logout: 'Logout',
            ourTeam: 'Our Team',
            founderName: 'Joe Doe',
            founderCEO: 'Founder & CEO',
            chief: 'Chief Operating Officer',
            chiefName: 'Jane Smith',
            createTicket: 'Create Ticket',
            eventTitle: 'Event Title',
            eventDescription: 'Description of Event',
            image: 'Image URL',
            price: 'Price',
            date: 'Date',
            submit: 'Submit',
            statistic: 'Statistic',
        },
    },
    hy: {
        translation: {
            soon: "Շուտով",
            home: 'Գլխավոր էջ',
            aboutUs: 'Մեր մասին',
            login: 'Մուտք',
            english: 'Անգլերեն',
            russian: 'Ռուսերեն',
            armenian: 'Հայերեն',
            search: 'Որոնել',
            sortBy: 'Դասավորել ըստ',
            latest: 'Վերջին',
            lowToHigh: 'Գին: ցածրից բարձր',
            highToLow: 'Գին: բարձրից ցածր',
            events: 'Իրադարձություններ',
            quickLinks: 'Արագ հղումներ',
            privacyPolicy: 'Գաղտնիության քաղաքականություն',
            contactUs: 'Կապվեք մեզ հետ',
            email: 'Էլ. փոստ',
            phone: 'Հեռախոս',
            address: 'Հասցե',
            noResult: 'Ձեր որոնմամբ արդյունքներ չկան',
            signUp: 'Գրանցվել',
            aboutText: 'Մեր առաքելությունն է ապահովել լավագույն տոմսային ծառայությունները։ Մեր հարթակը ապահովում է առանց խոչընդոտների փորձ փորձfinding and purchasing tickets to various events. Մենք հանձնառու ենք որակի և հաճախորդների բավարարվածության հարցում։',
            name: 'Անուն',
            password: 'Գաղտնաբառ',
            ticket: 'Տոմս',
            favoriteTicket: 'Հավանած տոմսեր',
            allRights: 'Բոլոր իրավունքները պաշտպանված են։',
            ourTeam: 'Մեր թիմը',
            founderName: 'Ջո Դո',
            founderCEO: 'Հիմնադիր և գլխավոր տնօրեն',
            chief: 'Գլխավոր գործադիր տնօրեն',
            chiefName: 'Ջեյն Սմիթ',
            createTicket: 'Ստեղծել տոմս',
            eventTitle: 'Իրադարձության վերնագիր',
            eventDescription: 'Իրադարձության նկարագրություն',
            image: 'Նկարի URL',
            price: 'Գին',
            date: 'Ամսաթիվ',
            submit: 'Ուղարկել',
            logout: 'Ելք',
            statistic: 'Վիճակագրություն',
        },
    },
    ru: {
        translation: {
            soon: 'Скоро',
            home: 'Главная страница',
            aboutUs: 'О нас',
            login: 'Вход',
            english: 'Английский',
            russian: 'Русский',
            armenian: 'Армянский',
            search: 'Поиск',
            sortBy: 'Сортировать по',
            latest: 'Последние',
            lowToHigh: 'Цена: от низкой к высокой',
            highToLow: 'Цена: от высокой к низкой',
            events: 'События',
            quickLinks: 'Быстрые ссылки',
            privacyPolicy: 'Политика конфиденциальности',
            contactUs: 'Свяжитесь с нами',
            phone: 'Телефон',
            address: 'Адрес',
            noResult: 'По вашему запросу нет результатов',
            signUp: 'Зарегистрироваться',
            aboutText: 'Мы стремимся предоставлять лучшие услуги по продаже билетов. Наша платформа обеспечивает бесперебойный процесс поиска и покупки билетов на различные мероприятия. Мы привержены качеству и удовлетворенности клиентов.',
            password: 'Пароль',
            ticket: 'Билет',
            favoriteTicket: 'Избранные билеты',
            allRights: 'Все права защищены.',
            email: 'Электронная почта',
            name: 'Имя',
            ourTeam: 'Наша команда',
            founderName: 'Джо Доу',
            founderCEO: 'Основатель и генеральный директор',
            chief: 'Операционный директор',
            chiefName: 'Джейн Смит',
            createTicket: 'Создать билет',
            eventTitle: 'Название события',
            eventDescription: 'Описание события',
            image: 'URL изображения',
            price: 'Цена',
            date: 'Дата',
            submit: 'Отправить',
            logout: 'Выход',
            statistic: 'Статистика',
        }
    }

};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
