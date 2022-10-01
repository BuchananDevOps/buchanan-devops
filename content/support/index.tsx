import { Activity, CodeDocument, Devices, Notification } from '@components';

export default {
  supportFeatures: [
    {
      title: 'Agile Planning',
      description:
        'Our team will include your business in our agile planning process to ensure that your project is cutting edge and meets your industries latest and greatest innovations to stay competitive.',
      icon: <Devices fill="#FF4ECD" />,
    },
    {
      title: 'Continuous Monitoring',
      description:
        'To smoothly operate your business, you need to have a reliable team for maintenance and continuous monitoring. Ensuring the integrity of your systems is a key factor in the success of your business.',
      icon: <CodeDocument fill="#FF4ECD" />,
    },
    {
      title: 'Reduced Downtime',
      description:
        'By using our team of experts, you can reduce downtime and increase productivity. Our team will ensure that your systems are always up and running to keep your daily operations running smoothly.',
      icon: <Notification fill="#FF4ECD" />,
    },
    {
      title: 'Increased Productivity',
      description:
        'Our team will relieve your team of the burden of maintaining your systems. This will allow your team to focus on the core of your business and increase productivity.',
      icon: <Activity fill="#FF4ECD" />,
    },
  ],
};
