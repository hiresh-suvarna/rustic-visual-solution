import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  MessageSquare,
  Loader2,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError("");

    try {
      await emailjs.send(
        "service_fzi8br1",
        "template_sgmaxk2",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.projectType,
          message: formData.message,
        },
        "RgevvxGUx2GKJSESn"
      );

      setIsSuccess(true);
    } catch (err) {
      console.error(err);

      setError("Failed to send. Redirecting to WhatsApp...");

      window.open(
        `https://wa.me/9137998059?text=Hi, my name is ${formData.name}. I am interested in ${formData.projectType}. ${formData.message}`,
        "_blank"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 lg:pt-40">

      {/* ================= HERO ================= */}

      <section className="px-6 lg:px-12">

        <div className="container mx-auto max-w-6xl text-center">

          <div className="flex items-center justify-center gap-4 mb-6">

            <div className="w-14 h-px bg-gold/40" />

            <span className="uppercase tracking-[0.35em] text-sm font-semibold text-gold">
              CONTACT US
            </span>

            <div className="w-14 h-px bg-gold/40" />

          </div>

          <h1 className="font-bricolage text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95]">

            Let's Build Something
            <br />
            Exceptional

          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg lg:text-xl leading-9 text-muted-foreground">

            Whether you're showcasing a luxury residence,
            hospitality venue, commercial development,
            or educational campus—we'd love to hear
            about your vision.

          </p>

        </div>

      </section>

      {/* ================= CONTENT ================= */}

      <section className="mt-24 lg:mt-28 bg-[#faf8f4] py-20 lg:py-28">

        <div className="container mx-auto max-w-7xl px-6 lg:px-0">

          <div className="grid lg:grid-cols-12 gap-12">

            {/* ================= FORM ================= */}

            <div className="lg:col-span-7">

              <div className="relative overflow-hidden rounded-[34px] border border-neutral-200 bg-white shadow-2xl">

                <div className="absolute top-0 left-0 h-1 w-full bg-gold" />

                <div className="p-8 lg:p-12">

                  {isSuccess ? (

                    <div className="py-16 text-center">

                      <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gold/10">

                        <MessageSquare
                          size={36}
                          className="text-gold"
                        />

                      </div>

                      <h2 className="font-bricolage text-4xl font-semibold mb-4">
                        Inquiry Received
                      </h2>

                      <p className="max-w-md mx-auto text-muted-foreground leading-8">

                        Thank you for contacting Rustic Visual Solution.
                        Our team will review your project and get back
                        to you as soon as possible.

                      </p>

                    </div>

                  ) : (

                    <>

                      <h2 className="font-bricolage text-4xl font-semibold mb-3">
                        Tell Us About Your Project
                      </h2>

                      <p className="text-muted-foreground leading-8 mb-10">

                        Fill out the form below and we'll get back
                        to you within 24 hours.

                      </p>

                      <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                      >                        {/* Name */}

                        <div>

                          <label className="block text-sm font-medium mb-3">
                            Full Name
                          </label>

                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) =>
                              handleChange("name", e.target.value)
                            }
                            className="
                              w-full
                              rounded-2xl
                              border
                              border-neutral-200
                              bg-neutral-50
                              px-5
                              py-4
                              outline-none
                              transition-all
                              duration-300
                              focus:border-gold
                              focus:bg-white
                            "
                          />

                        </div>

                        {/* Email */}

                        <div>

                          <label className="block text-sm font-medium mb-3">
                            Email Address
                          </label>

                          <input
                            type="email"
                            required
                            placeholder="hello@example.com"
                            value={formData.email}
                            onChange={(e) =>
                              handleChange("email", e.target.value)
                            }
                            className="
                              w-full
                              rounded-2xl
                              border
                              border-neutral-200
                              bg-neutral-50
                              px-5
                              py-4
                              outline-none
                              transition-all
                              duration-300
                              focus:border-gold
                              focus:bg-white
                            "
                          />

                        </div>

                        {/* Phone */}

                        <div>

                          <label className="block text-sm font-medium mb-3">
                            Phone Number
                          </label>

                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) =>
                              handleChange("phone", e.target.value)
                            }
                            className="
                              w-full
                              rounded-2xl
                              border
                              border-neutral-200
                              bg-neutral-50
                              px-5
                              py-4
                              outline-none
                              transition-all
                              duration-300
                              focus:border-gold
                              focus:bg-white
                            "
                          />

                        </div>

                        {/* Project Type */}

                        <div>

                          <label className="block text-sm font-medium mb-3">
                            Project Type
                          </label>

                          <select
                            required
                            value={formData.projectType}
                            onChange={(e) =>
                              handleChange(
                                "projectType",
                                e.target.value
                              )
                            }
                            className="
                              w-full
                              rounded-2xl
                              border
                              border-neutral-200
                              bg-neutral-50
                              px-5
                              py-4
                              outline-none
                              transition-all
                              duration-300
                              focus:border-gold
                              focus:bg-white
                            "
                          >
                            <option value="">
                              Select Project Type
                            </option>

                            <option value="Luxury Home">
                              Luxury Home
                            </option>

                            <option value="Restaurant">
                              Restaurant
                            </option>

                            <option value="Commercial Space">
                              Commercial Space
                            </option>

                            <option value="College">
                              College / University
                            </option>

                            <option value="Museum">
                              Museum
                            </option>

                            <option value="Other">
                              Other
                            </option>

                          </select>

                        </div>

                        {/* Message */}

                        <div>

                          <label className="block text-sm font-medium mb-3">
                            Project Details
                          </label>

                          <textarea
                            required
                            placeholder="Tell us about your project, location, timeline, and any specific requirements..."
                            value={formData.message}
                            onChange={(e) =>
                              handleChange(
                                "message",
                                e.target.value
                              )
                            }
                            className="
                              min-h-[180px]
                              w-full
                              rounded-2xl
                              border
                              border-neutral-200
                              bg-neutral-50
                              px-5
                              py-4
                              outline-none
                              transition-all
                              duration-300
                              focus:border-gold
                              focus:bg-white
                            "
                          />

                        </div>

                        {/* Error */}

                        {error && (

                          <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-red-600">

                            {error}

                          </div>

                        )}

                        {/* Submit */}

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="
                            flex
                            w-full
                            items-center
                            justify-center
                            gap-3
                            rounded-2xl
                            bg-gold
                            py-4
                            text-white
                            font-medium
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:shadow-xl
                            disabled:pointer-events-none
                            disabled:opacity-70
                          "
                        >

                          {isSubmitting ? (
                            <>
                              <Loader2
                                className="animate-spin"
                                size={20}
                              />

                              Sending...

                            </>
                          ) : (
                            <>
                              Submit Inquiry

                              <ArrowRight size={18} />
                            </>
                          )}

                        </button>

                      </form>

                    </>

                  )}

                </div>

              </div>

            </div>            {/* ================= RIGHT SIDE ================= */}

            <div className="lg:col-span-5 space-y-8">

              {/* WhatsApp Card */}

              <div className="relative overflow-hidden rounded-[34px] border border-green-200 bg-gradient-to-br from-green-50 to-white p-10 shadow-xl">

                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-green-100 blur-3xl opacity-60" />

                <div className="relative">

                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-600 text-white">

                    <SiWhatsapp size={30} />

                  </div>

                  <h3 className="font-bricolage text-3xl font-semibold mb-4">

                    Prefer WhatsApp?

                  </h3>

                  <p className="leading-8 text-muted-foreground mb-8">

                    Need a quicker response? Chat with us directly on
                    WhatsApp and we'll discuss your project in real time.

                  </p>

                  <button
                    onClick={() =>
                      window.open(
                        "https://wa.me/9137998059",
                        "_blank"
                      )
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-2xl
                      bg-green-600
                      py-4
                      font-medium
                      text-white
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-green-700
                      hover:shadow-xl
                    "
                  >

                    <SiWhatsapp size={20} />

                    Chat on WhatsApp

                  </button>

                </div>

              </div>

              {/* Contact Information */}

              <div className="rounded-[34px] border border-neutral-200 bg-white p-10 shadow-xl">

                <div className="flex items-center gap-4 mb-8">

                  <div className="w-12 h-px bg-gold/40" />

                  <span className="uppercase tracking-[0.3em] text-sm font-semibold text-gold">
                    CONTACT
                  </span>

                </div>

                <h3 className="font-bricolage text-3xl font-semibold mb-10">

                  Let's Connect

                </h3>

                {/* Email */}

                <div className="flex items-start gap-5 rounded-2xl border border-neutral-100 p-6 mb-5 transition hover:border-gold/40 hover:shadow-lg">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">

                    <Mail size={24} />

                  </div>

                  <div>

                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">

                      Email

                    </p>

                    <p className="font-medium text-lg">

                      hireshrustic.vp@gmail.com

                    </p>

                  </div>

                </div>

                {/* Phone */}

                <div className="flex items-start gap-5 rounded-2xl border border-neutral-100 p-6 transition hover:border-gold/40 hover:shadow-lg">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">

                    <Phone size={24} />

                  </div>

                  <div>

                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">

                      Phone

                    </p>

                    <p className="font-medium text-lg">

                      +91 91379 98059

                    </p>

                  </div>

                </div>

              </div>

              {/* Response Time */}

              <div className="rounded-[34px] border border-neutral-200 bg-[#faf8f4] p-10">

                <h3 className="font-bricolage text-2xl font-semibold mb-5">

                  Response Time

                </h3>

                <p className="leading-8 text-muted-foreground">

                  We usually respond within
                  <strong className="text-black"> 24 hours</strong>.
                  For urgent enquiries, WhatsApp is the fastest way to
                  reach our team.

                </p>

              </div>

            </div>          </div>

        </div>

      </section>

      {/* ================= BACKGROUND DECORATION ================= */}

      <div
        className="
          pointer-events-none
          fixed
          inset-0
          -z-10
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            top-0
            right-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-gold/5
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-0
            h-[400px]
            w-[400px]
            rounded-full
            bg-gold/5
            blur-[100px]
          "
        />
      </div>

    </div>
  );
}