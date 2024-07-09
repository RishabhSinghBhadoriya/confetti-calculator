import ConfettiExplosion from 'react-confetti-explosion';


// eslint-disable-next-line react/prop-types
const ConfettiComponent = ({ active }) => {
    return <>{active && <ConfettiExplosion />}</>;
};


export default ConfettiComponent;