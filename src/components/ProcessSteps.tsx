import Container from "@/components/Container";

type ProcessStepsProps = {
  steps: string[];
};

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <Container>
      <div className="grid gap-4 lg:grid-cols-3">
        {steps.map((step, index) => (
          <article
            key={step}
            className="rounded-[1.4rem] border border-white/75 bg-white/80 p-6 shadow-[0_12px_34px_rgba(23,50,77,0.06)] backdrop-blur-sm"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(23,50,77,1),rgba(47,111,143,1))] font-semibold text-ivory shadow-[0_10px_20px_rgba(23,50,77,0.14)]">
              {index + 1}
            </div>
            <p className="mt-4 text-base leading-7 text-charcoal">{step}</p>
          </article>
        ))}
      </div>
    </Container>
  );
}