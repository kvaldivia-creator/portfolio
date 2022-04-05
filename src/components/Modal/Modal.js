import React from 'react';
import styled from 'styled-components';
import Portal from '../Portal';

const ui = {
	Overlay: styled.div`
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, .5);
		display: flex;
		align-items: center;
		justify-content: center;
		animation: opacity-overlay 300ms ease-out;
		z-index: 1000;

		@keyframes opacity-overlay {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
	`,
	ContainerModal: styled.div`
		max-width: 700px;
		min-height: 100px;
		background-color: white;
		position: relative;
		border-radius: 10px;
		box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
		padding: 20px;
		z-index: 1000;
		margin: 20px;
	`,
	CloseModal: styled.div`
		width: 100vw;
		height: 100vh;
		position: absolute;
		cursor: pointer;
	`
};

const Modal = ({ children, onClick, active }) => {
	return (
		<Portal>
			{active && (
				<ui.Overlay>
					<ui.ContainerModal>{children}</ui.ContainerModal>
					<ui.CloseModal onClick={onClick} />
				</ui.Overlay>
			)}
		</Portal>
	);
};

export default Modal;
