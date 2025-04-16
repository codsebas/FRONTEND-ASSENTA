// src/pages/Home.tsx
import { useEffect, useState } from "react";
import { HomeBase } from "@/components/asistencia/HomeBase";
import { AsistenciaOK } from "@/components/asistencia/AsistenciaOK";
import { AsistenciaError } from "@/components/asistencia/AsistenciaError";
import { AsistenciaBirthday } from "@/components/asistencia/AsistenciaBirthday";

type EstadoAsistencia = "waiting" | "success" | "error" | "birthday";

interface EstadoBackend {
  status: EstadoAsistencia;
  timestamp: string;
  data?: {
    nombre: string;
    puesto: string;
    horaEntrada: string;
    horaSalida: string;
    mensaje?: string;
  };
}

export default function Home(){
  const [estado, setEstado] = useState<EstadoBackend>({
    status: "waiting",
    timestamp: new Date().toISOString(),
  });

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch("http://localhost:8080/asistencia/estado");
        const data = await res.json();
        setEstado(data);
      } catch (err) {
        console.error("Error al conectar con backend", err);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  switch (estado.status) {
    case "success":
      return <AsistenciaOK data={estado.data!} />;
    case "error":
      return <AsistenciaError />;
    case "birthday":
      return <AsistenciaBirthday data={estado.data!} />;
    default:
      return <HomeBase />;
  }
}
