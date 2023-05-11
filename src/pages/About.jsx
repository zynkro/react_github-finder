function About() {
  return (
    <div className='container mx-auto px-24 text-xl font-light'>
      <h1 className='text-5xl mb-6'>Github Finder</h1>

      <p className='mb-4'>
        This is a simple React application that communicates with Github's REST
        API and allows user searching and retrieving Github profiles and display
        data in a nice and user-friendly way.
      </p>

      <p className='mb-1'>
        This is also a learning project that goes over many fundamentals of
        ReactJS library. These include:
      </p>
      <ul className='pl-8 list-disc mb-4'>
        <li><i>Browser Router</i> and defining routes</li>
        <li>Reducers to update states effectively</li>
        <li>Spinner components when loading data from API</li>
        <li>Custom 404 (Not Found) Page</li>
        <li>Various React hooks: <i>useEffect</i>, <i>useReducer</i>, <i>useContext</i>, <i>useParams</i> etc.</li>
        <li><i>Context API</i> to avoid prop drilling</li>
        <li>Other commonly used code in Javascript and React - asynchronous functions, controlled inputs, alerts, user input validation etc.</li>
      </ul>

      <p className='mb-4'>
        It uses utility-first CSS framework{' '}
        <a
          className='text-pink-500 hover:text-pink-400 hover:underline'
          href='https://tailwindcss.com/'
          rel='noopener noreferrer'
          target='_blank'
        >
          TailwindCSS
        </a>{' '}
        as well as{' '}
        <a
          className='text-pink-500 hover:text-pink-400 hover:underline'
          href='https://daisyui.com/'
          rel='noopener noreferrer'
          target='_blank'
        >
          DaisyUI Components
        </a>
        , which is built on top of TailwindCSS and provides nice pre-built
        components to make development easier.
      </p>

      <p className='mb-4'>Some </p>

      <p className='mb-4'>
        Checkout the code repository for this project:{' '}
        <a
          className='text-pink-500 hover:text-pink-400 hover:underline'
          href='https://github.com/zynkd/react_github-finder'
          rel='noopener noreferrer'
          target='_blank'
        >
          Simple React Github Finder
        </a>
        .
      </p>
    </div>
  );
}
export default About;
