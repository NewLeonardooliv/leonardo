import { TimelineItem } from './TimelineItem';

const timelineData = [
  {
    title: '',
    description: '',
    date: '2018 - 2020',
    icon: '',
  },
  {
    title: '',
    description: '',
    date: '2019 - 2020',
    icon: '',
  },
];

export function Timeline() {
  return (
    <div className="flex flex-col bg-current-line">
      {timelineData.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  );
};
