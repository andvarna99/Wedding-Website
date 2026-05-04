import { useState } from "react";
import Navigation from "../components/Navigation";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    attendance: string;
    guestCount: string;
    additionalGuestFirstName: string;
    additionalGuestLastName: string;
    dietaryRestrictions: string;
    message: string;
}

export default function RSVP() {
    const [formData, setFormData] = useState<FormData>({
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

    const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

    const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL as string;

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitStatus("submitting");

        try {
            const res = await fetch(FORMSPREE_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            setSubmitStatus("success");
        } catch {
            setSubmitStatus("error");
        }
    };

    if (submitStatus === "success") {
        return (
            <>
                <Navigation />
                <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center px-8">
                    <div className="text-center max-w-lg">
                        <h2 className="text-5xl text-[#D4C5B9] font-light mb-6">Thank You!</h2>
                        <div className="w-16 h-px bg-[#8B5A3C] mx-auto mb-6" />
                        <p className="text-[#D4C5B9]/70 text-lg leading-relaxed">
                            We've received your RSVP and can't wait to celebrate with you.
                        </p>
                    </div>
                </div>
            </>
        );
    }

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
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Name Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label
                                    htmlFor="firstName"
                                    className="block text-xs tracking-[0.2em] text-[#D4C5B9] mb-3"
                                >
                                    FIRST NAME *
                                </label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-transparent border border-[#D4C5B9]/30 text-[#D4C5B9] focus:outline-none focus:border-[#8B5A3C] transition-colors"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="lastName"
                                    className="block text-xs tracking-[0.2em] text-[#D4C5B9] mb-3"
                                >
                                    LAST NAME *
                                </label>
                                <input
                                    id="lastName"
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
                                    htmlFor="email"
                                    className="block text-xs tracking-[0.2em] text-[#D4C5B9] mb-3"
                                >
                                    EMAIL *
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-transparent border border-[#D4C5B9]/30 text-[#D4C5B9] focus:outline-none focus:border-[#8B5A3C] transition-colors"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-xs tracking-[0.2em] text-[#D4C5B9] mb-3"
                                >
                                    PHONE
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
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
                                htmlFor="attendance"
                                className="block text-xs tracking-[0.2em] text-[#D4C5B9] mb-3"
                            >
                                WILL YOU ATTEND? *
                            </label>
                            <select
                                id="attendance"
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
                                        htmlFor="guestCount"
                                        className="block text-xs tracking-[0.2em] text-[#D4C5B9] mb-3"
                                    >
                                        NUMBER OF GUESTS (Please only select a plus 1 if we have discussed it already) *
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
                                                    FIRST NAME *
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
                                                    LAST NAME *
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
                            </>
                        )}

                        {/* Dietary Restrictions */}
                        <div>
                            <label
                                htmlFor="dietaryRestrictions"
                                className="block text-xs tracking-[0.2em] text-[#D4C5B9] mb-3"
                            >
                                DIETARY RESTRICTIONS
                            </label>
                            <input
                                id="dietaryRestrictions"
                                name="dietaryRestrictions"
                                value={formData.dietaryRestrictions}
                                onChange={handleChange}
                                placeholder="e.g. vegetarian, gluten-free, nut allergy"
                                className="w-full px-4 py-3 bg-transparent border border-[#D4C5B9]/30 text-[#D4C5B9] placeholder-[#D4C5B9]/30 focus:outline-none focus:border-[#8B5A3C] transition-colors"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-xs tracking-[0.2em] text-[#D4C5B9] mb-3"
                            >
                                MESSAGE TO THE COUPLE
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                placeholder="Share your well wishes or any questions..."
                                className="w-full px-4 py-3 bg-transparent border border-[#D4C5B9]/30 text-[#D4C5B9] placeholder-[#D4C5B9]/30 focus:outline-none focus:border-[#8B5A3C] transition-colors resize-none"
                            />
                        </div>

                        {submitStatus === "error" && (
                            <p className="text-red-400 text-sm tracking-wide">
                                Something went wrong. Please try again or email us directly.
                            </p>
                        )}

                        {/* Submit Button */}
                        <div className="pt-8">
                            <button
                                type="submit"
                                disabled={submitStatus === "submitting"}
                                className="w-full md:w-auto px-12 py-4 bg-transparent border border-[#D4C5B9] text-[#D4C5B9] text-xs tracking-[0.3em] hover:bg-[#D4C5B9] hover:text-[#1A1A1A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {submitStatus === "submitting" ? "SUBMITTING..." : "SUBMIT RSVP"}
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