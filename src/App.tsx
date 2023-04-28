import { Frontend } from './components/Fronted';
import { Backend } from './components/Backend';
import { Profile } from './components/Profile';
import { Outros } from './components/Outros';

function App() {
	return (
		<div className='max-w-[100rem] mx-auto px-4 sm:px-6 md:px-8'>
			<Profile />
			<Backend />
			<Frontend />
			<Outros />
		</div>
	);
}

export default App