import React from 'react';

interface SupportCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const SupportCard = ({ title, description, icon, link }: SupportCardProps) => {
  return (
    <a href={link} className="support-card">
      <div className="support-card__icon">
        <img src={icon} alt={title} />
      </div>
      <div className="support-card__content">
        <h3 className="support-card__title">{title}</h3>
        <p className="support-card__description">{description}</p>
      </div>
    </a>
  );
};
<style jsx>{`
  .support-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: var(--color-white);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
  }
`}</style>;

export default SupportCard;
