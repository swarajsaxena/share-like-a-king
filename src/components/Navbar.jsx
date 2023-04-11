import styled from 'styled-components';

const Navbar = () => {
	return (
		<Container>
			<img src='./images/logo.svg' alt='logo' className='logo' />
			<div className='input_box'>
				<img
					src='./images/search.svg'
					alt='search'
					className='search'
				/>
				<input type='text' placeholder='Paste a Twitter Post Link' />
			</div>
			<div className='button'>
				<img
					src='./images/question.svg'
					alt='question'
					className='question'
				/>
			</div>
		</Container>
	);
};

const Container = styled.div`
	/* border: 1px solid; */
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem;

	/* border: 1px solid; */
	img {
		height: 30px;
		cursor: pointer;
	}

	.input_box {
		width: 600px;
		/* height: 40px; */
		border: 2px solid hsl(0, 0%, 100%, 0.1);
		border-radius: 0.8rem;

		background: linear-gradient(
			to right,
			hsl(214, 27%, 20%),
			hsl(248, 16%, 20%)
		);

		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.8rem;
		gap: 0.5rem;
		transition: all 150ms ease;

		box-shadow: 0 16px 50px hsl(0, 0%, 0%, 0.4);

		.search {
			opacity: 0.5;
			height: 15px;
		}

		input {
			height: 100%;
			border: 1px solid;
			border: none;
			width: 100%;
			background: none;
			color: hsl(216, 38%, 95%);
			font-family: 'Poppins', sans-serif;
			letter-spacing: 1px;
			font-size: 1rem;
		}

		input:focus {
			border: none;
			outline: none;
		}

		input::placeholder {
			color: hsl(216, 38%, 95%, 0.5);
			letter-spacing: 1px;
		}
	}

	.button {
		/* border: 1px solid; */
		width: 40px;
		height: 40px;
		display: grid;
		place-items: center;

		border-radius: 0.8rem;
		cursor: pointer;
		transition: all 150ms ease;

		img {
			height: 20px;
			opacity: 0.5;
			transition: all 150ms ease;
		}

		&:hover {
			background: hsl(0, 0%, 100%, 0.2);

			img {
				opacity: 1;
			}
		}
	}
`;

export default Navbar;
