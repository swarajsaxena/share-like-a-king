import './App.css';
import Navbar from './components/Navbar';
import Playground from './components/Playground';
import Footer from './components/Footer';

const API = {
	API_KEY: 'UAsV7lV0mSRxRIHDqN0aDbaMs',
	API_SECRET: 'D5hrZfxhRiCjiMVoYb8nFSn97hluy817rlvRqMeGU5qgEvOXti',
	BEARER_TOKEN:
		'AAAAAAAAAAAAAAAAAAAAAOWSYgEAAAAAVHouB22jDnFDcXIKxPALM48PmwU%3DMeXYiywAq9HAx3T5pUBeTZpSbS3yk9nwSoGK3hVVfizKBGoY8k',
};

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Playground />
			<Footer />
		</div>
	);
}

export default App;
