import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ArtistEPK() {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 space-y-16">
      {/* Hero Section */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img src="/mnt/data/0a42c592-b3da-4296-9a07-9a36a5795bb7.jpg" alt="FMRG Records Logo" className="w-40 mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold">Jeff Fullyauto</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Yeah bruv • 777 • ASAP — Jamaican Dancehall / Reggae
          </p>
          <div className="mt-6 flex gap-4 flex-wrap">
            <Button asChild><a href="https://www.instagram.com/jefffullyauto_/" target="_blank">Instagram</a></Button>
            <Button variant="outline" asChild><a href="https://www.tiktok.com/@fullyautodon" target="_blank">TikTok</a></Button>
            <Button variant="outline" asChild><a href="https://youtube.com/@jefffullyauto777" target="_blank">YouTube</a></Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="/mnt/data/3638f857-c9cf-454b-a5fd-5460a1922893.jpeg" alt="Jeff Fullyauto press photo" className="rounded-2xl" />
          <img src="/mnt/data/f8f033ae-f3ac-409b-9d74-081f84a188ac.jpeg" alt="Jeff Fullyauto press photo" className="rounded-2xl" />
        </div>
      </motion.section>

      {/* Bio */}
      <Card className="bg-neutral-900 border-neutral-800">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-3">Biography</h2>
          <p className="text-gray-300 leading-relaxed">
            Jeff Fullyauto is a Jamaican dancehall recording artist from May Pen, Clarendon, known for his raw energy,
            confident delivery, and authentic storytelling. His music reflects real-life experiences, ambition, and the
            realities of inner-city culture, blended with modern dancehall rhythms that connect with both street and
            global audiences. With standout releases such as Big Guns, Dear God, Dutty Song, Jericho, Once Upon A Time,
            Call Me, and New Year featuring Jah Lama, Jeff Fullyauto continues to build a versatile catalogue ranging
            from introspective records to high-energy anthems. His consistency and dedication to his craft position him
            as a fast-rising force within the dancehall space.
          </p>
        </CardContent>
      </Card>

      {/* Music */}
      <Card className="bg-neutral-900 border-neutral-800">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Music</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <ul className="space-y-2">
              <li>• Dutty Song</li>
              <li>• Dear God</li>
              <li>• Jericho</li>
              <li>• Big Guns</li>
              <li>• Once Upon A Time</li>
            </ul>
            <div className="space-y-2">
              <a className="underline" href="https://open.spotify.com/artist/JeffFullyauto" target="_blank">Spotify</a>
              <a className="underline" href="https://audiomack.com/jeff-fullyauto" target="_blank">Audiomack</a>
              <a className="underline" href="https://music.apple.com/jm/artist/jeff-fullyauto/1470694650" target="_blank">Apple Music</a>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Videos */}
      <Card className="bg-neutral-900 border-neutral-800">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-3">Videos</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a className="underline" href="https://youtu.be/CmTA7JdfKVE" target="_blank">Dutty Song</a>
            <a className="underline" href="https://youtu.be/QuywHzZ22os" target="_blank">Dear God</a>
            <a className="underline" href="https://youtu.be/rT06mF8ULQ0" target="_blank">Jericho</a>
            <a className="underline" href="https://youtu.be/NEvSvJGSSXA" target="_blank">Big Guns</a>
            <a className="underline" href="https://youtu.be/LXkNfztqsRU" target="_blank">Once Upon A Time</a>
          </div>
        </CardContent>
      </Card>

      {/* Press */}
      <Card className="bg-neutral-900 border-neutral-800">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-3">Press & Proof</h2>
          <ul className="text-gray-300 space-y-2">
            <li><a className="underline" href="https://worldmusicviews.com/exclusive-jeff-fully-auto-plans-to-sue-byron-messia-over-talibans-rights-says-its-not-the-money-its-the-principle/" target="_blank">World Music Views – Feature Article</a></li>
            <li><a className="underline" href="https://youtu.be/ew4KhEa9ER8" target="_blank">Interview / Coverage</a></li>
            <li><a className="underline" href="https://youtu.be/8webiTxygLY" target="_blank">Interview / Coverage</a></li>
          </ul>
        </CardContent>
      </Card>

      {/* Contact */}
      <Card className="bg-neutral-900 border-neutral-800">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-3">Management & Contact</h2>
          <p className="text-gray-300">Management: FMRG Records</p>
          <p className="text-gray-300">Role: Business Representation</p>
          <p className="text-gray-300">Email: fmrgrecords12@gmail.com</p>
          <p className="text-gray-300">Phone: 876-700-3338</p>
          <a className="underline text-gray-300" href="https://www.tiktok.com/@fmrg.records/video/7578295972703292728" target="_blank">
            FMRG Records – Label Introduction Video
          </a>
        </CardContent>
      </Card>

      <footer className="text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Jeff Fullyauto. All rights reserved.
      </footer>
    </div>
  );
}
