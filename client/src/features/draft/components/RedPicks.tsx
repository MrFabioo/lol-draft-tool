import { Champion } from '../types/types';
import { PickSlot } from './ui/PickSlot';

interface RedPicksProps {
  championsList: Champion[];
  currentStep: number;
}

export const RedPicks = ({ championsList, currentStep }: RedPicksProps) => {
  const redPickIndices = [7, 8, 11, 16, 19];
  const margins = ['mb-[20px]', 'mb-[20px]', 'mb-[35px]', 'mb-[20px]', ''];

  return (
    <aside className='flex flex-col w-1/6 h-full pr-5'>
      {redPickIndices.map((index, i) => (
        <PickSlot
          key={index}
          champion={championsList[index]}
          marginBottom={margins[i]}
          blue={false}
          active={currentStep === index}
        />
      ))}
    </aside>
  );
};
