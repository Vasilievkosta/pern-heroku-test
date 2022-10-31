import React from 'react';
import { Link } from 'react-router-dom';

import './home.css';

const Home = () => {
	const [value, setValue] = React.useState(0);
	const [visible, setVisible] = React.useState(true);

	if (visible) {
		return (
			<div className='home'>
				
				<div className='links'>
					<Link to="/form" className='link'>
						<p>go to "form" page</p>
					</Link>
					<Link to="/test" className='link'>
						<p>go to "table masters" page</p>
					</Link>
				</div>
				<button onClick={() => setValue((v) => v + 1)}>+</button>
				<button onClick={() => setVisible(false)}>hide✅</button>
				<ClassCounter value={value} />
				<HookCounter value={value} />
			</div>
		);
	} else {
		return <button onClick={() => setVisible(true)}>show</button>
	}
};

const HookCounter = ({ value }) => {

	React.useEffect(() => {
		console.log('useEffect');
	}, []);

	return <p style={{ fontWeight: '700' }}> {value} </p>;
}

class ClassCounter extends React.Component {

	componentDidMount() {
		console.log('class: mount');
	}

	componentDidUpdate() {
		console.log('class: update');
	}

	componentWillUnmount() {
		console.log('class: unMount');
	}

	render() {
		return <p>{this.props.value}</p>;
	}
}


export default Home;