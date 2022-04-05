import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
	const el = document.getElementById('portal');
	return createPortal(children, el);
};

export default Portal;
