import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function MakingOff() {
  return (
    <section className="bg-slate-900 text-white ">
      <div className=" w-full h-20">
        <Navbar />
      </div>

      <div className="">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-wider text-center">Making Off</h2>
        <div className="w-full max-w-4xl aspect-video mb-8">
          <iframe width="700" height="500" className="rounded-xl shadow-lg" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video de YouTube 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>

      <Footer />
    </section>
  );
}
