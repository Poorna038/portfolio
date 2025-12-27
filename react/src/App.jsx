import React from "react";

const projects = [
  {title: "Awesome App", desc: "React + Node", link:"#"},
  {title: "Design System", desc: "Component library", link:"#"},
];

export default function App(){
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-xl font-bold">Your Name</h1>
          <nav className="space-x-4">
            <a href="#projects" className="font-medium">Projects</a>
            <a href="#about" className="font-medium">About</a>
            <a href="#contact" className="font-medium">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-10">
        <section className="mb-10">
          <h2 className="text-3xl font-extrabold">Hi — I'm Your Name</h2>
          <p className="mt-3 text-lg text-slate-600">I build web apps and APIs. I love React, Tailwind and clean UX.</p>
        </section>

        <section id="projects" className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(p=>(
              <article key={p.title} className="bg-white rounded-2xl p-6 shadow">
                <h4 className="font-bold text-lg">{p.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                <a className="mt-4 inline-block font-medium" href={p.link}>View project →</a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold">Contact</h3>
          <p className="mt-2">Email: <a href="mailto:you@example.com" className="text-blue-600">you@example.com</a></p>
        </section>
      </main>
    </div>
  )
}
