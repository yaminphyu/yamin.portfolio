export const handleSmoothScroll = (e, id, closeSidebar, setActiveHash) => {
    e.preventDefault();

    const hash_code = id?.split('#')[1];

    // Close the sidebar if a close function is provided
    if (closeSidebar) {
        closeSidebar();
    }

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
    }, 700); // Adjust the delay to match the sidebar closing animation time
};
