"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { portfolioConfig } from "@/config/portfolioConfig";
import { Send, MapPin, Clock, CheckCircle2, MessageSquare } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.message) return;

    const formattedMessage = `Hello ${portfolioConfig.name},\n\nName: ${formData.fullName}\nEmail: ${formData.email || "N/A"}\nPhone: ${formData.phone || "N/A"}\n\nMessage:\n${formData.message}`;

    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${portfolioConfig.whatsappNumber}?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative bg-white text-[#111111] py-20 sm:py-28 border-t border-gray-100 overflow-hidden"
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Meta & Location Info */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-widest text-[#FF7A2F] font-bold"
            >
              Get In Touch
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-2 text-3xl sm:text-5xl font-black text-[#111111] tracking-tight"
            >
              Let&apos;s Build Something Scalable
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed font-normal"
            >
              Have a project in mind, need cloud infrastructure automation, or want to integrate AI solutions into your business? Send a message and let&apos;s connect directly on WhatsApp.
            </motion.p>

            {/* Meta Cards */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-200/80">
                <div className="p-3 rounded-xl bg-[#FF7A2F]/10 text-[#FF7A2F]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-400 font-bold">Locations</h4>
                  <p className="text-sm font-bold text-[#111111]">
                    {portfolioConfig.locations.primary} <span className="text-[#FF7A2F]">↕</span> {portfolioConfig.locations.secondary}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{portfolioConfig.locations.note}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-200/80">
                <div className="p-3 rounded-xl bg-[#FF7A2F]/10 text-[#FF7A2F]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-400 font-bold">Response Time</h4>
                  <p className="text-sm font-bold text-[#111111]">Within 2 to 4 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-200/80">
                <div className="p-3 rounded-xl bg-[#FF7A2F]/10 text-[#FF7A2F]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-400 font-bold">Availability</h4>
                  <p className="text-sm font-bold text-[#111111]">Open for Remote &amp; Enterprise Consultations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct WhatsApp Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200 shadow-xl shadow-black/5"
          >
            <div className="flex items-center gap-2 mb-6 text-[#FF7A2F]">
              <MessageSquare className="w-5 h-5" />
              <h3 className="text-xl font-bold text-[#111111]">Direct WhatsApp Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 font-bold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#111111] focus:bg-white focus:border-[#FF7A2F] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 font-bold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#111111] focus:bg-white focus:border-[#FF7A2F] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 font-bold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#111111] focus:bg-white focus:border-[#FF7A2F] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 font-bold mb-2">
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="I would like to discuss a project with you..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#111111] focus:bg-white focus:border-[#FF7A2F] focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FF7A2F] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-[#FF7A2F]/25 hover:bg-[#FF7A2F]/90 hover:scale-[1.02] transition-all duration-200 cursor-pointer"
              >
                <span>Send WhatsApp Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
