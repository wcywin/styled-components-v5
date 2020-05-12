import styled, { css } from 'styled-components'

const largeStyles = ({ large }) => {
	if (large) {
		return css`
			padding: 10px;
			border-radius: 5px;
			font-size: 1.5em;
		`;
	} else {
		return css`
			padding: 8px;			
			border-radius: 4px;
			font-size: 1em;
		`;
	}
}

const Button = styled.button`
	color: white;
	background: ${p => p.secondary ? p.theme.secondaryColor : p.theme.primaryColor };
	font-weight: bold;
	${largeStyles};
	box-shadow: none;
	border: none;
	width: 100%;
	display: block;
	white-space: normal;
	outline: none;
	cursor: pointer;
	
	&:hover {
		box-shadow: 0 2px 4px rgba(0,0,0,0.3);
	}
	
	&:disabled {
		background: #eee;
		color: #666;
		cursor: initial;
	}
`;

export { Button };