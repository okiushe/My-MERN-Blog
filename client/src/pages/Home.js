import React, { useState } from "react";
import "./Home.css"; 

const POSTS = [
  {
    id: 1,
    title: "How I Built My First React App",
    excerpt: "A short, honest walkthrough of how I organized components, state, and styles to ship a small blog UI.",
    body: `
When I started  working on my very first React app, my biggest challenge was figuring out how to organize everything. 
I quickly realized that React is all about breaking the UI into small, reusable components. Instead of writing one 
long file with HTML and CSS tangled together, I separated the app into pieces: a Navbar, a Home section, individual 
Post cards, and later, a Sign In and Sign Up page. This made the code so much easier to understand and update.

Styling was another big learning curve. At first, I tried writing CSS everywhere without a structure, but it got messy 
fast. Eventually, I set up consistent spacing rules, used CSS variables for colors and typography, and relied on 
flexbox and grid for layout. This helped me build a design system where every part of the app felt like it belonged 
together.

Accessibility also became important — I made sure images had alt text, buttons were clearly labeled, and the color 
contrast was readable. These small details make a big difference for users, and I started to see why accessibility 
isn’t just optional but essential.

Finally, I practiced making the design responsive. Testing on mobile early showed me where layouts broke, so I added 
media queries and adjusted font sizes and image heights. Now, whether it’s on a laptop or a phone, the app still looks 
clean.

The main goal of this project was to create a pleasant reading experience — simple, fast, and focused on content. 
By the end, I wasn’t just building an app; I was learning habits that will help me in every future project: start 
small, stay consistent, and always keep the user in mind.
`,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=60",
    author: "Ayushi",
    date: "Sep 2025",
  },
  {
    id: 2,
    title: "CSS Tricks That Saved Me Hours",
    excerpt: "Tiny patterns like CSS variables, utility spacing classes and careful use of Grid made styling consistent and fast.",
    body: `
When I started styling this project, I spent a lot of time fixing the same small issues again and again. 
Spacing was inconsistent, colors looked slightly off in different places, and my layouts kept breaking 
on smaller screens. That’s when I decided to stop hacking CSS together and instead create a few habits 
that made everything more consistent and much faster.

The first trick was using CSS variables. By defining colors, font sizes, and even spacing units in a 
:root section, I could reuse the same values everywhere. This not only kept the design consistent but 
also made it easy to change the whole theme later with just a few updates.

The second habit was building small utility classes for spacing and text. For example, instead of 
writing new CSS rules every time I wanted margin or padding, I created reusable classes like .mt-2 or 
.px-4. It kept my CSS cleaner and my components lighter.

Grid and Flexbox were the real game-changers. For layouts, I started with a simple responsive grid, 
making sure my blog posts lined up neatly on desktops but also stacked properly on smaller screens. 
Using minmax and auto-fit made the layout flexible without me writing too many media queries.

Finally, I tested everything on mobile early. Instead of waiting until the end, I resized my browser 
constantly to catch issues as I built. It saved me hours of rework.

These small CSS patterns may not look fancy, but they completely changed the way I work. My styling 
process is faster, my code is more organized, and the end result feels cleaner and more professional.
    `,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60",
    author: "Ayushi",
    date: "Aug 2025",
  },
  {
    id: 3,
    title: "Frontend Developer Roadmap 2025",
    excerpt: "What I'm learning now: component design, accessibility, and building small, deployable projects to show skill.",
    body: `
A short roadmap: 1) Solid JS fundamentals 2) React and accessible components 3) CSS layout and design patterns 4) Deploy small apps and iterate.
Focus on clarity: readable code and readable UI.


Every year the frontend world evolves, and it’s easy to get lost with so many frameworks and tools 
being released. For 2025, I decided to build myself a short and realistic roadmap that focuses on 
skills I actually need as a frontend developer, instead of trying to learn everything at once.

The first step is strengthening JavaScript fundamentals. React, Vue, or any framework will feel 
confusing if the basics aren’t clear. So I’ve been practicing ES6 features, array methods, async/await, 
and DOM manipulation without relying on libraries. This gives me confidence to debug issues and 
understand what’s happening under the hood.

Next is React itself, but with a focus on building accessible components. It’s not just about making 
something look good — it has to be usable with a keyboard, readable by screen readers, and consistent 
for different users. I’ve started paying attention to semantic HTML, ARIA labels, and color contrast.

For styling, I’m focusing on CSS layout and design patterns. Grid and Flexbox are my main tools, but 
I’m also learning how to structure styles so they stay maintainable in bigger projects. Variables, 
utility classes, and responsive testing are now part of my workflow.

The last piece is deployment. Instead of just coding locally, I’m practicing how to put my projects 
online. Using platforms like Vercel and Netlify, I can deploy small apps quickly and get real feedback. 
Even simple projects become more valuable when they’re live and easy to share.

My main goal for 2025 is clarity: write code that’s clean and readable, and design interfaces that are 
simple and enjoyable to use. By focusing on fundamentals, accessibility, styling, and deployment, I’m 
building a strong foundation for every future project.
    `,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=60",
    author: "Ayushi",
    date: "Jul 2025",
  },
];

export default function Home() {
  const [open, setOpen] = useState(null);

  return (
    <>
      <div className="grid">
        {POSTS.map((p) => (
          <article className="card" key={p.id}>
            <img className="thumb" src={p.image} alt={p.title} />
            <div className="card-body">
              <h3>{p.title}</h3>
              <p>{p.excerpt}</p>
              <div style={{ flex: 1 }} />
              <div className="meta">
                <div>By {p.author} • {p.date}</div>
                <div>
                  <button className="btn" onClick={() => setOpen(p)}>Read</button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {open && (
        <div style={overlay}>
          <div style={modal}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
              <h2 style={{ margin: 0 }}>{open.title}</h2>
              <button onClick={() => setOpen(null)} style={closeBtn}>Close</button>
            </div>
            <p style={{ color: "#6b7280", marginTop: 8 }}>By {open.author} • {open.date}</p>
            <img src={open.image} alt={open.title} style={{ width: "100%", height: 260, objectFit: "cover", borderRadius: 8, marginTop: 14 }} />
            <div style={{ marginTop: 12, color: "#374151", whiteSpace: "pre-line" }}>{open.body}</div>
          </div>
        </div>
      )}
    </>
  );
}


const overlay = {
  position: "fixed", inset: 0, background: "rgba(2,6,23,0.45)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, zIndex: 2000
};
const modal = { width: "min(880px, 96%)", maxHeight: "90vh", overflowY: "auto", background: "#fff", padding: 22, borderRadius: 12, boxShadow: "0 20px 60px rgba(2,6,23,0.35)" };
const closeBtn = { background: "transparent", color: "#6b7280", border: "1px solid rgba(15,23,42,0.06)", padding: "6px 10px", borderRadius: 8, cursor: "pointer" };
