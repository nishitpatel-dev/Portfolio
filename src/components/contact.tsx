"use client"
import { Bricolage_Grotesque } from "next/font/google";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { RainbowButton } from "./magicui/rainbow-button";
import { useRef, useState } from "react";
import axios from "axios"
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function Contact(){
    const [loading,setLoading]= useState<boolean>(false);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);
    const handleClick = async()=>{
        setLoading(true);
        
        // Validation for empty fields
        if(!emailRef.current?.value?.trim() || !messageRef.current?.value?.trim()){
            toast.error("📝 Please fill in all the details", {
                description: "Both email and message fields are required"
            });
            setLoading(false);
            return;
        }
        
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(emailRef.current.value.trim())){
            toast.error("📧 Please enter a valid email address", {
                description: "Make sure your email is in the correct format"
            });
            setLoading(false);
            return;
        }
        
        try {
            await axios.post("/api/contact",{
                email:emailRef.current?.value.trim(),
                message:messageRef.current?.value.trim()
            });
            
            // Clear the form after successful submission
            if(emailRef.current) emailRef.current.value = "";
            if(messageRef.current) messageRef.current.value = "";
            
            toast.success("✅ Message sent successfully!", {
                description: "Thank you for reaching out. I'll get back to you soon!"
            });
        } catch (error) {
            toast.error("❌ Failed to send message", {
                description: "Please try again or contact me directly"
            });
            console.error("Error sending message:", error);
        } finally {
            setLoading(false);
        }
    }
    
    return(
        <div className="flex flex-col items-center p-5 w-full">
             <hr className="my-10 w-1/2 mx-auto"/>
            <div className="w-full max-w-4xl">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className={`${font.className} font-semibold text-3xl mb-3`}>Get In Touch</h1>
                    <p className="text-primary/70 text-sm max-w-md mx-auto">
                        Have a project in mind or just want to say hello? I'd love to hear from you!
                    </p>
                </div>

                {/* Contact Form */}
                <div className="bg-gradient-to-r from-slate-50/50 to-gray-50/50 dark:from-slate-900/20 dark:to-gray-900/20 rounded-xl border border-border/50 p-6 shadow-lg">
                    <div className="space-y-6">
                        {/* Email Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-primary/80">Your Email</label>
                            <div className="relative mt-2">
                                <Input 
                                    ref={emailRef} 
                                    placeholder="Enter your email address"
                                    className="h-11 bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-200"
                                />
                            </div>
                        </div>

                        {/* Message Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-primary/80">Your Message</label>
                            <div className="mt-2">
                                <Textarea 
                                    ref={messageRef} 
                                    placeholder="Tell me about your project or just say hello..."
                                    className="h-32 bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-200 resize-none"
                                />
                            </div>
                        </div>

                        {/* Send Button */}
                        <div className="pt-2">
                            <RainbowButton 
                                onClick={handleClick} 
                                disabled={loading} 
                                className="w-full h-11 text-sm font-medium"
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <Loader2 className="animate-spin h-4 w-4"/>
                                        Sending message...
                                    </div>
                                ) : (
                                    "Send Message"
                                )}
                            </RainbowButton>
                        </div>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="text-center mt-6">
                    <p className="text-xs text-primary/50">
                        I'll get back to you as soon as possible!
                    </p>
                </div>
            </div>
        </div>
    )
}