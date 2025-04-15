// src/components/asistencia/AsistenciaCard.tsx
import { Fingerprint } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AsistenciaCard(){
  const handleAsistencia = async () => {
    try {
      const res = await fetch("http://localhost:8080/asistencia", {
        method: "POST",
      });

      if (!res.ok) throw new Error("Error en el servidor");

      const data = (await res.json()) as { mensaje: string };
      alert("✅ Asistencia registrada: " + data.mensaje);
    } catch (error) {
      console.error("Error al registrar asistencia", error);
      alert("❌ No se pudo registrar asistencia");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 border rounded-2xl shadow-lg bg-white">
      <Fingerprint className="w-12 h-12 text-indigo-600" />
      <h1 className="text-xl font-bold">Registra Tu Asistencia</h1>
      <Button onClick={handleAsistencia} className="w-full">
        Registrar Huella
      </Button>
    </div>
  );
}
