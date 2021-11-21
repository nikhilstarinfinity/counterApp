import React, { useState } from "react";


const App = () => {
	var value = 1;
	<input type="number">Please initialise me</input>
	const [counter, setCounter] = useState(value);

	const handleClick1 = () => {
		setCounter(counter + 1)
	}

		const handleClick2 = () => {
		setCounter(counter - 1)
	}

	return (
		<div style={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			fontSize: '12px',
			fontWeight: '500',
			maskType: 'Avenir',
			marginTop:'100px',
			position: 'absolute',
			width: '100%',
			height: '100%',
			top: '-15%',
		}}>
		
			<div style={{
				fontSize: '120%',
				position: 'relative',
				top: '10vh',
			}}>

			</div>
			<div style={{
			marginTop:'12px',
			position:'relative'
		}}>Saving counter value
</div>	

			<div className="buttons">
				<button style={{
					fontSize: '21px',
					position: 'relative',
					top: '20vh',
					marginLeft: '5px',
					marginBottom:'12px',
					backgroundColor: '#FFFFFF',
					height:'53px',
					width:'58px',
					//borderRadius: '0º',
					color: '#B24242',
				}}
					onClick={handleClick2}>-</button>


				<button style={{
					fontSize: '21px',
					position: 'relative',
					top: '20vh',
					marginRight: '5px',
					backgroundColor: '#FBE8E8',
					borderRadius: '8%',
					height:'53px',
					width:'58px',
					color: '#B24242',
				}}>
					{counter}
				</button>

				<button style={{
					fontSize: '21px',
					position: 'relative',
					top: '20vh',
					marginRight: '5px',
					backgroundColor: '#B24242',
					borderRadius: '8%',
					height:'53px',
					width:'58px',
					color: 'white',
				}}
					onClick={handleClick1}>+</button>
					
			</div>
			<p style={{
			marginTop:'140px',
			marginRight:'-5px',
			bottomUp:'40px'
		}}> Counter Value: {counter}</p>

		</div >
		
	)
}

export default App
