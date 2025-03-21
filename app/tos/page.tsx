import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "D1 - Terms of Service",
};

const sections = [
  {
    title: "Introduction",
    content: `These Website Standard Terms And Conditions (these “Terms” or these
        “Website Standard Terms And Conditions”) contained herein on this webpage,
        shall govern your use of this website, including all pages within this
        website (collectively referred to herein below as this “Website”). These
        Terms apply in full force and effect to your use of this Website and by
        using this Website, you expressly accept all terms and conditions contained
        herein in full. You must not use this Website, if you have any objection to
        any of these Website Standard Terms And Conditions.`,
  },
  {
    title: "Intellectual Property Rights",
    content: `Other than content you own, which you may
      have opted to include on this Website, under these Terms, Zac Butko Inc. and/or
      its licensors own all rights to the intellectual property and material
      contained in this Website, and all such rights are reserved. You are
      granted a limited license only, subject to the restrictions provided in
      these Terms, for purposes of viewing the material contained on this
      Website.`,
  },
  {
    title: "Restrictions",
    content: `You are expressly and emphatically restricted from all of
    the following: publishing any Website material in any media; selling,
    sublicensing and/or otherwise commercializing any Website material;
    publicly performing and/or showing any Website material; using this
    Website in any way that is, or may be, damaging to this Website; using
    this Website in any way that impacts user access to this Website; using
    this Website contrary to applicable laws and regulations, or in a way that
    causes, or may cause, harm to the Website, or to any person or business
    entity; engaging in any data mining, data harvesting, data extracting or
    any other similar activity in relation to this Website, or while using
    this Website; using this Website to engage in any advertising or
    marketing; Certain areas of this Website are restricted from access by you
    and Zac Butko Inc. may further restrict access by you to any areas of this
    Website, at any time, in its sole and absolute discretion. Any user ID and
    password you may have for this Website are confidential and you must
    maintain confidentiality of such information.`,
  },
  {
    title: "Your Content",
    content: `In these
    Website Standard Terms And Conditions, “Your Content” shall mean any
    audio, video, text, images or other material you choose to display on this
    Website. With respect to Your Content, by displaying it, you grant Zac Butko Inc.
    a non-exclusive, worldwide, irrevocable, royalty-free, sublicensable
    license to use, reproduce, adapt, publish, translate and distribute it in
    any and all media. Your Content must be your own and must not be
    infringing on any third party’s rights. Zac Butko Inc. reserves the right to
    remove any of Your Content from this Website at any time, and for any
    reason, without notice.`,
  },
  {
    title: "No Warranties",
    content: `This Website is provided “as is,” with all faults, and
    Zac Butko Inc. makes no express or implied representations or warranties,
    of any kind related to this Website or the materials contained on this
    Website. Additionally, nothing contained on this Website shall be
    construed as providing consult or advice to you.`,
  },
  {
    title: "Limitation of liability",
    content: `In no event shall Zac Butko Inc. , nor any of its officers,
    directors and employees, be liable to you for anything arising out of or
    in any way connected with your use of this Website, whether such liability
    is under contract, tort or otherwise, and Zac Butko Inc. , including its
    officers, directors and employees shall not be liable for any indirect,
    consequential or special liability arising out of or in any way related to
    your use of this Website.`,
  },
  {
    title: "Indemnification",
    content: `You hereby indemnify to the
    fullest extent Zac Butko Inc. from and against any and all liabilities,
    costs, demands, causes of action, damages and expenses (including
    reasonable attorney’s fees) arising out of or in any way related to your
    breach of any of the provisions of these Terms.`,
  },
  {
    title: "Severability",
    content: `If any
    provision of these Terms is found to be unenforceable or invalid under any
    applicable law, such unenforceability or invalidity shall not render these
    Terms unenforceable or invalid as a whole, and such provisions shall be
    deleted without affecting the remaining provisions herein.`,
  },
  {
    title: "Variation of Terms",
    content: `Zac Butko Inc. is permitted to revise these Terms at any time as it
    sees fit, and by using this Website you are expected to review such Terms
    on a regular basis to ensure you understand all terms and conditions
    governing use of this Website.`,
  },
  {
    title: "Assignment",
    content: `Zac Butko Inc. shall be
    permitted to assign, transfer, and subcontract its rights and/or
    obligations under these Terms without any notification or consent
    required. However, you shall not be permitted to assign, transfer, or
    subcontract any of your rights and/or obligations under these Terms.`,
  },
  {
    title: "Entire Agreement",
    content: `These Terms, including any legal notices and disclaimers
    contained on this Website, constitute the entire agreement between Zac
    Butko Inc. and you in relation to your use of this Website, and supersede
    all prior agreements and understandings with respect to the same.`,
  },
  {
    title: "Governing Law Jurisdiction",
    content: `These Terms will be governed by and construed
    in accordance with the laws of the State of California, and you submit to
    the non-exclusive jurisdiction of the state and federal courts located in
    California for the resolution of any dispute.`,
  },
];

const SectionHeader = ({
  title,
  index,
}: {
  title: ReactNode;
  index: number;
}) => {
  return (
    <h3 className="text-slate-100">
      {index}. {title}
    </h3>
  );
};

const SectionContent = ({ content }: { content: ReactNode }) => {
  return <div>{content}</div>;
};

const TOS = () => {
  return (
    <div className="prose text-slate-100 lg:prose-xl">
      <h1 className="text-center text-slate-100">
        Dearest One Website Standard Terms and Conditions
      </h1>
      <div className="flex flex-col gap-16">
        {sections.map((s, index) => (
          <div key={index}>
            <SectionHeader title={s.title} index={index + 1} />
            <SectionContent content={s.content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TOS;
