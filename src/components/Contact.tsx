import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted with:', { fullName, email, message });
    if (!fullName.trim() || !email.trim() || !message.trim())  {
      console.log('Validation failed: missing fields');
      setErrorMessage(
        (t('contactSection.form.error') || '') + ' ' +
        (t('contactSection.form.errorFillAllFields'))
      );
      setSuccessMessage('');
      return;
    }
    // Simulate form submission success
    const isSuccess = true; // Replace with actual submission logic

    if (isSuccess) {
      console.log('Form submission success');
      setSuccessMessage(
        (t('contactSection.form.success') || '') + ' ' +
        (t('contactSection.form.successMessage') )
      );
      setErrorMessage('');
      setFullName('');
      setEmail('');
      setMessage('');
    } else {
      console.log('Form submission error');
      setErrorMessage(t('contactSection.form.description') );
      setSuccessMessage('');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('contactSection.title')}</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              {t('contactSection.subtitle')}
            </h3>
            <p className="text-gray-600 mb-8 description-font">
              {t('contactSection.description')}
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-gray-900 mr-4" />
                <a
                  href="mailto:allahtoralphdjamel@gmail.com"
                  className="text-gray-600 hover:text-gray-900"
                >
                  allahtoralphdjamel@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-gray-900 mr-4" />
                <a
                  href="tel:+33777594411"
                  className="text-gray-600 hover:text-gray-900 description-font"
                >
                  +33 07 75 95 44 11
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-gray-900 mr-4" />
                <span className="text-gray-600 description-font">Cherbourg-En-Cotentin, France</span>
              </div>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t('contactSection.form.fullName')}
              </label>
              <input
                type="text"
                id="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t('contactSection.form.email')}
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t('contactSection.form.message')}
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              ></textarea>
            </div>

            {errorMessage && (
              <p className="text-red-600 text-sm font-medium">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-green-600 text-sm font-medium">{successMessage}</p>
            )}

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              {t('contactSection.form.send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
