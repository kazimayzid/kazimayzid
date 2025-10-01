import Container from "../container/Container";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[var(--color-bg)] border-t-[0.5px] border-[var(--color-borderColor)] py-6">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[var(--color-detailsColor)] text-sm md:text-base font-poppins">
            © 2025 All rights reserved.
          </span>

          <div className="flex gap-4">
            
          </div>
        </div>
      </Container>
    </footer>
  );
}
