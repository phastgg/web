"use client";

import AnimatedSpace from "@/components/background/animated-space";
import Footer from "@/components/footer";
import Lenis from "lenis";
import Link from "next/link";
import { ReactNode, useEffect } from "react";


const PhastLink = (props: { className?: string }) => {
  return (
    <Link href={"/"}
      className={"w-min hover:text-violet-400 transition-all duration-300 relative group " + props.className}
    >
      Phast
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8412FF] to-[#a78bfa] group-hover:w-full transition-all duration-300"></div>
    </Link>
  );
}

const Headline = (props: { size: number, children: ReactNode }) => {
  const { size, children } = props;

  if (!size || size === 1) {
    return <h1 className="text-4xl font-bold mt-20 mb-4 text-secondary font-inter">{children}</h1>
  }
  else if (size === 2) {
    return <h2 className="text-2xl font-semibold mt-12 mb-4 text-secondary font-inter">{children}</h2>
  }
}

const Text = (props: { children: ReactNode }) => {
  return <span className="text-gray-200 font-poppins">{props.children}</span>;
}

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="max-[400px]:overflow-x-hidden">
      <AnimatedSpace/>
      <div className="container mx-auto p-16 pt-20 max-[425px]:px-4 max-[32rem]:overflow-scroll-y leading-relaxed">
        <Headline size={1}>Revision Policy - Phast</Headline>
        <Text>
          This document defines the revision terms for all commissions handled by <PhastLink className="text-blue-300" />. 
          The purpose of this policy is to ensure a fair and structured revision process, maintain efficiency, and prevent misunderstandings between the client and the contractor.
        </Text>
        <br />

        <Headline size={2}>1. Definition of a Revision</Headline>
        <Text>
          A revision is a modification to a delivered output based on client feedback that:
        </Text>
        <ul className="list-disc ml-6 italic">
          <li><Text>Aligns with the original project brief</Text></li>
          <li><Text>Does not change the agreed scope or core functionality</Text></li>
          <li><Text>Does not introduce new features or major structural changes</Text></li>
        </ul>
        <br />

        <Text>
          The following are <strong>not</strong> considered revisions:
        </Text>
        <ul className="list-disc ml-6 italic">
          <li><Text>Changes in concept or direction after approval of the initial brief</Text></li>
          <li><Text>Addition of new features or systems</Text></li>
          <li><Text>Changes in technology or platform</Text></li>
          <li><Text>Requests requiring substantial rework of already completed sections</Text></li>
        </ul>
        <Text>
          Such changes are treated as scope extensions and will be quoted separately.
        </Text>
        <br />

        <Headline size={2}>2. Number of Included Revisions</Headline>
        <Text>
          Each project includes:
        </Text>
        <ul className="list-disc ml-6 italic">
          <li><Text><strong>2 free revision rounds</strong> for small commissions</Text></li>
          <li><Text><strong>3 free revision rounds</strong> for medium and large commissions</Text></li>
        </ul>
        <Text>
          This limit exists to balance flexibility with project efficiency. It allows refinement while preventing endless iteration cycles that negatively impact timelines and resource allocation.
        </Text>
        <br />
        <Text>
          Any additional revision rounds will be billed separately based on the required workload.
        </Text>
        <br />

        <Headline size={2}>3. Submission of Feedback</Headline>
        <Text>
          To ensure an efficient process:
        </Text>
        <ul className="list-disc ml-6 italic">
          <li><Text>Feedback must be submitted in a single consolidated message or document.</Text></li>
          <li><Text>Feedback must be clear, specific, and actionable.</Text></li>
          <li><Text>A revision round officially begins only after complete feedback is received.</Text></li>
        </ul>
        <Text>
          Fragmented feedback submitted in multiple messages may be treated as multiple revision rounds.
        </Text>
        <br />

        <Headline size={2}>4. Timeframe for Revisions</Headline>
        <ul className="list-disc ml-6 italic">
          <li><Text>Feedback must be submitted within 7 days of delivery.</Text></li>
          <li><Text>If no feedback is received within this period, the project will be considered approved.</Text></li>
          <li><Text>The turnaround time for revisions depends on their scope and complexity.</Text></li>
        </ul>
        <br />

        <Headline size={2}>5. Scope Protection</Headline>
        <Text>
          <PhastLink className="text-blue-300" /> reserves the right to decline revision requests that:
        </Text>
        <ul className="list-disc ml-6 italic">
          <li><Text>Fundamentally alter the original brief</Text></li>
          <li><Text>Require a complete rebuild of approved components</Text></li>
          <li><Text>Exceed the agreed project scope</Text></li>
        </ul>
        <Text>
          The goal is to maintain realistic project boundaries and protect delivery integrity. Quality remains a priority but must stay aligned with the agreed scope and capacity.
        </Text>
        <br />

        <Headline size={2}>6. Client Recommendations</Headline>
        <ul className="list-disc ml-6 italic">
          <li><Text>Clearly define requirements before project start.</Text></li>
          <li><Text>Communicate expectations early.</Text></li>
          <li><Text>Collect internal feedback before submitting revision requests.</Text></li>
        </ul>
        <br />

        <Headline size={2}>7. Final Agreement</Headline>
        <Text>
          By initiating a commission with <PhastLink className="text-blue-300" />, the client acknowledges and agrees to the terms outlined in this Revision Policy.
        </Text>
        <br />
      </div>
      <Footer />
    </div>
  );
}