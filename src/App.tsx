import { useTheme } from 'styled-components';
import Header from './components/header';
import MainSection from './components/MainSection';

import { Text } from './components/typografy';
import { Container, SectionFooter } from './styled.app';

function App() {
	const theme = useTheme();

	return (
		<Container>
			<Header />

			<MainSection />

			<SectionFooter>
				<Text color={theme.pallet.ui.white}>Created by: Matheus Lopes</Text>
			</SectionFooter>
		</Container>
	);
}

export default App;
