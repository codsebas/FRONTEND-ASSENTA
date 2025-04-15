interface Props {
    data: {
      nombre: string;
      puesto: string;
      mensaje?: string;
    };
  }
  
  export function AsistenciaOK({ data }: Props){
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-green-50 text-green-800">
        <div className="p-10 rounded-3xl shadow-2xl border w-[600px] flex flex-col gap-6 items-center">
          <h1 className="text-3xl font-bold">✅ Asistencia registrada</h1>
          <p className="text-2xl font-semibold">{data.nombre}</p>
          <p className="text-lg">{data.puesto}</p>
          {data.mensaje && (
            <p className="italic text-gray-700">{data.mensaje}</p>
          )}
        </div>
      </div>
    );
  }
  