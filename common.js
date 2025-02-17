import { use, useEffect } from "react";

/* eslint-disable react-hooks/exhaustive-deps */
export const handleSmoothScroll = (e, id, closeSidebar, setActiveHash) => {
    e.preventDefault();

    // Close the sidebar if a close function is provided
    if (closeSidebar) {
        closeSidebar();
    }

    handleScroll(id, setActiveHash);
};

export const handleScroll = (id, setActiveHash) => {
    const hash_code = id?.split('#')[1];
    setTimeout(() => {
        if (hash_code === 'hero') {
            window.scrollTo({ top: 0, behavior: "smooth" })
            window.history.pushState(null, '', '/');
        } else {
            setActiveHash(id);
            const element = document.getElementById(hash_code);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                window.history.pushState(null, '', `#${hash_code}`);
            }
        }
    }, 500); // Adjust the delay to match the sidebar closing animation time
};

export const useOutsideAlerter = (ref, closeToggle) => {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                closeToggle();
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
};

export const useScrollUrlActive = (id, isRefVisible) => {
    useEffect (() => {
        if (!isRefVisible) {
            window.history.pushState(null, '', '/');
            return;
        }

        window.history.pushState(null, '', `#${id}`);
    }, [isRefVisible]);
}
