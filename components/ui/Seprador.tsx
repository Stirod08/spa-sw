import { Shell } from 'lucide-react';

export default function Seprador() {
  return (
    <>
      <div className="flex justify-center items-center my-4">
        <div className="flex-grow bg-gradient-to-r from-transparent to-orange h-1"></div>
        <Shell className="w-5 h-5 text-verdeClaro mx-4" />
        <div className="flex-grow bg-gradient-to-l from-transparent to-orange h-1"></div>
      </div>
    </>
  );
}
