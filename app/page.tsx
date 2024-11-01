export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white">
      
      {/* First Row */}
      <div className="flex w-full justify-between mb-4">
        <div className="bg-red-600 h-60 w-80  flex justify-center items-center">TILAWAT</div>
        <div className="bg-yellow-500 h-60 w-80 flex justify-center items-center">HAMD</div>
        <div className="bg-blue-500 h-60 w-80 flex justify-center items-center">NAAT</div>
        <div className="bg-green-700 h-60 w-80 flex justify-center items-center">MANQABAT</div>
      </div>

      {/* Second Row */}
      <div className="flex w-full justify-center mb-4">
        <div className="bg-pink-500 h-60 w-80 flex justify-center items-center mx-20">HADEES</div>
        <div className="bg-purple-400 h-60 w-80 flex justify-center items-center mx-20">QURANIC WAQIAT</div>
      </div>
    </div>
  );
}
