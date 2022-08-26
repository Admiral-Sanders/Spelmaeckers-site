import SectionWrapper from 'components/sectionWrapper';
import Carousel, { Image } from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import './styles.scss';

interface Props {
  title: string;
  images: string[];
}

const GallerySection: React.FC<Props> = ({ title, images }) => {
  const sources: Image[] = images.map((img) => ({
    src: img,
  }));

  return (
    <SectionWrapper title={title}>
      <Carousel
        images={sources}
        style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}
        isAutoPlaying
        hasMediaButton={false}
        hasThumbnails={false}
      />
    </SectionWrapper>
  );
};

export default GallerySection;
