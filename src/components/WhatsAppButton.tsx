import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "593992872056";
  const message =
    "Hola! Me interesa conocer más sobre los servicios de 35mm Agencia y Productora.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  const [autoShow, setAutoShow] = useState(true);

  // ⏱ muestra automático una sola vez
  useEffect(() => {
    const timer = setTimeout(() => setAutoShow(false), 8000); // 4s delay + 4s visible
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={`whatsapp35 ${autoShow ? "whatsapp35-auto" : ""}`}
    >
      <span className="whatsapp35-tooltip">
        ¿Conversamos para cambiar tu visión?
      </span>

      <span className="whatsapp35-ring" />
      <span className="whatsapp35-ring whatsapp35-ring-delay" />

      <MessageCircle className="whatsapp35-icon" />
    </a>
  );
};

export default WhatsAppButton;
