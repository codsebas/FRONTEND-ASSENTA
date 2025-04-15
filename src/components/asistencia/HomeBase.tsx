import { Fingerprint } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const animationVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
};

export function HomeBase(){
  const [horaActual, setHoraActual] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setHoraActual(new Date());
    }, 1000);

    return () => clearInterval(timer); // Limpieza del timer al desmontar
  }, []);

  const fecha = horaActual.toLocaleDateString();
  const hora = horaActual.toLocaleTimeString();

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen bg-white text-gray-800"
      variants={animationVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="p-10 rounded-3xl shadow-2xl border w-[600px] flex flex-col gap-6 items-center">
        <Fingerprint className="w-20 h-20 text-indigo-600" />
        <h1 className="text-3xl font-bold">Sistema de Asistencia</h1>
        <p className="text-lg">{fecha} - {hora}</p>
        <p className="text-gray-500">Esperando registro de huella...</p>
      </div>
    </motion.div>
  );
}
