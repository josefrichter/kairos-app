import ConnectModal from './components/ConnectModal.js'

function App() {

  return (
    <div className="min-h-screen">
      <div className="bg-kairos h-96">
        <div className="">
          <ConnectModal /> 
        </div>
        <div className="container max-w-screen-xl mx-auto p-10 py-8 relative">
          <img className="absolute h-16 left-10 top-2 mt-4" src="kairos-logo.png" alt="statue"></img>
          <img className="absolute h-96 right-20 -bottom-32" src="statue1.png" alt="statue"></img>
          <h1 className="text-white text-6xl font-bold mt-40">Form.</h1>
          <h4 className="text-white text-xl">Change the World.<br/>
          One form at the time.</h4>
          
        </div>
      </div>
      
      <div className="container max-w-screen-xl mx-auto p-10">
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-6">
              <div className="">
                <h1 className="text-kairos-dark text-6xl font-bold mb-2">Heading H1</h1>
                <h2 className="text-kairos-dark text-4xl font-bold mb-2">Heading H2</h2>
                <h3 className="text-kairos-dark text-2xl font-bold mb-2">Heading H3</h3>
                <p className="text-gray-400 mb-2">Body Text. Lorem ipsum dolor, sit amet consectetur adipisicing elit. In dicta sapiente ut ipsam ad labore explicabo amet odit, nemo id quas non perferendis dolorem nihil debitis voluptates animi distinctio. Aliquam.</p>
              </div>
              <div className="mb-0 mt-10 pt-0">
                <input type="text" placeholder="Form Field" className="px-3 py-3 mb-2 placeholder-blueGray-300 text-blueGray-600 relative bg-kairos-light rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full"/>
                <input type="text" placeholder="Form Field" className="px-3 py-3 mb-2 placeholder-blueGray-300 text-blueGray-600 relative bg-kairos-light rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full"/>
                <input type="text" placeholder="Form Field" className="px-3 py-3 mb-2 placeholder-blueGray-300 text-blueGray-600 relative bg-kairos-light rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full"/>
                <input type="text" placeholder="Form Field" className="px-3 py-3 mb-2 placeholder-blueGray-300 text-blueGray-600 relative bg-kairos-light rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full"/>
              </div>
              <div>
                <button 
                  className="w-full bg-kairos-dark text-white active:bg-kairos font-bold uppercase text-xs tracking-widest px-6 py-3 rounded shadow hover:shadow-lg hover:bg-kairos outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                      >
                  Button
                </button>
              </div>
            </div>
            <div className="col-span-6"></div>
          </div>
      </div>
    </div>
  );
}

export default App;
