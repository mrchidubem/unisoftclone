'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './Contact.module.css';
import { Paperclip } from 'lucide-react';

const getInitialCountries = () => [
  { name: 'Nigeria', code: '+234', flag: 'https://flagcdn.com/ng.svg', cca2: 'NG' },
  { name: 'United States', code: '+1', flag: 'https://flagcdn.com/us.svg', cca2: 'US' },
  { name: 'United Kingdom', code: '+44', flag: 'https://flagcdn.com/gb.svg', cca2: 'GB' },
  { name: 'India', code: '+91', flag: 'https://flagcdn.com/in.svg', cca2: 'IN' },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [attachedFile, setAttachedFile] = useState(null);

  // Phone state
  const [countries, setCountries] = useState(getInitialCountries());
  const [selectedCountry, setSelectedCountry] = useState(getInitialCountries()[0]);
  const [phone, setPhone] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const countrySelectorWrapperRef = useRef(null);

  // Fetch countries dynamically
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,cca2,idd')
      .then((res) => res.json())
      .then((data) => {
        const formatted = data
          .filter((country) => country.idd && country.idd.root)
          .map((country) => ({
            name: country.name.common,
            code: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] || '' : ''),
            flag: `https://flagcdn.com/${country.cca2.toLowerCase()}.svg`,
            cca2: country.cca2,
          }))
          .sort((a, b) => a.name.localeCompare(b.name));

        setCountries(formatted);

        // Set Nigeria as default if available
        const nigeria = formatted.find((c) => c.name === 'Nigeria');
        if (nigeria) setSelectedCountry(nigeria);
      })
      .catch((err) => console.error('Failed to fetch countries:', err));
  }, []);

  // Handle click outside country dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countrySelectorWrapperRef.current && !countrySelectorWrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAttachedFile(file);
  };

  const handleRemoveFile = () => setAttachedFile(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const form = e.target;
      const formData = new FormData(form);
      if (attachedFile) formData.set('file', attachedFile);

      const res = await fetch('/api/contact', { method: 'POST', body: formData });
      const data = await res.json();

      if (!res.ok) setErrorMessage(data.error || 'Failed to send email');
      else {
        setSuccessMessage('✅ Message sent successfully!');
        form.reset();
        setAttachedFile(null);
        setPhone('');
      }
    } catch (err) {
      setErrorMessage('An unexpected error occurred');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.contactBackground}>
      <section id="contact">
        <div className={styles.contactSection}>
          <div className={styles.container}>

            <div className={styles.topContent}>
              <h2 className={styles.contactHeading}>Let’s Build Smarter, Together.</h2>
              <p className={styles.contactLead}>
                Whether you’re looking to host an unforgettable event, scale your business, simplify your technology, or expand your network, FSX is here for you.
              </p>
            </div>

            <div className={styles.contactGrid}>
              <div className={styles.leftColumn}>
                <h3 className={styles.infoTitle}>Contact Information</h3>
                <p className={styles.infoLead}>We’d love to hear from you. please fill out the contact form and we’ll reply soon</p>
                <div className={styles.contactInfo}>
                  {/* Email Item */}
                  <div className={styles.infoItem}>
                    <div className={styles.infoIconCircle}><img src="/email.png" alt="Email Icon" /></div>
                    <div className={styles.infoText}>
                      <h6 className={styles.emailHeading}>Email</h6>
                      <span className={styles.emailSubtext}>Contact us by email, and we’ll respond shortly</span>
                      <p className={styles.emailValue}>hello@fransunisoft.com</p>
                    </div>
                  </div>
                  {/* Phone Item */}
                  <div className={styles.infoItem}>
                    <div className={styles.infoIconCircle}><img src="/phone.png" alt="Phone Icon" /></div>
                    <div className={styles.infoText}>
                      <h6 className={styles.emailHeading}>Phone</h6>
                      <span className={styles.emailSubtext}>Call us on weekdays from 9AM - 5PM</span>
                      <p className={styles.emailValue}>0800 234 567 89</p>
                    </div>
                  </div>
                  {/* Location Item */}
                  <div className={styles.infoItem}>
                    <div className={styles.infoIconCircle}><img src="/location.png" alt="Location Icon" /></div>
                    <div className={styles.infoText}>
                      <h6 className={styles.emailHeading}>Location</h6>
                      <span className={styles.emailSubtext}>Where we are located</span>
                      <p className={styles.emailValue}>Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.rightColumn}>
                <h3 className={styles.cardTitle}>Get In Touch</h3>
                <p className={styles.cardIntro}>
                  Contact Fransunisoft (FSX) today for event management, consulting, technology solutions, training, and networking opportunities in Nigeria
                </p>

                <form className={styles.contactForm} onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className={styles.formRow}><input type="text" name="firstName" className={styles.input} placeholder="First Name" required /></div>
                  <div className={styles.formRow}><input type="text" name="lastName" className={styles.input} placeholder="Last Name" required /></div>
                  <div className={styles.formRow}><input type="email" name="email" className={styles.input} placeholder="Email" required /></div>

                  {/* Phone Row */}
                  <div className={styles.formRow}>
                    <div className={styles.phoneRow}>
                      <div ref={countrySelectorWrapperRef} className={`${styles.countrySelectorWrapper} ${isOpen ? styles.open : ''}`} onClick={() => setIsOpen(!isOpen)}>
                        <img src={selectedCountry.flag} alt={selectedCountry.name} className={styles.flag} />
                        <span className={styles.selectArrow}>▼</span>
                        <span className={styles.selectedCode}>{selectedCountry.code}</span>
                        {isOpen && (
                          <div className={styles.countryDropdown}>
                            {countries.map((country) => (
                              <div key={country.code} className={styles.countryOption} onClick={(e) => { e.stopPropagation(); handleCountrySelect(country); }}>
                                <img src={country.flag} alt={country.name} className={styles.dropdownFlag} /> {country.name} ({country.code})
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <input type="tel" name="phoneNumber" className={styles.phoneInput} placeholder="8123456789" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                      <input type="hidden" name="phone" value={`${selectedCountry.code}${phone}`} />
                    </div>
                  </div>

                  <div className={styles.formRow}><input type="text" name="company" className={styles.input} placeholder="Company" required /></div>
                  <div className={styles.formRow}>
                    <select name="serviceType" className={styles.select} required>
                      <option value="">Select Service Type</option>
                      <option value="Consulting">FSX Consulting</option>
                      <option value="Support">FSX Support</option>
                      <option value="Development">FSX Tech</option>
                      <option value="Event">FSX Events</option>
                      <option value="Connect">FSX Connect</option>
                      <option value="Development">FSX Academy</option>
                    </select>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.textareaWrapper}>
                      <textarea name="message" className={styles.textarea} placeholder="Your Message" required></textarea>
                      <label className={styles.attachLabel}>
                        <Paperclip className={styles.attachIcon} />
                        Attach a File
                        <input type="file" name="file" className={styles.fileInputHidden} onChange={handleFileChange} />
                      </label>
                    </div>
                  </div>

                  {attachedFile && (
                    <div className={styles.attachedFile}>
                      <div className={styles.filePreviewMeta}>
                        <span className={styles.filePreviewName}>{attachedFile.name}</span>
                        <span className={styles.filePreviewSize}>{(attachedFile.size / 1024).toFixed(2)} KB</span>
                      </div>
                      <div className={styles.fileActions}>
                        <button type="button" className={styles.removeButton} onClick={handleRemoveFile}>✕</button>
                      </div>
                    </div>
                  )}

                  <button type="submit" className={styles.submitButton} disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
                  {successMessage && <p style={{ color: '#16a34a', marginTop: '8px', textAlign: 'center' }}>{successMessage}</p>}
                  {errorMessage && <p style={{ color: '#b91c1c', marginTop: '8px', textAlign: 'center' }}>{errorMessage}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}