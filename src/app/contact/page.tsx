"use client";

import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Building,
  AlertCircle,
} from "lucide-react";
import { companyData } from "@/data/companyData";
import { productsData } from "@/data/productsData";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    requirement: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.fullName || !formData.email || !formData.phone || !formData.country) {
      setErrorMsg("Please fill out all required fields marked with *");
      return;
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setErrorMsg("Please provide a valid corporate email address.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      country: "",
      requirement: "",
      message: "",
    });
  };

  return (
    <div className="pt-32 lg:pt-36 pb-20 bg-white">
      {/* Page Header Banner */}
      <section className="bg-navy py-16 lg:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-brandGreen uppercase tracking-wider mb-4">
              <Mail className="w-3.5 h-3.5" />
              <span>Direct Commercial Desk</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Contact Yeoman Exim
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Connect with our international trading desk in Surat, Gujarat, India for aluminium scrap procurement, regular supply agreements, or commercial inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid: Contact Details & Form */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Official Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brandGreen">
                Registered Head Office
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
                Surat Operations Hub
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                All communications, commercial contracts, and trade documentation are coordinated from our registered office.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Office Address Card */}
              <div className="p-6 rounded-2xl bg-surface-light border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-brandBlue flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Registered Office
                  </h3>
                  <address className="not-italic text-sm font-semibold text-navy leading-relaxed">
                    {companyData.contact.address.line1},<br />
                    {companyData.contact.address.line2},<br />
                    {companyData.contact.address.city} - {companyData.contact.address.pincode},<br />
                    {companyData.contact.address.state}, {companyData.contact.address.country}
                  </address>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-6 rounded-2xl bg-surface-light border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-50 text-brandGreen flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Corporate Email
                  </h3>
                  <a
                    href={`mailto:${companyData.contact.email}`}
                    className="text-sm font-bold text-navy hover:text-brandBlue transition-colors break-all"
                  >
                    {companyData.contact.email}
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    Response within 24 business hours
                  </p>
                </div>
              </div>

              {/* Phone & WhatsApp Card */}
              <div className="p-6 rounded-2xl bg-surface-light border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-brandBlue flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Direct Telephone & Desk
                    </h3>
                    <a
                      href={`tel:${companyData.contact.phoneRaw}`}
                      className="text-base font-bold text-navy hover:text-brandBlue transition-colors"
                    >
                      {companyData.contact.phone}
                    </a>
                  </div>
                  <div>
                    <a
                      href={companyData.contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours & Standards */}
            <div className="p-5 rounded-2xl bg-navy text-white text-xs space-y-2">
              <div className="flex items-center gap-2 font-bold text-brandGreen">
                <Clock className="w-4 h-4" />
                <span>Trading Desk Hours (IST / UTC+5:30)</span>
              </div>
              <p className="text-slate-300">
                Monday to Saturday: 09:30 AM – 07:00 PM IST<br />
                Global electronic inquiries accepted 24/7.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Commercial Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl relative">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brandBlue">
                Direct Submission
              </span>
              <h2 className="text-2xl font-extrabold text-navy mt-1">
                Send a Commercial Enquiry
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Provide your requirements below. Our commercial desk will review and revert with terms.
              </p>
            </div>

            {isSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 text-brandGreen rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-navy">
                  Commercial Enquiry Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-800">{formData.fullName}</span>. Your inquiry regarding{" "}
                  <span className="font-semibold text-brandBlue">{formData.requirement || "Aluminium Scrap"}</span> has been safely logged.
                  Our Surat desk will contact you at{" "}
                  <span className="font-semibold text-slate-800">{formData.email}</span>.
                </p>

                <div className="pt-6">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl bg-navy text-white text-xs font-bold hover:bg-brandBlue transition-colors shadow"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rajesh Patel"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brandBlue text-slate-900 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Metals Pvt Ltd"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brandBlue text-slate-900 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="business@company.com"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brandBlue text-slate-900 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 97274 XXXXX"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brandBlue text-slate-900 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Country & Target Port *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. India (Nhava Sheva) / UAE"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brandBlue text-slate-900 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Aluminium Scrap Category
                    </label>
                    <select
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brandBlue text-slate-900 bg-white"
                    >
                      <option value="">Select scrap requirement...</option>
                      {productsData.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                      <option value="General Non-Ferrous Trade">General Non-Ferrous Trade</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Requirement & Specifications Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details such as expected tonnage, delivery terms (CIF/CFR/FOB), ISRI specifications, or delivery schedule..."
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brandBlue text-slate-900 bg-white"
                  ></textarea>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-brandGreen" />
                    <span>Direct commercial inquiry</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brandBlue hover:bg-navy text-white font-bold text-sm shadow-md transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <Send className="w-4 h-4 text-brandGreen" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Google Maps / Location Section */}
        <div className="mt-16 bg-surface-light rounded-3xl p-6 sm:p-8 border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-brandBlue uppercase tracking-wider">
                <Building className="w-4 h-4 text-brandGreen" />
                <span>Geographic Location</span>
              </div>
              <h3 className="text-xl font-extrabold text-navy mt-1">
                Varachha, Surat, Gujarat - India
              </h3>
            </div>
            <a
              href="https://maps.google.com/?q=Roman+Point+Hira+Baug+Varachha+Surat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-xs font-bold text-navy hover:text-brandBlue shadow-sm"
            >
              <MapPin className="w-3.5 h-3.5 text-brandGreen" />
              <span>Open in Google Maps</span>
            </a>
          </div>

          {/* Embedded Map Representation */}
          <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
            <iframe
              title="Yeoman Exim Office Location Map"
              src="https://maps.google.com/maps?q=Roman+Point,+Hira+Baug,+Varachha,+Surat,+Gujarat+395006&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
