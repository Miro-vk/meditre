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
            className="rounded-[1.4rem] border border-white/75 bg-white/90 p-6 shadow-[0_12px_34px_rgba(23,50,77,0.06)]"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sand font-semibold text-deep-blue">
              {index + 1}
            </div>
            <p className="mt-4 text-base leading-7 text-charcoal">{step}</p>
          </article>
        ))}
      </div>
    </Container>
  );
}