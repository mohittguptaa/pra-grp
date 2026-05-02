import { MessageCircle } from "lucide-react";

const WhatsAppWidget: React.FC = () => {
  const phoneNumber: string = "919891010605"; // without +
  const message: string = "Hi, I want to know more about your services";

  const handleClick = (): void => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-[9999] cursor-pointer group"
    >
      {/* Pulse animation */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>

      {/* Button */}
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl transition-all duration-300 group-hover:scale-110">
        <MessageCircle className="text-white w-7 h-7" />
      </div>
    </div>
  );
};

export default WhatsAppWidget;