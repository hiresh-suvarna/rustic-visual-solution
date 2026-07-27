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
    <div className="overflow-x-hidden pt-24 lg:pt-40">

      {/* ================= HERO ================= */}

      <section className="px-4 sm:px-6 lg:px-12">

        <div className="mx-auto max-w-6xl text-center">

          <div className="mb-6 flex items-center justify-center gap-3 sm:gap-4">

            <div className="h-px w-8 sm:w-14 bg-gold/40" />

            <span className="text-[11px] sm:text-sm font-semibold uppercase tracking-[0.3em] text-gold">

              CONTACT US

            </span>

            <div className="h-px w-8 sm:w-14 bg-gold/40" />

          </div>

          <h1
            className="
              font-bricolage
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-semibold
              leading-[0.95]
            "
          >
            Let's Build Something
            <br />
            Exceptional
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              px-2
              text-base
              sm:text-lg
              lg:text-xl
              leading-8
              text-muted-foreground
            "
          >
            Whether you're showcasing a luxury residence,
            hospitality venue, commercial development,
            or educational campus—we'd love to hear
            about your vision.
          </p>

        </div>

      </section>

      {/* ================= CONTENT ================= */}

      <section className="mt-16 bg-[#faf8f4] py-16 lg:mt-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">

            {/* ================= FORM ================= */}

            <div className="min-w-0 lg:col-span-7">

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[24px]
                  sm:rounded-[30px]
                  lg:rounded-[34px]
                  border
                  border-neutral-200
                  bg-white
                  shadow-2xl
                "
              >

                <div className="absolute left-0 top-0 h-1 w-full bg-gold" />

                <div className="p-5 sm:p-8 lg:p-12">

                  {isSuccess ? (

                    <div className="py-12 text-center lg:py-16">

                      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 lg:mb-8 lg:h-20 lg:w-20">

                        <MessageSquare
                          size={32}
                          className="text-gold"
                        />

                      </div>

                      <h2 className="mb-4 font-bricolage text-3xl font-semibold sm:text-4xl">

                        Inquiry Received

                      </h2>

                      <p className="mx-auto max-w-md leading-7 text-muted-foreground">

                        Thank you for contacting Rustic Visual Solution.
                        Our team will review your project and get back
                        to you as soon as possible.

                      </p>

                    </div>

                  ) : (

                    <>

                      <h2
                        className="
                          mb-3
                          font-bricolage
                          text-3xl
                          sm:text-4xl
                          font-semibold
                          leading-tight
                        "
                      >
                        Tell Us About Your Project
                      </h2>

                      <p className="mb-8 leading-7 text-muted-foreground lg:mb-10">

                        Fill out the form below and we'll get back
                        to you within 24 hours.

                      </p>

                      <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                      >

                        {/* Name */}<div>

  <label className="mb-2 block text-sm font-medium sm:text-base">
    Full Name
  </label>

  <input
    type="text"
    required
    placeholder="John Doe"
    value={formData.name}
    onChange={(e) => handleChange("name", e.target.value)}
    className="
      w-full
      rounded-2xl
      border
      border-neutral-200
      bg-neutral-50
      px-4
      sm:px-5
      py-3.5
      sm:py-4
      text-base
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

  <label className="mb-2 block text-sm font-medium sm:text-base">
    Email Address
  </label>

  <input
    type="email"
    required
    placeholder="hello@example.com"
    value={formData.email}
    onChange={(e) => handleChange("email", e.target.value)}
    className="
      w-full
      rounded-2xl
      border
      border-neutral-200
      bg-neutral-50
      px-4
      sm:px-5
      py-3.5
      sm:py-4
      text-base
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

  <label className="mb-2 block text-sm font-medium sm:text-base">
    Phone Number
  </label>

  <input
    type="tel"
    required
    placeholder="+91 98765 43210"
    value={formData.phone}
    onChange={(e) => handleChange("phone", e.target.value)}
    className="
      w-full
      rounded-2xl
      border
      border-neutral-200
      bg-neutral-50
      px-4
      sm:px-5
      py-3.5
      sm:py-4
      text-base
      outline-none
      transition-all
      duration-300
      focus:border-gold
      focus:bg-white
    "
  />

</div>{/* Project Type */}

<div>

  <label className="mb-2 block text-sm font-medium sm:text-base">
    Project Type
  </label>

  <select
    required
    value={formData.projectType}
    onChange={(e) =>
      handleChange("projectType", e.target.value)
    }
    className="
      w-full
      rounded-2xl
      border
      border-neutral-200
      bg-neutral-50
      px-4
      sm:px-5
      py-3.5
      sm:py-4
      text-base
      outline-none
      transition-all
      duration-300
      focus:border-gold
      focus:bg-white
    "
  >
    <option value="">Select Project Type</option>
    <option value="Luxury Home">Luxury Home</option>
    <option value="Restaurant">Restaurant</option>
    <option value="Commercial Space">Commercial Space</option>
    <option value="College">College / University</option>
    <option value="Museum">Museum</option>
    <option value="Other">Other</option>
  </select>

</div>

{/* Message */}

<div>

  <label className="mb-2 block text-sm font-medium sm:text-base">
    Project Details
  </label>

  <textarea
    required
    placeholder="Tell us about your project, location, timeline, and any specific requirements..."
    value={formData.message}
    onChange={(e) =>
      handleChange("message", e.target.value)
    }
    className="
      min-h-[140px]
      sm:min-h-[180px]
      w-full
      resize-y
      rounded-2xl
      border
      border-neutral-200
      bg-neutral-50
      px-4
      sm:px-5
      py-3.5
      sm:py-4
      text-base
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

  <div
    className="
      rounded-2xl
      border
      border-red-200
      bg-red-50
      px-4
      py-3
      text-sm
      text-red-600
    "
  >
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
    gap-2
    sm:gap-3
    rounded-2xl
    bg-gold
    py-3.5
    sm:py-4
    text-base
    font-medium
    text-white
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

</div>

{/* ================= RIGHT SIDE ================= */}

<div className="min-w-0 space-y-6 lg:col-span-5 lg:space-y-8">

  {/* WhatsApp Card */}<div
  className="
    relative
    overflow-hidden
    rounded-[24px]
    sm:rounded-[30px]
    lg:rounded-[34px]
    border
    border-green-200
    bg-gradient-to-br
    from-green-50
    to-white
    p-6
    sm:p-8
    lg:p-10
    shadow-xl
  "
>

  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-green-100 opacity-60 blur-3xl" />

  <div className="relative">

    <div
      className="
        mb-6
        flex
        h-14
        w-14
        sm:h-16
        sm:w-16
        items-center
        justify-center
        rounded-2xl
        bg-green-600
        text-white
      "
    >
      <SiWhatsapp size={28} />
    </div>

    <h3
      className="
        mb-4
        font-bricolage
        text-2xl
        sm:text-3xl
        font-semibold
        leading-tight
      "
    >
      Prefer WhatsApp?
    </h3>

    <p
      className="
        mb-8
        text-sm
        sm:text-base
        leading-7
        text-muted-foreground
      "
    >
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
        gap-2
        sm:gap-3
        rounded-2xl
        bg-green-600
        px-4
        py-3.5
        sm:py-4
        text-sm
        sm:text-base
        font-medium
        text-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-green-700
        hover:shadow-xl
      "
    >

      <SiWhatsapp
        size={20}
        className="shrink-0"
      />

      <span className="truncate">
        Chat on WhatsApp
      </span>

    </button>

  </div>

</div>

{/* Contact Information */}<div
  className="
    rounded-[24px]
    sm:rounded-[30px]
    lg:rounded-[34px]
    border
    border-neutral-200
    bg-white
    p-6
    sm:p-8
    lg:p-10
    shadow-xl
  "
>

  <div className="mb-8 flex items-center gap-4">

    <div className="h-px w-10 bg-gold/40" />

    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-gold">

      CONTACT

    </span>

  </div>

  <h3
    className="
      mb-8
      font-bricolage
      text-2xl
      sm:text-3xl
      font-semibold
    "
  >
    Let's Connect
  </h3>

  {/* Email */}

  <div
    className="
      mb-5
      flex
      items-start
      gap-4
      rounded-2xl
      border
      border-neutral-100
      p-5
      sm:p-6
      transition
      hover:border-gold/40
      hover:shadow-lg
    "
  >

    <div
      className="
        flex
        h-12
        w-12
        shrink-0
        sm:h-14
        sm:w-14
        items-center
        justify-center
        rounded-2xl
        bg-gold/10
        text-gold
      "
    >

      <Mail size={22} />

    </div>

    <div className="min-w-0 flex-1">

      <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">

        Email

      </p>

      <a
        href="mailto:hireshrustic.vp@gmail.com"
        className="
          block
          break-all
          text-base
          sm:text-lg
          font-medium
          transition
          hover:text-gold
        "
      >
        hireshrustic.vp@gmail.com
      </a>

    </div>

  </div>

  {/* Phone */}

  <div
    className="
      flex
      items-start
      gap-4
      rounded-2xl
      border
      border-neutral-100
      p-5
      sm:p-6
      transition
      hover:border-gold/40
      hover:shadow-lg
    "
  >

    <div
      className="
        flex
        h-12
        w-12
        shrink-0
        sm:h-14
        sm:w-14
        items-center
        justify-center
        rounded-2xl
        bg-gold/10
        text-gold
      "
    >

      <Phone size={22} />

    </div>

    <div className="min-w-0 flex-1">

      <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">

        Phone

      </p>

      <a
        href="tel:+919137998059"
        className="
          text-base
          sm:text-lg
          font-medium
          transition
          hover:text-gold
        "
      >
        +91 91379 98059
      </a>

    </div>

  </div>

</div>

{/* Response Time */}

<div
  className="
    rounded-[24px]
    sm:rounded-[30px]
    lg:rounded-[34px]
    border
    border-neutral-200
    bg-[#faf8f4]
    p-6
    sm:p-8
    lg:p-10
  "
>

  <h3
    className="
      mb-4
      font-bricolage
      text-2xl
      font-semibold
    "
  >
    Response Time
  </h3>

  <p
    className="
      text-sm
      sm:text-base
      leading-7
      text-muted-foreground
    "
  >
    We usually respond within
    <strong className="text-black">
      {" "}24 hours
    </strong>.
    For urgent enquiries, WhatsApp is the fastest way to
    reach our team.
  </p>

</div></div>

</div>

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
      h-[300px]
      w-[300px]
      sm:h-[400px]
      sm:w-[400px]
      lg:h-[500px]
      lg:w-[500px]
      rounded-full
      bg-gold/5
      blur-[80px]
      sm:blur-[100px]
      lg:blur-[120px]
    "
  />

  <div
    className="
      absolute
      bottom-0
      left-0
      h-[250px]
      w-[250px]
      sm:h-[320px]
      sm:w-[320px]
      lg:h-[400px]
      lg:w-[400px]
      rounded-full
      bg-gold/5
      blur-[70px]
      sm:blur-[90px]
      lg:blur-[100px]
    "
  />

</div>

</div>
);
}