import ContactForm from "../components/ContactForm";
import Heading from "../components/Heading";

const Contact = () => {
  return (
    <div className='h-screen container mx-auto md:px-4'>
      <Heading title="Contact" className='text-9xl uppercase font-black mx-auto' />
      <ContactForm />
    </div>
  );
};

export default Contact;
