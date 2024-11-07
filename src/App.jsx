import Button from './components/Button/Button';

function App() {
  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-b from-blue-900 to-blue-950">
    {/* Navigation Bar */}
    <nav className="absolute top-0 left-0 right-0 z-10 p-4">
        <div className="container mx-auto">
        <img 
            src="./logo.png" 
            alt="Company Logo" 
            className="h-8 object-contain"
        />
        </div>
    </nav>

    {/* Background Dashboard Image */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2/3 h-4/5">
        <div className="relative w-full h-full transform perspective-1000 rotate-y-6 rotate-x-6">
        <img
            src="./background.png"
            alt="Dashboard Preview"
            className="w-full h-full object-cover rounded-lg shadow-2xl"
        />
        </div>
    </div>

    {/* Main Content */}
    <main className="relative z-10 h-screen flex items-center">
        <div className="container mx-auto px-4">
        <div className="max-w-2xl text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            INDUSTRY 4.0, MES, AIOT, ESG
            </h1>
            <p className="text-lg text-blue-100">
            MES, AIOT, EMS, ESG, BI Dashboard, Traceability,<br />
            OEE, Performance, Quality, Reporting, Mobility
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-8">
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
export default App
