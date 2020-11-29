import { GreySection } from './Containers';
import { photographs } from '../data/data.json';

export default function Gallery() {
  return (
    <GreySection paddingLR="0" paddingTB="0">
      <div className="imgContainer">
        {photographs.map((url, key) => (
          <div className="imgWrapper">
            <img key={key} src={url} />
          </div>
        ))}
      </div>
    </GreySection>
  );
}
