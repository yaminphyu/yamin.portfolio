/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

const useAnimation = ({ mainRef = null, targetRef = null }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isRefVisible, setIsRefVisible] = useState(false);

    useEffect (() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    setIsRefVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 } // Adjust the visibility threshold as needed
        );

        if (mainRef?.current) observer.observe(mainRef?.current);
        if (targetRef?.current) observer.observe(targetRef?.current);

        return () => {
            if (mainRef?.current) observer.unobserve(mainRef?.current);
            if (targetRef?.current) observer.unobserve(targetRef?.current);
        };
    }, [mainRef?.current, targetRef?.current]); // Run only once when the component mounts

    // Reset isVisible if mainRef.current becomes empty
    useEffect(() => {
        if (!mainRef?.current) {
            setIsRefVisible(false);
        }
    }, [mainRef?.current]);

    return {isVisible, isRefVisible};
};

export default useAnimation;