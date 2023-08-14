import SignedInPage from "@/components/layout/SignedInPage";
import { ReactNode } from "react";
import { NextPageWithLayout } from "./_app";

const sections = [
  {
    title: "Data we collect",
    content: (
      <>
        <p>We collect several categories of data</p>
        <ul>
          <li>
            Information you provide directly to us. This may include, for
            example:
            <ul>
              <li>Name</li>
              <li>Contact details, such as email address</li>
              <li>Information about your interests and preferences</li>
              <li>
                Materials you provide us, such as your activities and habits.
              </li>
              <li>
                Any other information that you submit to us electronically or
                offline.
              </li>
            </ul>
          </li>
          <li>
            Information we collect automatically. We collect device information,
            such as the Internet protocol (IP) address used to connect your
            device to the Internet as well as browser type and version, and
            webpages visited prior coming to this site. We also collect
            information about your usage of the Services, including page
            response times, download errors, and length of visits to certain
            pages. We share this information with Google, our website analytics
            provider, to learn about site traffic and activity.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "How We Use The Data We Collect",
    content: (
      <>
        <p>
          We use and otherwise process each of the categories of information
          identified above for the following business purposes:
        </p>
        <ul>
          <li>
            To provide you with the Services, including by allowing you to
            participate in features of our Services, and to provide information
            and services that you request from us;
          </li>
          <li>
            To administer our Services and for internal operations, including
            troubleshooting, data analysis, testing, research, statistical, and
            survey purposes, and to improve our Services to ensure that content
            is presented in the most effective manner for you and for your
            device;
          </li>
          <li>
            To measure or understand the effectiveness of advertising we serve
            to you and others, and to deliver relevant advertising to you;
          </li>
          <li>
            To keep our Services, business, and users safe and secure, to comply
            with applicable laws and regulations, and to protect or exercise our
            legal rights or defend against legal claims.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Disclosure of Information",
    content: (
      <>
        <p>
          We are committed to maintaining your trust, and we want you to
          understand when and with whom we may share the information we collect.
        </p>
        <ul>
          <li>
            Authorized third-party vendors and service providers. We share your
            information with third parties that provide services to us for a
            variety of business purposes, such as customer service, email
            deployment, advertising and marketing, security and performance
            monitoring, and maintaining or servicing accounts.
          </li>
          <li>
            Business transfers. We may share your information in connection with
            a substantial corporate transaction, such as the sale of a website,
            a merger, consolidation, asset sale, initial public offering, or in
            the unlikely event of bankruptcy.
          </li>
          <li>
            Legal purposes. We may disclose information to respond to subpoenas,
            court orders, legal process, law enforcement requests, legal claims
            or government inquiries, and to protect and defend the rights,
            interests, safety, and security of Zac Butko Inc., our affiliates,
            users, or the public.
          </li>
          <li>
            With your consent. We may share information for any other purposes
            disclosed to you at the time we collect the information or pursuant
            to your consent.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Advertising, Cookies, and Similar Technologies.",
    content: (
      <>
        <p>
          Our goal is always to make your life as easy as possible when dealing
          with Dearest One. We use every tool we can think of to make your life
          easier while not violating your trust.
        </p>
        <p>
          When you use our Services, we and our third party advertising partners
          (including data analytics providers and advertising partners) use
          cookies, pixel tags, local storage, and other similar technologies to
          collect information from your browser or device. These technologies
          allow us and our partners to recognize your device and store
          information about your activity over time and across third-party
          services and across devices. They help improve your experience and
          provide more relevant content. By using the Services, you consent to
          our use of cookies and similar technologies.
        </p>
        <p>
          You may be able to refuse or disable cookies by adjusting your web
          browser settings. Some browsers have options that allow the visitor to
          control whether the browser will accept cookies, reject cookies, or
          notify the visitor each time a cookie is sent. Because each web
          browser is different, please consult the instructions provided by your
          web browser (typically in the “help” section). If you choose to
          refuse, disable, or delete these technologies, some of the
          functionality of the Services may no longer be available to you and
          any differences in service are related to the data. Deleting cookies
          may in some cases cancel the opt out selection in your browser.
        </p>
        <p>
          Some mobile and web browsers transmit &quot;do-not-track&quot;
          signals. Because of differences in how web browsers incorporate and
          activate this feature, it is not always clear whether users intend for
          these signals to be transmitted, or whether they even are aware of
          them. We currently do not take action in response to these signals.
        </p>
      </>
    ),
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
    title: "Your Rights and Choices",
    content: (
      <>
        <p>
          You may have certain rights under local data protection laws in
          relation to your personal data. Depending on where you live, you may
          be entitled to request access to or deletion of personal information
          in some circumstances or requires information about our privacy
          practices. Requests should be submitted in writing by contacting us
          via zac@butko.io. We may verify your request, such as by requesting
          additional information from you. You may be entitled, in accordance
          with applicable laws, to submit a request through an authorized agent.
        </p>

        <p>
          We will not discriminate against you for exercising your rights and
          choices, although some of the functionality and features available on
          the Service may change or no longer be available to you. Please note
          that these rights are not absolute. For example, we may not delete
          information we are required to retain for regulatory reasons, certain
          internal business purposes, or where otherwise provided by law. In
          addition, we will not respond to a request if we cannot verify you as
          the requestor.`,
        </p>
      </>
    ),
  },
  {
    title: "Security",
    content: `We maintain security measures to safeguard your information. 
      However, you should understand that no data storage system or transmission 
      of data over the Internet or any other public network can be guaranteed to 
      be 100 percent secure, accurate, complete, or current. Please note that 
      information collected by third parties may not have the same security 
      protections as information you submit to us, and we are not responsible 
      for protecting the security of such information.`,
  },
  {
    title: "International Transfers",
    content: `By using the Services and providing us with information, you 
    understand that we may transfer and store your information on servers 
    located outside your resident jurisdiction. Some of the entities (such as 
      third-party vendors) to which we disclose information may be located in 
      countries that may not provide the same level of data protection as your 
      home country.`,
  },
  {
    title: "Changes to this Privacy Policy",
    content: `We may modify this Privacy Policy from time to time. Any 
    changes to the Privacy Policy will become effective when the updated 
    Privacy Policy is posted on the Services. We recommend that you revisit 
    this Privacy Policy periodically to ensure that you are aware of our 
    current privacy practices, although we may also elect to notify you by 
    e-mail or by posting something on some or all of the Services. Your 
    continued use of the Services following the posting of changes will mean 
    that you accept the Privacy Policy and any changes.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions about this policy please contact us at zac@butko.io`,
  },
];

const SectionHeader = ({ title }: { title: ReactNode }) => {
  return <h3 className="text-slate-100">{title}</h3>;
};

const SectionContent = ({ content }: { content: ReactNode }) => {
  return <div>{content}</div>;
};

const TOS: NextPageWithLayout = () => {
  return (
    <div className="prose text-slate-100 lg:prose-xl">
      <h1 className="text-center text-slate-100">
        Dearest One Website Data & Privcy Policy
      </h1>
      <div className="flex flex-col gap-16">
        {sections.map((s, index) => (
          <div key={index}>
            <SectionHeader title={s.title} />
            <SectionContent content={s.content} />
          </div>
        ))}
      </div>
    </div>
  );
};

TOS.getLayout = function getLayout(page: ReactNode) {
  return <SignedInPage title="D1 - Privacy Policy">{page}</SignedInPage>;
};

export default TOS;
