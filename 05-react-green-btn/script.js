const App = ({ initialButtonText, initialClass }) => {
	const [btnText, setBtnText] = React.useState(initialButtonText);
	const [btnClass, setBtnClass] = React.useState(initialClass);

	const onBtnClick = () => {
		setBtnText(`Hi from react!`);
		setBtnClass('green-btn');
	};

	return (
			<div className="app">
				<button className={btnClass}
				        onClick={onBtnClick}>{btnText}</button>
			</div>
	);
};

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(<App initialButtonText="Click me!" initialClass="" />);