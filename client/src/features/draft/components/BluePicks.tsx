import { Champion } from '../types/types';
import { PickSlot } from './ui/PickSlot';

interface BluePicksProps {
  championsList: Champion[];
  currentStep: number;
}

export const BluePicks = ({ championsList, currentStep }: BluePicksProps) => {
  const bluePickIndices = [6, 9, 10, 17, 18];
  const margins = ['mb-[20px]', 'mb-[20px]', 'mb-[35px]', 'mb-[20px]', ''];

  return (
    <aside className='flex flex-col w-1/6 h-full pl-5'>
      {bluePickIndices.map((index, i) => (
        <PickSlot
          key={index}
          champion={championsList[index]}
          marginBottom={margins[i]}
          blue
          active={currentStep === index}
        />
      ))}
    </aside>
  );
};
