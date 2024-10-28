'use client'

// import Image from 'next/image'

import AnimateComponent from "@/components/AnimateComponent";
import { AnimateNumber } from "@/components/AnimateNumber";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TypographyH1 } from "@/components/ui/typographyH1";
import { TypographyH2 } from "@/components/ui/typographyH2";
import { TypographyH3 } from "@/components/ui/typographyH3";
import { TypographyH4 } from "@/components/ui/typographyH4";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, ClipboardList, Loader2, Mail } from "lucide-react";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { InquiryData, InquiryResponse, postInquiry } from "@/lib/postInquiry";
import { useCallback, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import axios from "@/lib/axiosConfig";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { ToastContainer, toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";






export default function Contact() {
  // just noticed the NavigationBar should shrink on sticky motion

  // const [email, setEmail] = useState('')
  // const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)


  const handleCopy = async (value: string) => {
    await navigator.clipboard.writeText(value)
  }

  // const { mutate, status } = useMutation<InquiryResponse, Error, InquiryData>({
  //   mutationFn: postInquiry,
  // });


  // const handleInquirySubmit = () => {
  //   mutate({ email, message });
  // };


  // ----------------

  const { executeRecaptcha, container } = useGoogleReCaptcha(); // Google reCAPTCHA v3 hook



  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      return null;
    }

    const token = await executeRecaptcha("submitForm"); // 'submitForm' can be any action name

    return token;


  }, [executeRecaptcha]);

  //{ publicRuntimeConfig }

  const formSchema = z.object({
    email: z.string().email().min(1, {
      message: "Invalid email.",
    }),
    message: z.string().min(1, {
      message: "Message must be at least 2 characters.",
    }),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: ""
    },
  });

  // console.log(form.formState.errors)
  const { errors } = form.formState



  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setSubmitting(true);
    try {
      // Trigger reCAPTCHA verification
      const captcha = await handleReCaptchaVerify();
      if (!captcha) {
        toast.error('Captcha verification failed.');
        setSubmitting(false);
        return;
      }


      // Submit form along with the reCAPTCHA token
      const response = await axios.post('/verify', { data: { captcha } });
      if (!response.data.success) {
        throw new Error('Captcha verification failed.');
      }

      const contactResponse = await axios.post('/contact/inquiry', { data: { ...values } });
      if (!contactResponse.data.success) {
        throw new Error('Failed to submit contact form.');
      }

      toast.success('Thank you for reaching out!');
      form.reset(); // Reset form on success

    } catch (error) {
      // console.error("Submission error:", error);
      toast.error('Message failed.');
    } finally {
      setSubmitting(false);
    }
  };



  // ----------------

  return (

    <>
      {/* <main className="flex min-h-screen flex-col items-center overflow-clip">
      <NavigationBar /> */}

      <div className=" pt-20 pl-8 pr-8 pb-20 flex flex-col space-y-8 z-10 w-full max-w-screen-xl">
        <div className="w-full flex flex-col space-y-8 justify-center ">
          <div className="w-full flex flex-col items-center space-y-4 mb-16">
            <AnimateComponent
              // transition={{ type: "spring", bounce: 0, duration: 0.6 }}
              variants={{
                start: { opacity: 0, y: 25 },
                end: { opacity: 1, y: 0 },
              }}
            >
              <TypographyH2 className="text-center text-4xl">
                How can we help?
              </TypographyH2>
            </AnimateComponent>
            <AnimateComponent
              transition={{
                type: "spring",
                bounce: 0,
                duration: 0.4,
                delay: 0.3,
              }}
              variants={{
                start: { opacity: 0, y: 25 },
                end: { opacity: 1, y: 0 },
              }}
            >
              <TypographyH4 className="text-center sm:w-[525px] font-medium">
                Get in touch with our team for information on our services,
                project quotations and any other inquiries.
              </TypographyH4>
            </AnimateComponent>
          </div>
          <AnimateComponent
            className="w-full h-[200px] relative overflow-visible flex flex-col space-y-4 pt-4"
            variants={{
              start: { opacity: 0 },
              end: { opacity: 1 },
            }}
          >
            <Image src="/undraw-contact-us.svg" alt="world" fill />
          </AnimateComponent>
          <div className="w-full h-5">
            <Separator className="w-full" />
          </div>
          <div className="w-full flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-16">
            <div className="sm:w-1/2">
              <AnimateComponent
                className="overflow-visible"
                variants={{
                  start: { opacity: 0 },
                  end: { opacity: 1 },
                }}
              >
                {/* <div className="w-full flex flex-col pt-4 space-y-4 ">
                  <span className="flex items-center space-x-1.5">
                    <TypographyH4 className="mb-4">Get in touch</TypographyH4></span>
          
                  <div className="flex flex-col space-y-1.5 ">
                    <Label htmlFor="email">Email address</Label>
                    <Input
                      value={email}
                      onChange={({ target: { value } }) => setEmail(value)}
                      className="bg-white/1"
                      id="email"
                      type="email"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5 ">
                    <Label htmlFor="message">Tell us how we can help</Label>
                    <Textarea id="message" placeholder="Enter your message" value={message} onChange={({ target: { value } }) => setMessage(value)}
                    />
                  </div>
                  <Button className="w-fit rounded-full" onClick={() => handleInquirySubmit()}>Submit<ChevronRight className="w-4 h-4" /></Button>
                </div> */}

                <Form {...form} >
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="flex flex-col space-y-1.5">
                          <FormLabel>Email address</FormLabel>
                          <FormControl>
                            <Input
                              className={`${errors.email ? 'border-solid border-2 border-red-500' : ''} focus-visible:ring-transparent  bg-white/1`}
                              placeholder="Enter email address"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="flex flex-col space-y-1.5">
                          <FormLabel>Tell us how we can help</FormLabel>
                          <FormControl>
                            <Textarea
                              className={`${errors.message ? 'border-solid border-2 border-red-500' : ''} focus-visible:ring-transparent`}
                              placeholder="Enter your message"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />


                    <Button className="rounded-full" type="submit" disabled={submitting}>
                      {submitting ? <Loader2 className="h-6 w-6 animate-spin" /> : <>Submit <ChevronRight className="w-4 h-4" /></>}
                    </Button>
                  </form>
                </Form>

              </AnimateComponent>
            </div>
            <AnimateComponent
              className="overflow-visible m:w-1/2 flex flex-col space-y-4 pt-4 "
              variants={{
                start: { opacity: 0 },
                end: { opacity: 1 },
              }}
            >
              <TypographyH4 className="mb-4">Contact details</TypographyH4>
              <div>
                <p className="text-sm text-muted-foreground"> Get help</p>
                <span className="flex items-center w-fit space-x-1.5 group"><p className="text-sm">info@cleanelite.co.uk</p><span className="invisible group-hover:visible cursor-pointer"><ClipboardList onClick={() => handleCopy("info@cleanelite.co.uk")} className="w-4 h-4" /></span></span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Call us</p>
                <span className="flex items-center w-fit space-x-1.5 group"><p className="text-sm">07917 821658
                </p><span className="invisible group-hover:visible cursor-pointer"><ClipboardList onClick={() => handleCopy("07917821658")} className="w-4 h-4" /></span></span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Address</p>
                <span className="flex items-center w-fit space-x-1.5 group"><p className="text-sm">49 Station Road Polegate East Sussex BN26 6EA
                </p><span className="invisible group-hover:visible cursor-pointer"><ClipboardList onClick={() => handleCopy("49 Station Road Polegate East Sussex BN26 6EA")} className="w-4 h-4" /></span></span>
              </div>
            </AnimateComponent>

          </div>
          <div className="w-full h-10 "></div>
        </div>
      </div>
      {/* <Footer />
    </main > */}
    </>
  );
}
