import { Frontend } from './components/Fronted';
import { Backend } from './components/Backend';
import { Profile } from './components/Profile';
import { Outros } from './components/Outros';

function App() {
	return (
		<div className='m-auto max-w-[1520px] mb-9'>
			<Profile />
			<Backend />
			<Frontend />
			<Outros />
		</div>
	);
}

export default App