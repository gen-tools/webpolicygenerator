// Web Policy Generator JavaScript
let currentGenerator = '';

// Smooth scrolling functions
function scrollToGenerators() {
    document.getElementById('generators').scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToAbout() {
    document.getElementById('about').scrollIntoView({
        behavior: 'smooth'
    });
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            console.log('Mobile menu clicked');
        });
    }
});

// Generator form templates with enhanced content
const generatorForms = {
    privacy: {
        title: 'Privacy Policy Generator',
        fields: `
            <div class="space-y-6">
                <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <svg class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div class="ml-3">
                            <p class="text-sm text-blue-700">
                                This generator creates comprehensive privacy policies compliant with GDPR, CCPA, PIPEDA, and other international privacy laws.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Company/Website Name *</label>
                        <input type="text" id="company-name" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Your Company Name">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Website URL *</label>
                        <input type="url" id="website-url" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="https://yourwebsite.com">
                    </div>
                </div>
                
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Contact Email *</label>
                        <input type="email" id="contact-email" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="contact@yourwebsite.com">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Country/Jurisdiction *</label>
                        <select id="country" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                            <option value="">Select Country</option>
                            <option value="US">United States</option>
                            <option value="UK">United Kingdom</option>
                            <option value="CA">Canada</option>
                            <option value="AU">Australia</option>
                            <option value="DE">Germany</option>
                            <option value="FR">France</option>
                            <option value="EU">European Union</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Types of Personal Data Collected</label>
                    <div class="grid md:grid-cols-2 gap-4 mt-3">
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="personal-info" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="text-sm text-gray-700">Personal Information (Name, Email, Phone)</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="usage-data" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="text-sm text-gray-700">Usage Data & Analytics</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="cookies" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="text-sm text-gray-700">Cookies & Tracking Technologies</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="location-data" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="text-sm text-gray-700">Location Data</span>
                        </label>
                    </div>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Third-Party Services Used</label>
                    <div class="grid md:grid-cols-2 gap-4 mt-3">
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="google-analytics" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="text-sm text-gray-700">Google Analytics</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="social-media" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="text-sm text-gray-700">Social Media Integration</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="payment-processing" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="text-sm text-gray-700">Payment Processing</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="email-marketing" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="text-sm text-gray-700">Email Marketing</span>
                        </label>
                    </div>
                </div>
            </div>
        `
    },
    
    terms: {
        title: 'Terms of Service Generator',
        fields: `
            <div class="space-y-6">
                <div class="bg-purple-50 border-l-4 border-purple-400 p-4 mb-6">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <svg class="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div class="ml-3">
                            <p class="text-sm text-purple-700">
                                Generate comprehensive terms of service that protect your business and define user responsibilities clearly.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Company/Website Name *</label>
                        <input type="text" id="company-name" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" placeholder="Your Company Name">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Website URL *</label>
                        <input type="url" id="website-url" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" placeholder="https://yourwebsite.com">
                    </div>
                </div>
                
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Contact Email *</label>
                        <input type="email" id="contact-email" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" placeholder="contact@yourwebsite.com">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Business Type *</label>
                        <select id="business-type" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all">
                            <option value="">Select Business Type</option>
                            <option value="ecommerce">E-commerce Store</option>
                            <option value="saas">SaaS/Software</option>
                            <option value="blog">Blog/Content Site</option>
                            <option value="service">Service Business</option>
                            <option value="marketplace">Marketplace</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Service Features</label>
                    <div class="grid md:grid-cols-2 gap-4 mt-3">
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="user-accounts" class="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500">
                            <span class="text-sm text-gray-700">User Accounts/Registration</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="paid-services" class="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500">
                            <span class="text-sm text-gray-700">Paid Services/Products</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="user-content" class="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500">
                            <span class="text-sm text-gray-700">User-Generated Content</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="subscriptions" class="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500">
                            <span class="text-sm text-gray-700">Subscription Services</span>
                        </label>
                    </div>
                </div>
            </div>
        `
    },
    
    cookie: {
        title: 'Cookie Policy Generator',
        fields: `
            <div class="space-y-6">
                <div class="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div class="ml-3">
                            <p class="text-sm text-green-700">
                                Create detailed cookie policies compliant with GDPR, ePrivacy Directive, and CCPA requirements.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Website Name *</label>
                        <input type="text" id="website-name" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" placeholder="Your Website Name">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Website URL *</label>
                        <input type="url" id="website-url" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" placeholder="https://yourwebsite.com">
                    </div>
                </div>
                
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Contact Email *</label>
                        <input type="email" id="contact-email" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" placeholder="contact@yourwebsite.com">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Cookie Consent Method</label>
                        <select id="consent-method" class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all">
                            <option value="banner">Cookie Banner</option>
                            <option value="popup">Popup Modal</option>
                            <option value="page">Dedicated Page</option>
                            <option value="none">No Consent Mechanism</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Types of Cookies Used</label>
                    <div class="grid md:grid-cols-2 gap-4 mt-3">
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="essential-cookies" class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500" checked>
                            <span class="text-sm text-gray-700">Essential/Functional Cookies</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="analytics-cookies" class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500">
                            <span class="text-sm text-gray-700">Analytics Cookies</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="marketing-cookies" class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500">
                            <span class="text-sm text-gray-700">Marketing/Advertising Cookies</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="preference-cookies" class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500">
                            <span class="text-sm text-gray-700">Preference Cookies</span>
                        </label>
                    </div>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Third-Party Cookie Services</label>
                    <div class="grid md:grid-cols-2 gap-4 mt-3">
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="google-analytics-cookies" class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500">
                            <span class="text-sm text-gray-700">Google Analytics</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="facebook-pixel" class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500">
                            <span class="text-sm text-gray-700">Facebook Pixel</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="google-ads" class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500">
                            <span class="text-sm text-gray-700">Google Ads</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="other-tracking" class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500">
                            <span class="text-sm text-gray-700">Other Tracking Services</span>
                        </label>
                    </div>
                </div>
            </div>
        `
    },
    
    gdpr: {
        title: 'GDPR Compliance Generator',
        fields: `
            <div class="space-y-6">
                <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div class="ml-3">
                            <p class="text-sm text-yellow-700">
                                Generate comprehensive GDPR compliance documentation for European market operations.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                        <input type="text" id="company-name" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all" placeholder="Your Company Name">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Data Protection Officer Email</label>
                        <input type="email" id="dpo-email" class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all" placeholder="dpo@yourcompany.com">
                    </div>
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Company Address *</label>
                    <textarea id="company-address" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all" rows="3" placeholder="Full company address"></textarea>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Legal Basis for Processing</label>
                    <select id="legal-basis" class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all">
                        <option value="consent">Consent</option>
                        <option value="contract">Contract Performance</option>
                        <option value="legal-obligation">Legal Obligation</option>
                        <option value="vital-interests">Vital Interests</option>
                        <option value="public-task">Public Task</option>
                        <option value="legitimate-interests">Legitimate Interests</option>
                    </select>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Data Subject Rights</label>
                    <div class="grid md:grid-cols-2 gap-4 mt-3">
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="right-access" class="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500" checked>
                            <span class="text-sm text-gray-700">Right to Access</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="right-rectification" class="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500" checked>
                            <span class="text-sm text-gray-700">Right to Rectification</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="right-erasure" class="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500" checked>
                            <span class="text-sm text-gray-700">Right to Erasure</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="right-portability" class="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500" checked>
                            <span class="text-sm text-gray-700">Right to Data Portability</span>
                        </label>
                    </div>
                </div>
            </div>
        `
    },
    
    disclaimer: {
        title: 'Disclaimer Generator',
        fields: `
            <div class="space-y-6">
                <div class="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div class="ml-3">
                            <p class="text-sm text-red-700">
                                Generate comprehensive legal disclaimers to protect your business from liability and establish clear boundaries.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Website/Company Name *</label>
                        <input type="text" id="company-name" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" placeholder="Your Company Name">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Website URL *</label>
                        <input type="url" id="website-url" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" placeholder="https://yourwebsite.com">
                    </div>
                </div>
                
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Contact Email *</label>
                        <input type="email" id="contact-email" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" placeholder="contact@yourwebsite.com">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Type of Disclaimer *</label>
                        <select id="disclaimer-type" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all">
                            <option value="">Select Disclaimer Type</option>
                            <option value="general">General Website Disclaimer</option>
                            <option value="medical">Medical/Health Information</option>
                            <option value="financial">Financial/Investment Advice</option>
                            <option value="legal">Legal Information</option>
                            <option value="educational">Educational Content</option>
                            <option value="affiliate">Affiliate Marketing</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Liability Limitations</label>
                    <div class="grid md:grid-cols-2 gap-4 mt-3">
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="accuracy-disclaimer" class="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500" checked>
                            <span class="text-sm text-gray-700">Information Accuracy</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="external-links" class="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500">
                            <span class="text-sm text-gray-700">External Links</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="professional-advice" class="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500">
                            <span class="text-sm text-gray-700">Professional Advice</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="technical-issues" class="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500">
                            <span class="text-sm text-gray-700">Technical Issues</span>
                        </label>
                    </div>
                </div>
            </div>
        `
    },
    
    return: {
        title: 'Return Policy Generator',
        fields: `
            <div class="space-y-6">
                <div class="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-6">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <svg class="h-5 w-5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div class="ml-3">
                            <p class="text-sm text-indigo-700">
                                Create clear return and refund policies that build customer trust and ensure compliance with consumer protection laws.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Store Name *</label>
                        <input type="text" id="store-name" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="Your Store Name">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Return Period (days) *</label>
                        <input type="number" id="return-period" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="30" value="30">
                    </div>
                </div>
                
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Contact Email *</label>
                        <input type="email" id="contact-email" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="returns@yourstore.com">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Refund Processing Time</label>
                        <select id="refund-time" class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all">
                            <option value="3-5">3-5 business days</option>
                            <option value="5-7">5-7 business days</option>
                            <option value="7-10">7-10 business days</option>
                            <option value="10-14">10-14 business days</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Return Conditions</label>
                    <div class="grid md:grid-cols-2 gap-4 mt-3">
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="original-condition" class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" checked>
                            <span class="text-sm text-gray-700">Original Condition Required</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="original-packaging" class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
                            <span class="text-sm text-gray-700">Original Packaging Required</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="tags-attached" class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
                            <span class="text-sm text-gray-700">Tags Must Be Attached</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" id="customer-pays-shipping" class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
                            <span class="text-sm text-gray-700">Customer Pays Return Shipping</span>
                        </label>
                    </div>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Return Address *</label>
                    <textarea id="return-address" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" rows="3" placeholder="Full return address for customers to ship items back"></textarea>
                </div>
            </div>
        `
    }
};

// Open generator modal
function openGenerator(type) {
    currentGenerator = type;
    const modal = document.getElementById('generator-modal');
    const modalTitle = document.getElementById('modal-title');
    const generatorForm = document.getElementById('generator-form');
    
    const generator = generatorForms[type];
    if (!generator) {
        console.error('Generator not found:', type);
        return;
    }
    
    modalTitle.textContent = generator.title;
    generatorForm.innerHTML = generator.fields;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Add animation
    const modalContent = modal.querySelector('.bg-white');
    modalContent.style.transform = 'scale(0.9)';
    modalContent.style.opacity = '0';
    
    setTimeout(() => {
        modalContent.style.transform = 'scale(1)';
        modalContent.style.opacity = '1';
        modalContent.style.transition = 'all 0.3s ease';
    }, 50);
}

// Close generator modal
function closeGenerator() {
    const modal = document.getElementById('generator-modal');
    const modalContent = modal.querySelector('.bg-white');
    
    modalContent.style.transform = 'scale(0.9)';
    modalContent.style.opacity = '0';
    
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        currentGenerator = '';
    }, 300);
}

// Generate document based on form data
function generateDocument() {
    if (!currentGenerator) return;
    
    // Collect form data
    const formData = collectFormData();
    
    if (!validateFormData(formData)) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    // Show loading state
    showLoadingState();
    
    // Simulate document generation
    setTimeout(() => {
        const generatedDocument = createDocument(currentGenerator, formData);
        displayGeneratedDocument(generatedDocument);
        hideLoadingState();
        showNotification('Document generated successfully!', 'success');
    }, 2000);
}

// Collect form data
function collectFormData() {
    const formData = {};
    const inputs = document.querySelectorAll('#generator-form input, #generator-form select, #generator-form textarea');
    
    inputs.forEach(input => {
        if (input.type === 'checkbox') {
            formData[input.id] = input.checked;
        } else {
            formData[input.id] = input.value;
        }
    });
    
    return formData;
}

// Validate form data
function validateFormData(formData) {
    const requiredFields = document.querySelectorAll('#generator-form [required]');
    
    for (let field of requiredFields) {
        if (!formData[field.id] || formData[field.id].trim() === '') {
            field.focus();
            field.classList.add('border-red-500', 'ring-red-500');
            setTimeout(() => {
                field.classList.remove('border-red-500', 'ring-red-500');
            }, 3000);
            return false;
        }
    }
    
    return true;
}

// Show loading state
function showLoadingState() {
    const generateBtn = document.getElementById('generate-btn');
    if (generateBtn) {
        generateBtn.innerHTML = `
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating Document...
        `;
        generateBtn.disabled = true;
    }
}

// Hide loading state
function hideLoadingState() {
    const generateBtn = document.getElementById('generate-btn');
    if (generateBtn) {
        generateBtn.innerHTML = 'Generate Document';
        generateBtn.disabled = false;
    }
}

// Create document content
function createDocument(type, data) {
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    const templates = {
        privacy: `
            <div class="legal-document">
                <h1 class="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
                <p class="text-sm text-gray-600 mb-8"><strong>Last Updated:</strong> ${currentDate}</p>
                
                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
                    <p class="mb-4">
                        ${data['company-name'] || '[Company Name]'} ("we," "our," or "us") is committed to protecting your privacy. 
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                        <a href="${data['website-url'] || '[Website URL]'}" class="text-blue-600 underline">${data['website-url'] || '[Website URL]'}</a>.
                    </p>
                    <p class="mb-4">
                        Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
                        please do not access the site. This policy complies with applicable data protection laws including GDPR, CCPA, and PIPEDA.
                    </p>
                </div>

                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
                    <p class="mb-4">We may collect information about you in a variety of ways including:</p>
                    
                    <h3 class="text-lg font-medium text-gray-700 mb-3">Personal Data</h3>
                    <p class="mb-4">
                        Personally identifiable information, such as your name, email address, and contact information, 
                        that you voluntarily give to us when you use our services.
                    </p>

                    ${data['usage-data'] ? `
                    <h3 class="text-lg font-medium text-gray-700 mb-3">Usage Data</h3>
                    <p class="mb-4">
                        Information our servers automatically collect when you access our website, such as your IP address, 
                        browser type, operating system, and pages visited.
                    </p>
                    ` : ''}
                </div>

                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
                    <p class="mb-4">We use the information we collect to:</p>
                    <ul class="list-disc ml-6 mb-4 space-y-2">
                        <li>Provide and maintain our services</li>
                        <li>Process transactions and communicate with you</li>
                        <li>Improve our website and services</li>
                        <li>Comply with legal obligations</li>
                        <li>Protect our rights and prevent fraud</li>
                    </ul>
                </div>

                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">4. Information Sharing</h2>
                    <p class="mb-4">
                        We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                        except as described in this policy or as required by law.
                    </p>
                </div>

                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">5. Data Security</h2>
                    <p class="mb-4">
                        We implement appropriate security measures to protect your personal information against unauthorized access, 
                        alteration, disclosure, or destruction.
                    </p>
                </div>

                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">6. Your Rights</h2>
                    <p class="mb-4">
                        You have the right to access, update, or delete your personal information. 
                        You may also opt out of certain communications from us.
                    </p>
                </div>

                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">7. Contact Information</h2>
                    <p class="mb-4">
                        If you have questions about this Privacy Policy, please contact us at:
                    </p>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <p><strong>Email:</strong> ${data['contact-email'] || '[Contact Email]'}</p>
                        <p><strong>Website:</strong> <a href="${data['website-url'] || '[Website URL]'}" class="text-blue-600 underline">${data['website-url'] || '[Website URL]'}</a></p>
                        ${data['country'] ? `<p><strong>Jurisdiction:</strong> ${data['country']}</p>` : ''}
                    </div>
                </div>
            </div>
        `,
        
        terms: `
            <div class="legal-document">
                <h1 class="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
                <p class="text-sm text-gray-600 mb-8"><strong>Last Updated:</strong> ${currentDate}</p>
                
                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
                    <p class="mb-4">
                        By accessing and using ${data['company-name'] || '[Company Name]'} services, you accept and agree to be bound by these Terms of Service.
                    </p>
                </div>

                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">2. Use of Service</h2>
                    <p class="mb-4">You may use our service for lawful purposes only and in accordance with these Terms.</p>
                </div>

                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">3. Prohibited Uses</h2>
                    <p class="mb-4">You may not use our service:</p>
                    <ul class="list-disc ml-6 mb-4 space-y-2">
                        <li>For any unlawful purpose</li>
                        <li>To transmit harmful or malicious code</li>
                        <li>To infringe on intellectual property rights</li>
                        <li>To harass or harm others</li>
                    </ul>
                </div>

                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">4. Termination</h2>
                    <p class="mb-4">
                        We may terminate your access to the service at any time for violations of these terms.
                    </p>
                </div>

                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">5. Contact Information</h2>
                    <p class="mb-4">Questions about these Terms should be sent to us at:</p>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <p><strong>Email:</strong> ${data['contact-email'] || '[Contact Email]'}</p>
                        <p><strong>Website:</strong> <a href="${data['website-url'] || '[Website URL]'}" class="text-blue-600 underline">${data['website-url'] || '[Website URL]'}</a></p>
                    </div>
                </div>
            </div>
        `,
        
        cookie: `
            <div class="legal-document">
                <h1 class="text-3xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
                <p class="text-sm text-gray-600 mb-8"><strong>Last Updated:</strong> ${currentDate}</p>
                
                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">1. What Are Cookies</h2>
                    <p class="mb-4">
                        Cookies are small text files placed on your device by websites you visit. 
                        ${data['website-name'] || '[Website Name]'} uses cookies to improve your browsing experience.
                    </p>
                </div>

                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">2. How We Use Cookies</h2>
                    <p class="mb-4">We use cookies for various purposes including functionality, analytics, and user preferences.</p>
                </div>

                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">3. Managing Cookies</h2>
                    <p class="mb-4">You can control cookies through your browser settings or our cookie preferences.</p>
                </div>

                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">4. Contact Us</h2>
                    <p class="mb-4">If you have questions about our use of cookies, please contact us at:</p>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <p><strong>Email:</strong> ${data['contact-email'] || '[Contact Email]'}</p>
                        <p><strong>Website:</strong> <a href="${data['website-url'] || '[Website URL]'}" class="text-blue-600 underline">${data['website-url'] || '[Website URL]'}</a></p>
                    </div>
                </div>
            </div>
        `,
        
        gdpr: `
            <div class="legal-document">
                <h1 class="text-3xl font-bold text-gray-900 mb-6">GDPR Compliance Statement</h1>
                <p class="text-sm text-gray-600 mb-8"><strong>Last Updated:</strong> ${currentDate}</p>
                
                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">1. Data Controller</h2>
                    <p class="mb-4">${data['company-name'] || '[Company Name]'} is the data controller for personal data processing.</p>
                </div>

                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">2. Legal Basis for Processing</h2>
                    <p class="mb-4">We process personal data based on ${data['legal-basis'] || 'consent'} and other lawful bases under GDPR.</p>
                </div>

                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">3. Your Rights</h2>
                    <p class="mb-4">Under GDPR, you have rights including access, rectification, erasure, and data portability.</p>
                </div>

                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">4. Contact</h2>
                    <p class="mb-4">For data protection inquiries, contact us at:</p>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <p><strong>Email:</strong> ${data['dpo-email'] || '[DPO Email]'}</p>
                        <p><strong>Address:</strong> ${data['company-address'] || '[Company Address]'}</p>
                    </div>
                </div>
            </div>
        `,
        
        disclaimer: `
            <div class="legal-document">
                <h1 class="text-3xl font-bold text-gray-900 mb-6">Disclaimer</h1>
                <p class="text-sm text-gray-600 mb-8"><strong>Last Updated:</strong> ${currentDate}</p>
                
                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">1. Website Disclaimer</h2>
                    <p class="mb-4">
                        The information on ${data['company-name'] || '[Company Name]'} website is provided on an "as is" basis.
                    </p>
                </div>

                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">2. No Warranties</h2>
                    <p class="mb-4">
                        We make no representations or warranties about the accuracy or completeness of the information provided.
                    </p>
                </div>

                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">3. Limitation of Liability</h2>
                    <p class="mb-4">In no event will we be liable for any loss or damage arising from the use of this website.</p>
                </div>

                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">4. Contact</h2>
                    <p class="mb-4">If you have questions about this disclaimer, please contact us at:</p>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <p><strong>Email:</strong> ${data['contact-email'] || '[Contact Email]'}</p>
                        <p><strong>Website:</strong> <a href="${data['website-url'] || '[Website URL]'}" class="text-blue-600 underline">${data['website-url'] || '[Website URL]'}</a></p>
                    </div>
                </div>
            </div>
        `,
        
        return: `
            <div class="legal-document">
                <h1 class="text-3xl font-bold text-gray-900 mb-6">Return Policy</h1>
                <p class="text-sm text-gray-600 mb-8"><strong>Last Updated:</strong> ${currentDate}</p>
                
                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">1. Return Period</h2>
                    <p class="mb-4">You have ${data['return-period'] || '30'} days to return items to ${data['store-name'] || '[Store Name]'}.</p>
                </div>

                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">2. Return Conditions</h2>
                    <p class="mb-4">Items must be returned in their original condition and packaging.</p>
                </div>

                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">3. Return Process</h2>
                    <p class="mb-4">To initiate a return, please contact us at ${data['contact-email'] || '[Contact Email]'}.</p>
                </div>

                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">4. Refunds</h2>
                    <p class="mb-4">Refunds will be processed within ${data['refund-time'] || '5-7'} business days.</p>
                </div>

                <div class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">5. Return Address</h2>
                    <p class="mb-4">Ship returns to:</p>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <p>${data['return-address'] || '[Return Address]'}</p>
                    </div>
                </div>
            </div>
        `
    };
    
    return templates[type] || '<p>Document template not found.</p>';
}

// Display generated document
function displayGeneratedDocument(content) {
    closeGenerator();
    
    // Create and show document modal
    const documentModal = createDocumentModal(content);
    document.body.appendChild(documentModal);
    
    // Animate in
    setTimeout(() => {
        documentModal.classList.remove('hidden');
        const modalContent = documentModal.querySelector('.bg-white');
        modalContent.style.transform = 'scale(1)';
        modalContent.style.opacity = '1';
    }, 100);
}

// Create document display modal
function createDocumentModal(content) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-50 hidden bg-black/50 backdrop-blur-sm';
    modal.innerHTML = `
        <div class="flex items-center justify-center min-h-screen p-4">
            <div class="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden" style="transform: scale(0.9); opacity: 0; transition: all 0.3s ease;">
                <div class="flex justify-between items-center p-6 border-b border-gray-200 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    <h3 class="text-2xl font-bold">Generated Document</h3>
                    <button onclick="closeDocumentModal(this)" class="text-white hover:text-gray-200 transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div class="p-6 overflow-y-auto max-h-[60vh]">
                    <div class="prose max-w-none">${content}</div>
                </div>
                <div class="p-6 border-t border-gray-200 bg-gray-50">
                    <div class="flex justify-end space-x-4">
                        <button onclick="copyDocument(this)" class="px-6 py-3 text-blue-700 bg-blue-100 rounded-xl hover:bg-blue-200 transition-colors">
                            Copy to Clipboard
                        </button>
                        <button onclick="downloadDocument(this)" class="btn-primary text-white px-6 py-3 rounded-xl font-semibold">
                            Download Document
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return modal;
}

// Close document modal
function closeDocumentModal(btn) {
    const modal = btn.closest('.fixed');
    const modalContent = modal.querySelector('.bg-white');
    
    modalContent.style.transform = 'scale(0.9)';
    modalContent.style.opacity = '0';
    
    setTimeout(() => {
        modal.remove();
        document.body.style.overflow = 'auto';
    }, 300);
}

// Copy document to clipboard
function copyDocument(btn) {
    const documentContent = btn.closest('.fixed').querySelector('.prose').innerText;
    
    navigator.clipboard.writeText(documentContent).then(() => {
        btn.innerHTML = 'Copied!';
        btn.classList.add('bg-green-100', 'text-green-700');
        btn.classList.remove('bg-blue-100', 'text-blue-700');
        
        setTimeout(() => {
            btn.innerHTML = 'Copy to Clipboard';
            btn.classList.remove('bg-green-100', 'text-green-700');
            btn.classList.add('bg-blue-100', 'text-blue-700');
        }, 2000);
    });
}

// Download document
function downloadDocument(btn) {
    const documentContent = btn.closest('.fixed').querySelector('.prose').innerHTML;
    const blob = new Blob([`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Generated Document</title>
            <style>
                body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6; }
                h1 { color: #333; border-bottom: 2px solid #3B82F6; padding-bottom: 10px; }
                h2 { color: #555; margin-top: 30px; }
                p { margin-bottom: 15px; }
            </style>
        </head>
        <body>
            ${documentContent}
        </body>
        </html>
    `], { type: 'text/html' });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentGenerator}-policy-${Date.now()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('Document downloaded successfully!', 'success');
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 px-6 py-4 rounded-xl shadow-lg transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' :
        type === 'error' ? 'bg-red-500 text-white' :
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('generator-modal');
    if (e.target === modal) {
        closeGenerator();
    }
});

// Escape key to close modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeGenerator();
    }
});

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    document.querySelectorAll('.animate-slide-up, .animate-bounce-in, .animate-fade-in').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
});

// Enhanced hover effects for cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.generator-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
        });
    });
});

// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form[action^="mailto:"]');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(this);
            const firstName = formData.get('firstName');
            const lastName = formData.get('lastName');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');

            // Create email content
            const emailSubject = `Web Policy Generator Contact: ${subject}`;
            const emailBody = `
Hello,

You have received a new contact form submission from your Web Policy Generator website:

Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from the Web Policy Generator contact form.
            `.trim();

            // Create mailto link
            const mailtoLink = `mailto:sa0663787@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

            // Open email client
            window.location.href = mailtoLink;

            // Show success message
            showNotification('Email client opened! Please send the email to complete your message.', 'success');
        });
    }
});

console.log('Web Policy Generator loaded successfully! 🚀');
