export const RedPicks = ({ championsList }) => {
  return (
    <aside className='flex flex-col w-1/6 h-full'>
      <div className={`w-full h-1/5 mb-[5px]`}>
        {championsList[7] ? (
          <div
            className={`w-full h-full bg-size-[241%]`}
            style={{
              backgroundImage: `url(https://cdn.communitydragon.org/latest/champion/${championsList[7].key}/splash-art/centered/skin/0)`,
              backgroundPosition: '52% 28%',
            }}
          >
            <p className='text-white'>{championsList[7].name}</p>
          </div>
        ) : (
          <div className={`w-full h-full bg-black`}></div>
        )}
      </div>
      <div className={`w-full h-1/5 mb-[5px]`}>
        {championsList[8] ? (
          <div
            className={`w-full h-full bg-size-[241%]`}
            style={{
              backgroundImage: `url(https://cdn.communitydragon.org/latest/champion/${championsList[8].key}/splash-art/centered/skin/0)`,
              backgroundPosition: '52% 28%',
            }}
          >
            <p className='text-white'>{championsList[8].name}</p>
          </div>
        ) : (
          <div className={`w-full h-full bg-black`}></div>
        )}
      </div>
      <div className={`w-full h-1/5 mb-[20px]`}>
        {championsList[11] ? (
          <div
            className={`w-full h-full bg-size-[241%]`}
            style={{
              backgroundImage: `url(https://cdn.communitydragon.org/latest/champion/${championsList[11].key}/splash-art/centered/skin/0)`,
              backgroundPosition: '52% 28%',
            }}
          >
            <p className='text-white'>{championsList[11].name}</p>
          </div>
        ) : (
          <div className={`w-full h-full bg-black`}></div>
        )}
      </div>
      <div className={`w-full h-1/5 mb-[5px]`}>
        {championsList[16] ? (
          <div
            className={`w-full h-full bg-size-[241%]`}
            style={{
              backgroundImage: `url(https://cdn.communitydragon.org/latest/champion/${championsList[16].key}/splash-art/centered/skin/0)`,
              backgroundPosition: '52% 28%',
            }}
          >
            <p className='text-white'>{championsList[16].name}</p>
          </div>
        ) : (
          <div className={`w-full h-full bg-black`}></div>
        )}
      </div>
      <div className={`w-full h-1/5 mb-[5px]`}>
        {championsList[19] ? (
          <div
            className={`w-full h-full bg-size-[241%]`}
            style={{
              backgroundImage: `url(https://cdn.communitydragon.org/latest/champion/${championsList[19].key}/splash-art/centered/skin/0)`,
              backgroundPosition: '52% 28%',
            }}
          >
            <p className='text-white'>{championsList[19].name}</p>
          </div>
        ) : (
          <div className={`w-full h-full bg-black`}></div>
        )}
      </div>
    </aside>
  );
};
