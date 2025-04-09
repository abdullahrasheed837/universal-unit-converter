import Converter from '../components/Converter';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
    <h1 className="text-3xl font-bold mb-6 text-gray-900">
      Universal Unit Converter.....
    </h1>

      <Converter />
    </main>
  );
}
