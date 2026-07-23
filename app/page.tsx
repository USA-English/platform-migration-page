export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-slate-950">
      <section className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-3xl flex-col items-start justify-center gap-6">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
          USA English
        </p>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Página de migração da plataforma
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            Estrutura técnica inicial criada para receber os assets finais,
            fontes locais e a implementação visual da página.
          </p>
        </div>
      </section>
    </main>
  );
}
