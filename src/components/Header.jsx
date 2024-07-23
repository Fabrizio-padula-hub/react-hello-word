import Navbar from './Navbar';

function Header() {
    let sum = 0;
    const numberOne = 30000;
    const numberTwo = 40000;

    sum += numberOne + numberTwo

    return (
        <>
            <Navbar />
            <p className='text-white'>{sum > 30000 ? 'Sono bravo' : 'Sono povero'} ciao header</p>
            
        </>

    )
}

export default Header