import './App.css';
import { useContext } from 'react';
import { UserContext } from './contexts/userContext';
import Card from './card/card.component';
import { signInWithGoogle, createAuthUserDoc } from './utils/fireBase';
const userData = [
	{
		name: 'Robert',
		address: [
			{
				streetNumber: 132,
				streetName: 'Main Street',
				zipCode: 51005,
			},
		],
		bills: {
			essentialBills: [
				{
					name: 'Electric',
					company: 'Nuvera',
					currentDue: 200,
					simplePayAmount: 200,
					previousBill: 200,
					balance: 0,
					isSettlement: false,
					pastDue: 0,
				},
				{
					name: 'HousePayment',
					company: 'The V Corp',
					currentDue: 200,
					simplePayAmount: 200,
					previousBill: 200,
					balance: 0,
					pastDue: 0,
				},
				{
					name: 'Transportation',
					company: 'Chevy',
					currentDue: 200,
					simplePayAmount: 200,
					previousBill: 200,
					balance: 15000,
					pastDue: 2500,
				},
			],

			convenientBills: [
				{
					name: 'Intenet',
					company: 'Nuvera',
					currentDue: 200,
					simplePayAmount: 200,
					previousBill: 200,
					balance: 0,
					isSettlement: false,
					pastDue: 0,
				},
				{
					name: 'Media Services',
					company: 'Disney',
					currentDue: 10,
					simplePayAmount: 100,
					previousBill: 100,
					balance: 0,
					pastDue: 0,
				},
				{
					name: 'Transportation',
					company: 'chevy',
					currentDue: 0,
					simplePayAmount: 500,
					previousBill: 200,
					balance: 25000,
					pastDue: 0,
				},
			],
			luxaryBills: [
				{
					name: 'Personal Chief',
					company: 'Ramsey Enterprises',
					currentDue: 100,
					simplePayAmount: 100,
					previousBill: 200,
					balance: 0,
					isSettlement: false,
					pastDue: 1000,
				},
				{
					name: 'Cleaning Services',
					company: 'Nude Maids.com',
					currentDue: 10,
					simplePayAmount: 100,
					previousBill: 100,
					balance: 0,
					pastDue: 0,
				},
			],
		},
	},
];

function App() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  
	const handleClickFunction = async () => {
    const {user} = await signInWithGoogle();
    const userDocRef = await createAuthUserDoc(user)
		await setCurrentUser(user)
  };


	const handleClickPrintFunction = async () => {
		console.log(currentUser)
	};

	return (
		<>
		<div className='App'>
			<button type="button"onClick={handleClickFunction}>Google sign in</button>
			<button onClick={handleClickPrintFunction}>Print to Console</button>
		</div>
		<Card />
		</>
	);
}

export default App;
