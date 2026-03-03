import { useState, useEffect } from 'react';

const STORAGE_KEY = 'cookie-consent';

function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const savedConsent = localStorage.getItem(STORAGE_KEY);
        if (!savedConsent) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAcceptAll = () => {
        localStorage.setItem(STORAGE_KEY, 'all');
        setIsVisible(false);
    };

    const handleAcceptEssential = () => {
        localStorage.setItem(STORAGE_KEY, 'essential');
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="cookie-consent">
            <div className="cookie-consent__content container">
                <p className="cookie-consent__text">
                    我們使用 Cookie 來提升您的瀏覽體驗、提供個人化內容並分析流量。
                    點擊「接受全部」即表示您同意我們使用 Cookie。
                </p>
                <div className="cookie-consent__actions">
                    <button
                        className="btn btn--sm btn--outline cookie-consent__btn"
                        onClick={handleAcceptEssential}
                    >
                        僅必要 Cookie
                    </button>
                    <button
                        className="btn btn--sm btn--primary cookie-consent__btn"
                        onClick={handleAcceptAll}
                    >
                        接受全部
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CookieConsent;
