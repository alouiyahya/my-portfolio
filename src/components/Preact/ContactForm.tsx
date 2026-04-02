import { useState } from 'preact/hooks'

type StatusType = {
    status: boolean,
    message: string
}

const ContactForm = () => {
    const [mailStatus, setMailStatus] = useState<StatusType>({ status: false, message: "" })
    const [isLoading, setisLoading] = useState<boolean>(false)

    // --- BEDDLI HAD L-EMAIL B DYALK ---
    const FORMSPREE_URL = "https://formspree.io/f/alouiyahya52@gmail.com";

    const HandleFormSubmit = async (e: any) => {
        e.preventDefault();
        setisLoading(true);

        const formData = new FormData(e.target);

        try {
            const response = await fetch(FORMSPREE_URL, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setMailStatus({ status: true, message: "👍 Message Sent!" });
                e.target.reset(); // Khwi l-form melli i-tsard l-mail
            } else {
                throw new Error("😵 Error sending message");
            }
        } catch (error) {
            setMailStatus({ status: false, message: "❌ Failed to send" });
        } finally {
            setisLoading(false);
            // Hyed l-message men l-ecran men be3d 3 swaye3
            setTimeout(() => {
                setMailStatus({ status: false, message: "" });
            }, 3000);
        }
    }

    return (
        <form onSubmit={HandleFormSubmit} className="Fade_Up bg-LinkBtnGradient rounded-md w-full lg:max-w-[650px] px-4 py-2 outline outline-1 outline-white/20 flex_center flex-col">
            <label
                htmlFor="name"
                className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2"
            >
                Name
                <input
                    type="text"
                    id="name"
                    name="name" // Darouri bach Formspree i-3ref hada "Name"
                    placeholder="Enter your Name"
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-white"
                    autoComplete='name'
                    required
                />
            </label>

            <label
                htmlFor="email"
                className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2"
            >
                Email
                <input
                    type="email"
                    id="email"
                    name="email" // Darouri bach Formspree i-3ref hada "Email"
                    placeholder="example@gmail.com"
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-white"
                    autoComplete='email'
                    required
                />
            </label>

            <label
                htmlFor="message"
                className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2"
            >
                Message
                <textarea
                    rows={5}
                    id="message"
                    name="message" // Darouri bach Formspree i-3ref hada "Message"
                    placeholder="Enter your Message"
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-white resize-none"
                    required
                />
            </label>

            <div className="w-full flex justify-start items-center gap-4">
                <button
                    className="flex_center gap-4 border-none bg-background text-white outline outline-1 outline-white/20 my-1 mx-2 py-2 px-6 lg:px-20 rounded-md hover:bg-white/10 transition-colors"
                    type="submit"
                    disabled={isLoading}
                >
                    {
                        isLoading ? (
                            <>
                                <span>Sending</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
                            </>
                        ) : (
                            <>
                                <span>Submit</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 3 3 9-3 9 19-9Z" /><path d="M6 12h16" /></svg>
                            </>
                        )
                    }
                </button>
                <span className={mailStatus.status ? "text-green-400" : "text-red-400"}>
                    {mailStatus.message}
                </span>
            </div>
        </form>
    )
}

export default ContactForm;