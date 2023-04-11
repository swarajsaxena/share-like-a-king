import styled from 'styled-components';

const Footer = () => {
	return (
		<Container>
			<div>Follow me on Instagram :</div>
			<a href='https://www.instagram.com/codewithswaraj/'>
				CodeWithSwaraj
			</a>
		</Container>
	);
};

const Container = styled.div`
	/* border: 1px solid; */
	display: flex;
	gap: 0.3rem;
	padding: 1rem 0;

	a {
		color: hsl(211, 84%, 55%);
		text-decoration: none;
		border-bottom: 2px solid hsl(211, 84%, 55%, 0);
		transition: all 150ms ease-in-out;

		&:hover {
			border-bottom: 2px solid hsl(211, 84%, 55%, 1);
		}
	}
`;

export default Footer;
