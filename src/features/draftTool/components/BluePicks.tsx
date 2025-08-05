import { PickSlot } from './PickSlot';

export const BluePicks = ({ championsList }) => {
  const bluePickIndices = [6, 9, 10, 17, 18];
  return (
    <aside className='flex flex-col w-1/6 h-full'>
      {bluePickIndices.map((index, i) => (
        <PickSlot
          key={index}
          champion={championsList[index]}
          marginBottom={i === 2 ? 'mb-[20px]' : 'mb-[5px]'}
        />
      ))}
    </aside>
  );
};
