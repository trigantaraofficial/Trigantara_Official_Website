'use client';

import Hero from "@/components/ui/Hero";
import Container from "@/components/ui/Container";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import LogoMarquee from "@/components/ui/LogoMarquee";
import NewsletterSignup from "@/components/ui/NewsletterSignup";
import JadwalLatihan from "@/components/ui/JadwalLatihan";
import { ArrowRight } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Logo Marquee Section - Positioned immediately after Hero for credibility flow */}
      <LogoMarquee />

      {/* About Section - "Mengenal Trigantara" - IMPROVED SPACING */}
      <section className="py-32 md:py-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />

        {/* Subtle gold radial gradient */}
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-[#d4a017]/[0.03] rounded-full blur-[200px] pointer-events-none"
        />

        <Container className="relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-16 lg:gap-24 items-center">
              {/* Left - Text Content */}
              <div className="lg:col-span-3 order-2 lg:order-1">
                <ScrollAnimation variant="fadeUp">
                  <motion.p className="text-[#d4a017]/80 text-xs tracking-[0.35em] uppercase mb-8">
                    Tentang Kami
                  </motion.p>
                </ScrollAnimation>

                <ScrollAnimation variant="fadeUp" delay={0.1}>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-10 leading-[1.25] tracking-tight">
                    Wadah pembinaan generasi muda yang{' '}
                    <span className="italic text-white/50">berkarakter</span> dan{' '}
                    <span className="italic text-white/50">berprestasi</span>
                  </h2>
                </ScrollAnimation>

                <ScrollAnimation variant="fadeUp" delay={0.2}>
                  <div className="space-y-6 text-white/60 text-lg leading-[1.85] mb-12">
                    <p>
                      Pramuka Trigantara hadir sebagai rumah bagi Pramuka Penegak
                      SMK Marhas Margahayu, dengan Ambalan Putra Ki Hajar Dewantara
                      dan Ambalan Putri Inggit Garnasih.
                    </p>
                    <p>
                      Nama Trigantara mengandung makna yang mendalam,
                      mencerminkan perjalanan spiritual dan dedikasi kami
                      terhadap gerakan Pramuka Indonesia.
                    </p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation variant="fadeUp" delay={0.3}>
                  <motion.div whileHover={{ x: 5 }} className="inline-block" transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                    <Link href="/about" className="inline-flex items-center gap-3 text-white/60 hover:text-[#d4a017] transition-colors duration-300 group">
                      <span className="text-sm tracking-wide">Selengkapnya</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                </ScrollAnimation>
              </div>

              {/* Right - Logo with Cinematic Effect */}
              <div className="lg:col-span-2 order-1 lg:order-2">
                <ScrollAnimation variant="fadeIn" delay={0.2}>
                  <div className="relative max-w-sm mx-auto">
                    <motion.div
                      animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-br from-[#d4a017]/20 via-[#d4a017]/5 to-transparent rounded-full blur-[80px]"
                    />
                    <motion.div
                      className="relative aspect-square flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                      <Image
                        src="/assets/logo/trigantara.png"
                        alt="Trigantara"
                        width={280}
                        height={280}
                        className="object-contain drop-shadow-2xl"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    </motion.div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Tri Satya Section - DRAMATIC & SPACIOUS */}
      <section className="py-48 relative overflow-hidden flex items-center justify-center min-h-[90vh]">
        {/* Deep Mystical Background */}
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0f0f0f] to-black" />

        {/* Animated Particles/Stars Background equivalent */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

        <Container className="relative z-10 text-center">
          <ScrollAnimation variant="fadeUp">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="mb-20"
            >
              <div className="flex items-center justify-center mb-16">
                <Image
                  src="/assets/logo/wosm.png"
                  alt="WOSM"
                  width={100}
                  height={100}
                  className="opacity-90 hover:opacity-100 transition-opacity duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                />
              </div>
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-normal text-white mb-10 tracking-[0.15em] drop-shadow-2xl">
                Tri Satya
              </h2>
              <div className="h-0.5 w-48 bg-[#D4AF37] mx-auto rounded-full shimmer-gold opacity-80" />
            </motion.div>
          </ScrollAnimation>

          <div className="max-w-6xl mx-auto space-y-24">
            <ScrollAnimation variant="fadeUp" delay={0.2}>
              <div className="relative p-12 border-l-2 border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/5 to-transparent text-left hover:border-[#D4AF37] transition-colors duration-500">
                <p className="text-[#D4AF37] text-base uppercase tracking-[0.3em] mb-8 font-medium">Demi Kehormatanku, Aku Berjanji:</p>
                <div className="text-3xl md:text-4xl lg:text-5xl text-white/90 font-serif leading-[1.6] space-y-6">
                  <p>Akan bersungguh-sungguh menjalankan kewajibanku terhadap Tuhan Yang Maha Esa,</p>
                  <p>Negara Kesatuan Republik Indonesia,</p>
                  <p>dan mengamalkan Pancasila.</p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation variant="fadeUp" delay={0.4}>
              <div className="relative p-12 border-r-2 border-[#D4AF37]/30 bg-gradient-to-l from-[#D4AF37]/5 to-transparent text-right hover:border-[#D4AF37] transition-colors duration-500 ml-auto">
                <p className="text-[#D4AF37] text-base uppercase tracking-[0.3em] mb-8 font-medium">Menolong Sesama</p>
                <div className="text-3xl md:text-4xl lg:text-5xl text-white/90 font-serif leading-[1.6] space-y-6">
                  <p>Menolong sesama hidup,</p>
                  <p>dan ikut serta membangun masyarakat.</p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation variant="fadeUp" delay={0.6}>
              <div className="relative p-12 border-l-2 border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/5 to-transparent text-left hover:border-[#D4AF37] transition-colors duration-500">
                <p className="text-[#D4AF37] text-base uppercase tracking-[0.3em] mb-8 font-medium">Menepati Janji</p>
                <div className="text-3xl md:text-4xl lg:text-5xl text-white/90 font-serif leading-[1.6]">
                  <p>Menepati Dasa Darma.</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </Container>
      </section>

      {/* Dasa Darma Section - RESTORED ORIGINAL BUT POLISHED */}
      <section className="py-32 md:py-40 relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 bg-[#0a0a0a]" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <p className="text-[#D4AF37]/70 text-xs tracking-[0.35em] uppercase mb-6">Kode Kehormatan</p>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-8">Dasa Darma Pramuka</h3>
            <p className="text-white/50 text-lg">Pramuka itu...</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
              {[
                "Takwa kepada Tuhan Yang Maha Esa",
                "Cinta alam dan kasih sayang sesama manusia",
                "Patriot yang sopan dan ksatria",
                "Patuh dan suka bermusyawarah",
                "Rela menolong dan tabah",
                "Rajin, terampil, dan gembira",
                "Hemat, cermat, dan bersahaja",
                "Disiplin, berani, dan setia",
                "Bertanggung jawab dan dapat dipercaya",
                "Suci dalam pikiran, perkataan, dan perbuatan"
              ].map((darma, i) => (
                <ScrollAnimation key={i} variant="fadeUp" delay={i * 0.05}>
                  <div className="flex items-start gap-6 group p-4 rounded-xl hover:bg-white/[0.02] transition-colors duration-300">
                    <span className="text-[#D4AF37] font-serif text-2xl font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                      {i + 1}.
                    </span>
                    <p className="text-white/80 text-xl font-light leading-relaxed group-hover:text-white transition-colors">
                      {darma}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Ambalan Section - MORE SPACIOUS & BREATHABLE */}
      <section className="py-48 md:py-72 relative overflow-hidden">
        {/* Deep Mystical Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0808] to-[#050505]" />

        {/* Fog/Mist Effect */}
        <motion.div
          animate={{ opacity: [0.02, 0.08, 0.02] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5"
        />

        {/* Ethereal Light Rays */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] opacity-[0.03]"
          style={{
            background: 'conic-gradient(from 0deg, transparent, #D4AF37, transparent, #D4AF37, transparent)'
          }}
        />

        <Container className="relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <ScrollAnimation variant="fadeUp">
              <div className="text-center mb-40">
                <motion.p
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-[#D4AF37] text-sm md:text-base tracking-[0.5em] uppercase mb-8"
                >
                  ✦ AMBALAN TRIGANTARA ✦
                </motion.p>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight mb-12">
                  Dua Nama, Satu <span className="text-[#D4AF37]">Semangat</span>
                </h2>
                <p className="text-white/60 text-xl md:text-2xl max-w-4xl mx-auto font-light leading-relaxed">
                  Mengabadikan jejak dua pahlawan besar dalam setiap langkah generasi penerus bangsa
                </p>
              </div>
            </ScrollAnimation>

            {/* Pahlawan Cards - SPACIOUS Layout */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-32">
              {/* Ki Hajar Dewantara */}
              <ScrollAnimation variant="fadeUp" delay={0.1}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="group relative rounded-[2rem] overflow-hidden shadow-2xl"
                >
                  {/* Glowing Border */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/30 via-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem]" />

                  {/* Card Content */}
                  <div className="relative border border-white/[0.08] rounded-[2rem] overflow-hidden bg-gradient-to-b from-white/[0.03] to-black/50">
                    {/* Photo */}
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src="/assets/image/ki_hajar_dewantara.webp"
                        alt="Ki Hajar Dewantara"
                        fill
                        className="object-cover object-top transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Dramatic Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />

                      {/* Ethereal Glow */}
                      <motion.div
                        animate={{ opacity: [0, 0.3, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/20 to-transparent"
                      />

                      {/* Badge */}
                      <div className="absolute top-8 left-8">
                        <div className="px-5 py-2.5 rounded-full bg-[#D4AF37]/20 backdrop-blur-md border border-[#D4AF37]/30">
                          <span className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase">Ambalan Putra</span>
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="relative p-10 text-center bg-black/40 backdrop-blur-sm">
                      <h3 className="text-3xl md:text-4xl font-serif text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-500">
                        Ki Hajar Dewantara
                      </h3>
                      <p className="text-white/40 text-base mb-6">Bapak Pendidikan Nasional Indonesia</p>
                      <p className="text-[#D4AF37]/60 text-sm tracking-widest font-mono">GUDEP 29.039</p>
                    </div>
                  </div>
                </motion.div>
              </ScrollAnimation>

              {/* Inggit Garnasih */}
              <ScrollAnimation variant="fadeUp" delay={0.2}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="group relative rounded-[2rem] overflow-hidden shadow-2xl"
                >
                  {/* Glowing Border */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/30 via-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem]" />

                  {/* Card Content */}
                  <div className="relative border border-white/[0.08] rounded-[2rem] overflow-hidden bg-gradient-to-b from-white/[0.03] to-black/50">
                    {/* Photo */}
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src="/assets/image/inggit.jpg"
                        alt="Inggit Garnasih"
                        fill
                        className="object-cover object-top transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Dramatic Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />

                      {/* Ethereal Glow */}
                      <motion.div
                        animate={{ opacity: [0, 0.3, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                        className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/20 to-transparent"
                      />

                      {/* Badge */}
                      <div className="absolute top-8 left-8">
                        <div className="px-5 py-2.5 rounded-full bg-[#D4AF37]/20 backdrop-blur-md border border-[#D4AF37]/30">
                          <span className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase">Ambalan Putri</span>
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="relative p-10 text-center bg-black/40 backdrop-blur-sm">
                      <h3 className="text-3xl md:text-4xl font-serif text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-500">
                        Inggit Garnasih
                      </h3>
                      <p className="text-white/40 text-base mb-6">Pejuang & Istri Proklamator</p>
                      <p className="text-[#D4AF37]/60 text-sm tracking-widest font-mono">GUDEP 29.040</p>
                    </div>
                  </div>
                </motion.div>
              </ScrollAnimation>
            </div>

            {/* The Famous Motto - DRAMATIC */}
            <ScrollAnimation variant="fadeUp" delay={0.3}>
              <div className="relative max-w-5xl mx-auto">
                {/* Mystical Background for Quote */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent rounded-3xl" />

                <div className="relative py-20 px-8 md:px-20 text-center border-y border-[#D4AF37]/10">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-10 h-10 border border-[#D4AF37]/30 rotate-45"
                    />
                  </div>

                  {/* The Motto */}
                  <div className="space-y-10">
                    <p className="text-[#D4AF37]/60 text-sm tracking-[0.3em] uppercase mb-10">
                      Falsafah Ki Hajar Dewantara
                    </p>

                    <div className="space-y-4">
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#D4AF37] leading-relaxed italic">
                        "Ing Ngarsa Sung Tuladha"
                      </h3>
                      <p className="text-white/50 text-base md:text-lg">
                        Di depan memberi teladan
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#D4AF37] leading-relaxed italic">
                        "Ing Madya Mangun Karsa"
                      </h3>
                      <p className="text-white/50 text-base md:text-lg">
                        Di tengah membangun semangat
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#D4AF37] leading-relaxed italic">
                        "Tut Wuri Handayani"
                      </h3>
                      <p className="text-white/50 text-base md:text-lg">
                        Di belakang memberi dorongan
                      </p>
                    </div>
                  </div>

                  {/* Decorative Bottom */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <motion.div
                      animate={{ rotate: [45, 405] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-10 h-10 border border-[#D4AF37]/30 rotate-45"
                    />
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </Container>
      </section>

      {/* Elegant Divider with Gradient */}
      <div className="relative h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4a017]/20 to-transparent" />
      </div>

      {/* Jadwal Latihan Section */}
      <JadwalLatihan />

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-b from-[#050505] to-[#0a0a0a] border-t border-white/5">
        <Container>
          <NewsletterSignup />
        </Container>
      </section>

      {/* CTA Section - Redesigned with Background Image */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-40">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/image/akhirbackground.webp"
            alt="Background"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Dark Overlay - Reduced Opacity for better visibility */}
          <div className="absolute inset-0 bg-[#050505]/40" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        </div>

        {/* Subtle glow */}
        <motion.div
          animate={{
            opacity: [0.03, 0.08, 0.03],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4a017] rounded-full blur-[250px] pointer-events-none"
        />

        <Container className="relative z-10">
          <ScrollAnimation variant="scaleIn">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-light text-white mb-10 tracking-tight drop-shadow-lg">
                Siap Menjadi Bagian dari <br />
                <span className="text-[#D4AF37] font-medium">Sejarah Kami?</span>
              </h2>
              <p className="text-white/90 text-xl md:text-2xl mb-16 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-medium">
                Bergabunglah dengan Pramuka Trigantara dan mulailah perjalanan pembentukan karakter, kepemimpinan, dan persaudaraan tanpa batas.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href="/contact"
                  className="group relative px-10 py-5 bg-[#d4a017] text-black font-medium tracking-wide overflow-hidden rounded-full transition-all hover:scale-105 hover:bg-[#b08d55]"
                >
                  <span className="relative z-10 font-bold">Bergabung Sekarang</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>

                <Link
                  href="/about"
                  className="px-10 py-5 text-white hover:text-[#d4a017] transition-colors tracking-wide flex items-center gap-2 group"
                >
                  <span>Pelajari Lebih Lanjut</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </Container>
      </section>
    </div>
  );
}
