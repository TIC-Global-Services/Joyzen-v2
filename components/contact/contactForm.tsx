'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

interface FormData {
  name: string;
  email: string;
  mobile: string;
  city: string;
  message: string;
}

const ContactForm = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   city: ''
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  const {
    register: desktopRegister,
    handleSubmit: desktopHandleSubmit,
    reset: desktopReset,
    formState: { errors: desktopErrors, isSubmitting: desktopIsSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      mobile: '',
      city: '',
      message: ''
    },
  });
  const {
    register: mobileRegister,
    handleSubmit: mobileHandleSubmit,
    reset: mobileReset,
    formState: { errors: mobileErrors, isSubmitting: mobileIsSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      mobile: '',
      city: '',
      message: ''
    },
  });
  const onSubmit = async (data: FormData, resetFn: () => void) => {
    try {
      await fetch("https://script.google.com/macros/s/AKfycby87HMGWfarg3kDA0GSkJlkvpYr9V2FYORfnGPo5gxdjLX7htl0R9nzWlevaCGI4oI/exec", {
        method: "POST",
        body: JSON.stringify({
          type: "earlycircle",
          name: data.name,
          email: data.email,
          mobile: data.mobile,
          city: data.city,
        }),
      });
      toast.success("Congragulation you joined the early circle 🎉");
      resetFn();
    } catch (error) {
      toast.error("Error submitting form");
      console.error("Error submitting form:", error);
    }
  };

  const desktopInputClasses = "w-full px-8 py-3 rounded-full bg-white/20 border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] text-[#1a1a1a] placeholder-[#6E6E6E] font-epilogue text-base focus:outline-none focus:ring-2 focus:ring-[#136136]/20 backdrop-blur-xl transition-all";
  const mobileInputClasses = "w-full px-6 py-3 rounded-full bg-white/20 border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] text-[#1a1a1a] placeholder-[#6E6E6E] font-epilogue text-[14px] focus:outline-none focus:ring-2 focus:ring-[#136136]/20 backdrop-blur-xl transition-all";

  return (
    <section className="relative w-full pt-6 lg:pt-10 pb-10 lg:pb-14 min-h-[100vh] lg:min-h-[100dvh] lg:px-24 flex items-start lg:items-start justify-center overflow-hidden">

      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none transform-gpu" style={{ transform: 'translateZ(0)' }}>
        {/* Replaced heavy blur filters with radial-gradients on mobile */}
        <div className="absolute top-[40%] left-[-20%] md:left-[-20%] w-[50%] h-[50%] bg-[#ddc4df] rounded-full md:blur-[140px] md:block hidden animate-blob1" />
        <div className="absolute top-[40%] left-[-20%] w-full h-[50%] md:hidden block bg-[radial-gradient(circle,rgba(221,196,223,0.6)_0%,transparent_70%)] animate-blob1" />

        <div className="absolute top-[60%] md:top-[80%] left-[20%] md:left-[-10%] w-[70%] h-[30%] bg-[#ddc4df] rounded-full md:blur-[140px] md:block hidden animate-blob2" />
        <div className="absolute top-[60%] left-[20%] w-full h-[30%] md:hidden block bg-[radial-gradient(circle,rgba(221,196,223,0.5)_0%,transparent_70%)] animate-blob2" />

        <div className="absolute top-[60%] -right-[20%] w-[50%] h-[60%] bg-[#b4def7] rounded-full md:blur-[140px] md:block hidden animate-blob3" />
        <div className="absolute top-[50%] -right-[10%] w-full h-[60%] md:hidden block bg-[radial-gradient(circle,rgba(180,222,247,0.7)_0%,transparent_70%)] animate-blob3" />

        <div className="absolute bottom-0 left-[70%] w-[20%] h-[20%] bg-[#b4def7] rounded-full md:blur-[140px] md:block hidden animate-blob1" />
        <div className="absolute bottom-0 left-[70%] w-full h-[20%] md:hidden block bg-[radial-gradient(circle,rgba(180,222,247,0.4)_0%,transparent_70%)] animate-blob1" />
      </div>
      <div className="absolute bottom-0 z-40 left-0 w-full h-[20%] bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />

      {/* ---------- DESKTOP LAYOUT ---------- */}
      <div className="hidden lg:block absolute inset-0 z-10">


        {/* Image Side - independently positioned at bottom left */}
        <div className="absolute bottom-0 left-[-18vw] lg:left-[-24vw] xl:left-[-18vw] w-[45vw] xl:w-[40vw] h-[75vh] xl:h-[80vh] max-w-[650px] max-h-[700px]">
          <Image
            src="https://ik.imagekit.io/gyg6yfnd5/flower_bg.png?updatedAt=1774521082214"
            alt="Joyzen decorative flowers"
            fill
            sizes="45vw"
            className="object-contain object-bottom pointer-events-none scale-[2.2] origin-bottom-left"
          />
        </div>

        {/* Form Side - independently positioned on the right */}
        <div className="absolute top-36 right-8 xl:right-16 w-[578px] flex flex-col items-start">
          <h2 className="text-[2rem] xl:text-[2.25rem] font-sans font-medium tracking-tighter text-[#1a1a1a] mb-8 uppercase leading-[1.1]">
            We’re here to support your health journey.
          </h2>


          <form onSubmit={desktopHandleSubmit((data) => onSubmit(data, desktopReset))} className="w-full flex flex-col gap-3" noValidate>
            <div className="w-full">
              <input
                type="text"
                {...desktopRegister('name', {
                  required: 'Name is required',
                  minLength: { value: 3, message: 'Name must be at least 3 characters' },
                  maxLength: { value: 50, message: 'Name must not exceed 50 characters' },
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: 'Only letters allowed',
                  },
                })}
                onKeyDown={(e) => {
                  const allowedKeys = [
                    "Backspace",
                    "Delete",
                    "ArrowLeft",
                    "ArrowRight",
                    "Tab",
                    " "
                  ];

                  if (!/[a-zA-Z]/.test(e.key) && allowedKeys.includes(e.key)) {
                    e.preventDefault();
                  }
                }}
                placeholder="Name"
                className={`${desktopInputClasses} ${desktopErrors.name ? 'border-red-300' : 'border-white/40'}`}
              />
              {desktopErrors.name && <p className="text-red-500 text-sm mt-1">{desktopErrors.name.message}</p>}
            </div>

            <div className="w-full">
              <input
                type="email"
                {...desktopRegister('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                placeholder="Email Address"
                className={`${desktopInputClasses} ${desktopErrors.email ? 'border-red-300' : 'border-white/30'}`}
              />
              {desktopErrors.email && <p className="text-red-500 text-sm mt-1">{desktopErrors.email.message}</p>}
            </div>

            <div className="w-full">
              <input
                type="tel"
                {...desktopRegister('mobile', {
                  required: 'Mobile number is required',
                  minLength: { value: 10, message: 'Mobile number must be at least 10 digits' },
                  maxLength: { value: 10, message: 'Mobile number must not exceed 10 digits' },
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Invalid phone number',
                  },
                })}
                maxLength={10}
                minLength={10}
                placeholder="Phone Number"
                className={`${desktopInputClasses} ${desktopErrors.mobile ? 'border-red-300' : 'border-white/40'}`}
              />
              {desktopErrors.mobile && <p className="text-red-500 text-sm mt-1">{desktopErrors.mobile.message}</p>}
            </div>

            <div className="w-full ">
              <input
                type="text"
                {...desktopRegister('city', {
                  required: 'City is required',
                  maxLength: { value: 10, message: 'City must not exceed 20 characters' },
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: 'Only letters allowed',
                  },
                })}
                placeholder="City"
                onKeyDown={(e) => {
                  const allowedKeys = [
                    "Backspace",
                    "Delete",
                    "ArrowLeft",
                    "ArrowRight",
                    "Tab",
                    " "
                  ];

                  if (!/[a-zA-Z]/.test(e.key) && allowedKeys.includes(e.key)) {
                    e.preventDefault();
                  }
                }}
                className={`${desktopInputClasses} ${desktopErrors.city ? 'border-red-300' : 'border-white/40'}`}
              />
              {desktopErrors.city && <p className="text-red-500 text-sm mt-1 ">{desktopErrors.city.message}</p>}
            </div>
            <div className="w-full ">
              <textarea

                {...desktopRegister('message', {
                  required: 'Message is required',
                  maxLength: { value: 10, message: 'Message must not exceed 20 characters' },
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: 'Only letters allowed',
                  },
                })}
                placeholder="Message"
                onKeyDown={(e) => {
                  const allowedKeys = [
                    "Backspace",
                    "Delete",
                    "ArrowLeft",
                    "ArrowRight",
                    "Tab",
                    " "
                  ];

                  if (!/[a-zA-Z]/.test(e.key) && allowedKeys.includes(e.key)) {
                    e.preventDefault();
                  }
                }}
                className={`py-8 min-h-[160px] w-full px-8 rounded-3xl bg-white/20 border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] text-[#1a1a1a] placeholder-[#6E6E6E] font-epilogue text-base focus:outline-none focus:ring-2 focus:ring-[#136136]/20 backdrop-blur-xl transition-all ${desktopErrors.message ? 'border-red-300' : 'border-white/40'}`}
              />
              {desktopErrors.message && <p className="text-red-500 text-sm mt-1 ">{desktopErrors.message.message}</p>}
            </div>



            <div className="mt-4">
              <button
                type='submit'
                disabled={desktopIsSubmitting}
                className="px-8 py-[16px] rounded-full glass-card text-[#1a1a1a] font-satoshi text-base font-medium hover:bg-[rgba(255,255,255,0.2)] transition-all flex items-center justify-center cursor-pointer min-w-[180px]"
              >
                {desktopIsSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ---------- MOBILE LAYOUT ---------- */}
      <div className="flex lg:hidden w-full flex-col items-center justify-start relative z-10 pt-20 pb-10 min-h-screen px-4 sm:px-12 overflow-hidden">

        {/* Flower background behind form */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="https://ik.imagekit.io/gyg6yfnd5/flower_bg.png?updatedAt=1774521082214"
            alt="Joyzen decorative flowers"
            fill
            className="object-cover object-[center_60%] opacity-60 scale-75 pointer-events-none"
          />
          {/* Gradient overlays for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>


        <div className="w-full flex flex-col items-center text-center px-5 relative z-10 pt-4">
          <h2 className="text-2xl sm:text-3xl font-sans font-medium tracking-tighter text-[#1a1a1a] leading-[1.1] mb-8 uppercase">
            We’re here to support your health journey.
          </h2>
          <form onSubmit={mobileHandleSubmit((data) => onSubmit(data, mobileReset))} className="w-full flex flex-col gap-3 ">
            <div className="w-full">
              <input
                type="text"
                {...mobileRegister('name', {
                  required: 'Name is required',
                  minLength: { value: 3, message: 'Name must be at least 3 characters' },
                  maxLength: { value: 50, message: 'Name must not exceed 50 characters' },
                })}
                placeholder="Name"
                minLength={3}
                maxLength={50}
                className={`${mobileInputClasses} ${mobileErrors.name ? 'border-red-300' : 'border-white/40'}`}
              />
              {mobileErrors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {mobileErrors.name.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <input
                type="email"
                {...mobileRegister('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                placeholder="Email Address"
                className={`${mobileInputClasses} ${mobileErrors.email ? 'border-red-300' : 'border-white/40'}`}
              />
              {mobileErrors.email && <p className="text-red-500 text-sm mt-1">{mobileErrors.email.message}</p>}
            </div>

            <div className="w-full">
              <input
                type="tel"
                minLength={10}
                maxLength={10}
                {...mobileRegister('mobile', {
                  required: 'Mobile number is required',
                  pattern: {
                    value: /^[+]?[0-9\s\-()]{7,15}$/,
                    message: 'Invalid phone number',
                  },
                })}
                placeholder="Phone Number"
                className={`${mobileInputClasses} ${mobileErrors.mobile ? 'border-red-300' : 'border-white/40'}`}
              />
              {mobileErrors.mobile && <p className="text-red-500 text-sm mt-1">{mobileErrors.mobile.message}</p>}
            </div>

            <div className="w-full">
              <input
                type="text"
                placeholder='City'
                {...mobileRegister('city', {
                  required: 'City is required',
                  maxLength: { value: 20, message: 'City must not exceed 20 characters' },
                })}
                className={`${mobileInputClasses} ${mobileErrors.city ? 'border-red-300' : 'border-white/40'}`}
              />
              {mobileErrors.city && <p className="text-red-500 text-sm mt-1">{mobileErrors.city.message}</p>}
            </div>
            <div className="w-full ">
              <textarea

                {...mobileRegister('message', {
                  required: 'Message is required',
                  maxLength: { value: 1000, message: 'Message must not exceed 1000 characters' },
                })}
                placeholder="Message"
                className={`w-full px-8 py-6 min-h-[140px] rounded-3xl bg-white/20 border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] text-[#1a1a1a] resize-none placeholder-[#6E6E6E] font-epilogue text-[14px] focus:outline-none focus:ring-2 focus:ring-[#136136]/20 backdrop-blur-xl transition-all ${mobileErrors.message ? 'border-red-300' : 'border-white/40'}`}
              />
              {mobileErrors.message && <p className="text-red-500 text-xs mt-1 ">{mobileErrors.message.message}</p>}
            </div>

            <div className="mt-10 w-full flex justify-center">
              <button
                type="submit"
                disabled={mobileIsSubmitting}
                className="px-6 py-[10px] rounded-full glass-card text-[#1a1a1a] font-satoshi text-[11px] font-medium hover:bg-[rgba(255,255,255,0.2)] transition-all flex items-center justify-center cursor-pointer min-w-[140px]"
              >
                {mobileIsSubmitting ? 'Joining...' : 'Join Now'}
              </button>
            </div>

          </form>
        </div>
      </div>
      <Toaster position="top-right" />
      <style jsx>{`
        textarea:focus {
          outline: none;
        }
        textarea {
          resize: none;
        }
        @keyframes blob1 {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(15vw, -10vh) scale(1.1); }
          66% { transform: translate(-10vw, 15vh) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes blob2 {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-15vw, 15vh) scale(0.9); }
          66% { transform: translate(10vw, -10vh) scale(1.1); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes blob3 {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(20vw, 20vh) scale(1.1); }
          66% { transform: translate(-15vw, -15vh) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob1 {
          animation: blob1 20s infinite alternate ease-in-out;
        }
        .animate-blob2 {
          animation: blob2 25s infinite alternate ease-in-out;
        }
        .animate-blob3 {
          animation: blob3 30s infinite alternate ease-in-out;
        }
      `}</style>
    </section>
  )
}

export default ContactForm;