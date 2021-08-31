import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Desktop from './desktop';
import Mobile from './mobile';

export default function LandingPage() {
    const isDesktop = useMediaQuery({ minWidth: 767 });
    return isDesktop ? <Desktop /> : <Mobile />;
}
