import { GreySection } from './Containers';
import data from '../data/data.json';

export default function Gallery() {
	const {photographs} = data
	return (
		<GreySection paddingLR="0" paddingTB="0">
			<div className="imgContainer">
				{photographs.map((url, key) => (
					<div className="imgWrapper" key={key}>
						<img src={url} />
					</div>
				))}
			</div>
		</GreySection>
	);
}
