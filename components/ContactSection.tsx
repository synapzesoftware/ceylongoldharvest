"use client";

import { useEffect, useState, FormEvent } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEnvelope } from "react-icons/fa";
import CustomAlert from "@/components/CustomAlert";

interface FormData {
  firstname: string;
  lastname: string;
  contact: string;
  subject: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactSection() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    contact: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    if (errors[id]) setErrors({ ...errors, [id]: "" });
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    return phoneRegex.test(phone);
  };

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key as keyof FormData]) {
        tempErrors[key] = "This field is required";
      }
    });

    if (formData.contact && !validatePhone(formData.contact)) {
      tempErrors.contact = "Please enter a valid phone number";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validate() && !isSubmitting) {
      setIsSubmitting(true);
      try {
        // Here you can integrate your API call
        // await submitForm(formData);
        setShowAlert(true);
        setFormData({
          firstname: "",
          lastname: "",
          contact: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="text-white relative">
      <div className="max-w-5xl px-4 xl:px-0 py-12 lg:py-20 mx-auto">
        {/* Title */}
        <div className="max-w-3xl mb-10 lg:mb-14" data-aos="fade-up">
          <h2
            className="font-semibold text-3xl md:text-4xl subtitle"
            style={{ color: "var(--primary)" }}
          >
            Contact us
          </h2>
        </div>

        <CustomAlert
          show={showAlert}
          type="success"
          title="Form Submitted!"
          message="Your contact form has been submitted successfully."
          okText="Great!"
          onOk={() => setShowAlert(false)}
          autoClose={5000}
          hideButtons={false}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
          <div className="md:order-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  id="firstname"
                  label="First Name"
                  value={formData.firstname}
                  onChange={handleChange}
                  error={errors.firstname}
                />
                <InputField
                  id="lastname"
                  label="Last Name"
                  value={formData.lastname}
                  onChange={handleChange}
                  error={errors.lastname}
                />
              </div>

              {/* Contact Number */}
              <InputField
                id="contact"
                label="Contact Number"
                value={formData.contact}
                onChange={handleChange}
                error={errors.contact}
              />

              {/* Subject */}
              <SelectField
                id="subject"
                label="Select Type"
                options={["General Inquiry", "Package Inquiry", "Feedback", "Other"]}
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
              />

              {/* Comment */}
              <TextAreaField
                id="message"
                label="Comment"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
              />

              <p className="text-xs text-neutral-500 mt-2">All fields are required</p>

              {/* Submit Button */}
              <div className="mt-5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative overflow-hidden flex items-center justify-center rounded-[10px] w-[130px] h-[40px] bg-[var(--btn-color)] text-white border border-[var(--white-color)] group hover:bg-[var(--btn-color-hover)] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="submitText transition-transform duration-500 ease-in-out group-hover:-translate-x-full opacity-100 group-hover:opacity-0 flex items-center">
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </span>
                  <FaEnvelope className="submitIcon absolute left-0 opacity-0 group-hover:left-1/2 group-hover:translate-x-[-50%] group-hover:opacity-100 transition-all duration-500 ease-in-out" />
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-14" data-aos="fade-right">
            <ContactInfo Icon={LocationIcon} title="Our address:" content="Canada" />
            <ContactInfo
              Icon={MailIcon}
              title="Email us:"
              content="ceyloangoldharvest@gmail.com"
              href="mailto:ceyloangoldharvest@gmail.com"
            />
            <ContactInfo
              Icon={PhoneIcon}
              title="Call us:"
              content="+000000000"
              href="tel:+000000000"
            />
            <div className="flex gap-x-5">
              <MegaphoneIcon />
              <div>
                <h4 className="font-semibold subtitle" style={{color:'var(--primary)'}}>Let’s talk</h4>
                <p className="mt-1 text-neutral-400">Have a question or an idea? Fill out the form and our team will get back to you shortly.</p>
                <p className="mt-2 text-neutral-400">We’re here to help with partnerships, support, or general inquiries.</p>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}

/* ---------------- REUSABLE INPUT COMPONENTS ---------------- */

const InputField = ({ id, label, type = "text", value, onChange, error }: any) => (
  <div className="relative">
    {error && <p className="text-[var(--third-color)] text-sm mb-1">{error}</p>}
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={label}
      className="peer p-4 w-full bg-white shadow-lg rounded-lg border border-[var(--third-color)] text-sm text-[var(--text-muted)] placeholder-transparent hover:bg-gray-100 focus:bg-gray-100"
    />
    <label className="absolute top-0 left-0 p-4 h-full text-sm text-neutral-400 transition-all peer-focus:text-xs peer-focus:-translate-y-1.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-1.5">
      {label}
    </label>
  </div>
);

const SelectField = ({ id, label, options, value, onChange, error }: any) => (
  <div className="relative">
    {error && <p className="text-[var(--third-color)] text-sm mb-1">{error}</p>}
    <select
      id={id}
      value={value}
      onChange={onChange}
      className="p-4 w-full bg-white shadow-lg rounded-lg border border-[var(--third-color)] text-sm text-[var(--text-muted)] hover:bg-gray-100 focus:bg-gray-100"
    >
      <option value="" disabled>
        {label}
      </option>
      {options.map((opt: string, idx: number) => (
        <option key={idx} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

const TextAreaField = ({ id, label, value, onChange, error }: any) => (
  <div className="relative">
    {error && <p className="text-[var(--third-color)] text-sm mb-1">{error}</p>}
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      placeholder={label}
      rows={4}
      className="peer p-4 w-full bg-white shadow-lg rounded-lg border border-[var(--third-color)] text-sm text-[var(--text-muted)] placeholder-transparent hover:bg-gray-100 focus:bg-gray-100"
    />
    <label className="absolute top-0 left-0 p-4 h-full text-sm text-neutral-400 transition-all peer-focus:text-xs peer-focus:-translate-y-1.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-1.5">
      {label}
    </label>
  </div>
);

/* ---------------- ICON COMPONENTS ---------------- */

const LocationIcon = () => (
  <svg className="size-6" style={{ color: "var(--primary)" }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const MailIcon = () => (
  <svg className="size-6" style={{ color: "var(--primary)" }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
    <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="size-6" style={{ color: "var(--primary)" }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.1 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.81.37 1.6.73 2.32a2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 7 7l1.85-1.28a2 2 0 0 1 2.11-.45c.72.36 1.51.61 2.32.73A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MegaphoneIcon = () => (
  <svg className="size-6" style={{ color: "var(--primary)" }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="m3 11 18-5v12L3 14v-3z" />
    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
  </svg>
);

/* ---------------- CONTACT INFO COMPONENT ---------------- */

const ContactInfo = ({ Icon, title, content, href }: any) => (
  <div className="flex gap-x-5">
    <Icon />
    <div>
      <h4 className="font-semibold subtitle" style={{ color: "var(--primary)" }}>
        {title}
      </h4>
      {href ? (
        <a className="mt-1 text-neutral-400 text-sm hover:text-neutral-200" href={href}>
          {content}
        </a>
      ) : (
        <p className="mt-1 text-neutral-400 text-sm">{content}</p>
      )}
    </div>
  </div>
);
