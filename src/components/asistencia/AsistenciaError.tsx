import { AlertTriangle } from "lucide-react";

export function AsistenciaError(){
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-50 text-red-800">
      <div className="p-10 rounded-3xl shadow-2xl border w-[600px] flex flex-col gap-6 items-center">
        <AlertTriangle className="w-16 h-16 text-red-600" />
        <h1 className="text-3xl font-bold">Error al registrar asistencia</h1>
        <p className="text-gray-600">Por favor, intenta nuevamente o contacta al supervisor.</p>
      </div>
    </div>
  );
}
