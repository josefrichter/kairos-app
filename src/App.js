import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="bg-yellow-50 min-h-screen">
      <div className="container mx-auto py-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-48 w-full object-cover md:h-full md:w-48" src={logo} alt="Man looking at item at a store"></img>
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-yellow-900 font-semibold">Case study</div>
              <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
              <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
              <button class="h-10 px-5 my-2 text-white transition-colors duration-150 bg-yellow-900 rounded focus:shadow-outline hover:bg-yellow-700">Select</button>
            </div>
          </div>
        </div>
        <div className="max-w-md mx-auto p-4 my-4 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <input class="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded focus:shadow-outline" type="text" placeholder="Large input"/>
          <input class="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded focus:shadow-outline" type="text" placeholder="Regular input"/>
          <input class="w-full h-8 px-2 text-sm text-gray-700 placeholder-gray-600 border rounded focus:shadow-outline" type="text" placeholder="Small input"/>
          <div class="relative inline-block w-full text-gray-700 my-2">
            <select class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded appearance-none focus:shadow-outline" placeholder="Regular input">
              <option>A regular sized select input</option>
              <option>Another option</option>
              <option>And one more</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            </div>
          </div>
          <button class="h-10 px-5 my-2 text-white transition-colors duration-150 bg-yellow-900 rounded focus:shadow-outline hover:bg-yellow-700">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
