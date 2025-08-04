export const BluePicks = ({ championsList }) => {
  return (
    <aside className='flex flex-col w-1/6 h-full'>
      <div className={`w-full h-1/5 mb-[5px]`}>
        {championsList[6] ? (
          <div
            className={`w-full h-full bg-size-[241%]`}
            style={{
              backgroundImage: `url(https://cdn.communitydragon.org/latest/champion/${championsList[6].key}/splash-art/centered/skin/0)`,
              backgroundPosition: '52% 28%',
            }}
          >
            <p className='text-white'>{championsList[6].name}</p>
          </div>
        ) : (
          <div className={`w-full h-full bg-black`}></div>
        )}
      </div>
      <div className={`w-full h-1/5 mb-[5px]`}>
        {championsList[9] ? (
          <div
            className={`w-full h-full bg-size-[241%]`}
            style={{
              backgroundImage: `url(https://cdn.communitydragon.org/latest/champion/${championsList[9].key}/splash-art/centered/skin/0)`,
              backgroundPosition: '52% 28%',
            }}
          >
            <p className='text-white'>{championsList[9].name}</p>
          </div>
        ) : (
          <div className={`w-full h-full bg-black`}></div>
        )}
      </div>
      <div className={`w-full h-1/5 mb-[20px]`}>
        {championsList[10] ? (
          <div
            className={`w-full h-full bg-size-[241%]`}
            style={{
              backgroundImage: `url(https://cdn.communitydragon.org/latest/champion/${championsList[10].key}/splash-art/centered/skin/0)`,
              backgroundPosition: '52% 28%',
            }}
          >
            <p className='text-white'>{championsList[10].name}</p>
          </div>
        ) : (
          <div className={`w-full h-full bg-black`}></div>
        )}
      </div>
      <div className={`w-full h-1/5 mb-[5px]`}>
        {championsList[17] ? (
          <div
            className={`w-full h-full bg-size-[241%]`}
            style={{
              backgroundImage: `url(https://cdn.communitydragon.org/latest/champion/${championsList[17].key}/splash-art/centered/skin/0)`,
              backgroundPosition: '52% 28%',
            }}
          >
            <p className='text-white'>{championsList[17].name}</p>
          </div>
        ) : (
          <div className={`w-full h-full bg-black`}></div>
        )}
      </div>
      <div className={`w-full h-1/5 mb-[5px]`}>
        {championsList[18] ? (
          <div
            className={`w-full h-full bg-size-[241%]`}
            style={{
              backgroundImage: `url(https://cdn.communitydragon.org/latest/champion/${championsList[18].key}/splash-art/centered/skin/0)`,
              backgroundPosition: '52% 28%',
            }}
          >
            <p className='text-white'>{championsList[18].name}</p>
          </div>
        ) : (
          <div className={`w-full h-full bg-black`}></div>
        )}
      </div>
    </aside>
  );
};
