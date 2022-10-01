import React from 'react';
import { Bug, CodeDocument, Sparkle, TypescriptLogo } from '@components';

export default {
  devopsFeatures: [
    {
      title: 'Speed',
      description:
        'Move with high velocity and agility to deliver value to your customers and increase your exposure.',
      icon: <Sparkle fill="#FF4ECD" />,
    },
    {
      title: 'Rapid Delivery',
      description:
        'Increase the frequency and pace of development so you and innovate and improve your project faster.',
      icon: <TypescriptLogo fill="#FF4ECD" />,
    },
    {
      title: 'Management',
      description:
        'Achieve higher quality and efficiency by automating your processes and reducing manual errors.',
      icon: <Bug fill="#FF4ECD" />,
    },
    {
      title: 'Automation',
      description:
        'Automate your build and testing processes to ensure your project is always ready to scale with your customers.',
      icon: <CodeDocument fill="#FF4ECD" />,
    },
  ],
};
