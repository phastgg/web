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

const RevisionPolicyLink = (props: { className?: string }) => {
  return (
    <Link href={"/revision-policy"}
      className={"w-min hover:text-violet-400 transition-all duration-300 relative group " + props.className}
    >
      Revision Policy
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8412FF] to-[#a78bfa] group-hover:w-full transition-all duration-300"></div>
    </Link>
  )
}

const Headline = (props: { size: number, children: ReactNode }) => {
  const { size, children } = props;

  if (!size || size === 1) {
    return <h1 className="text-4xl font-bold mt-20 mb-4 text-secondary font-inter">{children}</h1>
  }
  else if (size === 2) {
    return <h2 className="text-2xl font-semibold mt-8 mb-4 text-secondary font-inter">{children}</h2>
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
      <div className="container mx-auto p-16 pt-20 max-[425px]:px-4 max-[32rem]:overflow-scroll-y leading-8">
        <Headline size={1}>Commission Policy - Phast</Headline>
        <Text>
          This document defines the general terms and conditions for all commissions handled by <PhastLink className="text-blue-300" />.
          By requesting or confirming a commission, the client agrees to this Commission Policy and the <RevisionPolicyLink className="text-blue-300" />.
          The purpose of this policy is to ensure clarity, fairness, and structured cooperation.
        </Text>

        <Headline size={2}>1. Project Definition and Client Obligations</Headline>
        <Text>
          Before development begins, the client must provide a complete and precise description of all requested functionality, requirements, and expected behavior.
        </Text>
        <ul className="list-disc ml-6 italic">
          <li><Text>Clearly define all required features and logic</Text></li>
          <li><Text>Specify expected behavior and technical constraints</Text></li>
          <li><Text>Provide integrations or compatibility requirements if needed</Text></li>
          <li><Text>Review and confirm the agreed scope before work begins</Text></li>
        </ul>
        <Text>
          Optional references such as images, sketches, or examples are recommended.
        </Text>
        <br />
        <Text>
          Any functionality or requirement not explicitly defined before development begins is considered outside the agreed scope.
          <PhastLink className="text-blue-300" /> is not obligated to implement omitted requirements without additional compensation.
        </Text>

        <Headline size={2}>2. Pricing Structure</Headline>
        <Text>
          Pricing is determined based on scope complexity, technical requirements, and estimated development time.
        </Text>
        <ul className="list-disc ml-6 italic">
          <li>
            <Text>
              <strong>Small Project – €5–€30</strong><br />
              Simple applications or small standalone systems with limited logic and clearly defined functionality.
            </Text>
          </li>
          <li>
            <Text>
              <strong>Medium Project – €30–€75</strong><br />
              Moderately complex systems requiring structured logic, multiple components, or extended configuration.
            </Text>
          </li>
          <li>
            <Text>
              <strong>Large Project – €75+</strong><br />
              Complex systems requiring advanced logic, architectural planning, or extensive development time.
            </Text>
          </li>
        </ul>
        <Text>
          These ranges are reference estimates only. Final pricing is confirmed after reviewing complete project details.
        </Text>

        <Headline size={2}>3. Payment Terms and Conditions</Headline>
        <Text>
          All payments are processed exclusively via PayPal.
          Payments must be sent as a donation using the <strong>“Family and Friends”</strong> option.
        </Text>
        <br />
        <Text>
          Payment structure:
        </Text>
        <ul className="list-disc ml-6 italic">
          <li><Text>50% non-refundable deposit before development begins</Text></li>
          <li><Text>50% remaining balance after demonstration of completed work and before final delivery</Text></li>
        </ul>
        <Text>
          No final files, builds, or production-ready materials will be delivered until full payment has been received.
        </Text>
        <br />
        <Text>
          By sending payment, the client confirms the transaction is authorized, intentional, and non-reversible under PayPal policies.
          Chargebacks or unauthorized reversals constitute a breach of agreement and may result in permanent refusal of services.
        </Text>

        <Headline size={2}>4. Source Code and Ownership</Headline>
        <Text>
          Unless otherwise explicitly agreed in writing, all intellectual property rights and ownership of the delivered software remain with <PhastLink className="text-blue-300" />.
        </Text>
        <br />

        <Text>
          Upon full payment, the client receives a <strong>non-exclusive, perpetual license</strong> to use, operate, and distribute the delivered product.
          This includes the right to run the software on servers, integrate it into their own services, and distribute the compiled product if desired.
        </Text>
        <br />

        <Text>
          Access to the full source code is <strong>not included by default</strong>.
          Source code access can be provided via GitHub for an additional <strong>€10 fee</strong>.
        </Text>

        <ul className="list-disc ml-6 italic">
          <li><Text>The €10 fee grants access to the project source code repository.</Text></li>
          <li><Text>This fee provides access to the code but does not transfer copyright ownership.</Text></li>
          <li><Text>For Bukkit-based Minecraft plugins, source access is included due to licensing requirements.</Text></li>
        </ul>

        <Text>
          Ownership or full copyright transfer may only occur through a separate written agreement.
        </Text>
        <br />

        <Headline size={2}>5. Deadlines and Delivery</Headline>
        <Text>
          An estimated completion timeframe will be provided after scope confirmation. Delivery estimates are projections, not guarantees.
        </Text>
        <br />
        <Text>
          If delivery is delayed by more than 3 days beyond the agreed deadline without prior notice or mutual agreement,
          the client may request a reasonable price reduction.
        </Text>
        <br />
        <Text>
          Delays caused by client inactivity, late feedback, additional requests, or scope modifications do not qualify for compensation.
        </Text>

        <Headline size={2}>6. Scope Modifications</Headline>
        <Text>
          Any request that alters the originally agreed scope constitutes a scope change and may result in additional fees or extended deadlines.
        </Text>
        <br />
        <Text>
          Revisions are governed separately under the <RevisionPolicyLink className="text-blue-300" />.
          Requests exceeding revision limits or changing project structure will be quoted separately.
        </Text>

        <Headline size={2}>7. Refund Policy</Headline>
        <Text>
          The initial 50% deposit is strictly non-refundable once development has begun.
        </Text>
        <br />
        <Text>
          Refunds may only be considered if no demonstrable work has been delivered or if a written mutual cancellation agreement is reached before substantial progress.
        </Text>
        <br />
        <Text>
          Subjective dissatisfaction does not constitute valid grounds for refund if the delivered product matches the agreed specification.
        </Text>

        <Headline size={2}>8. Limitation of Liability</Headline>
        <Text>
          <PhastLink className="text-blue-300" /> is not responsible for third-party platform changes, external service failures,
          hosting issues, misuse of delivered code, or future compatibility issues unless explicitly agreed otherwise.
        </Text>

        <Headline size={2}>9. Agreement and Acceptance</Headline>
        <Text>
          By requesting or confirming a commission, the client confirms that they have read and understood this Commission Policy,
          agree to the <RevisionPolicyLink className="text-blue-300" />, and accept all pricing, payment, and scope conditions.
        </Text>
        <br />
        <Text>
          These terms become binding once a project is confirmed and the initial deposit is paid.
        </Text>
      </div>
      <Footer />
    </div>
  );
}