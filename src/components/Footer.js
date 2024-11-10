import React from 'react'

export default function Footer() {
  return (
    <>
         {/* Footer Section */}
         <div className="bg-black text-white py-20 relative p-5 ">
          <div className="max-w-7xl mx-auto">
            
            <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center sm:justify-center md:justify-center lg:justify-start gap-8 text-gray-400 mt-16">
              {["Utility Pages", "Explore", "Find a Car", "Get in Touch"].map((section, index) => (
                <div key={index}>
                  <h2 className="font-bold text-lg text-white mb-4">{section}</h2>
                  <ul className="space-y-2">
                    {["Terms & Condition", "Privacy Policy", "Legal Notice", "Accessibility"].map((item, idx) => (
                      <li key={idx} className="hover:text-blue-500 cursor-pointer">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </footer>
          </div>
        </div>
    
    </>
  )
}
