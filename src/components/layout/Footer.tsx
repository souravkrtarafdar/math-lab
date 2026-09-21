export default function Footer() {
  return (
    <footer id="about" className="border-t border-lab-border/80">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-signal-cyan/40 bg-signal-cyan/10 font-display text-sm text-signal-cyan">
                ∞
              </span>
              <span className="font-display text-base text-lab-text">
                Math Lab
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-lab-muted">
              A mathematics laboratory, not a textbook. Every concept here is
              something you move, not just something you read.
            </p>
          </div>
          <p className="text-xs text-lab-muted">
            Built with React, Three.js, and React Three Fiber.
          </p>
        </div>
      </div>
    </footer>
  );
}
