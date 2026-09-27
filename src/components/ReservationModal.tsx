import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Mail, ExternalLink } from 'lucide-react';
import { CAFE_INFO } from '../data/menuData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('2026-10-01');
  const [time, setTime] = useState('19:00');
  const [guests, setGuests] = useState('2');
  const [seating, setSeating] = useState('indoor');
  const [specialRequests, setSpecialRequests] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [reservationCode, setReservationCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `TOE-${Math.floor(1000 + Math.random() * 9000)}`;
    setReservationCode(code);
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-xl bg-[#1A1110] border border-[#C5A059]/40 shadow-2xl p-6 sm:p-8 text-[#F7F4EE]">
        <button
          onClick={resetForm}
          aria-label="Close"
          className="absolute top-5 right-5 p-2 rounded-full border border-[#C5A059]/20 text-[#A89F91] hover:text-[#DFBE7A] hover:border-[#C5A059] transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-4 space-y-4">
            <CheckCircle2 className="w-10 h-10 text-[#DFBE7A] mx-auto" />
            <h3 className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl font-medium text-[#F7F4EE]">
              Table Reservation Received
            </h3>
            <p className="text-xs sm:text-sm text-[#A89F91]">
              Simulated reservation for <strong className="text-[#ECE6DA]">{date}</strong> at <strong className="text-[#ECE6DA]">{time}</strong> ({guests} guests). Reference: <strong className="text-[#DFBE7A]">{reservationCode}</strong>
            </p>

            {/* LevelUp Ecosystem notice */}
            <div className="p-4 rounded-xl bg-gradient-to-b from-[#231816] to-[#120B0A] border border-[#C5A059]/40 text-left space-y-2.5 my-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#DFBE7A]">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <span>Demonstration Mode</span>
              </div>
              <p className="text-xs text-[#ECE6DA] leading-relaxed">
                This is a live interactive demonstration. To finalize and connect your table booking system to your point-of-sale, please contact <strong className="text-[#DFBE7A]">LevelUp Ecosystem</strong>.
              </p>
              <div className="pt-2 border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                <a
                  href="mailto:contact@levelup-ecosystem.com"
                  className="inline-flex items-center gap-1.5 text-[#DFBE7A] hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>contact@levelup-ecosystem.com</span>
                </a>
                <a
                  href="https://levelup-ecosystem.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#DFBE7A] hover:underline font-medium"
                >
                  <span>levelup-ecosystem.com</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={resetForm}
                className="w-full py-2.5 px-4 rounded text-xs font-semibold uppercase tracking-wider text-[#120B0A] bg-[#C5A059] hover:brightness-110 transition-all cursor-pointer font-medium"
              >
                Done & Return to Menu
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] uppercase tracking-widest text-[#DFBE7A] font-medium">
                Dining Experience
              </span>
              <h2 className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl font-medium text-[#F7F4EE] mt-1">
                Reserve a Table
              </h2>
              <p className="text-xs text-[#A89F91] mt-1">
                {CAFE_INFO.address}, San Diego CA
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A89F91] mb-1">
                    Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#231816] border border-[#C5A059]/20 rounded px-3 py-2 text-xs text-[#F7F4EE] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A89F91] mb-1">
                    Time
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#231816] border border-[#C5A059]/20 rounded px-3 py-2 text-xs text-[#F7F4EE] focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="11:30">11:30 AM (Lunch)</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="13:30">1:30 PM</option>
                    <option value="18:30">6:30 PM (Dinner)</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A89F91] mb-1">
                    Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-[#231816] border border-[#C5A059]/20 rounded px-3 py-2 text-xs text-[#F7F4EE] focus:outline-none focus:border-[#C5A059]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                      <option key={num} value={num.toString()}>
                        {num} {num > 1 ? 'guests' : 'guest'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A89F91] mb-1">
                    Seating Area
                  </label>
                  <select
                    value={seating}
                    onChange={(e) => setSeating(e.target.value)}
                    className="w-full bg-[#231816] border border-[#C5A059]/20 rounded px-3 py-2 text-xs text-[#F7F4EE] focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="indoor">Intimate indoor dining</option>
                    <option value="terrace">Outdoor patio</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#A89F91] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#231816] border border-[#C5A059]/20 rounded px-3 py-2 text-xs text-[#F7F4EE] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A89F91] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(619) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#231816] border border-[#C5A059]/20 rounded px-3 py-2 text-xs text-[#F7F4EE] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A89F91] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#231816] border border-[#C5A059]/20 rounded px-3 py-2 text-xs text-[#F7F4EE] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#A89F91] mb-1">
                  Special Requests (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Birthday celebration, quiet corner, dietary requests..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-[#231816] border border-[#C5A059]/20 rounded px-3 py-2 text-xs text-[#F7F4EE] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3 rounded text-xs font-semibold uppercase tracking-wider text-[#120B0A] bg-gradient-to-r from-[#DFBE7A] via-[#C5A059] to-[#A8813B] hover:brightness-110 active:scale-98 transition-all shadow-md cursor-pointer"
              >
                Confirm Table Reservation
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
