export default function Contact() {
  return (
    <section id="contact" className="py-12 border-t border-slate-100">
      <h3 className="text-xl font-semibold">Contact</h3>
      <p className="mt-2 text-slate-600">Want collabs, mentoring, or a project review? Hit me up.</p>

      <div className="mt-6 max-w-xl">
        <form action="https://formspree.io/f/your-form-id" method="POST" className="grid gap-3">
          <input name="name" placeholder="Your name" className="px-4 py-3 rounded-md border" />
          <input name="email" placeholder="Your email" className="px-4 py-3 rounded-md border" />
          <textarea name="message" placeholder="Quick message" rows="4" className="px-4 py-3 rounded-md border"></textarea>
          <button type="submit" className="px-4 py-3 bg-primary text-white rounded-md">Send message</button>
        </form>
      </div>
    </section>
  );
}
