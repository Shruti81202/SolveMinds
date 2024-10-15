import { useState } from 'react';
import { useAuth } from '../store/auth';

const defaultContactFormData = {
    username: "",
    email: "",
    message: "",
};
export const Contact = () => {
    const [contact, setContact] = useState(defaultContactFormData);
    const [userData, setUserData] = useState(true);
    const { user, API } = useAuth();
    if (userData && user) {
        setContact({
            username: user.username,
            email: user.email,
            message: "",
        });
        setUserData(false);
    }
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setContact({
            ...contact,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API}/api/form/contact`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(contact),
            });
            if(response.ok){
                setContact(defaultContactFormData);
                const data = await response.json();
                console.log(data);
                alert("Message sent successfully");
            }
        } catch (error) {
            alert("Message not sent");
            console.log(error);
        }
    }
    return (
        <>
            <main>
                <section className="section-contact">
                    <div className="contact-content container">
                        <h1 className="main-heading">Contact Us</h1>
                    </div>
                    <div className="container grid grid-two-cols">
                        <div className="contact-img">
                            <img src="/images/support.png" alt="we are always ready to help" width="500" height="500" />
                        </div>
                        <section className="section-form">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">username</label>
                                    <input type="text" name="username" id="username" autoComplete="off" required value={contact.username} onChange={handleInput} />
                                </div>
                                <div>
                                    <label htmlFor="email">email</label>
                                    <input type="email" name="email" id="email" autoComplete="off" required value={contact.email} onChange={handleInput} />
                                </div>
                                <div>
                                    <label htmlFor="message">message</label>
                                    <textarea name="message" id="message" cols="30" rows="10" autoComplete="off" required value={contact.message} onChange={handleInput}></textarea>
                                </div>
                                <div>
                                    <button type="submit">submit</button>
                                </div>
                            </form>
                        </section>
                    </div>

                    <section className='mb-3'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.206036448083!2d73.85284587380062!3d18.519589169206967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1e2226b7b11%3A0xa4bb8106175ca68b!2sShaniwar%20Wada!5e0!3m2!1sen!2sin!4v1728096716269!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }} // JSX-compliant style attribute
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </section>
                </section>
            </main>
        </>
    );
};
