import { useState } from 'react';
import { faqData } from '../data/faq';

function FAQ() {
  const [activeId, setActiveId] = useState(null);

  const handleToggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-header__badge">FAQ</span>
          <h2 className="section-header__title">常見問題</h2>
          <p className="section-header__desc">
            找不到您要的答案？歡迎聯繫我們的客服團隊，我們很樂意為您解答。
          </p>
        </div>

        <div className="faq__list">
          {faqData.map((item) => (
            <div
              key={item.id}
              className={`faq__item ${activeId === item.id ? 'faq__item--active' : ''}`}
            >
              <button
                className="faq__question"
                onClick={() => handleToggle(item.id)}
                aria-expanded={activeId === item.id}
              >
                <span className="faq__question-text">{item.question}</span>
                <span className="faq__icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <div className="faq__answer-wrapper">
                <div className="faq__answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
