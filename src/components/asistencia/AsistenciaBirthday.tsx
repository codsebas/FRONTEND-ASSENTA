interface Props {
    data: {
      nombre: string;
      puesto: string;
      mensaje?: string;
    };
  }
  
  export function AsistenciaBirthday({ data }: Props){
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-yellow-50 text-yellow-800">
        <div className="p-10 rounded-3xl shadow-2xl border w-[600px] flex flex-col gap-6 items-center">
          <h1 className="text-3xl font-bold">🎉 ¡Feliz Cumpleaños!</h1>
          <p className="text-2xl font-semibold">{data.nombre}</p>
          <p className="text-lg">{data.puesto}</p>
          <p className="italic text-gray-700">Tu asistencia ha sido registrada. ¡Que tengas un gran día! 🎂</p>
        </div>
      </div>
    );
  }
  