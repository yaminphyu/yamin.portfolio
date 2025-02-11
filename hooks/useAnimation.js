/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

const useAnimation = ({ targetRef }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect (() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 } // Adjust the visibility threshold as needed
        );

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
            observer.disconnect();
        };
    }, []); // Run only once when the component mounts

    return isVisible;
};

export default useAnimation;