import styled from 'styled-components';

const Playground = () => {
	return (
		<Container>
			<div className='card'>
				<div className='card_header'>
					<img
						className='card_header_avatar'
						src='./images/avatar.png'
					/>
					<div className='card_header_names'>
						<div className='card_header_names_name'>Your Name</div>
						<div className='card_header_names_user_name'>
							@Your User Name
						</div>
					</div>
				</div>
				<div className='card_body'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Cumque asperiores, nulla earum quis accusamus sed eveniet
					iure consequatur vel obcaecati rem corporis nisi ratione
					voluptatem molestias? Explicabo, aperiam maxime optio
					libero, quod ratione qui deserunt eos veniam voluptatum
					laudantium neque culpa maiores est voluptate atque a. Ullam
					quisquam unde officiis!
				</div>
			</div>
		</Container>
	);
};

const Container = styled.div`
	/* border: 1px solid hsl(0, 0%, 100%, 0.5); */
	background: linear-gradient(135deg, hsl(174, 99%, 34%), hsl(208, 35%, 10%));
	border-radius: 0.5rem;
	padding: 50px;
	height: 100%;
	color: black;

	.card {
		max-width: 700px;
		padding: 40px;
		background: linear-gradient(
			135deg,
			hsl(174, 99%, 100%, 1),
			hsl(208, 35%, 100%, 0.7)
		);
		border-radius: 1rem;

		display: flex;
		flex-direction: column;
		gap: 1rem;
		letter-spacing: 0;

		&_header {
			display: flex;
			align-items: center;
			gap: 1rem;
			/* flex-direction: column; */
			&_avatar {
				border-radius: 5rem;
				height: 3rem;
				width: 3rem;
			}

			&_names {
				display: flex;
				flex-direction: column;
				&_name {
					font-weight: 600;
				}

				&_user_name {
					/* opacity: 0.9; */
					/* font-weight: 600; */
				}
			}
		}

		&_body {
			font-family: 'Oxygen', sans-serif;

			color: var(--textPrimary);
			font-size: 1.4em;
			line-height: 1.5;
			/* font-weight: 550; */
			margin-bottom: 1em;
			pointer-events: none;
		}
	}
`;

export default Playground;
