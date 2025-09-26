export default function MakingOff() {
  return (
    <section className="min-h-screen bg-[#0a0f1c] text-white flex flex-col items-center justify-center px-4 py-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-wider text-center">
        Making Off
      </h2>

      {/* Video 1 */}
      <div className="w-full max-w-4xl aspect-video mb-8">
        <iframe
          className="w-full h-full rounded-xl shadow-lg"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Video de YouTube 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

    </section>
  );
}
