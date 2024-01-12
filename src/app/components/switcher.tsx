import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/switcher.module.css';

const MenuSwitcher: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsExpanded(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div
            ref={menuRef}
            className={`${styles.menuSwitcher} ${isExpanded ? styles.expanded : ''}`}
            onClick={toggleMenu}
        >
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <p>Styles</p>
                <div className={`${styles.menuArrow} ${isExpanded ? styles.rotated : ''}`}>
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </div>
            </div>
            {
                isExpanded && (
                    <div className={styles.menuLinks}>
                        <a href="https://jackcdavey.github.io/" title='First version of my portfolio'>
                            <p> V0.1</p>

                        </a>
                        <a href="https://terminal-demo-two.vercel.app/" title='A CLI-based website'>
                            <p>CLI</p>

                        </a>
                    </div>
                )
            }
        </div >
    );
};

export default MenuSwitcher;


