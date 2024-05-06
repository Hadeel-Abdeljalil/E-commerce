import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Typed from 'typed.js';
import SwiperStoare from '../../Swiper/SwiperStore.jsx';
import SwiperStore from './../../Swiper/SwiperStore';
export default function Header() {
    const typedElement = useRef(null);

    useEffect(() => {
        const options = {
            strings: ["PALESTINE"],
            typeSpeed: 150,
            backSpeed: 150,
            loop: true,
        };

        if (typedElement.current) {
            const typedInstance = new Typed(typedElement.current, options);

            return () => {
                typedInstance.destroy();
            };
        }
    }, []);

    return (
       <SwiperStore/>
    );
}
