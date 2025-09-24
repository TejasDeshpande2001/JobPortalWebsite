import { AlertTriangle, Shield, Phone } from 'lucide-react';

const ImportantNotice = () => {
  return (
    <section className="py-16 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg border-l-4 border-red-500 p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <AlertTriangle className="text-red-500" size={32} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-red-600 mb-4 flex items-center gap-2">
                <Shield size={24} />
                Important Notice - Fraud Alert
              </h3>
              
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  <strong>Job Nexus India</strong> is committed to ethical recruitment practices and candidate safety. 
                </p>
                
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">⚠️ Beware of Fraudulent Activities:</h4>
                  <ul className="list-disc list-inside space-y-2 text-red-700">
                    <li>We <strong>NEVER</strong> charge any fees for job applications or interviews</li>
                    <li>We <strong>DO NOT</strong> ask for money deposits or advance payments</li>
                    <li>All legitimate communications come from <strong>@jobnexusindia.com</strong> email addresses only</li>
                    <li>We never conduct interviews through messaging apps like WhatsApp or Telegram</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">✅ Our Legitimate Process:</h4>
                  <ul className="list-disc list-inside space-y-2 text-blue-700">
                    <li>Free job applications through our official website</li>
                    <li>Professional interviews conducted via video calls or in-person</li>
                    <li>Official offer letters from company HR departments</li>
                    <li>Direct communication with verified companies</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                    <Phone size={18} />
                    Report Suspicious Activity:
                  </h4>
                  <p className="text-yellow-700">
                    If you encounter any suspicious job offers or fraudulent activities claiming to be from Job Nexus India, 
                    please report immediately to: <strong>fraud-alert@jobnexusindia.com</strong>
                  </p>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 font-medium">
                    <strong>Disclaimer:</strong> Job Nexus India acts as a platform connecting job seekers with employers. 
                    We verify company credentials to the best of our ability, but candidates are advised to conduct 
                    their own due diligence before accepting any job offers. We are not responsible for any 
                    fraudulent activities by third parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantNotice;