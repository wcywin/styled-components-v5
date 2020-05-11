import styled from 'styled-components'

const Button = styled.button`
	color: white;
	background: #f8049c;
	font-weight: bold;
	padding: 8px;
	border-radius: 4px;
	box-shadow: none;
	font-size: 1em;
	border: none;
	width: 100%;
	display: block;
	white-space: normal;
	outline: none;
	cursor: pointer;
	
	&:hover {
		box-shadow: 0 3px 6px rgba(0,0,0,0.3);
	}
	
	&:disabled {
		background: #eee;
		color: #666;
	}
`;

export { Button };