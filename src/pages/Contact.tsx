import React, { useState } from "react"
import emailjs from "emailjs-com"
import { MessageSquare, Loader2, Mail, Phone } from "lucide-react"
import { SiWhatsapp } from "react-icons/si"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {

      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY"
      )

      setIsSuccess(true)

    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="pt-32 lg:pt-40 pb-24 lg:pb-32 px-6 lg:px-12">

      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <div className="text-center mb-16">

          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Get a Quote
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Tell us about your project and we’ll help bring your space to life with immersive visuals.
          </p>

        </div>


        <div className="grid lg:grid-cols-2 gap-16 items-start">


          {/* CONTACT FORM */}
          <div className="p-10 rounded-3xl bg-white border shadow-sm">

            {isSuccess ? (
              <div className="text-center">

                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare size={32} />
                </div>

                <h3 className="text-2xl font-semibold mb-3">
                  Thank You!
                </h3>

                <p className="text-gray-500">
                  Your inquiry has been sent. We'll get back to you shortly.
                </p>

              </div>
            ) : (

              <form onSubmit={handleSubmit} className="space-y-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                />

                <select
                  required
                  value={formData.projectType}
                  onChange={(e) =>
                    handleChange("projectType", e.target.value)
                  }
                  className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Project Type</option>
                  <option value="luxury-home">Luxury Home</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="commercial">Commercial</option>
                  <option value="education">College</option>
                  <option value="museum">Museum</option>
                  <option value="other">Other</option>
                </select>

                <textarea
                  placeholder="Tell us about your project..."
                  required
                  value={formData.message}
                  onChange={(e) =>
                    handleChange("message", e.target.value)
                  }
                  className="w-full p-3 border rounded-xl min-h-[140px] focus:outline-none focus:ring-2 focus:ring-black"
                />

                {error && (
                  <div className="text-red-500 text-sm">
                    {error}
                  </div>
                )}

                <button
                  disabled={isSubmitting}
                  className="w-full bg-black text-white py-3 rounded-xl flex items-center justify-center hover:bg-neutral-800 transition"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 animate-spin" size={18} />
                      Sending...
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </button>

              </form>
            )}
          </div>


          {/* CONTACT INFO */}
          <div className="space-y-8">

            <div className="p-8 rounded-3xl bg-white border shadow-sm">

              <h3 className="text-xl font-semibold mb-4">
                Prefer WhatsApp?
              </h3>

              <button
                onClick={() =>
                  window.open("https://wa.me/1234567890", "_blank")
                }
                className="w-full py-3 rounded-xl border flex items-center justify-center hover:bg-gray-50 transition"
              >
                <SiWhatsapp className="mr-2" size={20} />
                Chat on WhatsApp
              </button>

            </div>


            <div className="p-8 rounded-3xl bg-white border shadow-sm space-y-4">

              <div className="flex items-center gap-3">
                <Mail size={20} />
                hello@rusticvisual.com
              </div>

              <div className="flex items-center gap-3">
                <Phone size={20} />
                +91 90000 00000
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}