import { useState } from "react";
import Navigation from "../components/Navigation";

export default function RSVP() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        attendance: "",
        guestCount: "1",
        additionalGuestFirstName: "",
        additionalGuestLastName: "",
        dietaryRestrictions: "",
        message: "",
    });

    const [submitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    if (submitted) {
        return (
            <>
                <Navigation />
                <div className="min-h-screen bg-[#1A1A1A] relative px-8 md:px-16 lg:px-24 py-24 md:py-32">
                    {/* Geometric elements */}
                    <div className="absolute left-8 md:left-16 top-0 h-full w-px bg-[#D4C5B9]/30"></div>
                    <div className="absolute right-8 md:right-16 top-0 h-full w-px bg-[#D4C5B9]/30"></div>

                    <div className="max-w-3xl mx-auto text-center">
                        <div className="space-y-8">
                            <h1 className="text-7xl md:text-8xl lg:text-9xl text-[#D4C5B9] font-light leading-none">
                                thank you
                            </h1>
                            <p className="text-xl text-[#D4C5B9]/80">
                                We've received your RSVP and can't wait to celebrate with you!
                            </p>
                            <button
                                className="mt-12 px-8 py-4 bg-transparent border border-[#D4C5B9] text-[#D4C5B9] text-xs tracking-[0.3em] hover:bg-[#D4C5B9] hover:text-[#1A1A1A] transition-colors"
                            >
                                SUBMIT ANOTHER RSVP
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL;

    return (
        <>
            <Navigation />
            <div className="min-h-screen bg-[#1A1A1A] relative px-8 md:px-16 lg:px-24 py-24 md:py-32">
                {/* Geometric elements */}
                <div className="absolute left-8 md:left-16 top-0 h-full w-px bg-[#D4C5B9]/30"></div>
                <div className="absolute right-8 md:right-16 top-0 h-full w-px bg-[#D4C5B9]/30"></div>

                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-16">
                        <div className="flex items-center gap-6 mb-8">
                <span className="text-xs tracking-[0.3em] text-[#D4C5B9]">
                  JOIN OUR CELEBRATION
                </span>
                            <div className="w-12 h-px bg-[#8B5A3C]"></div>
                        </div>

                        <h1 className="text-7xl md:text-8xl lg:text-9xl text-[#D4C5B9] font-light leading-none mb-4">
                            RSVP
                        </h1>
                        <p className="text-xl text-[#D4C5B9]/70 max-w-2xl">
                            Please let us know if you'll be joining us on our special day.
                        </p>
                    </div>

                    {/* Form */}
                    <form action={FORMSPREE_URL} method="POST" className="space-y-8">
                        {/* Name Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className="block text-xs tracking-[0.2em] text-[#D4C5B9] mb-3"
                                >
                                    FIRST NAME *
                                </label>
                                <input
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-transparent border border-[#D4C5B9]/30 text-[#D4C5B9] focus:outline-none focus:border-[#8B5A3C] transition-colors"
                                />
                            </div>

                            <div>
                                <label
                                    type="text" id="lastName" name="lastName"
                                    className="block text-xs tracking-[0.2em] text-[#D4C5B9] mb-3"
                                >
                                    LAST NAME *
                                </label>
                                <input
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-transparent border border-[#D4C5B9]/30 text-[#D4C5B9] focus:outline-none focus:border-[#8B5A3C] transition-colors"
                                />
                            </div>
                        </div>

                        {/* Contact Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="block text-xs tracking-[0.2em] text-[#D4C5B9] mb-3"
                                >
                                    EMAIL *
                                </label>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-transparent border border-[#D4C5B9]/30 text-[#D4C5B9] focus:outline-none focus:border-[#8B5A3C] transition-colors"
                                />
                            </div>

                            <div>
                                <label
                                    type="number"
                                    id="phone"
                                    name="phone"
                                    className="block text-xs tracking-[0.2em] text-[#D4C5B9] mb-3"
                                >
                                    PHONE
                                </label>
                                <input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-transparent border border-[#D4C5B9]/30 text-[#D4C5B9] focus:outline-none focus:border-[#8B5A3C] transition-colors"
                                />
                            </div>
                        </div>

                        {/* Attendance */}
                        <div>
                            <label
                                type="text"
                                id="attendance"
                                name="attendance"
                                className="block text-xs tracking-[0.2em] text-[#D4C5B9] mb-3"
                            >
                                WILL YOU ATTEND? *
                            </label>
                            <select
                                name="attendance"
                                value={formData.attendance}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#D4C5B9]/30 text-[#D4C5B9] focus:outline-none focus:border-[#8B5A3C] transition-colors"
                            >
                                <option value="">Please select</option>
                                <option value="yes">Joyfully accepts</option>
                                <option value="no">Regretfully declines</option>
                            </select>
                        </div>

                        {/* Guest Count - only show if attending */}
                        {formData.attendance === "yes" && (
                            <>
                                <div>
                                    <label
                                        type="number"
                                        id="guestCount"
                                        name="guestCount"
                                        className="block text-xs tracking-[0.2em] text-[#D4C5B9] mb-3"
                                    >
                                        NUMBER OF GUESTS (Please only select a plus 1 if we have discussed it already)*
                                    </label>
                                    <select
                                        id="guestCount"
                                        name="guestCount"
                                        value={formData.guestCount}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#D4C5B9]/30 text-[#D4C5B9] focus:outline-none focus:border-[#8B5A3C] transition-colors"
                                    >
                                        <option value="1">1 Guest</option>
                                        <option value="2">2 Guests</option>
                                    </select>
                                </div>
                            </>
                        )}

                        {/* Additional Guest Fields - only show if 2 guests selected */}
                        {formData.guestCount === "2" && (
                            <div className="border border-[#D4C5B9]/20 p-5 space-y-4">
                                <p className="text-xs tracking-[0.2em] text-[#D4C5B9]/70">
                                    ADDITIONAL GUEST DETAILS
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label
                                            htmlFor="additionalGuestFirstName"
                                            className="block text-xs tracking-[0.2em] text-[#D4C5B9] mb-3"
                                        >
                                            FIRST NAME*
                                        </label>
                                        <input
                                            type="text"
                                            id="additionalGuestFirstName"
                                            name="additionalGuestFirstName"
                                            value={formData.additionalGuestFirstName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#D4C5B9]/30 text-[#D4C5B9] focus:outline-none focus:border-[#8B5A3C] transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="additionalGuestLastName"
                                            className="block text-xs tracking-[0.2em] text-[#D4C5B9] mb-3"
                                        >
                                            LAST NAME*
                                        </label>
                                        <input
                                            type="text"
                                            id="additionalGuestLastName"
                                            name="additionalGuestLastName"
                                            value={formData.additionalGuestLastName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#D4C5B9]/30 text-[#D4C5B9] focus:outline-none focus:border-[#8B5A3C] transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Message */}
                        <div>
                            <label
                                id="message"
                                type="text"
                                name="message"
                                className="block text-xs tracking-[0.2em] text-[#D4C5B9] mb-3"
                            >
                                MESSAGE TO THE COUPLE
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                placeholder="Share your well wishes or any questions..."
                                className="w-full px-4 py-3 bg-transparent border border-[#D4C5B9]/30 text-[#D4C5B9] placeholder-[#D4C5B9]/30 focus:outline-none focus:border-[#8B5A3C] transition-colors resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-8">
                            <button
                                type="submit"
                                className="w-full md:w-auto px-12 py-4 bg-transparent border border-[#D4C5B9] text-[#D4C5B9] text-xs tracking-[0.3em] hover:bg-[#D4C5B9] hover:text-[#1A1A1A] transition-colors"
                            >
                                SUBMIT RSVP
                            </button>
                        </div>
                    </form>

                    {/* Footer Note */}
                    <div className="mt-16 pt-8 border-t border-[#D4C5B9]/20">
                        <p className="text-lg text-[#D4C5B9]/60 leading-relaxed">
                            Please RSVP by July 10th, 2026. If you have any questions,
                            please don't hesitate to reach out to us directly: andvarnado+bonetawedding@gmail.com.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
