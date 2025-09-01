import { Champion } from '../types/types';

type PickSlotProps = {
  champion: Champion | null;
  marginBottom?: string;
};

export const PickSlot = ({
  champion,
  marginBottom = 'mb-[5px]',
}: PickSlotProps) => {
  return (
    <div className={`w-full h-1/5 ${marginBottom}`}>
      {champion && champion.key ? (
        <div
          className={`w-full h-full bg-size-[241%]`}
          style={{
            backgroundImage: `url(https://cdn.communitydragon.org/latest/champion/${champion.key}/splash-art/centered/skin/0)`,
            backgroundPosition: '52% 28%',
          }}
        >
          <p className='text-white'>{champion.name}</p>
        </div>
      ) : (
        <div className={`w-full h-full bg-black`}></div>
      )}
    </div>
  );
};
