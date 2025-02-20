// components/WhatsAppButton.js

const WhatsAppButton = () => {
  const phoneNumber = "+2349067734915"; // Replace with your phone number
  const message = "Hello! I need assistance."; // Default message

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 w-36 text-white rounded-full shadow-lg p-3 text-xl flex items-center justify-center hover:bg-green-600 transition"
    >
      <i className="fab fa-whatsapp"> </i> <p> WhatsApp </p>
    </a>
  );
};

export default WhatsAppButton;
