import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import Slider from './Components/Common/Slider';

document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-b-blocks-advance-slider');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);

		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />
			<Slider attributes={attributes} />
		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});