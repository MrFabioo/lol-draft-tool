interface DraftSequenceProps {
  currentStep: number;
}

function getPhase(step: number) {
  if (step < 6) return 'BAN PHASE 1';
  if (step < 12) return 'PICK PHASE 1';
  if (step < 16) return 'BAN PHASE 2';
  return 'PICK PHASE 2';
}

export default function DraftSequence({ currentStep }: DraftSequenceProps) {
  return (
    <div className='relative h-full w-1/3'>
      <div className='absolute bottom-[-4px] left-10 top-[-6px] w-[3px] bg-gold transform rotate-30 origin-left'></div>
      <p className='text-center text-gold text-2xl font-bold leading-[42px]'>
        {getPhase(currentStep)}
      </p>
      <div className='absolute bottom-[-6px] right-10 top-[-4px] w-[3px] bg-gold transform -rotate-30 origin-left'></div>
    </div>
  );
}
