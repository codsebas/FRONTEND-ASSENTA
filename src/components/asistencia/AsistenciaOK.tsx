interface Props {
  data: {
    nombre: string;
    puesto: string;
    horaEntrada: string;
    horaSalida: string;
    mensaje?: string;
  };
}

export function AsistenciaOK({ data }: Props) {
  return (
    <div className="flex items-center justify-center h-screen bg-green-50 text-green-900">
      <div className="p-10 rounded-3xl shadow-2xl border border-green-200 w-[600px] flex flex-col gap-4 items-center bg-white">
        <h1 className="text-4xl font-bold text-green-700 flex items-center gap-2">
          ✅ ¡Asistencia registrada!
        </h1>
        <div className="w-full text-center mt-4">
          <p className="text-2xl font-semibold">{data.nombre}</p>
          <p className="text-lg text-gray-600 mb-4">{data.puesto}</p>
          <div className="flex justify-around w-full text-lg">
            <div>
              <p className="font-semibold text-green-800">Entrada</p>
              <p>{data.horaEntrada}</p>
            </div>
            <div>
              <p className="font-semibold text-green-800">Salida</p>
              <p>{data.horaSalida}</p>
            </div>
          </div>
          {data.mensaje && (
            <p className="italic mt-6 text-green-600 bg-green-100 px-4 py-2 rounded-full">
              🎉 {data.mensaje}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
