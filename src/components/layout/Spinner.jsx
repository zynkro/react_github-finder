import spinner from './assets/spinner.gif';

function Spinner() {
  return (
    <div className='w-100'>
      <img
        src={spinner}
        className='text-center mx-auto'
        width={120}
        alt='Loading...'
      />
    </div>
  );
}

export default Spinner;
