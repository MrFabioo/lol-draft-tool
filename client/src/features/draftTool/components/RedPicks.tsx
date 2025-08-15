import { PickSlot } from './PickSlot';

export const RedPicks = ({ championsList }) => {
  const redPickIndices = [7, 8, 11, 16, 19];
  return (
    <aside className='flex flex-col w-1/6 h-full'>
      {redPickIndices.map((index, i) => (
        <PickSlot
          key={index}
          champion={championsList[index]}
          marginBottom={i === 2 ? 'mb-[20px]' : 'mb-[5px]'}
        />
      ))}
    </aside>
  );
};
