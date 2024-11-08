import Button from './components/Button/Button';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia} from '@fortawesome/free-solid-svg-icons';

function App() {
    const [showLanguageMenu, setShowLanguageMenu] = useState(false);

    const toggleLanguageMenu = () => {
        setShowLanguageMenu((prev) => !prev);
    };
    
  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-b from-blue-900 to-blue-950">
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-4 flex justify-between items-center">
        <div className="container mx-auto flex justify-between items-center">
          <img 
            src="./logo.png" 
            alt="Company Logo" 
            className="h-8 object-contain"
          />

          {/* Language Selector with Icon */}
          <div className="relative z-20">
            <button 
              onClick={toggleLanguageMenu}
              className="flex items-center space-x-2 p-2 rounded-full focus:outline-none" // 無背景和hover效果
            >
              <FontAwesomeIcon icon={faEarthAsia} className="text-xl text-white" />
            </button>

            {/* Language Menu */}
            {showLanguageMenu && (
              <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg">
                <ul className="py-1">
                  <li 
                    onClick={() => setShowLanguageMenu(false)}
                    className="px-4 py-2 cursor-pointer hover:bg-blue-300"
                  >
                    English
                  </li>
                  <li 
                    onClick={() => setShowLanguageMenu(false)}
                    className="px-4 py-2 cursor-pointer hover:bg-blue-300"
                  >
                    中文
                  </li>
                  <li 
                    onClick={() => setShowLanguageMenu(false)}
                    className="px-4 py-2 cursor-pointer hover:bg-blue-300"
                  >
                    日本語
                  </li>
                  <li 
                    onClick={() => setShowLanguageMenu(false)}
                    className="px-4 py-2 cursor-pointer hover:bg-blue-300"
                  >
                    Français
                  </li>
                  <li 
                    onClick={() => setShowLanguageMenu(false)}
                    className="px-4 py-2 cursor-pointer hover:bg-blue-300"
                  >
                    Deutsch
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Background Dashboard Image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2/3 h-4/5">
        <div className="relative w-full h-full transform perspective-1000 rotate-y-6 rotate-x-6">
          <img
            src="./background.png"
            alt="Dashboard Preview"
            className="w-full h-full object-cover rounded-lg shadow-2xl animate-fadeInRight"
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tigh">
              INDUSTRY 4.0, MES, AIOT, ESG
            </h1>
            <p className="text-lg text-blue-100">
              MES, AIOT, EMS, ESG, BI Dashboard, Traceability,<br />
              OEE, Performance, Quality, Reporting, Mobility
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-8 animate-fadeInBottom">
              <Button text="了解更多" link="https://www.weyutech.com/" />
              <Button text="DEMO網站" link="https://cloud.weyutech.com/DCMATE_MEMS/template/list/list.html" />
              <Button text="聯絡資訊" link="" />
            </div>
          </div>
        </div>
      </main>

      {/* Optional: Gradient Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent pointer-events-none" />
    </div>
  );
}

export default App;
