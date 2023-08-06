import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// const heading = React.createElement('div', { className: 'container' }, [
// 	React.createElement('h1', {key: 1}, 'Hi All 👋'),
// 	React.createElement('h2', {key: 2}, 'React Using CDN'),
// 	React.createElement('h3', {key: 3}, 'Part 1 Completed')
// ]);

export const HelloComponent = () => {
	return (
		<div className='container-test'>
			<h1>Hi All 👋</h1>
			<h2>React using JSX + Parcel</h2>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
