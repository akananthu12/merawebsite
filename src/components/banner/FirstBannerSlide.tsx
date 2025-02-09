import { FirstSlideContents } from '@/components/banner/FirstSlideContents';
import Image from 'next/image';
import CarBanner from '~/images/CarBanner.png';

export const FirstBannerSlide = () => {
  return (
    <div className='relative  w-full z-0 '>
      <div className='w-full flex flex-1 h-full  aspect-square absolute inset-0  '>
        <Image
          src={CarBanner}
          className='w-full h-full object-cover'
          alt='Image'
          loading='eager'
        />
      </div>

      <div className='relative h-full flex z-10  '>
        <FirstSlideContents />
      </div>
    </div>
  );
};
